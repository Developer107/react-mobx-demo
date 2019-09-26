// Import section
// modules
import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { observer, inject } from "mobx-react";

const UserData = [
  {
    id: 0,
    userName: 'Jack',
    surName: 'Hill',
    age: 27,
    gender: 'male',
    password: 'developer7',
    photos: [],
  }, {
    id: 1,
    userName: 'Jameson',
    surName: 'Mount',
    age: 27,
    gender: 'male',
    password: 'developer10',
    photos: [],
  }, {
    id: 2,
    userName: 'Jim',
    surName: 'Resort',
    age: 27,
    gender: 'male',
    password: 'developer107',
    photos: [],
  },
];

const Login = inject("loginStore")(
  observer(class Login extends React.PureComponent {
    constructor() {
      super();
      this.onEnterKey = this.onEnterKey.bind(this);
      this.updateDetails = this.updateDetails.bind(this);
    }

    componentWillMount() {
      if (!Object.entries(reactLocalStorage.getObject('allUserData')).length) {
        reactLocalStorage.setObject('allUserData', UserData);
      }
      if (reactLocalStorage.get('userId')) {
        window.location.href = '/profile';
      }
    }

    onEnterKey(event) {
      if (event.key === 'Enter') {
        const { loginStore } = this.props;
        const { attemptToLogin } = loginStore;
        // call to action
        attemptToLogin();
      }
    }
    updateDetails(e) {
      const { loginStore } = this.props;
      const { updateDetails } = loginStore;
      // call to action
      updateDetails(e.target.name, e.target.value);
    }
    render() {
      const { loginStore } = this.props;
      const { userName, password, errorMessage, attemptToLogin } = loginStore;

      return (
        <div>
          <div className="login-container">
            <div className="login-input-label" key="username">
              User Name:<input
                value={userName}
                onKeyPress={this.onEnterKey}
                name="userName"
                onChange={this.updateDetails}
              />
            </div>
            <div className="login-input-label" key="password">
              Password:<input
                type="password"
                onKeyPress={this.onEnterKey}
                value={password}
                name="password"
                onChange={this.updateDetails}
              />
            </div>
            <div className="btn" key="login" onClick={attemptToLogin}>Login</div>
            {!!errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
          <span>NOTE:</span>
          <br />
          <small>* Details of newly registered user will be removed on clearing local storage.</small>
          <br />
          <small>* Uploaded photos for all users will be removed on clearing local storage.</small>
        </div>

      );
    }
  }))

export default Login;
