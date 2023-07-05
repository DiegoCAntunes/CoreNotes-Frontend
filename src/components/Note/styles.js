import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color:${({theme}) => theme.COLORS.GRAY_400};
    width: 100%;
    max-width: ${({theme}) => theme.SIZES.NOTE_MAX_WIDTH};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: ${({theme}) => theme.SIZES.BORDER_RADIUS};
    margin-bottom: 52px;

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

    >footer{
        display: flex;
        justify-content: space-between;
        padding: 11px 20px;
        position: relative;
        z-index: 1;

        >div{
            display: flex;
            gap: 11px;
        }
    }
`

export const Button = styled.button`
    border: none;
    background: none;

    > svg{
        font-size: 19px;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: ${({theme}) => theme.SIZES.NOTE_BODY_SIZE};

    background-color: none;
    color: ${({theme})=> theme.COLORS.GRAY_400};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 14px 39px 0 23px;
    font-size: 13px;
`

export const Bucket = styled.div`
    position: relative;

    .color-palette{
        position: absolute;
    }
`