import React, { Component } from 'react'
import { fetchPosts } from '../action/postAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-dom';

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.fetchPosts}>Click me</button>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts:fetchPosts},dispatch)
}

export default connect(null,matchDispatchToProps)(ButtonComponent)
