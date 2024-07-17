import { http } from "../../util/net"

export const DeleteChatById = ({ id, type }) => {
    return http.delete(`/chat/${id}`, {
        data: {
            type
        }
    }).then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    }) 
}