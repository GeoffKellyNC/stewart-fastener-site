import styled from 'styled-components';


const HeaderStyled = styled.header`
    background: ${pr => pr.theme.colors.green};
    height: 7em;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    box-shadow: 0px 0px 10px ${pr => pr.theme.colors.black};

    img{
        max-width: 13%;
        height: auto;
        position: absolute;
        left: 0em;
        top: -3.4em;  
        margin: 0;
        padding: 0;
    }

    a{
        cursor: pointer;
    }

    .ham-menu{
        display: none;
    }

    @media (max-width: ${pr => pr.theme.breakPoints.tablet}) {
        .ham-menu{
            display: block;
            color: ${pr => pr.theme.colors.red};
            width: 4em;
            height: auto;
            padding: 1em;
        }

        img{
            max-width: 30%;
        }

`
export default HeaderStyled;