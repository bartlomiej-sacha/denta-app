import gsap from 'gsap'

let RAD = Math.PI / 180;
let PI_2 = Math.PI / 2;


let arc = {
    start: 0,
    end: 0,
    cx: 200,
    cy: 200,
    r: 200
};


let arc2 = {
    start: 360,
    end: 360,
    cx: 200,
    cy: 200,
    r: 180
};


function getPath(cx, cy, r, a1, a2) {

    let delta = a2 - a1;

    if (delta === 360) {

        return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + -r * 2 + " 0z";
    }

    let largeArc = delta > 180 ? 1 : 0;

    a1 = a1 * RAD - PI_2;
    a2 = a2 * RAD - PI_2;

    let x1 = cx + r * Math.cos(a2);
    let y1 = cy + r * Math.sin(a2);

    let x2 = cx + r * Math.cos(a1);
    let y2 = cy + r * Math.sin(a1);

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
    let clipPath = document.querySelector("#arcPath");
    let clipPath2 = document.querySelector("#arcPath2");
    a(clipPath, arc);
    b(clipPath2, arc2);

}


