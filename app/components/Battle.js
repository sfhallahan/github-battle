var React = require('react');

class Battle extends React.Component {
  render() {
    return (
      <div className='battle-container'>
        <div className='player'>
          <h2>Player One</h2>
          <input type='text' />
          <p className='button'>Submit</p>
        </div>
        <div className='player'>
          <h2>Player Two</h2>
          <input type='text' />
          <p className='button'>Submit</p>
        </div>
      </div>
    )
  }
}

module.exports = Battle;
