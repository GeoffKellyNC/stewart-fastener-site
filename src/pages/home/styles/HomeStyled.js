import styled from 'styled-components';


const HomeStyled = styled.div`
    font-family: ${pr => pr.theme.font.mainFont};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    ${'' /* background: linear-gradient(359deg,#EE6352 50%, #E3EFF3 50%); */}
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-repeat: no-repeat;
    ${'' /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='4000' height='2500' preserveAspectRatio='none' viewBox='0 0 4000 2500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1367%26quot%3b)' fill='none'%3e%3crect width='4000' height='2500' x='0' y='0' fill='rgba(239%2c 239%2c 239%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c1006.941C224.799%2c1052.222%2c465.317%2c1144.537%2c672.822%2c1046.932C884.856%2c947.196%2c997.157%2c712.792%2c1086.165%2c496.035C1172.759%2c285.158%2c1239.558%2c49.202%2c1171.921%2c-168.497C1107.259%2c-376.619%2c910.484%2c-507.97%2c734.352%2c-636.319C588.953%2c-742.273%2c420.338%2c-792.986%2c247.312%2c-842.269C75.715%2c-891.145%2c-93.515%2c-941.724%2c-270.914%2c-922.65C-473.809%2c-900.834%2c-700.769%2c-877.183%2c-837.427%2c-725.635C-974.478%2c-573.652%2c-954.673%2c-343.877%2c-976.332%2c-140.375C-997.202%2c55.718%2c-1047.179%2c261.49%2c-961.384%2c439.049C-876.171%2c615.403%2c-687.232%2c707.332%2c-518.594%2c806.947C-355.775%2c903.125%2c-185.381%2c969.6%2c0%2c1006.941' fill='%23b3b3b3'%3e%3c/path%3e%3cpath d='M4000 3787.882C4241.703 3781.447 4470.09 3677.34 4662.689 3531.1639999999998 4845.891 3392.12 4943.557 3182.497 5059.416 2983.819 5188.579 2762.326 5380.61 2558.031 5379.686 2301.631 5378.722 2034.299 5251.855 1766.5720000000001 5054.378 1586.377 4864.717 1413.314 4587.928 1407.202 4337.483 1350.638 4103.605 1297.815 3863.532 1185.62 3637.792 1266.434 3414.943 1346.213 3311.169 1589.998 3160.0280000000002 1772.1599999999999 3012.563 1949.892 2810.393 2096.188 2761.982 2322 2712.397 2553.285 2799.98 2788.007 2895.888 3004.2309999999998 2992.628 3222.333 3119.6710000000003 3428.969 3314.239 3567.065 3514.121 3708.932 3754.977 3794.406 4000 3787.882' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1367'%3e%3crect width='4000' height='2500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */}
    

    h1{
        max-width: 100%;
        text-align: center;
        color: ${pr => pr.theme.colors.red};
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