class ContextSwitcher {
  data;
  hook;
  settings;

  constructor(i18nProvider) {
    //console.log(i18nProvider)
    this.settings = {
      "responsiveNavigation": "semiCollapsible",
      "customTranslationImplementation" : i18nProvider,
      "header": {
        "logo": "/assets/image/luigi.png",
        "title" : "Demo Micro Frontend"
      }
    }


    this.hook = {
      luigiAfterInit: () => {
        i18nProvider.afterInit();
      }
    }

    this.data = {
      defaultLabel: 'language',
      parentNodePath: '/#',
      lazyloadOptions: false,
      fallbackLabelResolver:'de',
      options: [
        {
          label: '',
          pathValue: '',
        },

      ],

      alwaysShowDropdown: true,

      actions : [
        {
          label : 'English',
          link : '/en' ,
          category: "en",
          position : 'bottom',
          clickHandler : node=> {
            Luigi.i18n().setCurrentLocale("en");
            window.location.reload();
          }
        },
        {
          label : 'German',
          link : '/de' ,
          category: "de",
          position : 'bottom',
          clickHandler : node => {
            Luigi.i18n().setCurrentLocale("de");
            window.location.reload();
          }
        }
      ]
    }
  }



}
