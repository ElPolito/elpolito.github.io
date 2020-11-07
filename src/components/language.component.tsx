import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class LanguageComponent extends BaseComponent {
  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>Langues</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-language'>
            {this.renderLanguage('Français', 'Natif')}
            {this.renderLanguage('Anglais', 'Capacités professionnelles')}
            {this.renderLanguage('Italien', 'Débutant')}
            {this.renderLanguage('Espagnol', 'Débutant')}
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
