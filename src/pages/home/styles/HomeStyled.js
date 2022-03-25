import styled from 'styled-components';


const HomeStyled = styled.div`

    .top-btns-container{
        display: none;
    }



    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        .top-btns-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        }

        .top-btn{
            width: 50%;
            height: 4em;
            margin: 2em 1em;
            border: none;
            background: ${props => props.theme.colors.red};
            box-shadow: 0px 0px 7px ${props => props.theme.colors.black};
            font-family: ${props => props.theme.font.mainFont};
            color: ${props => props.theme.colors.white};
            font-weight: 300;
        }
    }

    

`

export default HomeStyled;