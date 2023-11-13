import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Classstate from './Classstate';
import StudentProp from './StudentProp';
import GetValue from './GetValue';
import Vid17HideShow from './Vid17HideShow';
import Vid18Form from './Vid18Form';
import Vid19Conditionalrendering from './Vid19Conditionalrendering';
import Vid20Vali from './Vid20Vali';
import Vid21PassFunctions from './Vid21PassFunctions';
import Vid23LifeCycle from './Vid23LifeCycle';
import Vid24render from './Vid24Render';
import Vid25ComponenetDidMount from './Vid25ComponentDidMount';
import Vid26ComponentDidUpdate from './Vid26ComponentDidUpdate';
import Vid28compWillUnmount from './Vid28compWillUnmount';
import Vid29Hooks1 from './Vid29Hooks1';
import Vid30parent from './Vid30parent';
import Vid36Nest from './Vid36Nest';
import Vid38 from './Vid38';
import Vid40PureComp from './Vid40PureComp';
import Vid41UseMemo from './Vid41UseMemo';
import Vid42ref from './Vid42ref';
import Vid43 from './Vid43';
import Vid44forwardRef from './Vid44forwardRef';
import Vid45Controlled from './Vid45Controlled';
import Vid46Hoc from './Vid46Hoc';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Classstate/>
    <StudentProp  email="anushka@23.com"/>
    <GetValue/>
    <Vid17HideShow/>
    <Vid18Form/>
    <Vid19Conditionalrendering/>
    <Vid20Vali/>
    <Vid21PassFunctions/>
    <Vid23LifeCycle/>
    <Vid24render/>
    <Vid25ComponenetDidMount/>
    <Vid26ComponentDidUpdate/>
    <Vid28compWillUnmount/>
    <Vid29Hooks1/>
    <Vid30parent/>
    <Vid36Nest/>
    <Vid38/>
    <Vid40PureComp/>
    <Vid41UseMemo/>
    <Vid42ref/>
    <Vid43/>
    <Vid44forwardRef/>
    <Vid45Controlled/>
    <Vid46Hoc/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
