import { useState, useEffect } from "react"
import { api } from '../../services/api'

import { Container } from "./styles"

import { Header } from "../../components/Header"
import { NoteInput } from "../../components/NoteInput"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"


export function Home(){
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const [deleteState, setDeleteState] = useState(false)
    const [submitState, setSubmitState] = useState(false)
    const [favoritedState, setFavoritedState] = useState(false)

    const favArray = notes.filter( note => note.isFavorite)
    const noFavArray = notes.filter( note => !note.isFavorite)

    async function handleRemove(id){
        const confirm = window.confirm("Deseja realmente remover a nota?")
    
        if(confirm){
          await api.delete(`/${id}`)
          setDeleteState(!deleteState)
        }
    }

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/?title=${search}`)
            setNotes(response.data)
        }
        
        fetchNotes()
    }, [search, deleteState, submitState, favoritedState])

    return(
        <Container>
            <Header
                event={e => setSearch(e.target.value)}
            />
            <main>
                <NoteInput
                submitFunction={() => {
                    setSubmitState(!submitState)
                }}
                />
                <Section title="Favoritas">
                    {   
                        favArray.map( note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onRemove={() => handleRemove(note.id)}
                                onFavorited={() => setFavoritedState(!favoritedState)}
                            />
                        ))
                    }
                </Section>
                <Section title="Outras">
                {   
                        noFavArray.map( note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onRemove={() => handleRemove(note.id)}
                                onFavorited={() => setFavoritedState(!favoritedState)}
                            />
                        ))
                    }
                </Section>
            </main>
        </Container>
    )
}