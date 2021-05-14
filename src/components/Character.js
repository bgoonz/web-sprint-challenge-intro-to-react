// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyledName, StyledData, DataDiv, ChildDiv, OutterContainer } from './styles';


export default function Characters ( props ) {
  const { characters } = props;
  const [ display, toggleDisplay ] = useState( false );


  const Setup = ( props ) => (
    <OutterContainer>
      <StyledName onClick={ () => toggleDisplay( !display ) }>{ props.info.name }</StyledName>
      {display &&
        <DataDiv >
          <ChildDiv>
            <StyledData>Height: { props.info.height }<br /></StyledData>
            <StyledData>Hair Color: { props.info[ 'hair_color' ] }<br /></StyledData>
            <StyledData>Skin Color: { props.info[ 'skin_color' ] }<br /></StyledData>
          </ChildDiv>
        </DataDiv>
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
