import { Container, Button, TextArea } from "./styles";
import { FiStar, FiX } from 'react-icons/fi'
import pencil from "../../assets/pencil.svg"
import bucket from "../../assets/Bucket.svg"
import IconX from "../../assets/IconX.svg"

export function Note({value, ...rest}){
    return(
        <Container>
            <header>
                <h1>Título</h1>
                <Button><FiStar /></Button>
            </header>
            <TextArea placeholder="Clique ou arraste o arquivo para esta área para fazer upload">
                {value}
            </TextArea>
            <footer>
                <div>
                    <Button> <img src={pencil} alt="" /> </Button>
                    <Button> <img src={bucket} alt="" /> </Button>
                </div>
                <Button><img src={IconX} alt="" /></Button>
            </footer>
        </Container>
    )
}