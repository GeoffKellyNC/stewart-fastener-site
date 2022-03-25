import styled from 'styled-components';


const HomeStyled = styled.div`
    font-family: ${pr => pr.theme.font.mainFont};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;

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
        margin:  3em auto;
        color: ${pr => pr.theme.colors.red};
    }
    
    .top-btns-container{
        display: none;
    }

    .top-text-container{
        max-width: 50%;
        margin: 6em 0;
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
    }

    

`

export default HomeStyled;