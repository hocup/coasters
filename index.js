console.log("HELLO WORLD");



const width = 600;
const height = 600;

const scale = 20;

const center = [width/(2*scale), height/(2*scale)];

let selectedLine = null;

var mainDrawing = SVG('drawing').size(width, height);

draw();

function drawLine(p1, p2, drawing) {
    if(!drawing) {
        drawing = mainDrawing;
    }

    const transformedP1 = transformPoint(p1, scale, center, [width/2, height/2]);
    const transformedP2 = transformPoint(p2, scale, center, [width/2, height/2]);
    const line = drawing.line(transformedP1[0], transformedP1[1], transformedP2[0], transformedP2[1]).stroke({width: 2, color: "gray"});
    return line;
}

function transformPoint(point, scale, center, screenOffset) {
    const out = point.map(
        (a, index) => {
            return (scale*(a - center[index])) + screenOffset[index];
        }
    );
    return out;
}



function draw() {
    const srt3 = Math.sqrt(3);
    // Do the work of drawing the hexagons

    for(let i = 0; i*scale < width/2; i++) {
        for(let j = 0; j < 20; j++) {
            console.log("i: ", i);
            const lines = [];
            lines[0] = drawLine([j*srt3, i*3], [j*srt3, i*3 + 1]);
            lines[1] = drawLine([(j+0.5)*srt3, i*3 + 1.5], [(j+0.5)*srt3, i*3 + 2.5]);

            // lines[1] = drawLine([-j*srt3, -i*3], [-j*srt3, -i*3 + 1]);
            lines[2] = drawLine([j*srt3, i*3], [(j + 0.5)*srt3, i*3 - 0.5]);
            lines[3] = drawLine([(j+0.5)*srt3, i*3 + 1.5], [(j + 1)*srt3, i*3 + 1]);


            lines[4] = drawLine([j*srt3, i*3], [(j - 0.5)*srt3, i*3 - 0.5]);
            lines[5] = drawLine([(0.5 + j)*srt3, i*3 + 1.5], [j*srt3, i*3 + 1]);

            lines.map((l) => {
                l.on("mouseover", () => {
                    selectedLine = l;
                    // l.stroke({color: "red"});

                });
                // l.on("mouseout", () => {l.stroke({color: "blue"})});
                return l;
            });
        }
    }

    window.onkeypress = (e) => {
        console.log("HAVE A KEYPRESS", e.key);
        if(selectedLine) {
            switch(e.key) {
                case "z": 
                    selectedLine.stroke({color: "red"});
                    break;
                case "x":
                    selectedLine.stroke({color: "blue"});
                    break;
                case "c":
                    selectedLine.stroke({color: "black"});
                    break;
            }
        }

        if(e.key === "r") {
            // console.log(mainDrawing.children().map(c => c.attr("stroke")));
            const childs = mainDrawing.children();
            for(let i = 0; i < childs.length; i++) {
                if(childs[i].attr("stroke") !== "red" && childs[i].attr("stroke") !== "blue") {
                    childs[i].remove();
                }
            }

            document.getElementById("svgcontents").value = document.getElementById("drawing").innerHTML;
            console.log(document.getElementById("drawing").innerHTML);
        }
    }
}