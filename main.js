const myCanvas = document.getElementById('myCanvas');
const myCanvasWidth = 600;
const myCanvasHeight = 600;




myCanvas.style.width = `${myCanvasWidth}px`;
myCanvas.style.height = `${myCanvasHeight}px`;




const ctx = myCanvas.getContext("2d");
const myGraph = new Graph();
myGraph.draw(ctx);


myGraph