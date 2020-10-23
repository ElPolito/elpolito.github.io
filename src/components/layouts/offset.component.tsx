import BaseComponent from '../base.component';
import React from 'react';

interface IProps {
  offsetX?: string;
  offsetY?: string;
}

export default class OffsetComponent extends BaseComponent<IProps> {
  public render = () => {
    const offset: any = {
      position: 'relative',
    };
    if (this.props.offsetX) offset.left = this.props.offsetX;
    if (this.props.offsetY) offset.top = this.props.offsetY;
    return (
      <div style={offset} {...this.props}>
        {this.props.children}
      </div>
    );
  };
}
