import styled from 'styled-components';


const ContactUsStyled = styled.div`
    background: ${props => props.theme.colors.red};
    width: 100%;

    h2{
        font-family: ${props => props.theme.font.mainFont};
        font-weight: 700;
        text-align: center;
        margin: 5% 0 0 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
    }

    .screws{
        height: 10em;
    }



`

export default ContactUsStyled;