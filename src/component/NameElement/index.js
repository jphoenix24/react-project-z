import React from 'react';

function NameElement({name, onClick}) {
  return (
    <div className="nameElement" onClick={onClick}>
        <div className="avatarDiv">
            {`${name.first_name[0]}${name.last_name[0]}`}
        </div>
            {`${name.first_name} ${name.last_name}`}
    </div>
  );
}

export default NameElement;