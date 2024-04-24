import { login } from "../middleware/session"
export default eventHandler(async (event) => {
    const code = getQuery(event).code as string
    console.log(code)
    login(event.context.session_id, code)
    sendRedirect(event, "/")
})