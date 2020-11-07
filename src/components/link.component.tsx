import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class LinkComponent extends BaseComponent {
  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>Liens utiles</h2>
        </ApparitionEffectComponent>
        <div className='comp-link'>
          {this.renderLink('GitHub - ElPolito', '/assets/medias/github-logo.png', 'https://github.com/ElPolito')}
          {this.renderLink(
            'Linkedin - Paul Moine',
            '/assets/medias/linkedin-logo.png',
            ' https://www.linkedin.com/in/paul-moine-fr',
          )}
        </div>
      </>
    );
  };

  private renderLink = (label: string, image: string, link: string) => {
    return (
      <ApparitionEffectComponent effect={['fade']}>
        <a className='link' href={link} target='_blank'>
          <img src={image} />
          <span>{label}</span>
        </a>
      </ApparitionEffectComponent>
    );
  };
}
