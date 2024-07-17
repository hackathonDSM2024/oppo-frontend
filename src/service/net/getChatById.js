import { http } from "../../util/net"

export const GetChatById = ({ id }) => {
    return http.get(`/chat/${id}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })
}