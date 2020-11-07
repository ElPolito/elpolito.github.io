import * as data from '../data/data';

import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class ProfileComponent extends BaseComponent {
  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>Profile</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-profile'>
            <ReactMarkdown>{data.getProfile()}</ReactMarkdown>
          </div>
        </ApparitionEffectComponent>
      </>
    );
  };
}
