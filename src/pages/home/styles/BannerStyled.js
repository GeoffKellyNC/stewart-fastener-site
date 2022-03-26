import styled from 'styled-components';


const BannerStyled = styled.div`
    position: relative;
    left: -26em;

    .banner-img{
        width: 206%;
        margin: 1.5em;
        height: 50vh;
        border-radius: 15px;
    }

    @media (max-width: ${pr => pr.theme.breakPoints.ipad}) {
        .banner-img{
            height: 11em;
            margin-left: 11em;
        }
    }


    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        display: none;
    }

`


export default BannerStyled;