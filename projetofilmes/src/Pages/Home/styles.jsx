import styled from 'styled-components'

export const Container = styled.div `
    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
    }
`

export const MovieList = styled.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`


export const Movie = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 11rem;
        height: 240px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0px 0px 5px rgba(255,255,255,.05)
    }

    span {
        font-weight: bold;
        font-size: max(1rem, 2.1vw);
        text-align: center;
        color: #fd7
    }

    a {
        transition: .3s;
    }

    a:hover {
        transform: scale(1.1)
    }

`

