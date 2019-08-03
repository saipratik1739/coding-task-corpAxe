class Auth {
  constructor () {
    this.tokenData = null;
    this.routerHistory = null;
  }

  login() {
    window.location = window.location.origin + '/login';
  }

  logout() {
    console.log("login");
  }

  isAuthenticated() {
    return this.tokenData ? true : false;
  }
}

export default new Auth();
