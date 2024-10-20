// 1.Create a 6 digit otp with combination of both alphabets and numbers
function otp(length){
    let can = '';
    let name = "charan0123456789";
    for (let i = 0; i < length; i++) {
     can += name[Math.floor(Math.random()*name.length)];
        }
        return can;
        }
        console.log(otp(6));
// // output : sa5269

// // 2.Take age as input from user and calculate the days from given age
function days(age) {
    let years = age * 365.25;
    let days = years.toFixed(0);
    return days;
    }
    let age = parseInt(prompt("Enter your age"));
    console.log(days(age));
    // output : 8036 days

// 3.Calculate the difference between the two dates and return the difference in years, months and days.
function dateDiff(firstDate, secondDate) {
    let firstDateObj = new Date(firstDate);
    let secondDateObj = new Date(secondDate);
    let diffTime = Math.abs(secondDateObj - firstDateObj);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
    let years = Math.floor(diffDays / 365.25);
    let months = Math.floor((diffDays % 365.25) /30.44);
    let days = Math.floor(diffDays % 30.44);
    return [years, months, days];
    }
    let firstDate = "2020-01-01";
    let secondDate = "2022-11-30";
    console.log(dateDiff(firstDate, secondDate));
    // o/p : (3) [2y, 10m, 29d]