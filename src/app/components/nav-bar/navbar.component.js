import React, { Component } from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import AppContext from "../../context/app.context";
import appLogo from '../../../../src/logo.svg';
import auth from '../Auth/auth';
import { withRouter } from 'react-router';

const styles = {
  logo: {
    width: 175,
    height: 38
  },
  grid: {
    height: "inherit"
  },
  welcomeMsg: {
    fontSize: "1.25rem"
  }
};



class NavbarComponent extends Component {
  static contextType = AppContext;
  constructor () {
    super();
    this.state = {
      pageTitle: '',
      showNavbar: true
    };
    this.authService = auth;
  }

  onClickLogout(event) {
      this.authService.tokenData = null;
      this.authService.login();
  }
  
  onClickAdmin(event) {
    this.props.history.push('/admin');
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        {this.state.showNavbar ? (
          <>
            <AppBar>
              <Toolbar>
                <Grid
                  container
                  justify="space-between"
                  alignContent="center"
                >
                  <Grid item>
                    <img
                      alt="United Health Care Logo"
                      className={classes.logo}
                      src={appLogo}
                    />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.welcomeMsg} inline variant="subtitle2">
                      {this.context.loggedInUserEmail}
                    </Typography>
                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      onClick={this.onClickLogout.bind(this)}
                    >
                      Logout
                    </Button>

                    <Button
                      variant="text"
                      size="large"
                      color="primary"
                      onClick={this.onClickAdmin.bind(this)}
                    >
                      Admin
                    </Button>


                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </>
        ) : (
            <div />
          )}
      </>
    );
  }
}
// export default withRouter(Login)
// export default withStyles withRouter(styles)(NavbarComponent);

export default withRouter((withStyles(styles)(NavbarComponent)))
NavbarComponent.contextType = AppContext
