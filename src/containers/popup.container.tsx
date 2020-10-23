import BaseComponent from '../components/base.component';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Popup {
  id: string;
  component: any;
}

interface IState {
  popups: Popup[];
}

export default class PopupContainer extends BaseComponent<{}, IState> {
  public static showPopup = (popupComponent: any): string => {
    const id = uuidv4();
    PopupContainer.instance.addPopup(popupComponent, id);
    return id;
  };

  public static removePopup = (popupId: string): void => {
    PopupContainer.instance.removePopup(popupId);
  };

  private static instance: PopupContainer;

  constructor(props: any) {
    super(props);
    PopupContainer.instance = this;
    this.state = {
      popups: [],
    };
  }

  public render = () => {
    return (
      <div className='container-popup'>
        {this.props.children}
        {this.state.popups.length ? (
          <div className='popup-back' onClick={this.clearPopups}>
            {this.state.popups.map((popup: Popup) => (
              <div key={popup.id}>
                <popup.component />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  private addPopup = (popupComponent: any, id: string): void => {
    this.state.popups.push({
      id,
      component: popupComponent,
    });
    this.setState(this.state);
  };

  private removePopup = (popupId: string): void => {
    this.state.popups = this.state.popups.filter((p: Popup) => p.id !== popupId);
    this.setState(this.state);
  };

  private clearPopups = (event: React.MouseEvent): void => {
    event.stopPropagation();
    this.state.popups = [];
    this.setState(this.state);
  };
}
