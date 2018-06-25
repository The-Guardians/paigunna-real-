document.getElementById('popuplog').style.display = 'block';
document.getElementById('accountbtn').style.display = 'none';
document.getElementById('signoutbtn').style.display = 'none';
document.getElementById('name').style.display = 'none';
document.getElementById('tel').style.display = 'none';
document.getElementById('email').style.display = 'none';
document.getElementById('price').style.display = 'none';
document.getElementById('itemPay').style.display = 'none';
document.getElementById('omise').style.display = 'none';
document.getElementById('select').disabled = true;
document.getElementById('cusNameAndLogo').style.display = 'none';
document.getElementById('call').style.display = 'none';
document.getElementById('wait').style.display = 'none';
document.getElementById('coming').style.display = 'none';
document.getElementById('logoDefault').style.display = 'block';
document.getElementById('notiminibox').style.display = 'none';

/*--test--*/
document.getElementById('test').style.display = 'none';
/*----*/


// function statusService() {
//         $('#toggle-event').change(function() {
//             $(this).prop('check');
//         })
// }

function callService() {
    document.getElementById('wait').style.display = 'none';
    document.getElementById('coming').style.display = 'none';
    document.getElementById('call').style.display = 'block';
    document.getElementById('price').style.display = 'block';
    document.getElementById('select').disabled = false;
}

function wait() {
    if (document.getElementById('itemPay').style.display == 'none') {
        time();
        document.getElementById('call').style.display = 'none';
        document.getElementById('wait').style.display = 'block';
        document.getElementById('select').disabled = true;

        /*--test--*/
        document.getElementById('test').style.display = 'block';
        /*-----*/
    }
}

function coming() {
    document.getElementById('wait').style.display = 'none';
    document.getElementById('coming').style.display = 'block';
    document.getElementById('itemPay').style.display = 'block';
    document.getElementById('service').disabled = true;
    clearTime();
}

function setTextConfirm() {
    if (document.getElementById('itemPay').style.display != 'none') {
        document.getElementById('textConfirm').innerHTML = "You have an outstanding balance. Please pay";
        document.getElementById('conbtn').style.display = 'none';
        document.getElementById('goPaybtn').style.display = 'block';
    } else {
        document.getElementById('textConfirm').innerHTML = "Are you sure ?";
        document.getElementById('goPaybtn').style.display = 'none';
        document.getElementById('conbtn').style.display = 'block';
    }
}

var wait_time = 10; //5 minute
var vela;

function time() {
    wait_time = 10;
    vela = setInterval("decrease_num()", 1000);
}
function decrease_num() {
    if (wait_time > 0) {
        var show_place = document.getElementById('show_text');
        var min = (wait_time / 60);
        var min1 = Math.floor(min);
        var sec = (wait_time % 60);
        show_place.innerHTML = "Wait(" + min1 + ":" + sec + " second)";
        wait_time--;
    } else {
        if (wait_time == 0) {
            clearTime();
            document.getElementById('wait').style.display = 'none';
            document.getElementById('call').style.display = 'block';
            addNotiboxNotAccept();

        }
    }
}

function clearTime(){
    clearInterval(vela);
}

function testpost(){

    var xhr = new XMLHttpRequest();
    var url = '/users';
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.firstName +" , "+ json.lastName);
        }
    };
    var data = JSON.stringify({"email": "hey@mail.com", "firstName": "oiuwoiu","lastName": "qweqwe","socialId":"134568949561"});
    xhr.send(data);

}
