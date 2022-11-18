import React, { useState } from 'react';
import style from "./css/dataSet.module.css";
import MorData from './MorData';

const DataSet = ({todoDatas}) => {

    const [toggle, setToggle] = useState(false)

    const {title, des}= todoDatas

    const toggleHandler = ()=>{
        setToggle(!toggle)
    }
    return (
        <div className={ style.dataSet }>
            <article>
                    <div>
                    <div><h1 className={ style.h1 }>{ title }</h1></div>
                    <div><button className={ style.toggle } onClick={ toggleHandler }>{ toggle ? 'Less' : 'More' }</button></div>
                    <MorData des={ des } toggle={ toggle } />
                    
                    </div>
                
                    
            </article>
        </div>
    );
};

export default DataSet;