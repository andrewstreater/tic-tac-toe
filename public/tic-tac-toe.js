// Your code here

// set initial player to X
let currentPlayer = "x"

const attachClick = () => {

    const allSquares = document.getElementById("play-surface")
    const squaresArray = Array.from(allSquares.children)

    squaresArray.forEach((square, i) => {
        const ele = document.getElementById(`square-${i}`)
        ele.addEventListener("click", (event) => {
            event.preventDefault()
            const x = document.createElement('img')
            x.className = "x"
            x.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"

            const o = document.createElement('img')
            o.className = "o"
            o.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"

            if (!ele.children.length) {
                if (currentPlayer == "x") {
                    ele.appendChild(x)
                    currentPlayer = "o"
                } else if (currentPlayer == "o") {
                    ele.appendChild(o)
                    currentPlayer = "x"
                }
            }
        })
    })

}

attachClick()
