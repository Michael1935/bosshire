import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { counter, addGUN, minGUN, addGUNAsync } from './index.redux';
import { counter } from './index.redux';
import { Provider } from 'react-redux';
import App from './App1';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

// const store = createStore(counter);
// const init = store.getState();
// console.log(init);
// function listener(){
//     const current = store.getState();
//     console.log('现在的机关枪', current);
// }
// store.subscribe(listener);
// // 派发事件
// store.dispatch({type: "addGun"});
// store.dispatch({type: "minGun"});

// function render(){
//     ReactDOM.render(<App store={store} addGUN={addGUN} minGUN={minGUN} addGUNAsync={addGUNAsync} />, document.getElementById("root"));
// }

// render();
// store.subscribe(render);
ReactDOM.render(
    (<Provider store={store} >
        <App />,
    </Provider>)
    document.getElementById("root")
);
