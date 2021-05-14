// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyledName, ApiData, CharacterData, ChildDiv, OutterContainer } from './styles';


export default function Characters ( props ) {
  const { characters } = props;
  const [ showCharacter, toggleshowCharacter ] = useState( false );



  const Setup = ( props ) => (
    <OutterContainer>
      <StyledName onClick={ () => toggleshowCharacter( !showCharacter ) }>{ props.info.name }</StyledName>
      {showCharacter &&
        <CharacterData >
          <ChildDiv>
            <ApiData>Height: { props.info.height }<br /></ApiData>
            <ApiData>Hair Color: { props.info[ 'hair_color' ] }<br /></ApiData>
            <ApiData>Skin Color: { props.info[ 'skin_color' ] }<br /></ApiData>
            <ApiData>Mass: { props.info[ 'mass' ] }kg<br /></ApiData>
            <ApiData>Birth year: { props.info[ 'birth_year' ] }<br /></ApiData>
            <ApiData>Gender: { props.info[ 'gender' ] }kg<br /></ApiData>
            <ApiData>Eye color: { props.info[ 'eye_color' ] }<br /></ApiData>
          </ChildDiv>
        </CharacterData>
      }
    </OutterContainer>
  );

  return (
    <div>
      {
        characters.map( ( character, idx ) => {
          return <Setup key={ idx } info={ character } />
        } )
      }
    </div>
  );
}
