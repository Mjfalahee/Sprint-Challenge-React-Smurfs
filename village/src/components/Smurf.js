import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  const deleteHandler = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  }

  // const updateHandler = e => {
  //   e.preventDefault();
  //   props.setActive(props.id);
  // }


  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="del-btn" onClick={deleteHandler}>Delete</button>
      {/* <button className="upd-btn" 
        onClick={updateHandler}> Update </button> */}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

