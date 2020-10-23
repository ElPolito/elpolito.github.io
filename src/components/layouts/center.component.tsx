import BaseComponent from '../base.component';
import React from 'react';

export default class CenterComponent extends BaseComponent {
  public render = () => {
    return (
      <div className='comp-center' {...this.props}>
        {this.props.children}
      </div>
    );
  };
}
