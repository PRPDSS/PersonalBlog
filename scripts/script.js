function showMessage(msg) { console.log(msg) }
function changeBackgroundColor() {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    // console.log(newColor)
    document.querySelector("main").style.backgroundColor = newColor
    document.querySelector("body").style.backgroundColor = newColor
}
function toggleVisibility() {
    let elem = document.getElementById("visty-change")
    if (elem == null) return
    elem.style.visibility = elem.style.visibility == "hidden" ? "visible" : "hidden"
    console.log("работает??")
}
function logCurrentTime() {
    const time = new Date()
    alert("Сейчас " + time.getHours() + ':' + time.getMinutes())
}