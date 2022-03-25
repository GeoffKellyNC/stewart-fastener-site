import styled from 'styled-components';

const NavStyled = styled.nav`
    ${'' /* max-width: 100%; */}
    display: flex;

    ul {
        display: flex;
        list-style: none;
        justify-content: space-around;
    }

    li {
        margin: 0 2em;
        
    }

    a {
        text-decoration: none;
        font-size: 1.2em;
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: ${props => props.theme.colors.red};
    }

    @media (max-width: ${pr => pr.theme.breakPoints.tablet}) {
        ul {
            display: none;
        }
    }
`


export default NavStyled;