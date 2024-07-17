import { http } from "../../util/net"

export const GetPurchase = () => {
    return http.get("/purchase")
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })
}