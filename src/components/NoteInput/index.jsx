import { Container, Content, Star } from "./styles";
import { FiStar } from 'react-icons/fi'

export function NoteInput(){
    return(
        <Container>
            <header>
                <input placeholder="Título"></input>
                <Star><FiStar /></Star>
            </header>
            <Content>
                <textarea placeholder= "Criar nota..."></textarea>
            </Content>
        </Container>
    )
}