import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.GRAY_400};

    margin-bottom: 12px;
    margin-top: 16px;
    border-radius: 3px;
    border: 0cap.5px #D9D9D9 solid;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

    >input {
        height: 28px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.GRAY_400};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > svg{
        margin-right: 7px;
    }
`