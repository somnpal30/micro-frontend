
class I18nProvider {
  init() {
    // Could also be an Ajax based implementation.
    this.translationTable = {
      "en": {
        "COMMON": {
          "SELECT_ENVIRONMENT": "Select EN Environment ..."
        },
        "LABEL1": 'Label EN',
        "ENVIRONMENT_NUM": "Environment {num} EN"
      },
      "de": {
        "COMMON": {
          "SELECT_ENVIRONMENT": "Select DE Environment ..."
        },
        "LABEL1": "Label DE",
        "ENVIRONMENT_NUM": "Environment {num} DE"
      },
    };
    return Promise.resolve();
  }

  afterInit() {
    this.currentLanguage = Luigi.i18n().getCurrentLocale();
    Luigi.i18n().addCurrentLocaleChangeListener((locale) => {
      this.currentLanguage = locale;
    });
  }

  // This function will be used by Luigi Core for translation
  getTranslation(key, interpolations = undefined, locale = undefined) {
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
    Object.keys(interpolations).forEach(item => {
      value = value.replace(
        new RegExp('{' + EscapingHelpers.escapeKeyForRegexp(item) + '}', 'gi'),
        interpolations[item]
      );
    });
    return value;
  }
}

//export const i18nProvider = new I18nProvider();
