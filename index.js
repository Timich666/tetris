function drawTetrisPlayground(x, y, target) {
    if(x <=0 || y <= 0) throw new Error ('x and y cannot be negative')
      
    for (let rowsCount = 0; rowsCount < y; rowsCount++) {
         const row = document.createElement('div')
         row.className = 'row'
        row.dataset['row'] = rowsCount
        row.style,transform = `transLatey(${-rowsCount}px)`
   
    for (let cellsCount = 0; cellsCount < x; cellsCount++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        cell.dataset['cell']
        cell.style,transform = `transLatey(${-cellsCount}px)`
        row.append(cell)
    }
    target.append(row)
 }
}
const tetrisPlaygroundTarget = document.querySelector('.tetris-playground')

try {
    drawTetrisPlayground(10, 20, tetrisPlaygroundTarget)
} catch(e) {
    console.log(e.messege)
}


const shapes = {
    S: {shape: [[0, 1, 1],
                [1, 1, 0]],
        color: 'yellowgreen'},
    Z: {shape: [[1, 1, 0],
                [0,1,1]],
        color:'red'},
    T: {shape: [[1,1,1],
                [0,1,0]],
        color: 'purple'},       
    O:{shape: [[1,1],
               [1,1]],
       color: 'yellow'},
    J:{shape: [[0,1],
               [0,1],
               [1,1]],
       color: 'blue'},
    L:{shape: [[1,0],
               [1,0],
               [1,1]],
       color: 'orange'},
    I:{shape: [[1],
               [1],
               [1],
               [1]],
       color: 'lightblue'}  
}

function generateRandomShape() {
    const shapeKeys = Object.keys(shapes);
    const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length);
    const currentShape = shapes[shapeKeys[shapeKeyIndex]];
    
    const rowsToColor = currentShape.shape.length;
    const cellsToColor = currentShape.shape[0].length;
// // console.log(currentShape.shape.length)
// // console.log(currentShape.shape[0].length)

  for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {
     const row = tetrisPlaygroundTarget.children[rowIndex];

    for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {
         const cell = row.children[cellIndex];
        if (currentShape.shape[rowIndex][cellIndex]) {
           cell.style.backgroundColor = currentShape.color;
         } else {
            cell.style.backgroundColor = '';
         }
      }
 }
}


generateRandomShape();