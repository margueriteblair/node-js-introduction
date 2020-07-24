let time = 0;

let timer = setInterval(() => {
    time += 3;
    console.log(time, ' seconds have passed')
    if (time > 13) {
        clearInterval(timer);
    }
}, 3000);