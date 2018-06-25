var providerGoogle = new firebase.auth.GoogleAuthProvider();

function loginGoogle() {
    firebase.auth().signInWithPopup(providerGoogle)
        .then(function (result) {
            let token = result.credential.accessToken;
            let currentUser = result.user;

            console.log('Login Success');
            console.log(token);
            console.log(currentUser);
            document.getElementById('popuplog').style.display = 'none';
            document.getElementById('accountbtn').style.display = 'block';
            document.getElementById('signoutbtn').style.display = 'block';
            document.getElementById('name').style.display = 'block';
            document.getElementById('tel').style.display = 'block';
            document.getElementById('email').style.display = 'block';
            document.getElementById('logoDefault').style.display = 'none';
            document.getElementById('cusNameAndLogo').style.display = 'block';

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
