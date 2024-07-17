import { http } from "../../util/net"

export const DeleteChatById = ({ id, type }) => {
    return http.delete(`/chat/${id}`, {
        type
    }).then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    }) 
}