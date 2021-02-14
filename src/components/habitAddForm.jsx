import React, { memo } from 'react';


const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };


  return (
    <form
      className="add-form"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <input 
        className="add-input"
        placeHolder="Input habit to add"
        type="text"
        ref={inputRef}
      />
      <button
        className="add-button"
      >
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
