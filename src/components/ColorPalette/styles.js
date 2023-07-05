import styled from "styled-components";

export const Container = styled.div`
    padding: 0.25rem 0.5rem;
    display: grid;
    grid-template:
        "a a a a a a"
        "a a a a a a";
    gap: .5rem;
    background-color: white;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
    border-radius: .5rem;

    @media (min-width: 700px){
        display: flex;
    }
`

export const Circle = styled.button`
    z-index: 9;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor };
    border: none;
`