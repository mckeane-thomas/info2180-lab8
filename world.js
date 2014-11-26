window.onload = getClick;



//look up country by name typed in the text box and return an alert box with the information about the country
function getAlert(){
    var text = $("term").value;
    new Ajax.Request("world.php",
    {parameters: {lookup:text},
     onSuccess: alertPHP,
     onFailure: ajaxFailure,
     method: "get"});
}//end if
    
function getXML(){
    new Ajax.Request("world.php",{
        parameters: {all:true},
       onSuccess: displayXML,
       onFailure: ajaxFailure,
       method:"get"
    });
}

function displayXML(ajax){
    var display = ajax.responseXML.getElementsByTagName("country");
     //var txt = "";
    for(var i = 0; i < display.length; i++){
       var dis = display[i].firstChild.nodeValue;
       var li = document.createElement("li");
        li.innerHTML = dis;
        $("result").appendChild(li);
    }
   
    
}
function ajaxFailure(ajax, exception) {
    alert("Error making Ajax request:" + 
          "\n\nServer status:\n" + ajax.status + " " + ajax.statusText + 
          "\n\nServer response text:\n" + ajax.responseText);
    if (exception) {
        throw exception;
    }
}
function alertPHP(ajax){
    
   alert(ajax.responseText);
    
}
function createCheckBox(){
    var id_control = $("controls");
    var parent = id_control.parentNode;
    var x = document.createElement("INPUT");
    x.type = "checkbox";
    x.id = "chckBox";
    x.name = "chckBox";
    
   
    var chkLabel = document.createElement("Label");
    chkLabel.setAttribute("for", x);
    chkLabel.innerHTML = "All:";
    
    parent.appendChild(chkLabel);
    parent.appendChild(x);
    
   
    
}
function isChecked(){
   var chk = $("chckBox");
   if (chk.checked ===false){
       getAlert();
   }
   else if(chk.checked===true){getXML();}
   
   else{alert("Could not find country");};
        
}
function getClick(){
    
    $("lookup").onclick = isChecked;
    createCheckBox();
    
   
}