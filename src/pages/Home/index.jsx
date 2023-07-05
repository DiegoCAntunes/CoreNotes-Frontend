import { Header } from "../../components/Header"
import { NoteInput } from "../../components/NoteInput"
import { Container } from "./styles"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { ColorPalette } from "../../components/ColorPalette" 

export function Home(){
    return(
        <Container>
            <Header />
            <main>
                <NoteInput />
                <Section title="Favoritas">
                    <Note />
                    <Note />
                    <Note />
                </Section>
                <Section title="Outras">
                    <Note />
                </Section>
            </main>
        </Container>
    )
}