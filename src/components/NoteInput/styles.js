import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color:${({theme}) => theme.COLORS.GRAY_400};
    width: 100%;
    max-width: ${({theme}) => theme.SIZES.NOTE_MAX_WIDTH};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: ${({theme}) => theme.SIZES.BORDER_RADIUS};
    margin-bottom: 28px;

    >header{
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 0.5px solid ${({theme}) => theme.COLORS.GRAY_300};
        align-items: center;
        height: 40px;

        >h1{
            font-size: 14px;
            transform: translateY(4px);
        }

        >button{
            transform: translateY(4px);
        }
    }

    textarea, input{
        width: 100%;
        background: none;
        border: none;
        font-size: 1rem;
        word-break: break-word;
        resize: none;
    }

    >footer{
        button{
            border: none;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_BODY};

        }
    }

    @media (min-width: 700px) {
        border-radius: 0;
        max-width: ${({theme}) => theme.SIZES.INPUT_MAX_WIDTH_DESKTOP};
    }
`
export const Content = styled.div`
    padding: 1rem;
`


export const Star = styled.button`
    border: none;
    background: none;

    > svg{
        font-size: 19px;
    }

    >.is-favorite{
        fill: black;
    }
`