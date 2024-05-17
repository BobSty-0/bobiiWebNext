import { v4 as uuidv4 } from 'uuid';

const tokens = {}

export default defineEventHandler((event) => {
    const session_id = getCookie(event, 'session-id')
    if(!session_id) {
        // encrypt
        const id = uuidv4()
        setCookie(event, 'session-id', id)
    }
    event.context.session_id = session_id
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
    tokens[session_id] = { token: tokenResponseData.access_token, token_type: tokenResponseData.token_type}
}

export const request = async (session_id, path) => {
    const tokenData = tokens[session_id]
    if(tokenData === undefined) {
        throw new Error("not logged in")
    }
    
    return await $fetch("https://discord.com/api/users/" + path, {headers: {
        authorization: `${tokenData.token_type} ${tokenData.token}`
    }})
}

export const requestBotAPI = async (guildid) => {
    return await $fetch("https://discord.com/api/guilds/" + guildid, {headers: {
        authorization: `Bot (token)`}})
}
