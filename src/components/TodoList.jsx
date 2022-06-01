import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function TodoList() {
  // const { title } = props;
  const [inputList, setinputList] = useState('Salam Nizam');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItem) => [...oldItem, inputList]);
  };

  return (
    <>
      <div className="todoAppBody">
        <div className="header">
          <h1>Todo List App.</h1>
          <h4>keep your daily Activites Tracks.</h4>
        </div>
        <div className="input-section">
          <div className="input-dev">
            <form action="/" className="input-dev">
              <input type="text" className="input-field" onChange={itemEvent} Placeholder="Enter your Today's Activities" />
              <input type="button" value="Enter" onClick={listOfItems} className="input-btn" />
            </form>
          </div>
          {/* <div>ss</div> */}
        </div>
        <div>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemVal) => <li key=""> {itemVal}</li>)}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TodoList;

// TodoList.propTypes = {
//   title: PropTypes.string.isRequired,
// };
