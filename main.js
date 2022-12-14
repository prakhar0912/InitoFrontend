const socket = io("http://localhost:3000/");
const wholeBtn = document.querySelector(".whole")
const logsArea = document.querySelector(".logs")
const updateLogs = document.querySelector(".update")
const logInput = document.querySelector("textarea")


const getWholeLog = () => {
    console.log("btn pressed")
    socket.emit("getWholeLog")
}

const writeLogs = () => {
    let data = logInput.value
    socket.emit("logUpdate", data)
}

wholeBtn.addEventListener("click", getWholeLog)
updateLogs.addEventListener("click", writeLogs)

socket.on("wholeChunk", (data) => {
    console.log(data)
    logsArea.innerHTML = ""
    let div = document.createElement("pre")
    div.innerHTML = data
    logsArea.appendChild(div)
})

socket.on("newChunk", (data) => {
    console.log(data)
    let div = document.createElement("pre")
    div.innerHTML = data
    logsArea.appendChild(div)
})

socket.on("connect", () => {
    console.log(socket.id);
});

