import { v4 as uuidv4 } from 'uuid';
import { clientId, clientSecret } from "~/globals"


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
    const tokenResponseData = $fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:8080/code/',
            scope: 'identify',
        }).toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const oAuthData = await tokenResponseData.body.json()
    console.log(oAuthData)
    tokens[session_id] = { token: oAuthData.access_token, token_type: oauthData.token_type}
}

export const request = async (session_id, path) => {
    if(!tokens[session_id]) {
        throw new Error("not logged in")
    }
    const token = tokens[session_id]
    const res = await request("https://discord.com/api/users/" + path, {headers: {
        authorization: `${token.token_type} ${token.token}`
    }})
    const data = await identifyResponse.body.json()
    return data
}
