import styled from  'styled-components';


const GetTKUStyled = styled.div`
    background: ${pr => pr.theme.colors.offWhite};
    width: 35em;
    height: 25.5em;
    margin: auto;
    box-shadow: ${pr => pr.theme.styling.boxShadow};
    border-radius: 5px;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    :hover{
        transform: scale(1.1);
    }

    h2{
        font-family: ${pr => pr.theme.font.mainFont};
        font-weight: 800;
        padding: 0;
        margin: 0;
    }

    img{
        height: 10em;
        margin: 0;
        padding: 0;
    }

    button{
        width: 10em;
        height: 2em;
        border: none;
        background: ${props => props.theme.colors.red};
        box-shadow: 0px 0px 7px ${props => props.theme.colors.black};
        font-family: ${props => props.theme.font.mainFont};
        color: ${props => props.theme.colors.white};
        font-weight: 700;
        border-radius: 5px;
        font-size: 1em;
    }

    button:hover{
        color: ${props => props.theme.colors.red};
        background: ${props => props.theme.colors.white};
    }
`

export default GetTKUStyled;

