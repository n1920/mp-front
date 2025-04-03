import styled, { createGlobalStyle } from 'styled-components'

import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'consts'
import colors from 'consts/colors'

export const AppStyles = createGlobalStyle`
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing; grayscale;
    marging: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    color: #5e5873;
    mon-width: 320px;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: inherit;
    color: ${colors.primary};
}

ul, li {
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

tr,
td,
th,
p,
button,
ul,
li,
h1, h2, h3, h4, h5, h6 {
    marging: 0;
    padding: 0;
}

h1, .h1 {
    font-size: 26px;
}

h2, .h2 {
    font-size: 22px;
}
    
h3, .h3 {
    font-size: 18px;
}
    
h4, .h4 {
    font-size: 16px;
}
    
p, li {
    line-height: 21px;
}
`
    
export const PageWrapper = styled.div`
    padding: 20px;
    min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

export const Footer = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.primary};
    color: #fff;
    height: ${FOOTER_HEIGHT};

    > :last-child {
        cursor: pointer;
    }
`
export const LikeWrapper =  styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        pointer-events: none;
    }
`

export const Image = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 165px;
    border-radius: 4px;
    object-fit: scale-down;
`

export const PriceWrapper = styled.div`
    display:flex;
    align-items: flex-end;
    margin-bottom: 10px;
`
export const PriceRegular = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${colors.primary};
`
export const PriceRegularWhenDiscounted = styled.div`
    text-decoration: line-through;
    color: #999;
    font-size: 15px; 
`

export const PriceDiscounted = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${colors.primary};
`

export const Title = styled.h3`
    margin-bottom: 5px;
`

export const Desc = styled.div`
    margin-bottom: 10px;
`