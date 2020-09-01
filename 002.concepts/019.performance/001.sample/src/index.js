import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class App extends React.Component {
  render() {
    return (
    <div>{_.join(['世界上只有一种真正的英雄，那就是认清生活的真相后', '仍然热爱生活！'], '###')}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));