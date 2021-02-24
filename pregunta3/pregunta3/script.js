function sendData(){
    var name = document.getElementById("name").value
    var orientation = document.getElementById("orientation").value 
    var quantity = document.getElementById("quantity").value 

    if(quantity>50){
        var status = ("+ " +50);
    }else if(quantity<50){
        var status = ("- " +50);
    }else if (quantity=50){
        var status = ("= " +50);
    }

    document.getElementById("Data").insertRow(-1).innerHTML = '<tr><td>'+name+'<tr><td>'+orientation+'<tr><td>'+quantity+'<tr><td>'+status+'<tr><td>'
}

function getGanador(){
    
}