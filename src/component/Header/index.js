import React from 'react';
import HeaderElement from '../HeaderElement';

function Header({selectedNameList, onClick}) {
  return (
    <div className="headerContainer">
      {selectedNameList.map((name, index) => <HeaderElement name={name} onClick={() => onClick(index)} key={index} />)}
    </div>
  );
}

export default Header;
