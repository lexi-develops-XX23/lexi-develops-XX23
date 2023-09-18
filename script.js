var theme = ''

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
} else {
    theme = 'light'
}
let toggleMode = () => {
    if (theme === 'light') {
        theme = 'dark'
        document.body.style.backgroundColor = '#000'
        document.querySelectorAll("#bio")[0].style.color = '#dcb'
        document.querySelectorAll("#moon")[0].style.display = 'none'
        document.querySelectorAll("#sun")[0].style.display = 'block'

    } else {
        theme = 'light'
        document.body.style.backgroundColor = '#fff'
        document.querySelectorAll("#bio")[0].style.color = 'rgb(106, 99, 97)'
        console.log(document.querySelectorAll(".bio"));
        document.querySelectorAll("#sun")[0].style.display = 'none'
        document.querySelectorAll("#moon")[0].style.display = 'block'



    }
}


let imageBehavior = e => {
    document.querySelector("#grid").style.display = 'none'
    document.querySelectorAll(".project")[e].style.display = 'flex'
    console.log(e);
}

let closeBehavior = e => {
    document.querySelector("#grid").style.display = 'block'
    document.querySelectorAll(".project")[e].style.display = 'none'
    console.log(e);

}



window.onload = () => {
    var buttonCollection = document.getElementsByClassName("proj-close");
    var buttonItems = [...buttonCollection]

    buttonItems.forEach(function (element, i) {
        element.addEventListener("click", function () {
            closeBehavior(i);
        }
        );
    });


    var gridCollection = document.getElementsByClassName("grid-item");
    var gridItems = [...gridCollection]

    gridItems.forEach(function (element, i) {
        element.addEventListener("click", function () {
            imageBehavior(i);
        }
        );
    });
}
