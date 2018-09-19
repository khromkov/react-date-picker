import React from 'react';

const inlineBlockStyle = {
  display: 'inline-block'
}

export default class ReactInlineBlock extends React.Component {
  render() {
    const style = Object.assign({}, this.props.style, inlineBlockStyle);
    const props = Object.assign({}, this.props, { style: style });

    return <div {...props}/>;
  }
}
