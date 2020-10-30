import BaseComponent from './base.component';
import CenterComponent from './layouts/center.component';
import CursusController from '../controllers/components/cursus.controller';
import CursusPopup from './popups/cursus.popup';
import DiamondComponent from './diamond.component';
import PopupContainer from '../containers/popup.container';
import React from 'react';
import cursus from '../data/cursus';
import iconsService from '../services/icons.service';
import ApparitionEffectComponent from './apparitioneffect.component';

class RenderEvent extends BaseComponent {

  constructor(props: any) {
    super(props);
    this.useRevealEffect(props.reference);
    this.state = {
      revealed: false,
    }
  }

  public render = () => {
    return (
      <div ref={this.props.reference} className={`cursus-event ${this.state.revealed ? "revealed" : ""}`}>
        <div className="infos">
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
        <div className='date'>
          {this.props.event.date.from} - {this.props.event.date.to}
        </div>
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
          <h2 className="section-title">Parcours</h2>
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

        svg.style.height = height + 'px';
        svg.style.width = width + 'px';

        svg.style.top = currentDiamond.offsetTop + currentDiamond.offsetHeight / 2 + 'px';
        if (i % 2 === 0) {
          svg.style.left = currentDiamond.offsetLeft + currentDiamond.offsetWidth / 2 - width + 'px';
        } else {
          svg.style.left = currentDiamond.offsetLeft + currentDiamond.offsetWidth / 2 + 'px';
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
