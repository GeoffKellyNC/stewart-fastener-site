import styled from 'styled-components';


const HeaderStyled = styled.header`
    background: ${pr => pr.theme.colors.red};
    height: 7em;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .ham-menu{
        display: none;
    }

    @media (max-width: ${pr => pr.theme.breakPoints.tablet}) {
        .ham-menu{
            display: block;
            color: ${pr => pr.theme.colors.white};
            width: 4em;
            height: auto;
            padding: 1em;
        }

`
export default HeaderStyled;