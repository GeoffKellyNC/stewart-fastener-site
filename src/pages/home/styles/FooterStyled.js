import styled from 'styled-components';


const FooterStyled = styled.footer`
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.offWhite};

    .footer-container {
        display: flex;
        justify-content: space-around;
         align-items: center;
    }

    .google-map{
        border: 1px solid ${props => props.theme.colors.red};
        box-shadow: 0px 0px 10px ${props => props.theme.colors.black};
        margin-top: 3em;
    }

    .footer-bottom{
        text-align: center;
    }

    .footer-logo{
        width: 20em;
        height: auto;
        margin: 0;
        padding: 0;
    }

    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        .footer-container {
            flex-direction: column;
            align-items: center;
        }
    }

`

export default FooterStyled;


