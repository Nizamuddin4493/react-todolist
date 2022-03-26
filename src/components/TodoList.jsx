import React from 'react';
// import PropTypes from 'prop-types';

function TodoList() {
  // const { title } = props;
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
              <input type="text" className="input-field" Placeholder="Enter your Today's Activities" />
              <input type="button" value="Enter" className="input-btn" Placeholder="Enter your Today's Activities" />
            </form>
          </div>
          {/* <div>ss</div> */}
        </div>
      </div>
    </>
  );
}

export default TodoList;

// TodoList.propTypes = {
//   title: PropTypes.string.isRequired,
// };
