function monthName(m){
    switch(m){
        case 1:
            m = 'JAN'
            break;
        case 2:
            m = 'FEB'
            break;
        case 3:
            m = 'MAR'
            break;
        case 4:
            m = 'APR'
            break;
        case 5:
            m = 'MAY'
            break;
        case 6:
            m = 'JUN'
            break;
        case 7:
            m = 'JUL'
            break;
        case 8:
            m = 'AUG'
            break;
        case 9:
            m = 'SEP'
            break;
        case 10:
            m = 'OCT'
            break;
        case 11:
            m = 'NOV'
            break;
        case 12:
            m = 'DEC'
            break;
        default:
            m = 'error'

        }
        return m;
    }

var date = new Date()
var year = date.getFullYear()
var month = monthName(date.getMonth()+1)
var day = date.getDate()
    day = day<10?'0'+day:day
var hour = date.getHours()
    hour = hour<10?'0'+hour:hour
var minute = date.getMinutes()
    minute = minute<10?'0'+minute:minute

var clockYear = document.querySelector('div.year span')
var clockMonth = document.querySelector('div.month span')
var clockDay = document.querySelector('div.day span')
var clockHour = document.querySelector('div.hour span')
var clockMinute = document.querySelector('div.minute span')

clockYear.innerHTML = year
clockMonth.innerHTML = month
clockDay.innerHTML = day
clockHour.innerHTML = hour
clockMinute.innerHTML = minute

var am = document.querySelector('div.am > div')
var pm = document.querySelector('div.pm > div')

if(hour>=0 && hour<=12){
    pm.style.backgroundColor = '#115b01'
}else{
    am.style.backgroundColor = '#115b01'
}
