import React from 'react';

const EditTextInput = props => {

let inputType;
let bioAside = '';

if(props.userInfo === 'bio') {
   inputType = <textarea className="eu-input" type="text"
    value={props.value}
    onChange={ props.onChange }
    ></textarea>;
    bioAside = 'eu-text-aside';
} else {
   inputType = <input className="eu-input" type="text"
    value={props.value}
    onChange={ props.onChange }
    ></input>;
}

  return (

    <section className="ue-form-line" >
      <div className="ue-aside" id={bioAside}>
        <label className= "ue-label" >{ props.label }</label>
      </div>
      <div className="ue-input-contain" >
        {inputType}
      </div>
    </section>

  );
};

export default EditTextInput;
