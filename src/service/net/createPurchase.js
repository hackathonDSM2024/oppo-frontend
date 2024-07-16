import { http } from "../../util/net"

export const CreatePurchase = ({name, price, description}) => {
    const result = http.post("/purchase", {
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