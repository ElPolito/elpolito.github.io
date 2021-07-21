import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class ContactComponent extends BaseComponent {
  public constructor(props: {}) {
    super(props);
    this.useLang();
  }
  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>{this.state.lang.data.global.contact.title}</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-contact'>{this.renderContact('paul.moine@insa-lyon.fr', 'email')}</div>
        </ApparitionEffectComponent>
      </>
    );
  };

  private renderContact = (label: string, icon: string) => {
    return (
      <div className='contact'>
        <i className='material-icons'>{icon}</i>
        <span>{label}</span>
      </div>
    );
  };
}
