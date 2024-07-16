import { http } from "../../util/net"

export const getBalance = () => {
    const result = http.get("/balance")

    result
    .then((res) => {
        return res.data
    }).catch((err) => {
        throw err.message
    })
    
    return result
}