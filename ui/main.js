console.log("loaded");
var button = document.getElementById('counter');
var counter=0;
button.onclick = function() {
    console.log("clicked");
    
    
    //render variable
    counter =counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
