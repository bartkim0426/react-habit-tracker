import React, { Component } from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
         return { ...habit, count: habit.count +1 }
      } else {
        return item;
      }
    })
    this.setState({ habits:habits })
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    })
    this.setState({ habits:habits })
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits:habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}]
    this.setState({habits: habits})
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 }
      }
      return item
    })
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
};

export default App;
