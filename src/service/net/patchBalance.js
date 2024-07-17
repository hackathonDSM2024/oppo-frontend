import { http } from "../../util/net"

export const PatchBalance = ({ balance }) => {
    return http.patch("/balance", {
        balance
    }).then((res) => {
        return res.data
    })
    .catch((err) => {
        throw err.message
    })
}