import { http } from "../../util/net"

export const PostChatById = ({ id, content }) => {
    const result = http.post(`/chat/${id}`, {
        content
    })

    result
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })

    return result
}