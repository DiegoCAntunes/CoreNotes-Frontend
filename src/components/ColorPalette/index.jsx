import { Container, Circle } from "./styles";
import { COLORS } from "../../constants/colors";

export function ColorPalette({onSelectColor}){
    return(
        <Container>
            {COLORS.map(color => (
                <Circle key={color} bgColor={color} onClick= {() => onSelectColor(color)}/>
            ))}
        </Container>
    )
}