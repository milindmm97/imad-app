var button = document.getElementById('counter');
var couner=0;
button.onClick = function(){
    
    
    //render variable
    counter = couner +1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
    
}
