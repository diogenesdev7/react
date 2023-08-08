import styled from 'styled-components'

export const Container = styled.div `
    h1 {
        margin: 3rem 0;
        font-size: 2.5rem;
    }

    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6rem;
        padding-top: 2rem;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 50%;
    }

    p {
        font-size: 1.4rem;
        line-height: 1.7rem;
    }

    p.release {
        margin-top: 1rem;
        font-size: 1.2rem;
    }

    button {
        background-color: #6654da;
        border: none;
        border-radius: 1rem;
        color: white;
        padding: .8rem 2rem;
        cursor: pointer;
        text-transform: uppercase;
        transition: all .3s;
        margin-top: 1rem;
        font-size: 1rem;
    }

    button:hover {
        background-color: color-mix(in srgb, #6654da, black 30%);
    }



    @media screen and (max-width: 768px) {
        .movie {
            flex-direction: column;
            padding: 0 1.5rem;
            padding-bottom: 3rem;
        }

        img {
            margin-bottom: -6rem;
        }

        .details {
            max-width: 100%;
            text-align: justify;
        }

        button {
            justify-self: center;
        }
    }

`