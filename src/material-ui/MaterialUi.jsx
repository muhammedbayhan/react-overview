import {
  Autocomplete,
  Button,
  TextField,
  ButtonGroup,
  Checkbox,
  Fab,
  Radio,
  RadioGroup,
  FormControlLabel,
  Rating,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const MaterialUi = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];

  return (
    <div>
      <h1>Auto Complete </h1>
      <Autocomplete
        disablePortal
        options={top100Films}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Movie" margin="normal" />
        )}
      />
      <hr />

      <h1>Button</h1>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button size="large" variant="contained" color="secondary">
        Secondary
      </Button>
      <hr />

      <h1>Button Group</h1>
      <ButtonGroup
        variant="text"
        orientation="horizontal"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Twos</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <hr />

      <h1>Checkbox</h1>
      <Checkbox onChange={(e) => console.log(e.target.checked)} />

      <h1>Floating Action Button</h1>
      <Fab color="primary" aria-label="add">
        <FavoriteIcon />
      </Fab>
      <hr />

      <h1>Radio group</h1>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <hr />
      <h1>Rating</h1>
      <Rating
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <hr />
      <h1>Select</h1>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        defaultValue={10}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default MaterialUi;
