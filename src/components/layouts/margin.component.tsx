import BaseComponent from '../base.component';
import React from 'react';

interface IProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export default class MarginComponent extends BaseComponent<IProps> {
  public render = () => {
    const style: any = {};
    if (this.props.top) style.marginTop = this.props.top;
    if (this.props.bottom) style.marginBottom = this.props.bottom;
    if (this.props.left) style.marginLeft = this.props.left;
    if (this.props.right) style.marginRight = this.props.right;
    return (
      <div style={style} {...this.props}>
        {this.props.children}
      </div>
    );
  };
}
