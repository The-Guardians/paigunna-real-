var providerGoogle = new firebase.auth.GoogleAuthProvider();

function loginGoogle() {
    firebase.auth().signInWithPopup(providerGoogle)
        .then(function (result) {
            let token = result.credential.accessToken;
            let currentUser = result.user;

            console.log('Login Success');
            console.log(token);
            console.log(currentUser);

            let user = firebase.auth().currentUser;

            if (user != null) {
                let name = user.displayName;
                console.log(name);
                document.getElementById('profileName').innerHTML = name;
            }

        }).catch(function (reason) {
        console.log(reason.code);
        console.log(reason.message);
    });
}

function logoutGoogle() {
    firebase.auth().signOut()
        .then(function () {

            console.log('Signout Successful');

        }, function (error) {
            console.log('Signout Failed');
        });
}
