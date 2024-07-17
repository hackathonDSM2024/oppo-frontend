import { http } from "../../util/net"

export const getBalance = () => {
    return http.get("/balance")
    .then((res) => {
        return res.data
    }).catch((err) => {
        throw err.message
    })
}