var clicks = 0;
var clicks2 = 0;

document.getElementById("clicker").addEventListener("click", function () {
    clicks = clicks + 1;
   document.getElementById("counter").innerHTML = clicks;
});

// function ready () {
    document.getElementById("jqueryButton").addEventListener("click", function () {
        clicks2 += 1;
        document.getElementById("counter2").innerText = clicks2;
    });
// }

// $(function () {
//     $("#jqueryButton").on("click", function () {
//         clicks2 = clicks2 + 1;
//         $("#counter2").text(clicks2);
//     });
// });

console.log($)

document.getElementById("randomcolorButton").addEventListener("click", function () {
    var rand = Math.floor(Math.random() * 10);
    var color = 'red';
    if (rand === 0)
    {
        color = 'aqua';
    }
    if (rand === 1)
    {
        color = 'green';
    }if (rand === 2)
    {
        color = 'blue';
    }if (rand === 3)
    {
        color = 'white';
    }if (rand === 4)
    {
        color = 'black';
    }if (rand === 5)
    {
        color = 'orange';
    }if (rand === 6)
    {
        color = 'yellow';
    }if (rand === 7)
    {
        color = 'brown';
    }if (rand === 8)
    {
        color = 'purple';
    }if (rand === 9)
    {
        color = 'pink';
    }
   document.getElementById("body").style.backgroundColor = color;
});

