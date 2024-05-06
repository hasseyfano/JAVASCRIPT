userName = document.getElementById("name");
function myFunction() {
    document.getElementById("nameSubmitted").innerHTML = "Welcome " + userName.value;
    window.open(url, '_blank');

}