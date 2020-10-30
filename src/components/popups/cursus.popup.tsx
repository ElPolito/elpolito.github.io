import BaseComponent from '../base.component';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PopupContainer from '../../containers/popup.container';

class CursusPopup extends BaseComponent {
  public render = () => {
    return <div className="popup-cursus" onClick={event => event.stopPropagation()}>
      <div className="close-btn" onClick={() => PopupContainer.removePopup(this.props.popupId)}><i className="material-icons">clear</i></div>
      <ReactMarkdown >{this.props.data.details}</ReactMarkdown>
    </div>;
  };
}

export default (data: any) => {
  return (props: any) => {
    return <CursusPopup data={data} {...props} />;
  };
};
