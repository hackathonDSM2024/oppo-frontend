import { http } from "../../util/net"

export const GetPurchase = () => {
    const result = http.get("/purchase")

    result
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })

    return result
}