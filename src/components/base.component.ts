import BaseController from '../controllers/base.controller';
import React from 'react';

class BaseComponent<T = any, U = any> extends React.Component<T, U> {
  public isMount: boolean;
  public state: U;
  protected controller?: BaseController;
  protected timeOut: any = null;

  private usingRevealEffect = false;
  private ref?: React.RefObject<any> = undefined;
  private observer: IntersectionObserver;

  constructor(props: T) {
    super(props);
  }

  public componentDidMount() {
    this.isMount = true;
    if (this.controller) {
      this.controller.renderMount();
    }
    if (this.usingRevealEffect && this.ref) {
      this.observer.observe(this.ref.current);
    }
  }

  public componentWillUnmount() {
    this.isMount = false;
    if (this.controller) {
      this.controller.renderUnmount();
    }
    if (this.usingRevealEffect && this.ref) {
      this.observer.unobserve(this.ref.current);
      this.observer.disconnect();
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

  protected useRevealEffect = (ref: React.RefObject<any>) => {
    this.usingRevealEffect = true;
    this.ref = ref;
    this.observer = new IntersectionObserver(this.onRevealCallback, {
      threshold: 0.1,
      root: null,
      rootMargin: '0px',
    });
  };

  protected onReveal = () => { };

  private onRevealCallback: IntersectionObserverCallback = (entries, observer) => {
    if (entries.length) {
      if (entries[0].intersectionRatio > 0.1) {
        this.observer.unobserve(this.ref?.current);
        this.observer.disconnect();
        this.onReveal();
      }
    }
  };
}

export default BaseComponent;
