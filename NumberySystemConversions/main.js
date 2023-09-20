var value = 0;

function change(id){
    value = parseInt(document.getElementById(id).value,id);
    Array.from(document.getElementsByTagName("input")).forEach(function(element) {
        element.value = value.toString(element.id).toUpperCase();
    });
}