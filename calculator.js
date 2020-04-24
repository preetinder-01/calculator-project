// function for display
function dis(val){
document.getElementById("input").value+=val;
}
// function that clears the display
function clr(){
document.getElementById("input").value="";
}


//  function of evlauation
function evalu(){
    let a = document.getElementById("input").value;
    let b = eval(a);
    document.getElementById("input").value = b;
}