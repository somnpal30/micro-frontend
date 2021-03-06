// import { i18nProvider } from './I18nProvider';


class LuigiConfig {
  data;

  constructor() {
    this.data = {
      "navigation": {
        "nodes": [
          {
            "pathSegment": "home",
            "hideFromNav": true,
            "children": [
              {
                "pathSegment": "overview",
                "label": "Overview",
                "icon": "home",
                "viewUrl": "http://localhost:4300/user/approval",
                "loadingIndicator": {
                  "enabled": false
                },
                "context": {
                  "title": "Welcome to Luigi Fiddle!",
                  "content": "Click on \"Modify Config\" at the bottom right and play around with your Luigi configuration"
                }
              },
              {
                "pathSegment": "user",
                "label": "My Approval",
                "icon": "person-placeholder",
                "category": {
                  "label": "User Management",
                  "icon": "customer",
                  "collapsible": true
                },
                "context": {
                  "title": "Welcome to Luigi POC By Somnath !",
                  "content": "Dummy Content"
                },
                "loadingIndicator": {
                  "enabled": false
                },
                "viewUrl": "http://localhost:4300/user/approval"
              },
              {
                "pathSegment": "user",
                "label": "My User",
                "icon": "customer",
                "category": {
                  "label": "User Management",
                  "icon": "person-placeholder",
                  "collapsible": true
                },
                "context": {
                  "title": "Welcome to Luigi POC By Somnath !",
                  "content": "Dummy Content"
                },
                "loadingIndicator": {
                  "enabled": false
                },
                "viewUrl": "http://localhost:4300/user/myusers"
              }

            ]
          }
        ]
      },
      "routing": {
        "useHashRouting": true
      },
      "settings": {
        "responsiveNavigation": "semiCollapsible",
        // "customTranslationImplementation": i18nProvider,
        "header": {
          "title": "Hello Universe ",
          "logo": "https://fiddle.luigi-project.io/img/luigi.png"
        }
      }
    }

  }
}
