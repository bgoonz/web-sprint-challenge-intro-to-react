// Write your Character component here
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles( ( theme ) => ( {
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing( 4 ),
  },
} ) );



// name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold",

const Character = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { character } = props;
  const classes = useStyles();
  const [ open, setOpen ] = React.useState( false );

  const handleClick = () => {
    setOpen( !open );
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={ classes.root }
      style={ { minWidth: '50vh' } }
    >
      <ListItem button onClick={ handleClick }>
        <ListItemText primary={ character.name } />
        { open ? <ExpandLess /> : <ExpandMore /> }
      </ListItem>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Gender: " + character.gender } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Height: " + character.height } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Mass: " + character.mass } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Birth Year: " + character.birth_year } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Eye Color: " + character.eye_color } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Hair Color: " + character.hair_color } />
          </ListItem>
          <ListItem button className={ classes.nested }>
            <ListItemText primary={ "Skin Color: " + character.skin_color } />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};


export default Character;
