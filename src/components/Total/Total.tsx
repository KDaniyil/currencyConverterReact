import { TotalType } from 'App'
import { Alert } from 'react-bootstrap'
import {
    productList,
    convertArrayInObject,
    ProductType,
    RATES,
} from 'utils/products'

type Props = {
    total: TotalType
    currency: string
    productObject?: {
        [id: number]: ProductType
    }
}
const Total = ({
    total,
    currency,
    productObject = convertArrayInObject(productList),
}: Props) => {
    return (
        <Alert.Heading>
            Total :{' '}
            {Object.keys(total).reduce(
                (grandTotal, id) =>
                    grandTotal +
                    total[parseInt(id)] *
                        (RATES[currency] * productObject[parseInt(id)].value),
                0
            )}{' '}
            {currency}
        </Alert.Heading>
    )
}
export default Total
