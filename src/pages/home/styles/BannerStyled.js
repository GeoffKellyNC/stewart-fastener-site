import styled from 'styled-components';


const BannerStyled = styled.div`
    position: relative;
    left: -26em;

    img{
        width: 212%;
        margin: 3em 1.5em;
        height: 55vh;
        border-radius: 15px;
    }

    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: none;
    }

`


export default BannerStyled;