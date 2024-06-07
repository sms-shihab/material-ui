import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectContent() {
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Box sx={{ width: '215px' }}>
      <FormControl fullWidth size="small">
        <Select
          labelId="company-select"
          id="company-simple-select"
          value={company}
          variant="filled"
          label="Company"
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select company' }}
        >
          <MenuItem value="">Sitemark-web</MenuItem>
          <MenuItem value={10}>Sitemark-App</MenuItem>
          <MenuItem value={20}>Production</MenuItem>
          <MenuItem value={30}>Development</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
