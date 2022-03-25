
import React from 'react';
import styled from 'styled-components';
 
 
const StyledCharacter = styled.div`
    background-color: #FAEBD7;
    font-size: 17px;
    padding: 5%;
    border-style: solid;
    border-color: solid red;
`
// Write your Character component here
 
 
export default function Character(props){
    return (
        <StyledCharacter className='character-container'>
            {props.info.name} {props.info.birth_year}
        </StyledCharacter>
    )
};
