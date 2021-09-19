// Set up React
import React from 'react';
import ReactDOM from 'react-dom';

// Import styling and components
import './index.css';
import Navigation from './components/Navigation';
import App from './App';
import GameRoom from './components/GameRoom';
import Settings from './components/settingsPanel';
import * as serviceWorker from './serviceWorker';

import db from './config';

// Set up Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Set up routing
import {Router, Route, Link} from 'react-router-dom';
import history from './history';


class Rooms extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    console.log("Mounted Rooms")
    this.getGameRooms();
  }

  getGameRooms = async() => {
    db.collection('rooms').get().then(
      (querySnapshot) => {
        var GameRooms = [];
        querySnapshot.forEach((doc) => {
          GameRooms.push({ id: doc.id, ...doc.data() })
        });
        console.log("Got here");
        this.setState({
          rooms: GameRooms
        });
      }
    ).catch(function(err) {
      console.log(err);
    })
  }

  addGameRoom() {
    db.collection('rooms').add({
      board: []
    });
  }

  render() {
    return (
      <>
        <button onClick={this.addGameRoom()}>Add Game Room</button>
        <h3>Rooms</h3>
        {
          this.state.rooms.map((rooms, index) => (
            <h5 key={index}>
              <Link to={`/rooms/${index + 1}`}>Game Room {index + 1}</Link>
            </h5>
          )
          )
        }
      </>
    )
  }
}

ReactDOM.render(
  <Router history={history}>
    <Navigation />
    <Route exact path="/" component={App}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/Settings" component={Settings}/>
    <Route exact path="/rooms/:id" component={GameRoom}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
