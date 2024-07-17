import { http } from "../../util/net"

export const CreatePurchase = ({name, price, description}) => {
    return http.post("/purchase", {
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