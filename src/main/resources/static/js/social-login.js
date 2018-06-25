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
            document.getElementById('email').style.display = 'block';
            document.getElementById('logoDefault').style.display = 'none';
            document.getElementById('cusNameAndLogo').style.display = 'block';


            let user = firebase.auth().currentUser;

            if (user != null) {
                let name = user.displayName;
                let email = user.email;
                let srcimg = user.photoURL;
                $('#fullName').val(name);
                $('#mail').val(email);
                $('#cusLogo').attr('src', srcimg);
                $('#cusLogo1').attr('src', srcimg);
                document.getElementById('cusName').innerHTML = name;
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
