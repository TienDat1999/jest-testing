import {
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useState } from 'react'

const currencies = [
  {
    value: 'a',
    label: 'reddy',
  },
  {
    value: 'b',
    label: 'prasanth',
  },
  {
    value: 'c',
    label: 'setti',
  },
]
const steps = ['0%', '', '', '50', '', '', '100%']

export default function App() {
  const [currency, setCurrency] = useState('')

  const handleChange = (event: any) => {
    setCurrency(event.target.value)
  }
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        {/* <AppBar>
          <h1>SIGNIN FORM </h1>
        </AppBar> */}

        <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
        <form>
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="text"
            label="setgoal"
            variant="outlined2"
          />
          <TextField
            id="select name"
            select
            label=" catagory"
            value={currency}
            onChange={handleChange}
            helperText="Please select your category "
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="select name"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your diversity"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {
            <Box sx={{ width: '70%' }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          }

          <br />
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="text"
            label="Diversity catagory"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="text"
            label="goal stage"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="number"
            label="job id"
            variant="outlined"
          />
          <br />
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="text"
            label="job region"
            variant="outlined"
          />
          <br />
          <Button variant="contained" color="primary">
            save
          </Button>
        </form>
      </div>
    </Box>
  )
}
