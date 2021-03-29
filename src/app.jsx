import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar';

class App extends Component {
  state = {
      habits: [
          { id: 1, name: 'Reading', count: 0 },
          { id: 2, name: 'Running', count: 0 },
          { id: 3, name: 'Coding', count: 0 },
      ],
  };

  handleIncrement = (habit) => {
      // React에서 state를 직접적으로 수정하는 것은 좋지 않다 => spread operator로 새로운 배열 껍데기를 만들어 처리
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count++;
      // this.setState({ habits: habits }); // 키와 밸류과 동일한 이름이므로 하나로 생략
      this.setState({ habits });
  };

  handleDecrement = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({ habits });
  };

  handleDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]; 
    this.setState({ habits });
  };

  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <Habits  
      habits={this.state.habits} 
      onIncrement={this.handleIncrement} 
      onDecrement={this.handleDecrement} 
      onDelete={this.handleDelete} 
      onAdd={this.handleAdd}
      />
      </>
      );
  }
}

export default App;
