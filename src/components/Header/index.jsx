import { FiX, FiSearch } from 'react-icons/fi'
import { Container } from "./styles";

import notesIcon from "../../assets/notesIcon.svg"
import { Input } from "../Input"

export function Header(){
    // const { signOut, user } = useAuth()

    return(
        <Container>
            <div>
                <img src={notesIcon} alt="image of note block" />
                <h1> CoreNotes</h1>
                <Input 
                placeholder="Pesquisar notas"
                icon={FiSearch}/>
            </div>

            <FiX />
        </Container>
    )
}