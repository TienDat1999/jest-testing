// import Link from 'next/link'
import React, { useState } from 'react'
import Link from 'next/link'
// import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid } from '@mui/material'

const Human = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const heroes = [
    {
      name: 'Anh',
      id: 'sdfsetdxrgdfgdfg',
    },
    {
      name: 'Duc',
      id: 'sdfetngbjhgbsdhfbjkg',
    },
    {
      name: 'Ls',
      id: 'jsdnfsbef',
    },
    {
      name: 'Kric',
      id: 'sfeudsfser',
    },
    {
      name: 'OnlyC',
      id: 'gsdsefefdfsdf',
    },
    {
      name: 'Tran Duc Bo',
      id: 'endfbsdfbbf',
    },
    {
      name: 'Ha',
      id: 'eknfjgfng',
    },
    {
      name: 'Nam',
      id: 'jkdsfs2384284uhdush7823',
    },
    {
      name: 'Nhan',
      id: 'dmfjsdbfhsbd4838usdjfnhdh847',
    },
  ]
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const onFormSubmit = () => {

  }

  return (
    <div>
      <h1>Human list</h1>
      {heroes.map((item, index) => (
        <div key={index}>
          <Link href={`human/${item.id}`}>{item.name}</Link>
        </div>
      ))}

      <Button variant="outlined" onClick={handleClickOpen}>
        Open Model
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  placeholder="user name"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={userName}
                  onChange={onUserNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputProps={{ "data-testid": "password-field-id-12" }}
                  placeholder="Enter Password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={onPasswordChange}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Human
