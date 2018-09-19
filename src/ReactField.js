import React from 'react'
import assign from 'object-assign'

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  focus(){
    this.node.focus()
  }

  onChange(event) {
    if (this.props.stopChangePropagation){
      event.stopPropagation()
    }

    this.props.onChange(event.target.value, event)
  }

  render(){
    let onChange = null

    if (typeof this.props.onChange === 'function'){
      //only pass our onChange if the user provided one
      //so the React warning is still displayed if the user didn't provide onChange
      //but provided value
      onChange = this.onChange
    }

    const inputProps = assign({}, this.props)

    delete inputProps.stopChangePropagation

    return <input {...inputProps} onChange={onChange} ref={node => { this.node = node; }}/>
  }
}

Field.defaultProps = {
  stopChangePropagation: true,
  type: 'text'
}
