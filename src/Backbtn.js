import React from 'react';
import {useHistory} from 'react-router-dom';

const Backbtn = () => {
   
    const history = useHistory();
    const handleBack=()=>{
         history.push('/')
         history.push('/CRM')
    }
    return (
        <div>
             <button className="btn" onClick={()=>handleBack()}>Back</button>
        </div>
    );
};

export default Backbtn;