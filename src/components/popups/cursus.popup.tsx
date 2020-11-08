import * as data from '../../data/data';

import PopupContainer, { PopupProps } from '../../containers/popup.container';

import BaseComponent from '../base.component';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const globalTrans = data.getGlobalTranslations();

interface PropsData {
  data: any;
}

type IProps = PopupProps & PropsData;

class CursusPopup extends BaseComponent<IProps> {
  private compRef: React.RefObject<any>;

  constructor(props: IProps) {
    super(props);
    this.compRef = React.createRef();
  }

  public render = () => {
    let date = '';
    const fromSplitted = this.props.data.date.from.split('-');
    const fromMonth = fromSplitted.length > 1 ? parseInt(fromSplitted[0], 10) : 0;
    if (fromMonth) {
      date += `${globalTrans.months[fromMonth]} `;
    }
    const fromYear = fromSplitted.length > 1 ? parseInt(fromSplitted[1], 10) : parseInt(this.props.data.date.from, 10);
    date += fromYear;
    if (this.props.data.date.to) {
      if (this.props.data.date.to !== this.props.data.date.from) {
        date += ' - ';
        const toSplitted = this.props.data.date.to.split('-');
        const toMonth = toSplitted.length > 1 ? parseInt(toSplitted[0], 10) : 0;
        if (toMonth) {
          date += `${globalTrans.months[toMonth]} `;
        }
        const toYear = toSplitted.length > 1 ? parseInt(toSplitted[1], 10) : parseInt(this.props.data.date.to, 10);
        date += toYear;
      }
    } else {
      date += ' - Maintenant';
    }
    return (
      <div
        className={`popup-cursus ${this.props.visible ? 'visible' : ''}`}
        onClick={(event) => event.stopPropagation()}
        ref={this.compRef}
      >
        <div className='close-btn' onClick={() => PopupContainer.closePopup(this.props.popupId)}>
          <i className='material-icons'>clear</i>
        </div>
        <div className='cursus-top'>
          <a href={this.props.data.link} target='_blank'>
            <img src={`/assets/medias/${this.props.data.logo}`} alt='' />
          </a>
          <span>{date}</span>
        </div>
        <ReactMarkdown className='markdown'>{this.props.data.details}</ReactMarkdown>
      </div>
    );
  };

  public componentDidMount = () => {
    this.compRef.current.addEventListener('transitionend', () => {
      if (!this.props.visible) {
        PopupContainer.removePopup(this.props.popupId);
      }
    });
  };
}

export default (data: any) => {
  return (props: PopupProps) => {
    return <CursusPopup data={data} {...props} />;
  };
};
