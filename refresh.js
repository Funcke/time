var myVar = setInterval(refresh, 1000);
setTimeout(refresh, 1000);
function refresh(){
    var currentdate = new Date();
    document.getElementById("time").innerHTML = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
    if((currentdate.getHours() >= 19 && currentdate.getHours() < 24)  || (currentdate.getHours() >= 0 && currentdate.getHours() < 6))
        document.body.style.background = 'url("night-sky-16781.png")';
    if(currentdate.getHours() >= 6 && currentdate.getHours() <= 7)
        document.body.style.background = 'url("morning-mist-wallpapers-198.jpg")';
    if(currentdate.getHours() >=8 && currentdate.getHours() <= 16)
        document.body.style.background = 'url("jkbOTFK.jpg")';
    if(currentdate.getHours() >=17 && currentdate.getHours() < 19)
        document.body.style.background = 'url("sunset-hd-wallpapers-8.jpg")';
}