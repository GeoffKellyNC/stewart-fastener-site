import styled from 'styled-components';


const ServicesStyled = styled.div`
    ${'' /* background: ${pr => pr.theme.colors.offWhite}; */}
    background: linear-gradient(270deg,#EE6352 50%, #E3EFF3 50%);
    max-width: 35em;
    margin: auto;
    box-shadow: ${pr => pr.theme.styling.boxShadow};
    border-radius: 5px;
    margin-top: 10%;

    :hover{
        ${'' /* transform: scale(1.1); */}
    }



    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-wrap: wrap;
        gap:32%;
    }

    span{
        max-width: 100%;
        display: flex;
        justify-content: center;
        font-weight: 700;
        padding: 2em;

    }

    .learn-btn{
        display: flex;
        justify-content: center;
        max-width: 100%;
        margin: 2em 0;
    }

    button{
        width: 10em;
        height: 2em;
        border: none;
        ${'' /* background: ${props => props.theme.colors.red}; */}
        background: linear-gradient(270deg,#EE6352 50%, #E3EFF3 50%);
        box-shadow: 0px 0px 7px ${props => props.theme.colors.black};
        font-family: ${props => props.theme.font.mainFont};
        color: ${props => props.theme.colors.black};
        font-weight: 700;
        border-radius: 5px;
        font-size: 1em;
    }

    button:hover{
        color: ${props => props.theme.colors.red};
        background: ${props => props.theme.colors.white};
    }
    
    .white-text{
        color: ${props => props.theme.colors.white};
    }


    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        max-width: 30em;
        
        div{
            gap: 29%;
        }
    }
    
`

export default ServicesStyled;