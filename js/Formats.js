function formatday(day){
    switch(day){
        case 0:
            return "Domingo";

        case 1:
            return "Lunes";

        case 2:
            return "Martes";
        
        case 3:
            return "Miercoles";
        
        case 4:
            return "Jueves";

        case 5:
            return "Viernes";
     
        case 6:
            return "Sabado";
        }
}


function formatmonth(month){
    switch(month){
        case 0:
            return "Enero";

        case 1:
            return "Febrero";

        case 2:
            return "Marzo";
        
        case 3:
            return "Abril";
        
        case 4:
            return "Mayo";

        case 5:
            return "Junio";
     
        case 6:
            return "Julio";

        case 7:
            return "Agosto";
    
        case 8:
            return "Lunes";
    
        case 9:
            return "Martes";
            
        case 10:
            return "Miercoles";
            
        case 11:
            return "Jueves";
        }
}

function formattime(time){
    if(time < 10){
        return "0" + time;
    }else{
        return time;
    }
}