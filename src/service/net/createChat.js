import { http } from "../../util/net"

export const createChat = ({ name, price, description }) => {
    return http.post("/chat", {
        name,
        price,
        description
    }).then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })
}