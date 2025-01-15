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

                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>

                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>

                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span><span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
                <span onClick={() => toggleTask(task.id)} style={taskTextStyle}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={increment} style={buttonStyle}>
          Increment
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
  margin: '5px',
  padding: '10px 20px',
};

export default RandomCounter;
