import { requestUser } from "../middleware/session"

export default eventHandler(async (event) => {
    try {
        const guilds = await requestUser(event.context.session_data, "users/@me/guilds")
        const response = []
        for(var e in guilds) {
            const guild = guilds[e]
            if(guild.owner || (guild.permissions & 0x28)) {
                response.push(guild)
            }
        }
        return response
    } catch {
        throw createError({
            statusCode: 401,
            statusMessage: 'not logged in'
        })
    }
})