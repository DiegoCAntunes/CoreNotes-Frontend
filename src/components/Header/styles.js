import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 60px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({theme}) => theme.COLORS.WHITE};
    box-shadow: 0px 1px 7px 0px rgba(149, 149, 149, 0.25);

    >div{
        display: flex;
        align-items: center;
        width: 100%;

        >div{
            width: 100%;
            max-width: 314px;

        }
    }

    > div img{
        margin-left: 25px;
    }

    >div h1{
        margin-left:14.5px;
        margin-right: 20px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        font-size: 14px;
    }

    >svg{
        margin-right: 19px;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    @media (min-width: 700px) {
        >div{
            >div{
                width: 100%;
                max-width: ${({theme}) => theme.SIZES.INPUT_MAX_WIDTH_DESKTOP};
            }
        }
    }
`