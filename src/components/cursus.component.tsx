import * as data from '../data/data';

import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import CenterComponent from './layouts/center.component';
import CursusController from '../controllers/components/cursus.controller';
import CursusPopup from './popups/cursus.popup';
import DiamondComponent from './diamond.component';
import { ICursus } from '../data/cursus/cursus';
import PopupContainer from '../containers/popup.container';
import React from 'react';
import iconsService from '../services/icons.service';

const cursus = data.getCursus();
const globalTrans = data.getGlobalTranslations();

interface IEventProps {
  event: ICursus;
  reference: React.RefObject<any>;
}

class RenderEvent extends BaseComponent<IEventProps> {
  constructor(props: IEventProps) {
    super(props);
    this.useRevealEffect(props.reference);
    this.state = {
      revealed: false,
    };
  }

  public render = () => {
    let date = '';
    const fromSplitted = this.props.event.date.from.split('-');
    const fromMonth = fromSplitted.length > 1 ? parseInt(fromSplitted[0], 10) : 0;
    if (fromMonth) {
      date += `${globalTrans.months[fromMonth]} `;
    }
    const fromYear = fromSplitted.length > 1 ? parseInt(fromSplitted[1], 10) : parseInt(this.props.event.date.from, 10);
    date += fromYear;
    if (this.props.event.date.to) {
      if (this.props.event.date.to !== this.props.event.date.from) {
        date += ' - ';
        const toSplitted = this.props.event.date.to.split('-');
        const toMonth = toSplitted.length > 1 ? parseInt(toSplitted[0], 10) : 0;
        if (toMonth) {
          date += `${globalTrans.months[toMonth]} `;
        }
        const toYear = toSplitted.length > 1 ? parseInt(toSplitted[1], 10) : parseInt(this.props.event.date.to, 10);
        date += toYear;
      }
    } else {
      date += ' - Maintenant';
    }

    return (
      <div ref={this.props.reference} className={`cursus-event ${this.state.revealed ? 'revealed' : ''}`}>
        <div className='infos'>
          <div className='label'>
            <span>{this.props.event.label.fr}</span>
            <a className='more' onClick={this.onClickMore}>
              Plus d'informations
              <div className='border'></div>
            </a>
          </div>
        </div>
        <div className='icon'>
          <DiamondComponent size='medium'>
            <CenterComponent style={{ height: '40%' }}>
              <img src={iconsService(this.props.event.type)} alt='Icon' height='100%' />
            </CenterComponent>
          </DiamondComponent>
        </div>
        <div className='date'>{date}</div>
      </div>
    );
  };

  protected onReveal = () => {
    this.setState({ revealed: true });
  };

  private onClickMore = () => {
    PopupContainer.showPopup(CursusPopup(this.props.event));
  };
}

export default class CursusComponent extends BaseComponent {
  public domReferences: React.RefObject<any>[];
  protected controller: CursusController;

  constructor(props: any) {
    super(props);
    this.controller = new CursusController(props, this);
    this.domReferences = [];
  }

  public render = () => {
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>Parcours</h2>
        </ApparitionEffectComponent>
        <div className='comp-cursus'>
          {cursus.map((event, index) => {
            const newRef = React.createRef();
            this.domReferences.push(newRef);
            return <RenderEvent reference={newRef} event={event} key={index} />;
          })}
        </div>
      </>
    );
  };

  public componentDidMount = () => {
    setTimeout(() => {
      for (let i = 0; i < this.domReferences.length - 1; i += 1) {
        const ref = this.domReferences[i];
        const nextRef = this.domReferences[i + 1];
        const currentDiamond = ref.current.querySelector('.comp-diamond');
        const nextDiamond = nextRef.current.querySelector('.comp-diamond');
        console.log('Here');
        console.log(currentDiamond);
        console.log(nextDiamond);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const height = nextDiamond.offsetTop - currentDiamond.offsetTop;
        const width = Math.abs(nextDiamond.offsetLeft - currentDiamond.offsetLeft);
        svg.classList.add('comp-cursus-line');

        svg.style.height = `${height}px`;
        svg.style.width = `${width}px`;

        svg.style.top = `${currentDiamond.offsetTop + currentDiamond.offsetHeight / 2}px`;
        if (i % 2 === 0) {
          svg.style.left = `${currentDiamond.offsetLeft + currentDiamond.offsetWidth / 2 - width}px`;
        } else {
          svg.style.left = `${currentDiamond.offsetLeft + currentDiamond.offsetWidth / 2}px`;
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        const top = currentDiamond.offsetHeight / 4 + 10;
        let left = currentDiamond.offsetWidth / 4;
        const bot = height - nextDiamond.offsetHeight / 4 - 10;
        let right = width - nextDiamond.offsetWidth / 4;

        const centerX = width / 2;
        const centerY = height / 2;
        if (i % 2 === 0) {
          left = width - left;
          right = width - right;
          path.setAttributeNS(
            null,
            'd',
            `M ${left} ${top} C ${width} ${centerY} ${centerX} ${centerY} ${centerX} ${centerY} C ${0} ${centerY} ${right} ${bot} ${right} ${bot}`,
          );
        } else {
          path.setAttributeNS(
            null,
            'd',
            `M ${left} ${top} C ${0} ${centerY} ${centerX} ${centerY} ${centerX} ${centerY} C ${width} ${centerY} ${right} ${bot} ${right} ${bot}`,
          );
        }

        path.setAttributeNS(null, 'stroke', '#ffbe94');
        path.setAttributeNS(null, 'stroke-width', '8');
        path.setAttributeNS(null, 'fill', 'none');
        svg.appendChild(path);

        document.body.appendChild(svg);
      }
    }, 100);
  };
}
