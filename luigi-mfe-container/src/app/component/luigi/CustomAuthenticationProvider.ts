export class CustomAuthenticationProvider {

  settings;

  constructor(configSettings = {}) {

    const defaultSettings = {
      authorizeUrl: '/auth/idpmock/implicit.html',
      redirect_uri: window.location.origin + '/custom-auth-callback.html',
    };
    this.settings = Object.assign({}, defaultSettings, configSettings);
  }

  login() {
    console.log("xxxx")
  }

  logout(authData, logoutLuigiCore) {
    // call logoutLuigiCore() to reset stored data in Luigi Core
    // logic to handle the logout mechanism
  }

  setTokenExpirationAction() {
  }

  setTokenExpireSoonAction() {
  }

  generateNonce() {
    // returns a string
  }

  userInfo() {
    let data = {name: 'somnath', email: 'a@a.com', picture: 'mypicture.jpg'};
    // logic to get some user information
    // returns a promise of a userinfo object which contains an object with `name`, `email` and `picture` properties to display in the profile dropdown menu
    return new Promise(resolve => {
      console.log(data);
      resolve(data);
    });
  }

  unload() {
    // logic that is called if you use Luigi.unload() in order to remove event listeners and intervals.
  }
}
