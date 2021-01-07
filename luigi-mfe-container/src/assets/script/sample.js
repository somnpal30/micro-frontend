loadLuigi = () => {
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'login',
          // label: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
          hideFromNav: true,
          children: [
            {
              pathSegment: 'auth',
              label: 'Overview',
              icon: 'bbyd-dashboard',
              viewUrl: "/login",
              hideSideNav: true,
              loadingIndicator: {
                enabled: false
              }
            }
          ]
        }
      ]
    },
    communication: {
      customMessagesListeners: {
        'overview': () => {
          Luigi.auth().store.setAuthData(
            {
              accessToken: 'xxxxxxxxx',
              accessTokenExpirationDate : new Date(),
              idToken: 'YYYYY',
              scope: 'email profile'
            }
          );
          Luigi.auth().store.setNewlyAuthorized();
          loadLuigiPostLogin()

        }
      }
    },
    auth : {
      storage: 'sessionStorage',
      disableAutoLogin: true,
      /*use: 'custAuthProvider',
      custAuthProvider: {

      }*/
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true
    },
    settings: {
      hideNavigation: true,
      /*header: {
        title: 'Luigi JavaScript',
      },*/

    }
  });

}

loadLuigiPostLogin = () => {
  console.log(Luigi.getConfig())
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'home',
          label: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
          hideFromNav: false,
          children: [
            {
              pathSegment: 'overview',
              label: 'Overview',
              icon: 'bbyd-dashboard',
              viewUrl: "/overview",
              loadingIndicator: {
                enabled: false
              }
            }
          ]
        }
      ],

  /*    profile: {
        logout: {
          label: 'Logout',
          customLogoutFn: () => {
            console.log('logout >>>');
          }
        },
        staticUserInfoFn: () => {
          return {"name" : "Steve Roger","email" : "somnath.pal1@gmail.com","picture" : "/assets/image/ca.jpg"};
        }
      }*/
    },
    routing: {
      /**
       * Development:
       * For path routing, set to false
       * For hash routing, set to true
       */
      useHashRouting: true
    },
    settings: {
      header: {
        //title: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
        logo: '/assets/image/logo.png',
        //favicon: '/favicon.ico'
      },

    }
  });
}
