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
      ],
      profile: {
        logout: {
          label: 'Logout',
          //customLogoutFn: 'myLogoutFn'
        }
      }
    },
    communication: {
      customMessagesListeners: {
        'overview': () => {
          loadLuigiPostLogin()
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
      profile: {
        logout: {
          label: 'Logout',
          customLogoutFn: 'myLogoutFn'
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
