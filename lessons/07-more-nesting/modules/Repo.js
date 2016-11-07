import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>repo name{this.props.params.repoName}</h2>
        <h3>username{this.props.params.userName}</h3>
      </div>
    )
  }
})
