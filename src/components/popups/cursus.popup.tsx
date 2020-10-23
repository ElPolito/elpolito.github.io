import BaseComponent from '../base.component';
import React from 'react';

class CursusPopup extends BaseComponent {
  public render = () => {
    return null;
  };
}

export default (data: any) => {
  return (props: any) => {
    return <CursusPopup data={data} />;
  };
};
