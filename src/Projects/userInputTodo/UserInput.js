import React, { useState } from 'react';
import style from "./css/userInput.module.css";
import DataSet from './DataSet';
import { Data } from './TodoData';

const UserInput = () => {
    const [todoDatas, setTodoData] = useState(Data)
    const [titleData, setTitleData] = useState('')
    const [desData, setDesData] = useState('')

    const inputData = (e)=>{
        e.preventDefault();
        setTodoData( [...todoDatas ,{ id: new Date().getSeconds().toString(), title : titleData,des:desData }])
        setTitleData('');
        setDesData('')
    }

    return (
        <div>
            <form onSubmit={inputData} className={style.form}>
                <label>Title</label>
                <div><input value={titleData} onChange={(e)=>setTitleData(e.target.value.toUpperCase())} className={ style.input } type="text" /></div>
                <label>Description</label>
                <div><input value={ desData } onChange={ ( e ) => setDesData( e.target.value ) } className={ style.input } type="text" /></div>
                <button className={style.btn}>Submit</button>
            </form>
             {todoDatas.map((itm)=>( 
                <DataSet key={itm.id} todoDatas={itm}/>
             ))}
            
        </div>
    );
};

export default UserInput;