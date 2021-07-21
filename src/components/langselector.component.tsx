import LangService, { LangData, Langs } from '../services/lang.service';

import BaseComponent from './base.component';
import React from 'react';

export default class LangSelector extends BaseComponent<{}, { curLang: LangData }> {
  public constructor(props: {}) {
    super(props);
    this.useLang();
  }

  public render = () => {
    return (
      <div className='lang-selector'>
        {this.renderCurLang()}
        {this.renderOtherLangs()}
      </div>
    );
  };

  private renderCurLang = () => {
    const curLang = this.state.lang;
    return <div className='cur-lang'>{this.renderLang(curLang.icon, curLang.lang)}</div>;
  };

  private renderOtherLangs = () => {
    const langsData = LangService.getLangsData();
    return (
      <div className='other-langs'>
        {langsData.filter((l) => l.lang !== LangService.getLang()).map((lang) => this.renderLang(lang.icon, lang.lang))}
      </div>
    );
  };

  private renderLang = (icon: string, lang: Langs) => {
    return (
      <div className='lang' onClick={() => LangService.setLang(lang)}>
        <img src={`/assets/medias/${icon}`} />
      </div>
    );
  };
}
