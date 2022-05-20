const [lBoard, rBoard] = document.querySelectorAll('.board')
const startGameBtn = document.querySelector('#start-btn')

const deployCoords = ['a1', 'a2', 'a3'] 
const ships = {'4cells':[], '3cells-1':[], '3cells-2':[], '2cells-1':[], '2cells-2':[],'2cells-3':[],'1cells-1':[],
'1cells-2':[],'1cells-3':[],'1cells-4':[],}
let currentShip = null

startGameBtn.onclick = startGame

function startGame() {
	lBoard.onclick = event => { 
		const cell = event.target
		const x = cell.cellIndex
		const y = cell.parentNode.rowIndex

		if (x && y) {
			checkNeighbourCells(x, y)
		}
	}
}

function toggleShipDeck() {
	
}

function renderShips() {
	deployCoords.forEach(renderShipDeck)
}

function renderShipDeck(coords) {
	const y = coords.charCodeAt() - 96
	const x = coords.slice(1)
	lBoard.rows[y].cells[x].classList.add('ship')
} 

function checkNeighbourCells(x, y) {
	const deltas = [{dx:-1, dy:-1}, {dx:0, dy:-1}, {dx:1, dy:-1}, {dx:1, dy:0}, {dx:1, dy:1}, {dx:0, dy:1}, {dx:-1, dy:1},{dx:-1, dy:0}]
	let realNeighbourCellsCoords = []
	deltas.forEach((deltasObj)=>{
		const dx = deltasObj.dx
		const dy = deltasObj.dy
		if((x + dx <= 10 && x + dx >= 1) && (y + dy <= 10 && y + dy >= 1) ) {
		/*	realNeighbourCellsCoords.push({x:x+dx, y:y+dy}) */
			findShipViaCellCoords(x+dx, y+dy)
		}
	})
}

function findShipViaCellCoords(x, y) {

}

