import App from '../app';
import BaseController from './base.controller';

export default class AppController extends BaseController {
  protected render: App;

  public constructor(render: App, props: null) {
    super(render, props);
    this.render = render;
  }
}
