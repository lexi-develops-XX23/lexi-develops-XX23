var theme = ''

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
} else {
    theme = 'light'
}

let toggleMode = () => {
    console.log(theme)
    if (theme === 'light') {
        theme = 'dark'
        document.body.style.backgroundColor = 'rgb(48, 48, 48)'
        document.querySelectorAll("#bio")[0].style.color = 'rgb(245, 245, 245)'
        document.querySelectorAll("#moon")[0].style.display = 'none'
        document.querySelectorAll("#sun")[0].style.display = 'block'

    } else {
        theme = 'light'
        document.body.style.backgroundColor = 'rgb(245, 245, 245)'
        document.querySelectorAll("#bio")[0].style.color = 'rgb(48, 48, 48)'
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

// MediaSource.isTypeSupported()

// if (MediaSource.isTypeSupported('video/mp4')) {
//     // Your code to work with video/mp4
// } else {
//     console.log('Video format is not supported.');
// }

// function canPlayH264() {
//     var v = document.createElement('video');
//     return !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
// };

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);