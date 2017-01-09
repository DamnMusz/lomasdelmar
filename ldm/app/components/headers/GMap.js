import React from 'react';
import autoBind from 'react-autobind';

class GMap extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <h3>Map will go here</h3>
    )
  }
};

export default GMap;
