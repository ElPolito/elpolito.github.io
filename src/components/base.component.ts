import BaseController from '../controllers/base.controller';
import React from 'react';

class BaseComponent<T = any, U = any> extends React.Component<T, U> {
  public isMount: boolean;
  public state: U;
  protected controller?: BaseController;
  protected timeOut: any = null;
  constructor(props: T) {
    super(props);
  }

  public componentDidMount() {
    this.isMount = true;
    if (this.controller) {
      this.controller.renderMount();
    }
  }

  public componentWillUnmount() {
    this.isMount = false;
    if (this.controller) {
      this.controller.renderUnmount();
    }
  }

  public componentDidUpdate(newprops?: any) {
    if (this.controller) {
      this.controller.renderUpdate(newprops);
    }
  }

  protected handleClickDblClick = (event: any, onClick: (event?: any) => void, onDblClick: (event?: any) => void) => {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
      this.timeOut = null;
      onDblClick(event);
    } else {
      this.timeOut = setTimeout(() => {
        this.timeOut = null;
        onClick(event);
      }, 200);
    }
  };
}

export default BaseComponent;
