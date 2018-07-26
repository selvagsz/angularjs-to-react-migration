import { react2angular } from 'react2angular'
import HelloReact from './components/HelloReact';

window.app.$compileProvider.component('helloReact', react2angular(HelloReact));
