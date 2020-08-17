let bg = document.getElementById("background");

function changeImg(a) {
    placeImage(a, a.id);
}

function placeImage(a, b) {
    if (a.name == 1) {
        a.src = "img/panda_swap_part" + b + "x1.jpg";
        a.name = 2;
        check(bg);
    } else if (a.name == 2) {
        a.src = "img/funny-cat1_part" + b + "x1.jpg";
        a.name = 3
        check(bg);
    } else if (a.name == 3) {
        a.src = "img/monkey_part" + b + "x1.jpg";
        a.name = 1
        check(bg);
    }
}

function check(a) {
    let isRight = false;
    if (document.getElementById("1").name == document.getElementById("2").name) {
        if (document.getElementById("2").name == document.getElementById("3").name) {
            if (document.getElementById("3").name == document.getElementById("4").name) {
                if (document.getElementById("4").name == document.getElementById("5").name) {
                    isRight = true;
                }
            }
        }
    }
    if (isRight)
        a.style.backgroundColor = "red";
    else a.style.backgroundColor = "white";
}