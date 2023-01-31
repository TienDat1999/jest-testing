
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const onLogin = (event) => {
    event.preventDefault()
    console.log('userName', userName);
    console.log('password', password);
  }
  
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <div className="App">
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
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
                    placeholder="Enter Password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    value={password}
                    onChange={onPasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                <Button type='submit' variant="outlined" onClick={onLogin}>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </div>
  );
}
