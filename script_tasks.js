function greet(){
    window.alert("Hello, how are you ?");
}

function init()
{
    //Task 1
    document.getElementById("task1").src = "image/flower2.png";

    //Task 2
    let images = document.getElementById("task2").getElementsByTagName("img");
    images[1].src = "image/flower2.png";
    images[3].src = "image/flower2.png";

    //Task 3
    document.getElementById("task3").innerHTML = "<div><p>Your are doing great!</p></div>";

    //Task 4
    let image = document.createElement("img");
    image.setAttribute("src", "image/flower2.png");

    //task 5
    document.getElementById("task4").appendChild(image);
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];
    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

    //Task 6
    var changeSrc = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower1.png") {
                event.target.src = "image/flower2.png";
            } else {
                event.target.src = "image/flower1.png";
            }
        }       
    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);
}
