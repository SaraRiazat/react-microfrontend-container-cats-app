import React from "react";
import {useHistory} from 'react-router-dom';
import "./index.css"

const RandomCat= () =>  {

  const history = useHistory();

  function handlePage1(){
      history.push('/CRM/Page1'); 
  }
  function handlePage2(){
    history.push('/CRM/Page2'); 
}
function handlePage3(){
  history.push('/CRM/Page3'); 
}
  return (
    <div>
      <h2>
        welcome to cild 1 CRM
      </h2>
      <div className="btn-container">
      <button className="btn"onClick={()=>handlePage1()}>Page 1</button>
      <button className="btn" onClick={()=>handlePage2()}>Page 2</button>
      <button className="btn" onClick={()=>handlePage3()}>Page 3</button>
      </div>
    </div>
  );
}
export default RandomCat;