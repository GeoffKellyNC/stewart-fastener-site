import styled from 'styled-components';


const MobileNavStyled = styled.nav`
    background: ${pr => pr.theme.colors.black};
    width: 60%;
    position: relative;
    top: 2em;
    bottom: 0;

    ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        align-content: space-around;
    }
    a{
        color: ${pr => pr.theme.colors.white};
    }


`
export default MobileNavStyled;