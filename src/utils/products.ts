type Currency = "USD" | "EUR" | "UAH" | "GBP" 
export type Product = {
    id: number
    title: string
    description: string
    currency: Currency
    price: number
}

export const productList: Product[] = [
    {
        id: 1,
        title: "IPhone 12",
        description: "This is iPhone 12 ...",
        currency: "USD",
        price: 1
    },
]

type CurrencyValue = {
    [id in Currency]: number
}
const currencyValue = {
    "USD" : 1,
    "EUR": 1.06,
    "UAH": 0.02,
    "GBP": 1.19, 
}