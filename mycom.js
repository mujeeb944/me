import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };
  import React, { useState } from 'react';

  const RandomCounter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const randomize = () => setCount(Math.floor(Math.random() * 100));
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Random Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment} style={buttonStyle}>
            Increment
          </button>
          <button onClick={decrement} style={buttonStyle}>
            Decrement
          </button>
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
        </div>
      </div>
    );
  };
  
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  
  export default RandomCounter;
  
  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1>To-Do App</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={buttonStyle}>
          Add Task
        </button>
      </div>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...listItemStyle,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  margin: '20px 0',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const taskTextStyle = {
  cursor: 'pointer',
  flex: 1,
  textAlign: 'left',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TodoApp;
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };
  import React, { useState } from 'react';

  const RandomCounter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const randomize = () => setCount(Math.floor(Math.random() * 100));
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Random Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment} style={buttonStyle}>
            Increment
          </button>
          <button onClick={decrement} style={buttonStyle}>
            Decrement
          </button>
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
        </div>
      </div>
    );
  };
  
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  
  export default RandomCounter;
  
  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1>To-Do App</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={buttonStyle}>
          Add Task
        </button>
      </div>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...listItemStyle,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  margin: '20px 0',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const taskTextStyle = {
  cursor: 'pointer',
  flex: 1,
  textAlign: 'left',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TodoApp;
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };
  import React, { useState } from 'react';

  const RandomCounter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const randomize = () => setCount(Math.floor(Math.random() * 100));
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Random Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment} style={buttonStyle}>
            Increment
          </button>
          <button onClick={decrement} style={buttonStyle}>
            Decrement
          </button>
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
        </div>
      </div>
    );
  };
  
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  
  export default RandomCounter;
  
  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1>To-Do App</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={buttonStyle}>
          Add Task
        </button>
      </div>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...listItemStyle,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  margin: '20px 0',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const taskTextStyle = {
  cursor: 'pointer',
  flex: 1,
  textAlign: 'left',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TodoApp;
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };
  import React, { useState } from 'react';

  const RandomCounter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const randomize = () => setCount(Math.floor(Math.random() * 100));
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Random Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment} style={buttonStyle}>
            Increment
          </button>
          <button onClick={decrement} style={buttonStyle}>
            Decrement
          </button>
          <button onClick={randomize} style={buttonStyle}>
            Randomize
          </button>
        </div>
      </div>
    );
  };
  
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  
  export default RandomCounter;
  
  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1>To-Do App</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={buttonStyle}>
          Add Task
        </button>
      </div>
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...listItemStyle,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  margin: '20px 0',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const taskTextStyle = {
  cursor: 'pointer',
  flex: 1,
  textAlign: 'left',
};

const deleteButtonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default TodoApp;
