import { Button, Card } from 'react-bootstrap'

type Props = {
    id: number
    title: string
    description: string
    currency: string
    value: number
    addToTotal: (id: number) => void
}
const ProductItem = ({
    addToTotal,
    id,
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
                        onClick={() => addToTotal(id)}
                    >
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductItem
