import { Header } from "../../components/Header"
import { NoteInput } from "../../components/NoteInput"
import { Container } from "./styles"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"

import { useState, useEffect } from "react"
import { api } from '../../services/api'

export function Home(){
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function fetchNotes(){
            console.log(search)
            const response = await api.get(`/?title=${search}`)
            setNotes(response.data)
        }

        fetchNotes()
        console.log(notes[1])
    }, [search])

    return(
        <Container>
            <Header
                event={e => setSearch(e.target.value)}
            />
            <main>
                <NoteInput />
                <Section title="Favoritas">
                    {   
                        notes && notes.map( note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                            />
                        ))
                    }
                </Section>
                <Section title="Outras">
                    <Note />
                </Section>
            </main>
        </Container>
    )
}