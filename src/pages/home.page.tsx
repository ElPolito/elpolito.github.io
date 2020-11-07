import BaseComponent from '../components/base.component';
import CenterComponent from '../components/layouts/center.component';
import ContactComponent from '../components/contact.component';
import CursusComponent from '../components/cursus.component';
import DiamondComponent from '../components/diamond.component';
import InterestComponent from '../components/interest.component';
import LanguageComponent from '../components/language.component';
import LinkComponent from '../components/link.component';
import MarginComponent from '../components/layouts/margin.component';
import ProfileComponent from '../components/profile.component';
import React from 'react';
import RevealLetterEffectComponent from '../components/reveallettereffect.component';

class DoubleBars extends BaseComponent {
  public render = () => {
    return (
      <div className='double-bars'>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    );
  };
}

export default class HomePage extends BaseComponent {
  public render = () => {
    return (
      <>
        <DoubleBars />
        <div className='main-panel'>
          <CenterComponent>
            <DiamondComponent size='large'>
              <CenterComponent style={{ height: '100%' }}>
                <img src='/assets/medias/profile.jpg' alt='Profile picture' height='100%' />
              </CenterComponent>
            </DiamondComponent>
            <MarginComponent top='100px'>
              <h1 className='main-title'>
                <RevealLetterEffectComponent text='Paul Moine' />
              </h1>
            </MarginComponent>
          </CenterComponent>
        </div>
        <ProfileComponent />
        <CursusComponent />
        <InterestComponent />
        <LanguageComponent />
        <LinkComponent />
        <ContactComponent />
        <footer></footer>
      </>
    );
  };
}
