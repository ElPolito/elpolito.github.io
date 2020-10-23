import BaseComponent from '../components/base.component';

class BaseController {
  protected render: BaseComponent;
  protected state: any;
  protected type: string;
  protected props: any;

  constructor(render: BaseComponent, props: any = {}) {
    this.render = render;
    this.props = props;
  }

  public renderUnmount = () => {
    // Do nothing
  };

  public renderMount = () => {
    // Do nothing
  };

  public renderUpdate(newprops?: any) {
    // Do nothing
  }

  public changeTab(index: number) {
    // Do nothing
  }

  public changeState() {
    if (this.render.isMount) {
      this.render.setState(this.state);
    } else {
      this.render.state = this.state;
    }
  }

  public inputChange(event: any, name: string) {
    this.state[name] = event.target.value;
    this.changeState();
  }

  protected getDataFromForm(formData: FormData) {
    const obj: any = {};
    formData.forEach((value: any, key: any) => {
      obj[key] = value;
    });
    return obj;
  }
}

export default BaseController;
