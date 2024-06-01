function clock()
{
    let sec = document.getElementById('second');
    let min = document.getElementById('minute');
    let hr = document.getElementById('hour');


var date = new Date();
var hours = date.getHours() % 12;
var ampm = date.getHours() >= 12 ? 'PM' : 'AM';

hours = hours === 0 ? 12 : hours;

var minutes = date.getMinutes();
var seconds = date.getSeconds();

var secondsDots = '';
for(var i=1;i<61;i++)
    {
        var rotation = i*6;
        if(i === seconds){
            secondsDots += '<div class= "dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            secondsDots += '<div class= "dot" style="transform: rotate('+rotation+'deg)"></div>'

        }
    }
    var minutesDots = '';
for(var i=1;i<61;i++)
    {
        var rotation = i*6;
        if(i === minutes){
            minutesDots += '<div class= "dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            minutesDots += '<div class= "dot" style="transform: rotate('+rotation+'deg)"></div>'

        }
    }
    var hoursDots = '';
for(var i=1;i<13;i++)
    {
        var rotation = i*30;
        if(i === hours){
           hoursDots += '<div class= "dot active" style="transform: rotate('+rotation+'deg)"></div>'
        }
        else{
            hoursDots += '<div class= "dot" style="transform: rotate('+rotation+'deg)"></div>'

        }
    }

    sec.innerHTML = secondsDots + '<b>' + ampm + '</b>' + '<h2>' + addzero(seconds) + '<br><span>Seconds</span>' + '</h2>';
    min.innerHTML = minutesDots + '<h2>' +addzero(minutes) + '<br><span>Minutes</span>' + '</h2>';
    hr.innerHTML = hoursDots + '<h2>' + addzero(hours) + '<br><span>Hours</span>' + '</h2>';

}

//ADD ZERO BEFORE SINGLE DIGIT NUMBER

function addzero(number)
{
    if(number < 10)
        {
            return '0'+ number;
        }
        return number;
}


setInterval(clock,1000);
