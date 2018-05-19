function looping1(string){
    var row = "";

    for(var i = 0; i < string; i++){
        for(var a = 0; a < i; a++){
            row = row + "a";
        }

        
    }
    
    return row;
}

console.log(looping1(3));