import BaseComponent from '../components/base.component';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class SVGContainer extends BaseComponent<{}, { svgs: { elem: JSX.Element; id: string }[] }> {
  private static instance: SVGContainer;

  public constructor(props: {}) {
    super(props);
    SVGContainer.instance = this;
    this.state = {
      ...this.state,
      svgs: [],
    };
  }

  public static showSVG = (svgElement: JSX.Element) => {
    const id = uuidv4();
    SVGContainer.instance.showSVG(svgElement, id);
    return id;
  };

  public static hideSVG = (id: string) => {
    SVGContainer.instance.hideSVG(id);
  };

  private showSVG = (svgElement: JSX.Element, id: string) => {
    this.setState({ svgs: [...this.state.svgs, { elem: svgElement, id }] });
  };

  private hideSVG = (id: string) => {
    this.setState({ svgs: this.state.svgs.filter((svg) => svg.id !== id) });
  };

  public render = () => {
    return (
      <div className='container-svg'>
        {this.props.children}
        {this.state.svgs.map((svg) => svg.elem)}
      </div>
    );
  };
}
