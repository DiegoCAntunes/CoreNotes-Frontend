import { Container, Button, TextArea, Bucket } from "./styles";
import { FiStar } from 'react-icons/fi'
import pencil from "../../assets/pencil.svg"
import bucket from "../../assets/Bucket.svg"
import IconX from "../../assets/IconX.svg"
import { ColorPalette } from "../ColorPalette";
import { useState } from "react"

import { api } from "../../services/api";

export function Note({data = {}, clickFunction, ...rest}){
    const [showColorPalette, setShowColorPalette] = useState(false)
    const [bgColor, setBgColorState] = useState(data.color)
    const [isFavorite, setIsFavorite] = useState(data.isFavorite)
    const [description, setDescription] = useState(data.description)
    const [title, setTitle] = useState(data.title)
    const [editState, setEditState] = useState(false)

    // function handleClickOutside(){
    //     const box = document.getElementsByClassName("color-palette")
    //     console.log(box)

    //     if (!showColorPalette){
    //         setShowColorPalette(!showColorPalette)
    //         addEventListener('click', function handleClick(e){
    //             if(!box.contains(e.target)){
    //                 setShowColorPalette(false)
    //             }
    //         })
    //     } else {
    //         setShowColorPalette(false)
    //         removeEventListener('click', handleClick, true)
    //     }
    // }
    function penPress(data){
        if(!editState){
            setEditState(!editState)
        } else {
            setEditState(!editState)
            updateNote(data)
        }
    }

    function bucketPress(data){
        if(!showColorPalette){
            setShowColorPalette(!showColorPalette)
        } else {
            setShowColorPalette(!showColorPalette)
            updateNote(data)
        }
    }

    function starPress(data){
        debugger
        setIsFavorite(!isFavorite)
        updateNote(data)
        console.log((isFavorite))
    }

    async function updateNote(data){
        await api.put(`/${data.id}`, {
            title: title,
            description: description,
            color: bgColor,
            isFavorite:isFavorite
        })
    }

    return(
        <Container {...rest} style={
            {backgroundColor: !bgColor ? "white" : bgColor}
        }>
            <header>
                <textarea 
                placeholder="Título"
                readOnly={!editState && true}
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={data.title}
                style={{backgroundColor: !bgColor ? "white" : bgColor}}
                />
                <Button onClick={() => starPress(data)}>
                    <FiStar className={isFavorite ? 'is-favorite' : ''}/>
                </Button>
            </header>
            <TextArea 
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                defaultValue={data.description}
                readOnly={!editState && true}
                style={{backgroundColor: !bgColor ? "white" : bgColor}}
                onChange={(e) => setDescription(e.target.value)}
            />
            <footer>
                <div>
                    <Button style={{backgroundColor: editState ? "orange" : "white"}}> 
                        <img src={pencil} alt="" 
                        onClick={() => penPress(data)}
                        /> 
                    </Button>
                    <Bucket>
                        <Button style={{backgroundColor: showColorPalette ? "orange" : "white"}}> <img src={bucket} alt="" 
                        onClick={() => bucketPress(data)}
                        // onClick={handleClickOutside}
                        /> </Button>

                        {showColorPalette && 
                            <div className="color-palette">
                                <ColorPalette onSelectColor={(e) => {
                                    setBgColorState(e)
                                }} />
                            </div>
                        }
                    </Bucket>
                </div>
                <Button onClick={() => {
                    clickFunction()
                }}><img src={IconX} alt="" /></Button>
            </footer>
        </Container>
    )
}