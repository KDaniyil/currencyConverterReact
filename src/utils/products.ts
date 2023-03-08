export type ProductType = {
    id: number
    title: string
    description: string
    value: number
}

export const productList: ProductType[] = [
    {
        id: 1,
        title: "IPhone 12",
        description: "This is iPhone 12 ...",
        value: 750
    },
    {
        id: 2,
        title: "IPhone 8",
        description: "This is iPhone 8 ...",
        value: 850
    },
    {
        id: 3,
        title: "IPhone X",
        description: "This is iPhone X ...",
        value: 1250
    },
]

type RATESType = {
    [currency:string]: number
}
export const RATES:RATESType = {
    "USD" : 1,
    "EUR": 0.94,
    "UAH": 36.69,
    "GBP": 0.83, 
}
export const convertArrayInObject = (arr: ProductType[]) =>
        arr.reduce(
            (object, arrItem) => ({
                ...object,
                [arrItem.id]: arrItem,
            }),
            {}
        )