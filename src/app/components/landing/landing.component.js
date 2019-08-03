import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/styles';
import AppContext from "../../context/app.context";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  root: {
    width: '100%',
  },
  heading: {
    fontSize: "16px",
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: "13px"
  },
  panelContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3% !important"
  },
  floatRight: {
    float: 'right'
  },
  registerBtnContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3% !important",
    marginBottom: "20%"
  }
};


class LandingComponent extends Component {
  static contextType = AppContext;
  constructor () {
    super();
    this.state = {
      isPanelOneExpanded: true,
      isPanelTwoExpanded: true,
      fbProfile: "",
      instagramProfile: "",
      twitterProfile: "",
      firstName: "",
      lastName: "",
      middleName: "",
      emailAddress: "",
      gender: ""
    };
    this.genderDS = [{
      value: 'male',
      label: 'Male',
    },  
    {
      value: 'female',
      label: 'Female',
    }];
  }

  /**
   * This function is handler of onChangePanelToggle, 
   * this will toggle the panel
   * @returns void
   */
  onChangePanelToggle(panelName, event) {
   if (panelName === 'one') {
      this.setState({isPanelOneExpanded: !this.state.isPanelOneExpanded});
   } else {
      this.setState({isPanelTwoExpanded: !this.state.isPanelTwoExpanded});
   }
  }

  /**
   * This function is handler of onClickRegister, 
   * this will collect all the register data from state and send it to appContext
   * @returns void
   */
  onClickRegister() {
    const obj = {
      fbProfile: this.state.fbProfile,
      instagramProfile: this.state.instagramProfile,
      twitterProfile: this.state.twitterProfile,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      emailAddress: this.state.emailAddress,
      gender: this.state.gender
    }
    this.context.setRegisteredUsers(obj);
  }

  /**
   * This function is handler of onChangeSocialInformation, 
   * this will social information to state
   * @returns void
   */
  onChangeSocialInformation(fieldName, event) {
    if (fieldName === 'fbProfile') {
      this.setState({fbProfile: event.currentTarget.value});
    } else if (fieldName === 'twitterProfile') {
      this.setState({twitterProfile: event.currentTarget.value});
    } else {
      this.setState({instagramProfile: event.currentTarget.value});
    }
  }

  /**
   * This function is handler of onChangePersonalInformation, 
   * this will save personal information data to state
   * @returns void
   */
  onChangePersonalInformation(fieldName, event) {
    const currentVal =  event.currentTarget.value;
    switch(fieldName) {
      case "firstName": 
        this.setState({firstName: currentVal});
      break;

      case "lastName": 
        this.setState({lastName: currentVal});
      break;

      case "middleName": 
        this.setState({middleName: currentVal});
      break;

      case "emailAddress": 
        this.setState({emailAddress: currentVal});
      break;
      
      default:
    }
    
  }

  componentDidMount() {
    this.setState({emailAddress: this.context.loggedInUserEmail});
  }

  /**
   * This function is handler of onChangeGenderDropdown, this will set user selected dropdown value to state
   * @returns void
   */
  onChangeGenderDropdown(event) {
    this.genderDS.forEach(element => {
        if (element && element.value === event.target.value) {
          this.setState({gender: element.value});
        }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <ExpansionPanel className={classes.panelContainer} expanded={this.state.isPanelOneExpanded} onChange={this.onChangePanelToggle.bind(this, 'two')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
            <Typography className={classes.heading}>Personal Information</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <TextField value={this.state.firstName} placeholder="Enter First Name" className="" margin="normal" onChange={this.onChangePersonalInformation.bind(this, 'firstName')}/>
                    <TextField value={this.state.lastName} placeholder="Enter Last Name" className="" margin="normal" onChange={this.onChangePersonalInformation.bind(this, 'lastName')}/>
                    <TextField value={this.state.middleName} placeholder="Enter Middle Name" className="" margin="normal" onChange={this.onChangePersonalInformation.bind(this, 'middleName')}/>
                    <TextField value={this.state.emailAddress} placeholder="Enter EmailAddress" className="" margin="normal" onChange={this.onChangePersonalInformation.bind(this, 'emailAddress')}/>
                    <TextField
                      id="standard-select-currency"
                      select
                      className={classes.textField}
                      value={this.state.gender}
                      onChange={this.onChangeGenderDropdown.bind(this)}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      helperText="Please select a Gender"
                      margin="normal"
                    >
                      {this.genderDS.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>

      <ExpansionPanel className={classes.panelContainer} expanded={this.state.isPanelTwoExpanded} onChange={this.onChangePanelToggle.bind(this, 'two')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <Typography className={classes.heading}>Social Information</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <TextField value={this.state.fbProfile} placeholder="Enter Facebook Profile" className="" margin="normal" onChange={this.onChangeSocialInformation.bind(this, 'fbProfile')}/>
                <TextField value={this.state.instagramProfile} placeholder="Enter Instagram Profile" className="" margin="normal" onChange={this.onChangeSocialInformation.bind(this, 'instagramProfile')}/>
                <TextField value={this.state.twitterProfile} placeholder="Enter Twitter Profile" className="" margin="normal" onChange={this.onChangeSocialInformation.bind(this, 'twitterProfile')}/>
              </Grid>
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <Card className={classes.registerBtnContainer}>
        <CardActions className={classes.floatRight}>
          <Button color="primary" onClick={this.onClickRegister.bind(this)} size="medium">Register</Button>
        </CardActions>
      </Card>

      
    </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
