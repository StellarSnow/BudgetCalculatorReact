import { useState } from "react";

const AddTransaction = (props) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const onDescriptionChangeHandler = (event) => {  
    setDescription(event.target.value);
  }

  const onValueChangeHandler = (event) => { 
    setValue(event.target.value);
  }

  const onButtonClickHandler = (event) => {  
    props.addTransaction(description, +value);
    document.querySelector('.add__description').value = '';
    document.querySelector('.add__value').value = '';
  }

  return (
    <div className="add">
      <div className="add__container">
        <input type="text" className="add__description" placeholder="Add description" onChange={onDescriptionChangeHandler}/>
        <input type="number" className="add__value" placeholder="Value" onChange={onValueChangeHandler}/>
        <button className="add__btn" onClick={onButtonClickHandler}><i className="ion-ios-checkmark-outline"></i></button>
      </div>
    </div>
  );
}

export default AddTransaction;