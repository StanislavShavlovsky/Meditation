const audio = new Audio();
let play = document.querySelector('.play');
let main = document.querySelector('.main');
let video = document.querySelector('.video');
let zaryanka = document.querySelector('.zaryanka')
let javoronok = document.querySelector('.javoronok')
let slavka = document.querySelector('.slavka')
let fire = document.querySelector('.fire')
let water = document.querySelector('.water')
let solovey = document.querySelector('.solovey');
let drozd = document.querySelector('.drozd')
let isPlay = false;

play.addEventListener('click', function(event){
    if (event.target.classList.contains('play')){
        event.target.classList.toggle('pause')
        if(!isPlay){
            isPlay = true
            audio.src = 'assets/audio/forest.mp3'
            audio.currentTime = 0;
            audio.play();
        } else {
            solovey.classList.remove('menu_link_play')
            drozd.classList.remove('menu_link_play')
            main.classList.remove('main_solovey')
            main.classList.remove('main_drozd')
            main.classList.remove('main_zaryanka')
            zaryanka.classList.remove('menu_link_play')
            main.classList.remove('main_javoronok')
            javoronok.classList.remove('menu_link_play')
            main.classList.remove('main_slavka')
            slavka.classList.remove('menu_link_play')
            main.classList.remove('main_fire')
            fire.classList.remove('menu_link_play')
            main.classList.remove('main_water')
            water.classList.remove('menu_link_play')
            video.src = ' '
            audio.pause();
            isPlay=false;
}
}
})

solovey.addEventListener('click', function(event){
    if (event.target.classList.contains('solovey')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_solovey');
        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')
        audio.src = 'assets/audio/solovey.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

drozd.addEventListener('click', function(event){
    if (event.target.classList.contains('drozd')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_drozd');
        video.src = ' '
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')
        audio.src = 'assets/audio/drozd.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})


zaryanka.addEventListener('click', function(event){
    if (event.target.classList.contains('zaryanka')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_zaryanka');
        video.src = ' '

        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')
        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')
 
        audio.src = 'assets/audio/zarynka.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

javoronok.addEventListener('click', function(event){
    if (event.target.classList.contains('javoronok')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_javoronok');
        video.src = ' '

        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')


        audio.src = 'assets/audio/javoronok.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

slavka.addEventListener('click', function(event){
    if (event.target.classList.contains('slavka')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_slavka');
        video.src = ' '

        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')

        audio.src = 'assets/audio/slavka.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})


fire.addEventListener('click', function(event){
    if (event.target.classList.contains('fire')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_fire');
        video.src = 'assets/fire.mp4'

        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')

        audio.src = 'assets/audio/fire.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})

water.addEventListener('click', function(event){
    if (event.target.classList.contains('water')){
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_water');
        video.src = 'assets/Sea.mp4'

        drozd.classList.remove('menu_link_play')
        main.classList.remove('main_drozd')
        solovey.classList.remove('menu_link_play')
        main.classList.remove('main_solovey')
        main.classList.remove('main_zaryanka')
        zaryanka.classList.remove('menu_link_play')
        main.classList.remove('main_javoronok')
        javoronok.classList.remove('menu_link_play')
        main.classList.remove('main_slavka')
        slavka.classList.remove('menu_link_play')
        main.classList.remove('main_fire')
        fire.classList.remove('menu_link_play')

        audio.src = 'assets/audio/water.mp3'
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
})