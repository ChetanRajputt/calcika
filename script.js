// music add on press key 
let sound = new Audio('music/snap.mp3')
let sound2 = new Audio('music/sound.mp3')


let string = "";
let count = 0;
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target);
        sound.play();

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.getElementById('inputBox').value = string;
            sound.pause();
            sound2.play();
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            document.getElementById('inputBox').value = string;
            sound.pause();
            sound2.play();
        }
        else if (e.target.innerHTML == 'M+') {
            string = string + 1;
            document.getElementById('inputBox').value = string;
            sound.pause();
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('inputBox').value = string;
        }
    })
})




let voice = new Audio('music/minute.mp3')
let master = document.getElementById('masterPlay');
master.addEventListener('click', () => {
    if (voice.paused) {
        voice.play();
        master.classList.remove("bi-play-circle-fill");
        master.classList.add("bi-pause-circle-fill");
        master.style.background = 'aqua';
    }
    else {
        voice.pause();
        master.classList.remove("bi-pause-circle-fill");
        master.classList.add("bi-play-circle-fill");
        master.style.background = 'chartreuse';
    }
})






