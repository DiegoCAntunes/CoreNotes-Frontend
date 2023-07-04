import { Container, Star } from "./styles";
import { FiStar } from 'react-icons/fi'

export function NoteInput(){
    return(
        <Container>
            <header>
                <h1>Título</h1>
                <Star><FiStar /></Star>
            </header>
            <input placeholder= "Criar nota..." />
        </Container>
    )
}