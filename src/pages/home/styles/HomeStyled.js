import styled from 'styled-components';


const HomeStyled = styled.div`
    font-family: ${pr => pr.theme.font.mainFont};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;
    ${'' /* background: linear-gradient(359deg,#EE6352 50%, #E3EFF3 50%); */}
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; 

    h1{
        max-width: 100%;
        text-align: center;
    }

    p{
        max-width: 100%;
    }

    h3{
        font-size: 2em;
        max-width: 80%;
        margin:  1.5em auto;
        color: ${pr => pr.theme.colors.red};
        text-align: center;
    }
    
    .top-btns-container{
        display: none;
    }

    .top-text-container{
        max-width: 50%;
        margin: 2em 0;
    }

    .top-span-text{
        color: ${pr => pr.theme.colors.black};
        font-weight: 700;
    }

    .p-desc-text{
        max-width: 80%;
        margin: 3em auto;
        text-align: center;
    }

    .cards{
        display: flex;
        gap: 5em;
    }



    




    @media (max-width: ${props => props.theme.breakPoints.tablet}) {
        flex-direction: column;

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
            font-weight: 700;
            border-radius: 5px;
            font-size: 1em;
        }

        .top-text-container{
            max-width: 80%;
            margin: 0 auto;
        }

        .cards{
            display: flex;
            flex-direction: column;
        }

    }

    

`

export default HomeStyled;