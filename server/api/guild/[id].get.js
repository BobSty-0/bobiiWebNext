import { requestBot, requestUser } from "../../middleware/session"

// guilds on which the user has manage server rights or admin
export default eventHandler(async (event) => {
    try {
        const guildId = event.context.params?.id
        const userGuilds = await requestUser(event.context.session_id, "users/@me/guilds")
        for(var e in userGuilds) {
            const guild = userGuilds[e]
            if(guild.id === guildId && (guild.owner || (guild.permissions & 0x28))) {
                return await requestBot('guilds/' + event.context.params?.id)
            }
        }

    } catch (error)  {
        console.log(error);
        throw createError({
            statusCode: 401,
            statusMessage: 'could not fetch data'
        })
    }
    throw createError({
        statusCode: 401,
        statusMessage: 'User may not access this server'
    })
})