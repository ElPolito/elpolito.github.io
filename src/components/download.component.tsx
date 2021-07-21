import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class DownloadComponent extends BaseComponent {
  public constructor(props: {}) {
    super(props);
    this.useLang();
  }

  public render = () => {
    const downloads = this.state.lang.data.global.downloads;
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>{downloads.title}</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-dl'>
            {this.renderDl(downloads.french, 'cv-fr-paul-moine.pdf')}
            {this.renderDl(downloads.english, 'cv-en-paul-moine.pdf')}
          </div>
        </ApparitionEffectComponent>
      </>
    );
  };

  private renderDl = (label: string, resource: string) => {
    return (
      <div className='dl'>
        <a href={`/assets/${resource}`} download>
          <i className='material-icons'>cloud_download</i>
          <span>{label}</span>
        </a>
      </div>
    );
  };
}
