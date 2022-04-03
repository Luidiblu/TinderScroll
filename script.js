function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doshit() {
    document.getElementsByClassName("Bgc($c-like-green):a")[0].click()
}

counter = 0

while (true) {
    await sleep(500)
    doshit();
    counter += 1
    console.log(counter + " likes sent")
}