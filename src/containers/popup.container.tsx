import BaseComponent from '../components/base.component';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Popup {
  id: string;
  component: any;
  visible: boolean;
}

interface IState {
  popups: Popup[];
  visible: boolean;
}

export interface PopupProps {
  popupId: string;
  visible: boolean;
}

export default class PopupContainer extends BaseComponent<{}, IState> {
  public static showPopup = (popupComponent: any): string => {
    const id = uuidv4();
    PopupContainer.instance.addPopup(popupComponent, id);
    return id;
  };

  public static closePopup = (popupId: string): void => {
    PopupContainer.instance.closePopup(popupId);
  };

  public static removePopup = (popupId: string): void => {
    PopupContainer.instance.removePopup(popupId);
  };

  private static instance: PopupContainer;

  constructor(props: any) {
    super(props);
    PopupContainer.instance = this;
    this.state = {
      ...this.state,
      popups: [],
      visible: false,
    };
  }

  public render = () => {
    return (
      <div className={`container-popup ${this.state.visible ? 'popup-visible' : ''}`}>
        {this.props.children}

        {this.state.popups.length ? (
          <div className={`popup-back ${this.state.visible ? 'visible' : ''}`} onClick={this.clearPopups}>
            {this.state.popups.map((popup: Popup) => (
              <div key={popup.id}>
                <popup.component popupId={popup.id} visible={popup.visible} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  private addPopup = (popupComponent: any, id: string): void => {
    const popup: Popup = {
      id,
      component: popupComponent,
      visible: false,
    };

    this.state.popups.push(popup);
    this.setState(this.state);

    if (this.state.popups.length === 1) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        this.state.visible = true;
        this.setState(this.state);
      }, 100);
    }

    // * Delay for transition
    setTimeout(() => {
      popup.visible = true;
      this.setState(this.state);
    }, 100);
  };

  private closePopup = (popupId: string): void => {
    const popup = this.state.popups.find((p: Popup) => p.id === popupId);
    if (!popup) return;
    popup.visible = false;
    if (!this.state.popups.find((p: Popup) => p.visible)) {
      this.state.visible = false;
      document.body.style.overflow = '';
    }
    this.setState(this.state);
  };

  private removePopup = (popupId: string): void => {
    this.state.popups = this.state.popups.filter((p: Popup) => p.id !== popupId);
    this.setState(this.state);
  };

  private clearPopups = (event: React.MouseEvent): void => {
    event.stopPropagation();
    this.state.popups.forEach((p: Popup) => {
      p.visible = false;
    });
    document.body.style.overflow = '';
    this.state.visible = false;
    this.setState(this.state);
  };
}
