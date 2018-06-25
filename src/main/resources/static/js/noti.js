var n = 0;

function increaseNumber() {
    n = n + 1;
    document.getElementById('number').innerHTML = n;
    numnoti = n;
    zeroNumber();

}

function zeroNumber() {
    if (document.getElementById('number').innerHTML == 0) {
        document.getElementById('notiminibox').style.display = 'none';

    }
    else {
        document.getElementById('notiminibox').style.display = 'block';
    }
}

function decreaseNumber() {
    if (n >= 1)
        n = n - 1;
    document.getElementById('number').innerHTML = n;
    numnoti = n;
    zeroNumber();

}

var count = 0;

function addNotiboxPayFail() {
    increaseNumber();

    var notiboxalert = document.createElement('div');

    notiboxalert.className = 'alert btn';
    notiboxalert.setAttribute('id', count);
    count++;
    var id = notiboxalert.getAttribute('id');

    var contentalert = document.createTextNode("Error! Payment is not successful.");

    var text = "Error! Payment is not successful.";

    notifyMe(text);

    Object.assign(notiboxalert.style,{width:"95%"});

    notiboxalert.innerHTML = notiboxalert.innerHTML + "<span class='closebtn' onclick='removeNotibox(id);decreaseNumber();' ></span>";

    notiboxalert.addEventListener('click', function () {
        removeNotibox(id);
        decreaseNumber();
    });


    notiboxalert.appendChild(contentalert);

    document.getElementById('notimodule').appendChild(notiboxalert);
}

function addNotiboxPaySuccess() {
    increaseNumber();
    var notiboxsuccess = document.createElement('div');

    notiboxsuccess.className = 'alert success btn';
    notiboxsuccess.setAttribute('id', count);
    count++;
    var id = notiboxsuccess.getAttribute('id');

    var contentsuccess = document.createTextNode("Success! Payment completed.");

    var text = "Success! Payment completed.";

    notifyMe(text);

    Object.assign(notiboxsuccess.style,{width:"95%"});

    notiboxsuccess.innerHTML = notiboxsuccess.innerHTML + "<span class='closebtn' onclick='removeNotibox(id);decreaseNumber();' ></span>";

    notiboxsuccess.addEventListener('click', function () {
        removeNotibox(id);
        decreaseNumber();
    });

    notiboxsuccess.appendChild(contentsuccess);

    document.getElementById('notimodule').appendChild(notiboxsuccess);
}

function addNotiboxUserCall() {
    increaseNumber();
    var notiboxInfo = document.createElement('div');

    notiboxInfo.className = 'alert info btn';
    notiboxInfo.setAttribute('id', count);
    count++;
    var id = notiboxInfo.getAttribute('id');

    var contentInfo = document.createTextNode("Info! User call service at " + placeName);

    var text = "Info! User call service at " + placeName;

    notifyMe(text);

    Object.assign(notiboxInfo.style,{width:"95%"});

    notiboxInfo.innerHTML = notiboxInfo.innerHTML + "<span class='closebtn' onclick='removeNotibox(id);decreaseNumber();' ></span>";

    notiboxInfo.addEventListener('click', function () {
        removeNotibox(id);
        decreaseNumber();
    });

    notiboxInfo.appendChild(contentInfo);

    document.getElementById('notimodule').appendChild(notiboxInfo);
}

function addNotiboxProvidersAccept() {
    increaseNumber();
    var notiboxInfo = document.createElement('div');

    notiboxInfo.className = 'alert info btn';
    notiboxInfo.setAttribute('id', count);
    count++;
    var id = notiboxInfo.getAttribute('id');

    var contentInfo = document.createTextNode("Info! Service provider accepted. Please wait 5 minutes until it arrives.");

    var text = "Info! Service provider accepted. Please wait 5 minutes until it arrives.";

    notifyMe(text);

    Object.assign(notiboxInfo.style,{width:"95%"});

    notiboxInfo.innerHTML = notiboxInfo.innerHTML + "<span class='closebtn' onclick='removeNotibox(id);decreaseNumber();' ></span>";

    notiboxInfo.addEventListener('click', function () {
        removeNotibox(id);
        decreaseNumber();
    });

    notiboxInfo.appendChild(contentInfo);

    document.getElementById('notimodule').appendChild(notiboxInfo);
}

function addNotiboxNotAccept() {
    increaseNumber();

    var notiboxWarning = document.createElement('div');

    notiboxWarning.className = 'alert warning btn';
    notiboxWarning.setAttribute('id', count);
    count++;

    var id = notiboxWarning.getAttribute('id');

    var contentWarning = document.createTextNode("Warning! Service provider is not accept. Please try again later.");

    var text = "Warning! Service provider is not accept. Please try again later.";

    Object.assign(notiboxWarning.style,{width:"95%"});

    notiboxWarning.innerHTML = notiboxWarning.innerHTML + "<span class='closebtn' onclick='removeNotibox(id);decreaseNumber();' ></span>";

    notifyMe(text);

    notiboxWarning.addEventListener('click', function () {
        removeNotibox(id);
        decreaseNumber();
    });

    notiboxWarning.appendChild(contentWarning);

    document.getElementById('notimodule').appendChild(notiboxWarning);
}

function removeNotibox(id) {

    var test = document.getElementById(id);
    test.parentNode.removeChild(test);
}


function notifyMe(textBody) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        console.log("1");
        // If it's okay let's create a notification
        var notification = new Notification("Hello", {
            icon: "https://www.picz.in.th/images/2018/05/28/znlQ1k.png",
            body: textBody

        });

    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hello", {
                    icon: "https://www.picz.in.th/images/2018/05/28/znlQ1k.png",
                    body: textBody

                });
            }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}
