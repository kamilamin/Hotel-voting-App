import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, handleSelect, handleDeselect, votes, user } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <ul>
          {votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>)}
        </ul>
        {
          userHasSelected
          ? <button className='destructive' onClick={handleDeselect}>
              Nah, Never
            </button>
          : <button onClick={handleSelect}>
              Yeah, I'd go there
            </button>
        }
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
