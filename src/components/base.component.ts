import LangService, { LangData } from '../services/lang.service';

import BaseController from '../controllers/base.controller';
import React from 'react';

interface IState {
  lang: LangData;
}

class BaseComponent<T = any, U = any> extends React.Component<T, U & IState> {
  public isMount: boolean;
  public state: U & IState;
  protected controller?: BaseController;
  protected timeOut: any = null;

  // Reveal effect
  private usingRevealEffect = false;
  private ref?: React.RefObject<any> = undefined;
  private observer: IntersectionObserver;

  // Lang
  private usingLang = false;

  public constructor(props: T) {
    super(props);
    this.state = {
      ...this.state,
      lang: LangService.getCurLangData(),
    };
  }

  public componentDidMount() {
    this.isMount = true;
    if (this.controller) {
      this.controller.renderMount();
    }
    if (this.usingRevealEffect && this.ref?.current) {
      this.observer.observe(this.ref.current);
    }
    if (this.usingLang) {
      LangService.subscribeToLangChange(this.onLangChange);
    }
  }

  public componentWillUnmount() {
    this.isMount = false;
    if (this.controller) {
      this.controller.renderUnmount();
    }
    if (this.usingRevealEffect && this.ref && this.ref?.current) {
      this.observer.unobserve(this.ref.current);
      this.observer.disconnect();
    }
    if (this.usingLang) {
      LangService.unsubscribeToLangChange(this.onLangChange);
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

  protected onReveal = () => {
    // Do nothing here
  };

  private onRevealCallback: IntersectionObserverCallback = (entries, observer) => {
    if (entries.length) {
      if (entries[0].intersectionRatio > 0.1) {
        if (this.ref?.current) {
          this.observer.unobserve(this.ref?.current);
          this.observer.disconnect();
        }
        this.onReveal();
      }
    }
  };

  public useLang = () => {
    this.usingLang = true;
  };

  protected onLangChange = (lang: LangData) => {
    this.setState({ ...this.state, lang });
  };
}

export default BaseComponent;
