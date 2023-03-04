import { Button, Card } from 'react-bootstrap'

type Props = {
    title: string
    description: string
    currency: string
    value: number
    addToTotal: (value: number) => void
}
const ProductItem = ({
    addToTotal,
    title,
    description,
    currency,
    value,
}: Props) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <div>
                            {currency}: {value}
                        </div>
                    </Card.Text>
                    <Button
                        variant="outline-primary"
                        onClick={() => addToTotal(value)}
                    >
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductItem
