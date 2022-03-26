import styled from 'styled-components';

const ContactFormStyled = styled.form`
    background: ${props => props.theme.colors.white};
    width: 40%;
    height: 25.5em;
    box-shadow: ${props => props.theme.styling.boxShadow};
    border-radius: 5px;
    ${'' /* margin: 5% auto; */}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    input{
        width: 35%;
        height: 2em;
        border: none;
    }

    textarea{
        width: 55%;
        height: 10em;
        border: none;
    }

    .input-box{
        border:0;
        border-bottom:1px solid ${props => props.theme.colors.red};;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
    }

    .input-box:focus{
        outline:none;
    }

    input::placeholder,textarea::placeholder{
        color:${props => props.theme.colors.red};
        font-family: ${props => props.theme.font.mainFont};
        font-weight: 300;
    }

    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        width: 80%;
    }

`



export default ContactFormStyled;