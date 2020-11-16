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
        "title": "Hello Universe ",
        "logo": "https://fiddle.luigi-project.io/img/luigi.png"
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
            console.log(node.label);
            this.defaultLabel = node.label;
            Luigi.i18n().setCurrentLocale("en");
          }
        },
        {
          label : 'German',
          link : '/de' ,
          category: "de",
          position : 'bottom',
          clickHandler : node=> {
            console.log(node.label);
            this.defaultLabel = node.label;
            Luigi.i18n().setCurrentLocale("de");
          }
        }
      ]
    }
  }



}
