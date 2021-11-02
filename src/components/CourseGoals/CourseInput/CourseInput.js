import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from'./CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isError, setIsError] = useState(false)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    event.target.value.trim() === '' ? setIsError(true) : setIsError(false)
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() === '') {
      setIsError(true)
      return
    }
    setIsError(false)
    props.onAddGoal(enteredValue);
  };

  // const currentClass = isError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${isError && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
