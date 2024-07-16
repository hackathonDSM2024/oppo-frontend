import { http } from "../../util/net"

export const DeleteChatById = ({ id, type }) => {
    const result = http.delete(`/chat/${id}`, {
        type
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