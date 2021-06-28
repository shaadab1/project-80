var name_guest_of_the_array =[];

function    Submit() {
    var Guest_Name = document.getElementById("Enter_Name").value;
    name_guest_of_the_array.push(Guest_Name);
    document.getElementById("Display_Name").innerHTML = name_guest_of_the_array;
    console.log(name_guest_of_the_array);
    var length_of_the_guest_array = name_guest_of_the_array.length;
    console.log(length_of_the_guest_array);
}
function Show_List() {
var i = name_guest_of_the_array.join("<br>");
console.log(name_guest_of_the_array);
document.getElementById("Show_Names").innerHTML = i.toString();
}
function Sorting() {
    name_guest_of_the_array.sort;
    var i = name_guest_of_the_array.join("<br>");
console.log(name_guest_of_the_array);
document.getElementById("Show_Names").innerHTML = i.toString();
}
function Search() {
    var s = doNotTrack.getElementById("Searched_Name").value;
    var found = 0;
    var j;
    for(j=0; j<name_guest_of_the_array.length; j++) {
        if(s==name_guest_of_the_array[j]) {
            found=found+1;
        }
    }
    document.getElementById("Search_Name").innerHTML = "Name Found"+found+" Time/s";
}