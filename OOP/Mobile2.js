function Mobile(name,id) {
    this.id = id;
    this.name = name;
    this.battery = 100;
    this.status = false;
    this.message = "";
    this.inbox = [];
    this.sentMess = [];

    this.changeStatus = function () {
        this.status = !this.status;
    }
    this.chargeBattery = function () {
        this.battery = 100;
        return this.battery;
    }
    this.setMessage = function (message) {
        this.message = message;
    }
    this.sendMess = function (message, mobile) {
        mobile.setMessage(message);
    }
    this.getMess = function () {
        return this.message;
    }
    this.viewInbox = function () {
        return this.inbox;
    }
    this.viewSentMess = function () {
        return this.sentMess;
    }
}

let nokia = new Mobile("Nokia Xperia","nokia");

let iphone = new Mobile("iPhone","iphone");


document.getElementById("nokiaFunction").style.display = "none";
document.getElementById("namenokia").innerHTML = nokia.name;
document.getElementById("batterynokia").innerHTML = nokia.battery + "%";
document.getElementById("onOffnokia").innerHTML = nokia.status ? "On" : "Off";

document.getElementById("iphoneFunction").style.display = "none";
document.getElementById("nameiphone").innerHTML = iphone.name;
document.getElementById("batteryiphone").innerHTML = iphone.battery + "%";
document.getElementById("onOffiphone").innerHTML = iphone.status ? "On" : "Off";

function changeStatus(mobile) {
    mobile.changeStatus();
    let id = mobile.id+"Function";
    if (mobile.status) {
        document.getElementById(id).style.display = "";
    }
    if (!mobile.status) {
        document.getElementById(id).style.display = "none";
    }
    document.getElementById("'"+"onOff"+mobile.id+"'").innerHTML = mobile.status ? "On" : "Off";
}

function chargeBattery(mobile) {
    if (mobile.battery == 100) {
        alert("Your phone is full");
    } else {
        mobile.chargeBattery();
        document.getElementById("battery"+mobile.id).innerHTML = mobile.battery + "%";
    }
}

function sendMess(mobile,otherPhone) {
    let message = document.getElementById(mobile.id).value;
    mobile.sendMess(message, otherPhone);
    mobile.sentMess.push(message);
    otherPhone.inbox.push(message);
    document.getElementById(mobile.id).value = "";
    mobile.battery -= 1;
    document.getElementById("battery"+mobile.id).innerHTML = mobile.battery + "%";
}

function viewInbox(mobile) {
    let inbox = mobile.viewInbox();
    let data = '';
    for (let i = 0; i < inbox.length; i++) {
        data += inbox[i] + "<br>";
    }
    document.getElementById("inbox"+mobile.id).innerHTML = data;
    mobile.battery -= 1;
    document.getElementById("battery"+mobile.id).innerHTML = mobile.battery + "%";
}
function viewSentMess(mobile) {
    let sentMess = mobile.viewSentMess();
    let data = "";
    for (let i = 0; i < sentMess.length; i++) {
        data += sentMess[i] + "<br>";
    }
    document.getElementById("sentMess"+mobile.id).innerHTML = data;
    mobile.battery -= 1;
    document.getElementById("battery"+mobile.id).innerHTML = mobile.battery + "%";
}
