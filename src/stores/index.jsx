// Import section
// modules
import { observable, decorate, action, configure, autorun, computed } from "mobx"
import { reactLocalStorage } from 'reactjs-localstorage';
/* enforceActions is used for replacing useStrict in mobx:
@values 
'always' : very strict mode
'observed': will check that all modifications on state are done by actions only
'never' : false
*/
configure({ enforceActions: 'observed' })

/* Profile store : state management for profile page */
class ProfileStore {
    constructor() {
        const currentUserId = reactLocalStorage.get('userId');
        const allUserData = reactLocalStorage.getObject('allUserData');

        /* observables : state or variables that can be of any types (object array etc) and are to be observed */
        this.initDetails(allUserData[currentUserId]);

        /* autorun */
        autorun(() => {
            /* changing local storage on every detail update */
            const currentUserId = reactLocalStorage.get('userId');
            const allUserData = reactLocalStorage.getObject('allUserData');
            const currentUser = allUserData[currentUserId];
            if (!!currentUser && !!Object.keys(currentUser).length) {
                currentUser.userName = this.name;
                currentUser.surName = this.surname;
                currentUser.age = this.age;
                currentUser.gender = this.gender;
                reactLocalStorage.setObject('allUserData', allUserData);
            }
        });

    }

    initDetails = (currentUser) => {
        if (!!currentUser && !!Object.keys(currentUser).length) {
            this.name = currentUser.userName;
            this.surname = currentUser.surName;
            this.age = currentUser.age;
            this.gender = currentUser.gender;
        }
    }
    /* actions : state modifiers */
    updateDetails = (detailType, detailValue) => {
        this[detailType] = detailValue;
    }
}
decorate(ProfileStore, {
    name: observable,
    surname: observable,
    age: observable,
    gender: observable,
    updateDetails: action,
    initDetails: action,
});

/* Login store : state management for login page */
class LoginStore {

    /* observables : state or variables that can be of any types (object array etc) and are to be observed */
    userName = "";
    password = "";
    errorMessage = "";
    /* computations : calculations on store */
    get isValidLogin() {
        return !!this.userName && !!this.password
    }
    get authenticateUser() {
        const allUserData = reactLocalStorage.getObject('allUserData');
        const loggedInUser = allUserData.find((user) => user.userName.toLowerCase() === this.userName.trim().toLowerCase());
        const isAuthorizedUser = !!loggedInUser && !!Object.entries(loggedInUser).length;
        const isAuthenticatedUser = isAuthorizedUser && loggedInUser.password === this.password;
        return { isAuthenticatedUser, loggedInUser };
    }
    /* actions : state modifiers */
    updateDetails = (detailType, detailValue) => {
        this[detailType] = detailValue;
    }

    resetLoginDets = (loginDets) => {
        for (let detailCount = 0; detailCount < loginDets.length; detailCount++) {
            this[loginDets[detailCount]] = '';
        }
    }
    setErrorMessage = (errorMessage = 'All fields are required!!') => {
        this.errorMessage = errorMessage;
        const _this = this;
        // reset error message
        setTimeout(() => {
            _this.resetLoginDets(['errorMessage']);
        }, 5000);
    }
    attemptToLogin = () => {
        if (this.isValidLogin) {
            const userDetails = this.authenticateUser;
            if (userDetails.isAuthenticatedUser) {
                // valid user
                reactLocalStorage.setObject('userId', userDetails.loggedInUser.id);
                window.location.href = '/profile';
            } else {
                this.setErrorMessage('Username or password incorrect!!');
            }
        } else {
            this.setErrorMessage();
        }
        // reset user data
        this.resetLoginDets(['userName', 'password']);
    }
}
decorate(LoginStore, {
    userName: observable,
    password: observable,
    errorMessage: observable,
    updateDetails: action,
    resetLoginDets: action,
    setErrorMessage: action,
    attemptToLogin: action,
    isValidLogin: computed,
    authenticateUser: computed
});

/* Root store : for handling multiple stores altogether */
class RootStore {
    constructor() {
        this.loginStore = new LoginStore(this)
        this.profileStore = new ProfileStore(this)
    }
}
export default RootStore;