import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import NameList from './component/NameList';
import Tabletop from 'tabletop';
import { find } from 'lodash';
import Loader from 'react-loader-spinner';

function App() {
  const [nameList, setNameList] = useState([]);
  const [values, setValues] = useState({
    selectedNameList: [],
  });

  useEffect(() => {
    Tabletop.init({
      key: '1nR-4bQXkOAuj-mq1dka3rD73_eblVh0DL1rzPcyhzy0',
      callback: googleData => {
        setNameList([...googleData]);
      },
      simpleSheet: true,
    });
  }, []);

  const onClick = (name) => {
    let temp = [...values.selectedNameList];
    if(!find(temp, name)) {
      temp.push(name);
    }
    setValues({...values, selectedNameList: temp});
  }

  const removeSelected = (index) => {
    let temp = [...values.selectedNameList.filter(function(el){ return el !== values.selectedNameList[index]; })];
    setValues({...values, selectedNameList: temp});
  };

  const loader = nameList.length > 0 ? false : true;

  return (
    <div className="container">
       {!!loader ? 
       <div className="loadSpinner">
         <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
        /></div> :
      <div>
        <Header selectedNameList={values.selectedNameList} onClick={removeSelected} />
        <NameList nameList={nameList} onClick={onClick} />
      </div>}
    </div>
  );
}

export default App;
