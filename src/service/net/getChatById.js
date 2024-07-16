import { http } from "../../util/net"

export const GetChatById = ({ id }) => {
    const result = http.get(`/chat/${id}`)

    result
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })

    return result
}