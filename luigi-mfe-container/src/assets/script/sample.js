function loadLuigi(){
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'login',
          // label: 'User Last Login : ' + new Date().toLocaleString("en-CA", {timeZone: "IST"}),
          hideFromNav: false,
          children: [
            {
              pathSegment: 'auth',
              label: 'Overview',
              icon: 'bbyd-dashboard',
              viewUrl: "/login",
              hideSideNav: false,
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
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTAwNzUzMjEsImV4cCI6MTY0MTYxMTMyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IlN0ZXZlIiwiU3VybmFtZSI6IlJvZ2VyIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.T2DjDlQLYNBac26WQfh7vtBkAax8RtQwkSG4VtXSjB0',
              accessTokenExpirationDate : new Date(),
              idToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTAwNzUzMjEsImV4cCI6MTY0MTYxMTMyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IlN0ZXZlIiwiU3VybmFtZSI6IlJvZ2VyIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.T2DjDlQLYNBac26WQfh7vtBkAax8RtQwkSG4VtXSjB0',
              scope: 'email profile'
            }
          );

          Luigi.auth().store.setNewlyAuthorized();
          Luigi.auth().login();
          loadLuigiPostLogin('Steve Roger','a@a.com')

        }
      }
    },
    auth : {
      storage: 'sessionStorage',
      disableAutoLogin: false,
      events: {
        onAuthSuccessful: (settings, authData) => { console.log(settings);},
        onAuthError: (settings, err) => {console.log("onAuthError")},
        onAuthExpired: (settings) => {},
        onLogout: (settings) => { console.log('logout event..')},
        onAuthExpireSoon: (settings) => {},
        onAuthConfigError: (settings, err) => { console.log('onAuthConfigError')}
      }
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

loadLuigiPostLogin = (name,email) => {
  console.log(Luigi.getConfig())
  Luigi.customMessages().sendToAll({
    id : 'token',
    dataField1: 'xxx'
  });
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
              },
              context: {
                title: 'Welcome to Luigi POC!',
                content: 'Play around with your Luigi configuration Here'
              }
            },
            {
              "pathSegment": "channel",
              "label": "Add Channel User",
              "category": {
                "label": "Channel User Management",
                "icon": "account",
                "collapsible": true
              },
              "loadingIndicator": {
                "enabled": false
              },
              "viewUrl": "http://localhost:8080/CoreWeb/channel/add1_addChannelUser.action"
            },
            {
              "pathSegment": "preference",
              "label": "System Preference",
              "category": {
                "label": "Preference",
                "icon": "customize",
                "collapsible": true
              },
              "loadingIndicator": {
                "enabled": false
              },
              "viewUrl": "main"
            },
            {
              "pathSegment": "stock",
              "label": "Stock Initiate",
              "category": {
                "label": "Stock Management",
                "icon": "product",
                "collapsible": true
              },
              "loadingIndicator": {
                "enabled": false
              },
              "viewUrl": "http://localhost:8080/CoreWeb/stock/stockInit_input.action"
            }
          ]
        }
      ],

    profile: {
        logout: {
          label: 'Logout',
          customLogoutFn: () => {
            console.log('logout >>>' + Luigi.auth().isAuthorizationEnabled());
            //Luigi.auth().logout();
          }
        },
        staticUserInfoFn: () => {
          return {"name" : name,"email" : email,"picture" : "/assets/image/ca.jpg"};
        }
      }
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
