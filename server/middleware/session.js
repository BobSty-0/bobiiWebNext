import { v4 as uuidv4 } from 'uuid';
import pg from 'pg'
const { Pool } = pg

const testPool = new Pool(useRuntimeConfig().dbConfig);

init()

async function init() {
    const test = await testPool.query(`SELECT EXISTS(
        SELECT 1 FROM pg_catalog.pg_tables 
        WHERE schemaname = \'public\' 
        AND tablename = \'sessions\'
    )`)
        
    if(!test.rows[0].exists) {
        testPool.query(`CREATE TABLE sessions (
            session_id uuid PRIMARY KEY, 
            session_data JSON, 
            expires TIMESTAMP
        )`)

        console.log('Tabelle wurde erstellt')
    }
    else{
        console.log('Tabelle existiert bereits')
    }
}

export default defineEventHandler(async (event) => {
    const session_id = getCookie(event, 'session-id')
    if(!session_id) {
        // encrypt
        const id = uuidv4()
        setCookie(event, 'session-id', id, {
            maxAge: useRuntimeConfig().maxAge
        })
        testPool.query(`INSERT INTO sessions VALUES(
            $1, 
            '{}'::json, 
            NOW() + '30d'
        )`, 
        [id])
    }
    event.context.session_id = session_id
    const queryResponse = await testPool.query(`SELECT session_data FROM sessions WHERE session_id=$1`, [session_id])
    event.context.session_data = queryResponse.rows[0].session_data
})

export const login = async (session_id, code) => {
    const tokenResponseData = await $fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            client_id: '869180143363584060',
            client_secret: 'c2Ui9aKZw_u-8gmC7JYjuJA0qAIDVNX6',
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/code/',
            scope: 'identify',
        }).toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const newSessionData = { token: tokenResponseData.access_token, token_type: tokenResponseData.token_type}
    testPool.query('UPDATE sessions SET session_data=$1 WHERE session_id=$2', [newSessionData, session_id])
}

export const requestUser = async (session_data, path) => {
    if(!session_data.token) {
        throw new Error("not logged in")
    }
    
    return await $fetch("https://discord.com/api/" + path, {headers: {
        authorization: `${session_data.token_type} ${session_data.token}`
    }})
}

export const requestBot = async (path) => {
    return await $fetch("https://discord.com/api/" + path, {headers: {
        authorization: `Bot ${useRuntimeConfig().botToken}`
    }})
}
