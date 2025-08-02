/* @refresh reload */
import { render } from 'solid-js/web';
import './root.css';
import Counter from './counter';

const root = document.querySelector('main') as HTMLDivElement;
const App = () => {
  return (
    <Counter/>
  );
}
render(() => <App/>, root);

