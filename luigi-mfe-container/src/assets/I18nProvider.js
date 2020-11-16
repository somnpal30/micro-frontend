class I18nProvider {
  init() {
    // Could also be an Ajax based implementation.
    this.translationTable = {
      "en": {
        "language": "Change Language",
        "overview" : "Overview",
        "usermanagement" : "User Management"
      },
      "de": {
        "language": "Sprache ändern",
        "overview" : "Überblick",
        "usermanagement" : "Benutzerverwaltung"
      },
    };
    return Promise.resolve();
  }

  afterInit() {
    //console.log("test")
    this.currentLanguage = Luigi.i18n().getCurrentLocale();
    console.log(this.currentLanguage)
    Luigi.i18n().addCurrentLocaleChangeListener((locale) => {
      console.log(locale)
      this.currentLanguage = locale;

    });

  }

  // This function will be used by Luigi Core for translation
  getTranslation(key, interpolations = undefined, locale = undefined) {
    // console.log(key);
    if (!key) return '';
    this.currentLanguage = locale || this.currentLanguage || Luigi.i18n().getCurrentLocale();
    const result = this.findTranslation(
      key,
      this.translationTable[this.currentLanguage],
      interpolations
    );
    return result ? result : key;
  }

  /**
   * @private
   * Finds the translated value based on given key.
   * @param {string} key key to be translated
   * @param {*} obj translation table
   */
  findTranslation(key, obj, interpolations) {
    let splitted = key.split('.');
    for (let i = 0; i < splitted.length; i++) {
      let key = splitted[i];
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
        obj = obj[key];
      } else {
        if (interpolations)
          return this.findInterpolations(obj[key], interpolations);
        return obj[key];
      }
    }
  }

  /**
   * @private
   * Replaces values that are defiend in translation strings
   * @param {string} key key to be translated
   * @param {*} interpolations translation table
   * @example
   * findInterpolations('Environment {num}', {num: 1})
   */
  findInterpolations(value, interpolations) {
    console.log(value);
    Object.keys(interpolations).forEach(item => {
      value = value.replace(
        new RegExp('{' + EscapingHelpers.escapeKeyForRegexp(item) + '}', 'gi'),
        interpolations[item]
      );
    });
    return value;
  }
}

// export const i18nProvider = new I18nProvider();
