import React from 'react';
import auth from '../Auth/auth';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppContext from "../../context/app.context";
import { withRouter } from 'react-router';

class Login extends React.Component{
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.auth = auth;
  }

  /**
   * This function is handler of onChangeEmail, this will set current email field value to state
   * @returns void
   */
  onChangeEmail(event) {
    this.setState({email: event.currentTarget.value});
  }

  /**
   * This function is handler of onChangePassword, this will save current password to state
   * @returns void
   */
  onChangePassword(event) {
    this.setState({password: event.currentTarget.value});
  }

  /**
   * This function is handler of onClickLogin
   * @returns void
   */
  onClickLogin(event) {
    this.context.setLoggedInUserEmail(this.state.email);
    this.auth.tokenData = this.state.email;
    this.props.history.push('/');
  }

  render() {
    return (
      <Card className="login-card">
        <CardContent>
          <Typography variant="h5" component="h2">
            Enter Email:
          </Typography>
          <TextField
            className=""
            value={this.state.email}
            onChange={this.onChangeEmail.bind(this)}
            margin="normal"
          />


          <Typography variant="h5" component="h2">
            Enter Password:
          </Typography>
          <TextField
            className=""
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword.bind(this)}
            margin="normal"
          />

        </CardContent>

        <CardActions>
          <Button color="primary" onClick={this.onClickLogin.bind(this)} size="medium">Login</Button>
        </CardActions>

      </Card>
    );

  }
};
export default withRouter(Login)
Login.contextType = AppContext