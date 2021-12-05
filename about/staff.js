function staff() {

    let hrr = document.createElement("hr");
    div101.appendChild(hrr);
    hrr.id = "id_hrr";



    let piechart = document.createElement("button");
    div101.appendChild(piechart);
    piechart.id = "id_piechart"
    piechart.innerHTML = "PIE CHART";
    piechart.onclick = function() {
        let clicksound = document.getElementById("bell")

        clicksound.play();
        alert("do you want pie chart");


        var ctx = document.getElementById("goo").getContext('2d');
        var goo = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                datasets: [{
                    label: 'STUDENTS',
                    data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                    backgroundColor: [
                        '   rgba(253, 121, 168,    0.4)',
                        '   rgba(9, 132, 227,      0.4)',
                        '   rgba(214, 48, 49,      0.4)',
                        '   rgba(0, 206, 201,      0.4)',
                        '   rgba(45, 52, 54,       0.4)',
                        '   rgba(189, 195, 199,    0.4)',
                        '   rgba(142, 68, 173,     0.4)',
                        '   rgba(230, 126, 34,     0.4)',
                        '  rgba(46, 204, 113,      0.4)',
                        '   rgba(52, 152, 219 ,    0.4)'
                    ],
                    borderColor: [
                        '   rgba(253, 121, 168,    0.5)',
                        '   rgba(9, 132, 227,      0.5)',
                        '   rgba(214, 48, 49,      0.5)',
                        '   rgba(0, 206, 201,      0.5)',
                        '   rgba(45, 52, 54,       0.5)',
                        '   rgba(189, 195, 199,    0.5)',
                        '   rgba(142, 68, 173,     0.5)',
                        '   rgba(230, 126, 34,     0.5)',
                        '  rgba(46, 204, 113,      0.5)',
                        '   rgba(52, 152, 219 ,    0.5)'
                    ],
                    borderWidth: 3
                }]
            }
        });


        let back = document.createElement("button");
        back.id = "id_back";
        back.innerHTML = "Back";

        bac.appendChild(back);


        back.onclick = function refreshPage() {
            let clicksound = document.getElementById("bell")
            clicksound.play();
            window.location.reload();
        };


    }


    let barchart = document.createElement("button");
    div101.appendChild(barchart);
    barchart.id = "id_barchart"
    barchart.innerHTML = "BAR CHART";
    barchart.onclick = function() {
        let clicksound = document.getElementById("bell")
        clicksound.play();
        alert("do you want bar chart");


        var ctx = document.getElementById("goo").getContext('2d');
        var goo = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                datasets: [{
                    label: 'STUDENTS',
                    data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                    backgroundColor: [
                        '   rgba(253, 121, 168,    0.4)',
                        '   rgba(9, 132, 227,      0.4)',
                        '   rgba(214, 48, 49,      0.4)',
                        '   rgba(0, 206, 201,      0.4)',
                        '   rgba(45, 52, 54,       0.4)',
                        '   rgba(189, 195, 199,    0.4)',
                        '   rgba(142, 68, 173,     0.4)',
                        '   rgba(230, 126, 34,     0.4)',
                        '  rgba(46, 204, 113,      0.4)',
                        '   rgba(52, 152, 219 ,    0.4)'
                    ],
                    borderColor: [
                        '   rgba(253, 121, 168,    0.5)',
                        '   rgba(9, 132, 227,      0.5)',
                        '   rgba(214, 48, 49,      0.5)',
                        '   rgba(0, 206, 201,      0.5)',
                        '   rgba(45, 52, 54,       0.5)',
                        '   rgba(189, 195, 199,    0.5)',
                        '   rgba(142, 68, 173,     0.5)',
                        '   rgba(230, 126, 34,     0.5)',
                        '  rgba(46, 204, 113,      0.5)',
                        '   rgba(52, 152, 219 ,    0.5)'
                    ],
                    borderWidth: 3
                }]
            }
        });


        let back = document.createElement("button");
        back.id = "id_back";
        back.innerHTML = "Back";

        bac.appendChild(back);


        back.onclick = function refreshPage() {
            window.location.reload();
        };


    }


    let linechart = document.createElement("button");
    div101.appendChild(linechart);
    linechart.id = "id_linechart"
    linechart.innerHTML = "LINE CHART";
    linechart.onclick = function() {
        let clicksound = document.getElementById("bell")
        clicksound.play();
        alert("do you want Line chart");


        var ctx = document.getElementById("goo").getContext('2d');
        var goo = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                datasets: [{
                    label: 'STUDENTS',
                    data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                    backgroundColor: [
                        '   rgba(253, 121, 168,    0.4)',
                        '   rgba(9, 132, 227,      0.4)',
                        '   rgba(214, 48, 49,      0.4)',
                        '   rgba(0, 206, 201,      0.4)',
                        '   rgba(45, 52, 54,       0.4)',
                        '   rgba(189, 195, 199,    0.4)',
                        '   rgba(142, 68, 173,     0.4)',
                        '   rgba(230, 126, 34,     0.4)',
                        '  rgba(46, 204, 113,      0.4)',
                        '   rgba(52, 152, 219 ,    0.4)'
                    ],
                    borderColor: [
                        '   rgba(253, 121, 168,    0.5)',
                        '   rgba(9, 132, 227,      0.5)',
                        '   rgba(214, 48, 49,      0.5)',
                        '   rgba(0, 206, 201,      0.5)',
                        '   rgba(45, 52, 54,       0.5)',
                        '   rgba(189, 195, 199,    0.5)',
                        '   rgba(142, 68, 173,     0.5)',
                        '   rgba(230, 126, 34,     0.5)',
                        '  rgba(46, 204, 113,      0.5)',
                        '   rgba(52, 152, 219 ,    0.5)'
                    ],
                    borderWidth: 3
                }]
            }
        });


        let back = document.createElement("button");
        back.id = "id_back";
        back.innerHTML = "Back";

        bac.appendChild(back);

        back.onclick = function refreshPage() {

            window.location.reload();

        };


    }



    let b = document.getElementById("btn2").disabled = true;




}