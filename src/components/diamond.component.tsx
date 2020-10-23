import BaseComponent from './base.component';
import React from 'react';

interface IProps {
  size: 'large' | 'medium';
}

export default class DiamondComponent extends BaseComponent<IProps> {
  public render = () => {
    return (
      <div className={`comp-diamond ${this.props.size}`}>
        <div>{this.props.children}</div>
      </div>
    );
  };
}
