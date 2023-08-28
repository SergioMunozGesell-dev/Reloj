setInterval(function fecha(){
    var date = new Date();
    document.getElementById("dia").innerHTML = formatday(date.getDay()) + " "+ date.getDate();
    document.getElementById("mes").innerHTML = formatmonth(date.getMonth());
    document.getElementById("anio").innerHTML = date.getFullYear();
    document.getElementById("hora").innerHTML = date.getHours();
    document.getElementById("min").innerHTML = formattime(date.getMinutes());
    document.getElementById("seg").innerHTML = formattime(date.getSeconds());
},1000);

let fecha = new Date();
console.log(fecha.getDay());

