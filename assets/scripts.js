var opened = false;
function toggleNav() {
    document.getElementById("mySidenav").style.width = opened ? "0" : "250px";
    opened = !opened;
}