import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";
import axiosService from "../../network/axiosMethod";
import Alert from "@mui/material/Alert";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isToast, setIsToast] = useState(false);
  const onLogin = (event) => {
    event.preventDefault();
    const userForm = {
      email: userName,
      password: password,
    };
    axiosService.post(`auth/login`, userForm).then((res) => {
      console.log(res.data);
    }).catch((e)=>{
      throw(e)
    });
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {isToast && (
        <div style={{position:'absolute', top:'10px', right:'10px'}}>
          <Alert severity="success" color="info">
            This is a success alert — check it out!
          </Alert>
        </div>
      )}

      <h1>LOGIN</h1>
      <div className="App">
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
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
                    <Button type="submit" variant="outlined" onClick={onLogin}>
                      Submit
                    </Button>
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
