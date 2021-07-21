import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class LanguageComponent extends BaseComponent {
  public constructor(props: {}) {
    super(props);
    this.useLang();
  }

  public render = () => {
    const languages = this.state.lang.data.global.languages;
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>{languages.title}</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-language'>
            {this.renderLanguage(languages.french, languages.levels.native)}
            {this.renderLanguage(languages.english, languages.levels.pro)}
            {this.renderLanguage(languages.italian, languages.levels.beginner)}
            {this.renderLanguage(languages.spanish, languages.levels.beginner)}
          </div>
        </ApparitionEffectComponent>
      </>
    );
  };

  private renderLanguage = (name: string, level: string) => {
    return (
      <div className='language'>
        <span>{name}</span>
        <span> - {level}</span>
      </div>
    );
  };
}
