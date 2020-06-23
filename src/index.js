import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {stateAddPost, stateChangePostValue} from "./redux/state";
import reRenderer from "./Renderer";

reRenderer(state, stateAddPost, stateChangePostValue);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
