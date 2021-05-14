// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyledName, ApiData, CharacterData, ChildDiv, OutterContainer } from './styles';


export default function Characters ( props ) {
  const { characters } = props;
  const [ display, toggleDisplay ] = useState( false );



  const Setup = ( props ) => (
    <OutterContainer>
      <StyledName onClick={ () => toggleDisplay( !display ) }>{ props.info.name }</StyledName>
      {display &&
        <CharacterData >
          <ChildDiv>
            <ApiData>Height: { props.info.height }<br /></ApiData>
            <ApiData>Hair Color: { props.info[ 'hair_color' ] }<br /></ApiData>
            <ApiData>Skin Color: { props.info[ 'skin_color' ] }<br /></ApiData>
          </ChildDiv>
        </CharacterData>
      }
    </OutterContainer>
  );

  return (
    <div>
      {
        characters.map( ( character, i ) => {
          return <Setup key={ i } info={ character } />
        } )
      }
    </div>
  );
}
