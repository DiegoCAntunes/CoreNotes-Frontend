import { Container, Content, Star } from "./styles";
import { FiStar } from 'react-icons/fi'
import { useState } from "react";
import { api } from "../../services/api"

export function NoteInput(){
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [isFavorite, setIsFavorite] = useState(false)

async function handleNewNote(){

    await api.post("/", {
        title,
        description,
        color: "white",
        isFavorite
    })
    alert("Nota criada com sucesso")
}

    return(
        <Container>
            <header>
                <input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
                ></input>
                <Star onClick={() => setIsFavorite(!isFavorite)}>
                    <FiStar className={isFavorite ? 'is-favorite' : ''} />
                </Star>
            </header>
            <Content>
                <textarea 
                placeholder= "Criar nota..."
                onChange={e => setDescription(e.target.value)}
                ></textarea>
            </Content>
            <footer>
                <button onClick={handleNewNote}>Criar nota</button>
            </footer>
        </Container>
    )
}