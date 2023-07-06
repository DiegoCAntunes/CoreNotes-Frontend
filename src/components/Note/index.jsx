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
    function bucketPress(id){
        if(!showColorPalette){
            setShowColorPalette(!showColorPalette)
        } else {
            setShowColorPalette(!showColorPalette)
            updateNoteColor(id)
        }
    }

    async function updateNoteColor(data){
        await api.put(`/${data.id}`, {
            title: data.title,
            description: data.description,
            color: bgColor,
            isFavorite: data.isFavorite
        })
    }

    return(
        <Container {...rest} style={
            {backgroundColor: !bgColor ? "white" : bgColor}
        }>
            <header>
                <h1>{data.title}</h1>
                <Button><FiStar /></Button>
            </header>
            <TextArea 
                placeholder="Clique ou arraste o arquivo para esta área para fazer upload"
                value={data.description}
                readOnly
                style={{backgroundColor: !bgColor ? "white" : bgColor}}
            >
            </TextArea >
            <footer>
                <div>
                    <Button> <img src={pencil} alt="" /> </Button>
                    <Bucket>
                        <Button> <img src={bucket} alt="" 
                        onClick={() => bucketPress(data)   
                        }
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