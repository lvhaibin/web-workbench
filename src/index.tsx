import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';

import App from './app';
import 'antd/dist/antd.less';

setConfig({
    reloadHooks: false
})


ReactDOM.render(<App />, document.getElementById('app'))