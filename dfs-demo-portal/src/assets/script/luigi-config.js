loadLuigi = () => {
  Luigi.setConfig({
    navigation: {
      nodes: [
        {
          pathSegment: 'portal',
          hideFromNav: true,
          children: [
            {
              pathSegment: 'auth',
              viewUrl: "login",
              hideSideNav: true,
              loadingIndicator: {
                enabled: false,
              },
            }
          ]
        }
      ]
    },
    communication: {
      customMessagesListeners: {
        overview: () => {

          loadLuigiPostLogin();
        }
      }
    },
    routing: {
      useHashRouting: true,
    },
    settings: {
      hideNavigation: true,
    },
  });
}

function showProgress(flag) {
  console.log(Luigi.getConfig());

  if (flag) {
    return "my logo";

  }

}

loadLuigiPostLogin = () => {
  console.log('post login processing...')

  Luigi.setConfig({
    navigation: {
      //addNavHrefs: true,
      nodes: nodes(),
      productSwitcher: productSwitcher(),
      appSwitcher: packagingJS(),
      contextSwitcher : {
        defaultLabel : 'Environment',
        parentNodePath: '/env',
        options : [
          {label : 'Development' ,"pathValue" : "/dev" },
          {label : 'Integration' ,"pathValue" : "/int"},
          {label : 'User Acceptance' ,"pathValue" : "/pre-prod"},

        ]
      },
      profile : {
        logout : {
          customLogoutFn : logoff
        }
      }

    },
    routing: {
      useHashRouting: true
    },
    settings: {
      header: {title: 'Packaging Framework'},
      hideNavigation: false,
      sideNavFooterText: 'Red Board© 2021-22',
      sideNavCompactMode: false,
      responsiveNavigation: 'semiCollapsible',
      profileType: 'Fiori3',
    },
  })
  console.log(Luigi.getConfigBooleanValue('navigation.addNavHrefs'))
  // Luigi.getConfig().navigation.appSwitcherItems = apps();
}

logoff = () => {
   loadLuigi();
  //Luigi.navigation().navigate('/overview/signin')
  //Luigi.navigation().openAsModal('/overview/signin', {title:'Users'});
}


function nodes() {
  return [
    {
      pathSegment: 'overview',
      label: 'Top Navigation',
      viewUrl: '/secure/dashboard',
      children: [
        {
          pathSegment: 'dashboard',
          label: 'Dashboard',
          link: '/secure/dashboard',
          hideFromNav: 'true'
        },
        {
          pathSegment: 'angular',
          label: 'Angular',
          viewUrl: 'https://angular.io/',
          category: {
            label: "Test Zone",
            icon: "customize",
            collapsible: true,
          },
          loadingIndicator: {
            enabled: false,
          }
        },
        {
          pathSegment: 'svelte',
          label: 'Svelte',
          viewUrl: 'https://svelte.dev/',
          category: {
            label: "Test Zone",
          },
          loadingIndicator: {
            enabled: false,
          }
        },
        {
          pathSegment: 'react',
          label: 'React',
          viewUrl: 'https://reactjs.org/',
          category: {
            label: "Test Zone",
          },
          loadingIndicator: {
            enabled: false,
          }
        },
        {
          pathSegment: 'vue',
          label: 'Vue',
          viewUrl: 'https://vuejs.org/',
          category: {
            label: "Test Zone",
          },
          loadingIndicator: {
            enabled: false,
          },
        },
        {
          pathSegment: 'vite',
          label: 'Vite',
          viewUrl: 'https://vitejs.dev/',
          hideFromNav: true,
          loadingIndicator: {
            enabled: false,
          },
        },
        {
          pathSegment: 'parcel',
          label: 'Parcel',
          viewUrl: 'https://parceljs.org/',
          hideFromNav: true,
          loadingIndicator: {
            enabled: false,
          },
        },
        {
          pathSegment: 'signin',
          viewUrl: "login",
          hideSideNav: false,
          hideFromNav: false,
          loadingIndicator: {
            enabled: false,
          },
        }
      ]
    }
  ]
}


function productSwitcher() {
  return {
    label: 'Legacy Projects-1',
    items: [
      {
        icon: "https://svelte.technology/favicon.ico",
        label: "Svelte",
        externalLink: {
          url: "https://svelte.technology",
          sameWindow: false
        }
      }
    ]
  }
}

function packagingJS() {
  return {
    showMainAppEntry: true,
    items: [
      {
        title: 'Vite Js',
        subTitle: 'Next Generation Frontend Tooling',
        link: '/overview/vite'
      },
      {
        title: 'Parcel JS',
        subTitle: 'Blazing fast, zero configuration web application bundler',
        link: '/overview/parcel'
      }

    ]
  }
}
