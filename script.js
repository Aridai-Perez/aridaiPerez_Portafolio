const proyecto1 = document.getElementById( "proyecto1" );
const modal = document.getElementById("dialog")
const closed = document.getElementById("closed")

proyecto1.addEventListener("click", (e) => {
    console.log("hola")
    modal.show()
})

closed.addEventListener("click", (e) => {
    modal.close()
})