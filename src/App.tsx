import 'bootstrap/dist/css/bootstrap.min.css'
import ProductItem from 'components/ProductItem/ProductItem'
import Total from 'components/Total/Total'
import { useState } from 'react'
import { Alert, Button, ButtonGroup } from 'react-bootstrap'
import { productList, RATES } from 'utils/products'
import './App.css'

type Props = {}
export type TotalType = {
    [id: number]: number
}
const App = (props: Props) => {
    const [total, setTotal] = useState<TotalType>({})
    const addToTotal = (id: number) =>
        setTotal((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,
        }))
    const [currencyOption, setCurrencyOption] = useState<string>('USD')
    const changeCurrency = (currency: string) => setCurrencyOption(currency)

    return (
        <div className="app">
            <Alert.Heading>Our shop page</Alert.Heading>
            <ButtonGroup size="sm">
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        changeCurrency('USD')
                    }}
                >
                    USD
                </Button>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        changeCurrency('EUR')
                    }}
                >
                    EUR
                </Button>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        changeCurrency('UAH')
                    }}
                >
                    UAH
                </Button>
                <Button
                    variant="outline-primary"
                    onClick={() => {
                        changeCurrency('GBP')
                    }}
                >
                    GBP
                </Button>
            </ButtonGroup>
            <div className="app-products">
                {productList.map(({ id, title, description, value }) => {
                    return (
                        <ProductItem
                            addToTotal={addToTotal}
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            currency={currencyOption}
                            value={value * RATES[currencyOption]}
                        />
                    )
                })}
            </div>
            <Total total={total} currency={currencyOption} />
        </div>
    )
}
export default App
