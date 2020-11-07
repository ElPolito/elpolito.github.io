import AppController from './controllers/app.controller';
import BaseComponent from './components/base.component';
import PopupContainer from './containers/popup.container';
import React from 'react';
import pages from './pages';

// tslint:disable-next-line: function-name
function Page(props: any) {
  return <div className={`page ${props.pageName}`}>{props.children}</div>;
}

export default class App extends BaseComponent {
  protected controller: AppController;

  public constructor(props: null) {
    super(props);
    this.controller = new AppController(this, props);
  }

  public render = () => {
    return (
      <div>
        <PopupContainer>
          <Page pageName='home'>
            <pages.Home />
          </Page>
        </PopupContainer>
      </div>
    );
  };
}
