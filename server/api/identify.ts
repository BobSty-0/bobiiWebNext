import { requestUser } from "../middleware/session"

export default eventHandler(async (event) => {
    try {
        const response = await requestUser(event.context.session_data, "users/@me")
        return response
    } catch {
        throw createError({
            statusCode: 401,
            statusMessage: 'not logged in'
        })
    }
})