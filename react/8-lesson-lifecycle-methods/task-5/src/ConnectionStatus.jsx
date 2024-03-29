import React, { Component } from 'react';
import './index.scss';

class ConnectionStatus extends Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({
        status: true,
      });
    });
    window.addEventListener('offline', () => {
      this.setState({
        status: false,
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener('online', () => {
      this.setState({
        status: true,
      });
    });
    window.removeEventListener('offline', () => {
      this.setState({
        status: false,
      });
    });
  }

  render() {
    return (
      <div className="status status_offline">
        {this.state.status ? 'online' : 'offline'}
      </div>
    );
  }
}
export default ConnectionStatus;
