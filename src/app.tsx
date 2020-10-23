import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppController from './controllers/app.controller';
import BaseComponent from './components/base.component';
import PopupContainer from './containers/popup.container';
import React from 'react';
import pages from './pages';

function Page(props) {
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
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <Page pageName='home'>
                  <pages.Home />
                </Page>
              </Route>
            </Switch>
          </BrowserRouter>
        </PopupContainer>
      </div>
    );
  };
}
