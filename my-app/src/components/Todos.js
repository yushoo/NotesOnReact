import React, {Component} from 'react';

class Todos extends Component {
    state = {
        todos: [
          {
            id: 1,
            title: 'take out the trash',
            completed: false
          },
          {
            id: 2,
            title: 'Dinner with friends',
            completed: false
          },
          {
            id: 3,
            title: 'meeting',
            completed: false
          }
        ]
      }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Todos</h1>
            </div>
        );
    }
}

export default Todos; 