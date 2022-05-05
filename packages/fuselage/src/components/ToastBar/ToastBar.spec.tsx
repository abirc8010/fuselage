import React from 'react';
import ReactDOM from 'react-dom';

import { ToastBar } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToastBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});