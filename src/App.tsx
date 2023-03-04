import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Button, ButtonGroup } from 'react-bootstrap'

type Props = {}
const App = (props: Props) => {
    return (
        <div>
            <Alert.Heading>Our shop page</Alert.Heading>
            <ButtonGroup size="sm">
                <Button variant="outline-primary">USD</Button>
                <Button variant="outline-primary">EUR</Button>
                <Button variant="outline-primary">UAH</Button>
                <Button variant="outline-primary">GBP</Button>
            </ButtonGroup>
        </div>
    )
}
export default App
