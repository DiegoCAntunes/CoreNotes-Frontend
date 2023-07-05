import { Container, Button, TextArea, Bucket } from "./styles";
import { FiStar, FiX } from 'react-icons/fi'
import pencil from "../../assets/pencil.svg"
import bucket from "../../assets/Bucket.svg"
import IconX from "../../assets/IconX.svg"
import { ColorPalette } from "../ColorPalette";
import { useState } from "react";

export function Note({value, ...rest}){
    const [showColorPalette, setShowColorPalette] = useState(false)
    return(
        <Container>
            <header>
                <h1>Título</h1>
                <Button><FiStar /></Button>
            </header>
            <TextArea placeholder="Clique ou arraste o arquivo para esta área para fazer upload">
                {value}
            </TextArea>
            <footer>
                <div>
                    <Button> <img src={pencil} alt="" /> </Button>
                    <Bucket>
                        <Button> <img src={bucket} alt="" onClick={() => setShowColorPalette(!showColorPalette) }/> </Button>
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