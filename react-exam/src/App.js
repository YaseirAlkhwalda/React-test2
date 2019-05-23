import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User';
import Profile from './components/Profile';

const url = 'http://uinames.com/api/?amount=5&ext';

class App extends React.Component {
  state = {
    users: [],
    selectedUser: {},
    loading: false,
  };

  fetchUsers = () => {
    axios
      .get(url)
      .then(response => this.setState({ users: response.data, loading: false }))
      .catch(err => alert(`check ${err} there is wrong`));
  };

  getUserProfile = name => {
    this.state.users.map(user => {
      if (user.name === name) {
        this.setState({
          selectedUser: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            gender: user.gender,
            age: user.age,
            region: user.region,
            img: user.photo,
          },
          loading: true,
        });
      }
      return user;
    });
  };

  render() {
    const { selectedUser, users, loading } = this.state;

    return (
      <div className="ui container row">
        <div className="column">
          <button onClick={this.fetchUsers}> Get Users! </button>
          {users.map(user => (
            <User
              key={user.email}
              user={user}
              getUserProfile={() => this.getUserProfile(user.name)}
            />
          ))}
        </div>

        <div className="column">
          {loading ? (
            <Profile
              name={selectedUser.name}
              surname={selectedUser.surname}
              email={selectedUser.email}
              gender={selectedUser.gender}
              age={selectedUser.age}
              region={selectedUser.region}
              img={selectedUser.img}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
