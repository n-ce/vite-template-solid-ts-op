import { render } from 'solid-js/web';
import './root.css';
import counter from './counter';

const root = document.querySelector('main') as HTMLDivElement;

render(counter, root);

