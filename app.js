function add() {
     var val = document.getElementById("val");
     var list = document.getElementById("list");
     var li = document.createElement("LI");
     var btn = document.createElement("BUTTON");
     var btnText = document.createTextNode("Hogaya");
     btn.appendChild(btnText);
     btn.onclick = function() {
         var li = this.parentNode;
         var ul = li.parentNode;
         ul.removeChild(li)
     }
    var text = document.createTextNode(val.value);
    li.appendChild(text)
    li.appendChild(btn)
    list.appendChild(li)
    val.value = " ";
}
    function deleteAll() {
        var x = prompt ("Karliya Sab??")
        if (x === "yes") {
        document.getElementById("list").innerText = " ";
        }
        else if(x === "no") {
            (alert("Phle Kar to Ley!!"));
         }
        
    }