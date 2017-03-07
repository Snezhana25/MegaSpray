function a() {
    countClick()
    timer();
}

function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2017,12,16); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('stop');
        elmnt.innerHTML = 'Акция завершена';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('hour');
    var elmntm = document.getElementById('min');
    var elmnts = document.getElementById('sec');
    elmnt.innerHTML =  hours;
    elmntm.innerHTML =   minutes;
    elmnts.innerHTML =   seconds;

    setTimeout(timer, 1000);
}

function countClick() {
    var num = 10;
    document.getElementById("number-1" ).innerHTML = num;
    document.getElementById("number-2" ).innerHTML = num;
    button_minus.onclick = function() {
        if (num > 0) {
            num --;
            document.getElementById("number-1").innerHTML = num;
            document.getElementById("number-2").innerHTML = num;  
        } else {
            document.getElementById("number-1"  ).innerHTML = "0";
            document.getElementById("number-2"  ).innerHTML = "0";
        }
    }       
};
     window.onload = function() {
        a();
}
