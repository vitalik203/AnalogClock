function clock(){
    const hh = document.querySelector(".hour");
    const mm = document.querySelector(".minute");
    const ss = document.querySelector(".second");
    const deg = 6;


    setInterval(() => {
        const day = new Date();
        const hours = day.getHours()*30;
        const minutes = day.getMinutes()*deg;
        const seconds = day.getSeconds()*deg;

        hh.style.transform = `rotateZ(${hours + minutes/12}deg)`;
        mm.style.transform = `rotateZ(${minutes}deg)`;
        ss.style.transform = `rotateZ(${seconds}deg)`;
    }, 1000)

}

clock();
