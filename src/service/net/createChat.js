import { http } from "../../util/net"

export const CreateChat = ({ name, price, description }) => {
    const result = http.post("/chat", {
        name,
        price,
        description
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