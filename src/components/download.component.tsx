import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';

export default class DownloadComponent extends BaseComponent {
  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>Téléchargements</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-dl'>{this.renderDl('CV en français', 'cv-fr.pdf')}</div>
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
