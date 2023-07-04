import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2{
        padding-left: 20px;
        width: 100%;
        max-width: 390px;
        display: flex;
        margin-bottom: 7px;
        color: ${({theme}) => theme.COLORS.GRAY_400};
        font-size: 12px;
        font-weight: 400;
    }

    >div{
        align-items: center;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 700px) {
        padding: 0 105px;

        >h2{
            max-width: inherit;
        }
        >div {
            flex-direction: row;
            column-gap: 35px;
            flex-wrap: wrap;
        }
    }
`