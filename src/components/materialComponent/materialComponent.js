import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     margin: 2,
//   },
//   noLabel: {
//     marginTop: theme.spacing(3),
//   },
}));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MaterialComponent() {
  const classes = useStyles();
  const theme = useTheme();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      console.log(event.target.value)
    setAge(event.target.value);
  };

  const [personName, setPersonName] = React.useState('');

 const handleName = () =>{
      setPersonName('Niharika')
 }
  
  return (
    <div className={classes.root}>
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" data-testid="labelAge">Age</InputLabel>
        <Select
          value={age}
          onChange={(e)=>handleChange(e)}
          inputProps={{
                  "data-testid": "select"
          }}                 >
            <MenuItem data-testid="option" value="">
              None
            </MenuItem>
            <MenuItem data-testid="option" value={10}>Ten</MenuItem>
            <MenuItem data-testid="option" value={20}>Twenty</MenuItem>
            <MenuItem data-testid="option" value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6" data-testid="age">{age}</Typography>
       
    </div>
  );
}

