import React from "react";
import {Button, Grid, Link, Paper, TextField, Typography,} from "@material-ui/core";
import {useDispatch} from 'react-redux'
import {performAuth} from "../redux/reducers/authSlice";
import {useHistory} from 'react-router-dom';

export function LoginForm() {
    const history = useHistory();
    // const count = useSelector(selectiIsAuth);
    const dispatch = useDispatch();
    return <div>
        <Grid container spacing={0} justify="center" direction="row">
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className="login-form"
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background"
                    >
                        <Grid item>
                            <Typography component="h1" variant="h5">
                                Вход в мессенджер
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            onChange={(event) => {
                                            }
                                            }
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="password"
                                            placeholder="Пароль"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            //value={this.state.password}
                                            onChange={(event) => {
                                            }}
                                            required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block"
                                            onClick={(form) => {
                                                form.preventDefault();
                                                fetch(`http://localhost:3000/profile`)
                                                    .then(response => response.json())
                                                    .then(json => {
                                                        dispatch(performAuth({
                                                            isAuth: true,
                                                            authKey: "123123",
                                                            defaultLogin: ""
                                                        }));
                                                        history.push("/main")
                                                    })
                                            }}
                                                >
                                                Войти
                                                </Button>
                                                </Grid>
                                                </Grid>
                                                </form>
                                                </Grid>
                                                <Grid item>
                                                <Link href="#" variant="body2">
                                                Забыли пароль?
                                                </Link>
                                                </Grid>
                                                </Paper>
                                                </Grid>
                                                </Grid>
                                                </Grid>
                                                </div>
}