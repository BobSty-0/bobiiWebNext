import { v4 as uuidv4 } from 'uuid';
import { usePG } from '~/composables/usePG';

const { query } = usePG

init()

function init() {
    const table_exists = query('select exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME = "session")').rows[0].exists
    if(!table_exists) {
        query('create table Sessions (session_id uuid primary key, session_data json, expires timestamp)')
    }
}

export default defineEventHandler((event) => {
    const session_id = getCookie(event, 'session-id')
    if(!session_id) {
        // encrypt
        const id = uuidv4()
        setCookie(event, 'session-id', id, {
            maxAge: useRuntimeConfig().maxAge
        })
        query("insert into Sessions values($1, '{}'::json, NOW() + '30d')", [id])
    }
    event.context.session_id = session_id
    event.context.session_data = query('select session_data from Sessions where session_id=$1', [session_id])
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
    query('update Sessions set session_data=$1 where session_id=$2', [newSessionData, session_id])
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
