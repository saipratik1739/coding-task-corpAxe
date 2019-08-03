import React from 'react';
import Button from '@material-ui/core/Button';
import AppContext from "../../context/app.context";
import { withRouter } from 'react-router';

class AdminComponent extends React.Component{
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
        currentUserData: null
    };
  }

  componentDidMount() {
    this.setState({currentUserData: this.context.registeredUsers});
  }

  /**
   * This function is handler of onClickBackToRegister, this will redirect back to register page
   * @returns void
   */
  onClickBackToRegister() {
    this.props.history.push('/');
  }

  render() {
    return (
        <div>
          <div>
              <Button
                      variant="text"
                      size="large"
                      color="primary"
                      onClick={this.onClickBackToRegister.bind(this)}
                    >
                      Back To Register
              </Button>
          </div>
            {this.state.currentUserData && this.state.currentUserData.length > 0 ? 
                <div> 
                    {this.state.currentUserData.map(option => (
                        <div key={option.firstName} className="mrgnTp20">
                            <span>First Name : </span> <span>{option.firstName} </span>
                            <div> <span>Last Name : </span> <span>{option.lastName} </span> </div>
                            <div><span>Middle Name : </span> <span>{option.middleName} </span> </div>
                            <div><span>Email Address : </span> <span>{option.firstName} </span> </div>
                            <div><span>Gender : </span> <span>{option.gender} </span> </div>
                            <div><span>FB Profile : </span> <span>{option.fbProfile} </span> </div>
                            <div><span>Instagram Profile : </span> <span>{option.instagramProfile} </span> </div>
                            <div><span>Twitter Profile : </span> <span>{option.twitterProfile} </span> </div>
                        </div>
           
                    ))}
                </div>
            : <div> No Data available to display </div>
            }
        </div>
    );

  }
};
export default withRouter(AdminComponent)
AdminComponent.contextType = AppContext