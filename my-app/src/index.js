import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//hello world!
const root =ReactDOM.createRoot(document.getElementById("root"));
//root.render(<h1>Hello World!</h1>);

//2.Introducing JSX
const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// root.render(element);
const user={
  firstName:"Khang",
  lastName:"Vu"
}
function formatName(user){
  return user.firstName+" "+user.lastName;
}
function getGreeting(user){
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

//const element =(<h1>Hello, {formatName(user)}</h1>);
//const element1 =getGreeting();
//root.render(element1);
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;

//3.Rendering Element
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);
//root.render(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
