import { requestBotAPI } from "../../middleware/session"

export default eventHandler(async (event) => {
    try {
        console.log(event.context.params?.id)
        const response = await requestBotAPI(event.context.params?.id)
        return response
    } catch (error)  {
        console.log(error);
        throw createError({
            statusCode: 401,
            statusMessage: 'could not fetch data'
        })
    }
})