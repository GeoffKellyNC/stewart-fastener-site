import styled from 'styled-components';


const ContactUsStyled = styled.div`
    background: ${props => props.theme.colors.red};
    width: 100%;
    box-shadow: ${props => props.theme.styling.boxShadow};
    
    h2{
        font-family: ${props => props.theme.font.mainFont};
        font-weight: 700;
        text-align: center;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.white};
        font-size: 5em;
    }

    .screws{
        height: 18em;
        position: absolute;
        top: 78em;
        left: 0em;
        transform: rotate(347deg);
}
    }

    .business-info{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    @media (max-width: ${props => props.theme.breakPoints.ipad}) {
        .screws{
            top: 120em;
            height: 16em;
        }
    }

    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        width: 100%;
       
        .business-info{
        display: flex;
        flex-direction: column;
        }

        .screws{
            display: none;
        }
    }



`

export default ContactUsStyled;