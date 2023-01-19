import React from 'react'; //käyttää <React.StrictMode></React.StrictMode>
//import { StrictMode } from 'react'; //käyttää <StrictMode></StrictMode>
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import './index.css'
/*import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
let notes =[

  {
      id: 1,
      content: "CSS on tyylimuotoilua",
      date: "2022-11-23T11:22:40.0982",
      important: true
  },
  {
      id: 2,
      content: "Selain pystyy suorittamaan ainostaan Javascript-koodi",
      date: "2022-11-23T11:22:50.0007",
      important: false
  },
  {
      id: 3,
      content: "PHP-ohjelmointikieltä käytetään back-end onjelmoinnissa",
      date: "2022-11-23T11:24:09.0313",
      important: true
  },
  {
      id: 4,
      content: "Tietokannat on englanniksi password",
      date: "2022-11-23T11:44:09.0000",
      important: false
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode><App notes={notes}/></React.StrictMode>

)