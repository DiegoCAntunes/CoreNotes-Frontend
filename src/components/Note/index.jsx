import { Container, Button, TextArea, Bucket } from "./styles";
import { FiStar } from 'react-icons/fi'
import pencil from "../../assets/pencil.svg"
import bucket from "../../assets/Bucket.svg"
import IconX from "../../assets/IconX.svg"
import { ColorPalette } from "../ColorPalette";
import { useState } from "react";

export function Note({data, ...rest}){
    const [showColorPalette, setShowColorPalette] = useState(false)

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
    return(
        <Container {...rest}>
            <header>
                {/* <h1>{data.title}</h1> */}
                <Button><FiStar /></Button>
            </header>
            <TextArea placeholder="Clique ou arraste o arquivo para esta área para fazer upload">
                {/* {data.description} */}
            </TextArea>
            <footer>
                <div>
                    <Button> <img src={pencil} alt="" /> </Button>
                    <Bucket>
                        <Button> <img src={bucket} alt="" 
                        onClick={() => setShowColorPalette(!showColorPalette)}
                        // onClick={handleClickOutside}
                        /> </Button>

                        {showColorPalette && 
                            <div className="color-palette"><ColorPalette /></div>
                        }
                    </Bucket>
                </div>
                <Button><img src={IconX} alt="" /></Button>
            </footer>
        </Container>
    )
}