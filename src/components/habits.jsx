import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  }

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  }

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  }

  handleInputChange = (event) => {
    console.log(event);
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    const name = this.props.value
    const id = Math.random().toString(36).substring(2);

    const habits = [...this.state.habits]
    habits.push({
      "name": name,
      "count": 0,
      "id": id
    })
    this.setState({ habits: habits })
    event.preventDefault();
  };

  handleAdd = name => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm
          value={this.props.value}
          onAdd={this.handleAdd}
        />
        <ul>
        {this.props.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
      <button
        className="habits-reset"
        onClick={this.props.onReset}
      >
        Reset All
      </button>
    </>
    );
  }
};

export default Habits;
