function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const date = new Date();
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
 const dayName = days[date.getDay()];
 const monthName = monthNames[date.getMonth()];
 const year = date.getFullYear();
 document.getElementById("today").innerHTML = dayName + ', ' + date.getDate() + ' ' + monthName  + ' ' + year;
 document.getElementById("year").innerHTML = year;

