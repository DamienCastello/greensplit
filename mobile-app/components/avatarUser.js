
import React from 'react';
import { Image } from 'react-native';


class UserHome extends React.Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  render() {
      return <Image source={{ uri: `${this.props.avatar}` }} style={{width:150, height:150 }}/>
  }
}

export default UserHome
