import React, { Component } from "react";
import AppContext from "../context/app.context";

class AppProvider extends Component {
  // this the GLOBAL APPLICATION STATE
  // use this UUID for demo: cb7a56d9-ba48-4a68-a93d-7fccccad67bf
  state = {
    tokens: {},
    setTokens: tokens_data => {
      this.setState({ tokens: tokens_data });
    },
    loggedInUserEmail: "",
    setLoggedInUserEmail: email_address => {
      this.setState({ loggedInUserEmail: email_address });
    },
    registeredUsers:[{
      emailAddress: "aaa@aa.com",
      fbProfile: "FBprofile1",
      firstName: "fname1",
      gender: "male",
      instagramProfile: "InstaProfil1",
      lastName: "lname1",
      middleName: "mname1",
      twitterProfile: "TwiProfile1"
    },{
      emailAddress: "bbb@bb.com",
      fbProfile: "FBprofile2",
      firstName: "fname2",
      gender: "female",
      instagramProfile: "InstaProfi2l",
      lastName: "lname2",
      middleName: "mname2",
      twitterProfile: "TwiProfile2"
    }],
    setRegisteredUsers: userObj => {
      const currentRegisterUserDict = this.state.registeredUsers;
      currentRegisterUserDict.push(userObj);
      this.setState({ registeredUsers: currentRegisterUserDict });
    },
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
