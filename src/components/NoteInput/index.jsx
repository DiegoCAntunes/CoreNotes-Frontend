import { Container, Content, Star } from "./styles";
import { FiStar } from 'react-icons/fi'
import { useRef, useState } from "react";
import { api } from "../../services/api"

export function NoteInput({submitFunction}){
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [isFavorite, setIsFavorite] = useState(false)

const createNoteRef = useRef()

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
                onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        createNoteRef.current.focus()
                    }
                }}
                ></input>
                <Star onClick={() => setIsFavorite(!isFavorite)}>
                    <FiStar className={isFavorite ? 'is-favorite' : ''} />
                </Star>
            </header>
            <Content>
                <textarea 
                placeholder= "Criar nota..."
                onChange={e => setDescription(e.target.value)}
                ref={createNoteRef}
                ></textarea>
            </Content>
            <footer>
                <button onClick={() => {
                    handleNewNote()
                    submitFunction()}
                }>Criar nota</button>
            </footer>
        </Container>
    )
}