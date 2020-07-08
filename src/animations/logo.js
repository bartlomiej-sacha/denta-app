import gsap from 'gsap'

var RAD = Math.PI / 180;
var PI_2 = Math.PI / 2;


var arc = {
    start: 0,
    end: 0,
    cx: 200,
    cy: 200,
    r: 200
};


var arc2 = {
    start: 360,
    end: 360,
    cx: 200,
    cy: 200,
    r: 180
};


function getPath(cx, cy, r, a1, a2) {

    var delta = a2 - a1;

    if (delta === 360) {

        return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + -r * 2 + " 0z";
    }

    var largeArc = delta > 180 ? 1 : 0;

    a1 = a1 * RAD - PI_2;
    a2 = a2 * RAD - PI_2;

    var x1 = cx + r * Math.cos(a2);
    var y1 = cy + r * Math.sin(a2);

    var x2 = cx + r * Math.cos(a1);
    var y2 = cy + r * Math.sin(a1);

    return "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 0 " + x2 + " " + y2 + " L " + cx + " " + cy + "z";
}







const a = (element, arc) => {
    gsap.to(arc, 5, {

        end: 360,
        ease: "Power4.easeInOut",
        onUpdate: function () {
            element.setAttribute("d", getPath(arc.cx, arc.cy, arc.r, arc.start, arc.end));
        },

    });

}


const b = (element, arc) => {
    gsap.to(arc, 5, {
        end: 0,
        ease: "Power4.easeInOut",
        onUpdate: function () {
            element.setAttribute("d", getPath(arc.cx, arc.cy, arc.r, arc.end, arc.start));
        },

    });

}


export function animateLogo() {
    var clipPath = document.querySelector("#arcPath");
    var clipPath2 = document.querySelector("#arcPath2");
    a(clipPath, arc);
    b(clipPath2, arc2);

}


