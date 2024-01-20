import './App.css';
import Component from '../../homework_1/src/components/component/Component';
import Component2 from '../../homework_1/src/components/component2/Component2';
import Button from '../../homework_1/src/components/button/Button';
import Example from '../../homework_1/src/components/Example';
import Header from '../../homework_1/src/components/header/Header';
import Footer from '../../homework_1/src/components/footer/Footer';
import User from "./components/user/User";
import React from "react";

function App() {

  const navbar = ['Главная', 'О нас','Контакты']



  return (
    <div>
      <Header navbar={navbar}/>
      <h1>Hello</h1>
      <Component text={'Bakyt'}/>
      <Component2 age={18}/>
      <Button text={'Delete'}/>
      <Button text={'add'}/>
      <Button text={'update'}/>
      <Example>
        <p style={{
          color: "green",
          fontSize: "20px"
        }}>
          Bakyt
        </p>

      </Example>
       <User/>

      <Footer link={'online.geeks.kg'}/>
    </div>

  );
}

export default App;
