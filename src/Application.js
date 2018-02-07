import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import map from 'lodash/map';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };
    this.RestaurantRef = database.ref('/restaurants');
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      //console.log('AUTH_CHANGE', currentUser);
      this.setState({ currentUser });
      this.RestaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
      });
    });
  }
  
  // {map(restaurants, ( restaurant, key ) =>  <p key={key}>{ restaurant.name }</p> )}

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {
            currentUser && 
            <div>
              <NewRestaurant />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Application;
