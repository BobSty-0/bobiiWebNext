import { request } from "../middleware/session"

export default eventHandler(async (event) => {
    try {
        const response = await request(event.context.session_id, "@me")
        return response
    } catch {
        throw createError({
            statusCode: 401,
            statusMessage: 'not logged in'
        })
    }
})