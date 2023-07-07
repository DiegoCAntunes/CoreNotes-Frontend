import { Container, Button, TextArea, Bucket } from "./styles";
import { FiStar } from 'react-icons/fi'
import pencil from "../../assets/pencil.svg"
import bucket from "../../assets/Bucket.svg"
import IconX from "../../assets/IconX.svg"
import { ColorPalette } from "../ColorPalette";
import { useState } from "react"

import { api } from "../../services/api";

export function Note({data = {}, onRemove, onFavorited, ...rest}){
    const [showColorPalette, setShowColorPalette] = useState(false)
    const [editState, setEditState] = useState(false)
    const [note, setNote] = useState(data)

    function handleSetNote(prop, value){
        const newNote = {...note, [prop]: value}

        setNote(newNote)

        return newNote
    }

    async function penPress(){
        const newEditState = !editState

        setEditState(newEditState)

        if(!newEditState) await updateNote(note)
    }

    async function bucketPress(){
        const isShow = !showColorPalette

        setShowColorPalette(isShow)

        if(!isShow) await updateNote(note)
    }

    async function starPress(){
        const state = handleSetNote("isFavorite", !note.isFavorite)
        await updateNote(state)
        onFavorited()
    }

    function updateNote(data){
        return api.put(`/${data.id}`, {
            title: data.title,
            description: data.description,
            color: data.color,
            isFavorite:data.isFavorite
        })
    }

    return(
        <Container {...rest} style={
            {backgroundColor: !note.color ? "white" : note.color}
        }>
            <header>
                <textarea 
                placeholder="Título"
                readOnly={!editState && true}
                onChange={(e) => handleSetNote("title", e.target.value)}
                defaultValue={data.title}
                style={{backgroundColor: !note.color ? "white" : note.color}}
                />
                <Button >
                    <FiStar onClick={() => starPress(data)} className={note.isFavorite ? 'is-favorite' : ''}/>
                </Button>
            </header>
            <TextArea 
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                defaultValue={data.description}
                readOnly={!editState && true}
                style={{backgroundColor: !note.color ? "white" : note.color}}
                onChange={(e) => handleSetNote("description", e.target.value)}
            />
            <footer>
                <div>
                    <Button style={{backgroundColor: editState ? "orange" : note.color}}> 
                        <img src={pencil} alt="" 
                        onClick={() => penPress(data)}
                        /> 
                    </Button>
                    <Bucket>
                        <Button style={{backgroundColor: showColorPalette ? "orange" : note.color}}> 
                            <img src={bucket} alt="" 
                            onClick={() => bucketPress(data)}
                        // onClick={handleClickOutside}
                        /> </Button>

                        {showColorPalette && 
                            <div className="color-palette">
                                <ColorPalette onSelectColor={(e) => {
                                    handleSetNote("color", e)
                                }} />
                            </div>
                        }
                    </Bucket>
                </div>
                <Button onClick={() => {
                    onRemove()
                }}><img src={IconX} alt="" /></Button>
            </footer>
        </Container>
    )
}