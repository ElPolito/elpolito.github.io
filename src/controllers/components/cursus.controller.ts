import BaseController from '../base.controller';
import CursusComponent from '../../components/cursus.component';
import React from 'react';

interface IState {
  refs: React.RefObject<any>[];
}

export default class CursusController extends BaseController {
  protected state: IState;
  constructor(props: any, render: CursusComponent) {
    super(render, props);
    this.state = {
      refs: [],
    };
  }
}
