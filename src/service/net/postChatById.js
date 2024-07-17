import { http } from "../../util/net"

export const PostChatById = ({ id, content }) => {
    return http.post(`/chat/${id}`, {
        content
    }).then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })
}