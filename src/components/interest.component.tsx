import * as data from '../data';

import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class InterestComponent extends BaseComponent {
  public constructor(props: {}) {
    super(props);
    this.useLang();
  }

  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>{this.state.lang.data.global.interests.title}</h2>
        </ApparitionEffectComponent>
        <ApparitionEffectComponent effect={['fade']}>
          <div className='comp-interest'>
            <ReactMarkdown className='markdown'>{this.state.lang.data.interests}</ReactMarkdown>
          </div>
        </ApparitionEffectComponent>
      </>
    );
  };
}
