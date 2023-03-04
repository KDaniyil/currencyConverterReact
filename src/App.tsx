import 'bootstrap/dist/css/bootstrap.min.css'
import ProductItem from 'components/ProductItem/ProductItem'
import { useState } from 'react'
import { Alert, Button, ButtonGroup } from 'react-bootstrap'
import { productList, RATES } from 'utils/products'
import './App.css'

type Props = {}
const App = (props: Props) => {
    const [total, setTotal] = useState<number>(0)
    const addToTotal = (value: number) =>
        setTotal((prevState) => prevState + value)
    const [currencyOption, setCurrencyOption] = useState<string>('USD')
    const changeCurrency = (currency: string) => setCurrencyOption(currency)
    const getValue = (rate: number, value: number) => Math.round(value * rate)

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
                            title={title}
                            description={description}
                            currency={currencyOption}
                            value={getValue(RATES[currencyOption], value)}
                        />
                    )
                })}
            </div>
            <div>Total: {total}</div>
        </div>
    )
}
export default App
