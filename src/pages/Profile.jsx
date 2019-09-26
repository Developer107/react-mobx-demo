// Import section
// modules
import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

class Profile extends Component {
    constructor() {
        super()
        this.updateDetails = this.updateDetails.bind(this);
    }
    updateDetails(e) {
        const { profileStore } = this.props;
        const { updateDetails } = profileStore;
        // call to action
        updateDetails(e.target.name, e.target.value);
        // comment enforceActions in profileStore.jsx, comment above line and uncomment below line in this file to check validation on state modification by action
        // profileStore[e.target.name] = e.target.value;
    }
    logout() {
        reactLocalStorage.set('userId', '');
    }
    render() {
        const { profileStore } = this.props;
        return (
            <div>
                <div className='profile-edit-mode'>
                    <div>Name: {profileStore.name}</div>
                    <div>SurName: {profileStore.surname}</div>
                    <div>Age: {profileStore.age}</div>
                    <div>Gender: {profileStore.gender}</div>
                </div>
                <div className='profile-read-mode'>
                    <div>Name: <input value={profileStore.name} name='name' onChange={this.updateDetails} /></div>
                    <div>Surname: <input value={profileStore.surname} name='surname' onChange={this.updateDetails} /></div>
                    <div>Age: <input value={profileStore.age} name='age' onChange={this.updateDetails} /></div>
                    <div>Gender:
                        <div><input type="radio" value="female" name='gender' checked={profileStore.gender === "female"} onChange={this.updateDetails} />Female</div>
                        <div><input type="radio" value="male" name='gender' checked={profileStore.gender === "male"} onChange={this.updateDetails} />Male</div>
                    </div>
                </div>
                <Link to="/" onClick={this.logout}>Logout</Link>
            </div>
        );
    }
}

export default inject("profileStore")(observer(Profile));