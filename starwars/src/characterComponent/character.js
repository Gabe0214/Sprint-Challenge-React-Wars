import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


`;

const ItemContainer = styled.div`
max-width: 100%;
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
box-shadow: 0 0 10px black;
padding: 1rem 2.2rem;
margin-bottom: 2rem;

`

const CharacterCard = props => {

    return (
     <div>   
    <Wrapper>
        <ItemContainer>
        <h2>Name: {props.name}</h2>
        <p>Mass: {props.mass}</p>
        <p>Height: {props.height}</p>
        <p>Birth Year: {props.birth_year}</p>
        </ItemContainer>
    </Wrapper>
    </div>
    ) 
}

export default CharacterCard 