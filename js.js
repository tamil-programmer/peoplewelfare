burger = document.querySelector('.burger');
nav = document.querySelector('.hnav');
ull = document.querySelector('.ull');

burger.addEventListener('click', () => {

    nav.classList.toggle('hnav');
    ull.classList.toggle('vclass');

    let o = document.getElementById("search");
    o.classList.toggle("in");

})

function myFunction(x) {
    x.classList.toggle("change");
}




function find(params) {
    document.getElementById("searchul").style.display = "block";
    // document.getElementById("searchul").style.borderTop = "3px solid black";
    // document.getElementById("textt").style.display = "none";


}

function findd(params) {
    document.getElementById("searchul").style.display = "none";

}




// ssssssssssssseeeeeeeeeeeeeeaaaaaaaaaaaaarrrrrrrrrrrrrrrrchhhhsd;lslvklsdklvsdvsddv

//s 
// e
// a
// r
//c
// h
// 


function Function() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchul");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query


    for (i = 0; i < li.length; i++) {
        // if (filter.length == 0) {

        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }


}
// document.getElementById("searchdrop").style.display = "none";

// const y = [
//     "k", "sundra", "jkcjkc", "how to learn js"

// ];
// var topics = y.length;

// function show(value) {
//     document.getElementById("datalist").innerHTML = "";

//     // a = value.lenght;

//     for (let i = 0; i < topics; i++) {
//         if (((y[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
//             var n = document.createElement("option");

//             var v = document.createTextNode(y[i]);

//             n.appendChild(v);

//             document.getElementById("datalist").appendChild(n);
//         }
//     }
// }