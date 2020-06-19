import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft:20
  
  }
}));


const LanguageMenu = () => {
  const classes = useStyles();

  const [selection,setSelection] = useState(1)

  const handleChange = (event) => {
    //set selection to the value selected
    setSelection(event.target.value);

  }

return (

<div>

<FormControl className={classes.formControl}>
        <Select
          labelId="select-language"
          id="select-language"
          value={selection}
          onChange={handleChange}
        >
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Spanish</MenuItem>
          <MenuItem value={3}>French</MenuItem>
        </Select>
      </FormControl>

</div>

)
}

export default LanguageMenu;




  

