import BaseComponent from './base.component';
import React from 'react';

interface IProps {
  reference: React.RefObject<any>;
}

export default class Reveal extends BaseComponent<IProps, { revealed: boolean }> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      ...this.state,
      revealed: false,
    };
    this.useRevealEffect(this.props.reference);
  }

  public render = () => {
    return <div className={this.state.revealed ? 'revealed' : ''}>{this.props.children}</div>;
  };

  protected onReveal = () => {
    this.setState({ revealed: true });
  };
}
