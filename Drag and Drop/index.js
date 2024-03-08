// const Box = document.getElementsByClassName('box');
const Area = document.getElementsByClassName('area');
const img = document.getElementsByClassName('img');



function moveInContainer(element, container) {
    const rect = container.getBoundingClientRect();
    element.style.left = rect.left + rect.width / 2 - element.offsetWidth * 0.35 + 'px';
    element.style.top = rect.top + rect.height / 2 - element.offsetHeight * 0.5 + 'px';
}

function getCenterElement(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

function isContainer(element, x, y) {
    const rect = element.getBoundingClientRect();
    return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
    );
}

var isClicked = false;

document.addEventListener('mouseup', function(e) {
    isClicked = false;
    Array.from(Area).forEach(area => {
        if (isContainer(area, e.clientX, e.clientY)) {
            e.target.style.transition = 'all 0.3s';
            moveInContainer(e.target, area);
        }
    });
});

Array.from(img).forEach(element => {
    var positionPointer = {
        x: 0,
        y: 0
    };
    element.addEventListener('mousedown', function(event) {
        isClicked = true;
        element.style.transition = 'all 0.0s';
        positionPointer.x = event.clientX - element.getBoundingClientRect().left,
        positionPointer.y = event.clientY - element.getBoundingClientRect().top

    });

    element.addEventListener('mousemove', function(event) {
        if (isClicked) {
            event.target.style.left = event.clientX - positionPointer.x + 'px';
            event.target.style.top = event.clientY - positionPointer.y + 'px';
            Array.from(Area).forEach(area => {
                if (isContainer(area, event.clientX, event.clientY)) {
                    area.style.backgroundColor = 'lightgreen';
                }
                else {
                    area.style.backgroundColor = 'unset';
                }
            });
        }
    });
});

