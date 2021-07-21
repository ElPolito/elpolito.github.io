import ApparitionEffectComponent from './apparitioneffect.component';
import BaseComponent from './base.component';
import CenterComponent from './layouts/center.component';
import CursusPopup from './popups/cursus.popup';
import DiamondComponent from './diamond.component';
import { ICursus } from '../data/util';
import { LangData } from '../services/lang.service';
import PopupContainer from '../containers/popup.container';
import React from 'react';
import Reveal from './reveal.component';
import SVGContainer from '../containers/svg.container';
import iconsService from '../services/icons.service';

interface IEventProps {
  event: ICursus;
  reference: React.RefObject<any>;
}

class RenderEvent extends BaseComponent<IEventProps> {
  constructor(props: IEventProps) {
    super(props);
    this.useRevealEffect(props.reference);
    this.state = {
      ...this.state,
      revealed: false,
    };
    this.useLang();
  }

  public render = () => {
    const { lang } = this.state;
    const { global, cursus } = lang.data;
    let date = '';
    const fromSplitted = this.props.event.date.from.split('-');
    const fromMonth = fromSplitted.length > 1 ? parseInt(fromSplitted[0], 10) : 0;
    if (fromMonth) {
      date += `${global.months[fromMonth]} `;
    }
    const fromYear = fromSplitted.length > 1 ? parseInt(fromSplitted[1], 10) : parseInt(this.props.event.date.from, 10);
    date += fromYear;
    if (this.props.event.date.to) {
      if (this.props.event.date.to !== this.props.event.date.from) {
        date += ' - ';
        const toSplitted = this.props.event.date.to.split('-');
        const toMonth = toSplitted.length > 1 ? parseInt(toSplitted[0], 10) : 0;
        if (toMonth) {
          date += `${global.months[toMonth]} `;
        }
        const toYear = toSplitted.length > 1 ? parseInt(toSplitted[1], 10) : parseInt(this.props.event.date.to, 10);
        date += toYear;
      }
    } else {
      date += ' - ' + global.cursus.now;
    }

    return (
      <div ref={this.props.reference} className={`cursus-event ${this.state.revealed ? 'revealed' : ''}`}>
        <div className='infos'>
          <div className='label'>
            <span>{this.props.event.label}</span>
            <a className='more' onClick={this.onClickMore}>
              {global.cursus.more_infos}
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
  private langChanged = false;
  private linesId: string[] = [];

  public constructor(props: any) {
    super(props);
    this.domReferences = [];
    this.useLang();
  }

  public render = () => {
    const cursus = this.state.lang.data.cursus;
    this.domReferences = [];
    return (
      <>
        <ApparitionEffectComponent effect={['fade']}>
          <h2 className='section-title'>{this.state.lang.data.global.cursus.title}</h2>
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
    super.componentDidMount();
    setTimeout(this.updateLines, 1000);
  };

  public componentDidUpdate = () => {
    super.componentDidMount();
    if (!this.langChanged) return;
    setTimeout(this.updateLines, 1000);
  };

  public onLangChange = (lang: LangData) => {
    this.langChanged = true;
    this.setState({ ...this.state, lang });
  };

  private updateLines = () => {
    if (window.innerWidth <= 1000) return;
    for (let i = 0; i < this.linesId.length; ++i) {
      SVGContainer.hideSVG(this.linesId[i]);
    }
    this.linesId = [];
    for (let i = 0; i < this.domReferences.length - 1; i += 1) {
      const ref = this.domReferences[i];
      const nextRef = this.domReferences[i + 1];
      const currentDiamond = ref.current.querySelector('.comp-diamond');
      const nextDiamond = nextRef.current.querySelector('.comp-diamond');

      const height = nextDiamond.offsetTop - currentDiamond.offsetTop;
      const width = Math.abs(nextDiamond.offsetLeft - currentDiamond.offsetLeft);
      const svgTop = currentDiamond.offsetTop + currentDiamond.offsetHeight / 2;
      const svgLeft = currentDiamond.offsetLeft + currentDiamond.offsetWidth / 2 - (i % 2 === 0 ? width : 0);

      const top = currentDiamond.offsetHeight / 4 + 10;
      let left = currentDiamond.offsetWidth / 4;
      const bot = height - nextDiamond.offsetHeight / 4 - 10;
      let right = width - nextDiamond.offsetWidth / 4;

      const centerX = width / 2;
      const centerY = height / 2;
      let d: string;
      if (i % 2 === 0) {
        left = width - left;
        right = width - right;
        d = `M ${left} ${top} C ${width} ${centerY} ${centerX} ${centerY} ${centerX} ${centerY} C ${0} ${centerY} ${right} ${bot} ${right} ${bot}`;
      } else {
        d = `M ${left} ${top} C ${0} ${centerY} ${centerX} ${centerY} ${centerX} ${centerY} C ${width} ${centerY} ${right} ${bot} ${right} ${bot}`;
      }

      const pathRef = (element) => {
        if (!element) return;
        const path = element;
        const pathLength = path.getTotalLength();
        path.setAttributeNS(null, 'stroke-dasharray', pathLength.toString());
        path.setAttributeNS(null, 'stroke-dashoffset', pathLength.toString());
      };

      const svgRef: React.RefObject<any> = React.createRef();

      const svgElement = (
        <Reveal reference={svgRef}>
          <div ref={svgRef} className='comp-cursus-line' style={{ height, width, top: svgTop, left: svgLeft }}>
            <svg>
              <path ref={pathRef} d={d}></path>
            </svg>
          </div>
        </Reveal>
      );
      this.linesId.push(SVGContainer.showSVG(svgElement));
    }
  };
}
