import { http } from "../../util/net"

export const PatchBalance = ({ balance }) => {
    const result = http.patch("/balance", {
        balance
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