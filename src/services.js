import TranslateService from "./i18n";

class Services {

  constructor(config) {
    this.config = config;
  }

  /**
   * сервис перевода
   */
  get translate(){
    if (!this._translate) {
      this._translate = new TranslateService(this, this.config.translate);
    }
    return this._translate;
  }
}

export default Services;
