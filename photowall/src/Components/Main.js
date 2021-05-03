import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component {
  render() {
    return (
      <div>
        <Title title = {'To Dos'} />
        <List tasks = {['Mow the Lawn', 'Walk the Dog']} />
        <List tasks = {['Hose the Driveway', 'Finish the Laundry']} />
      </div>
    );
  }
}

export default Main;
