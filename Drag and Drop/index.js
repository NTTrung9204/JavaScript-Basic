const Box = document.querySelector('.box');
const Area = document.querySelector('.area');

function moveInContainer(element, container) {
    const rect = container.getBoundingClientRect();
    element.style.left = rect.left + rect.width / 2 + 'px';
    element.style.top = rect.top + rect.height / 2 + 'px';
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
    if (isContainer(Area, e.clientX, e.clientY)) {
        Box.style.transition = 'all 0.3s';
        moveInContainer(Box, Area);
    }
});

Box.addEventListener('mousedown', function() {
    isClicked = true;
    Box.style.transition = 'all 0.0s';
});

Box.addEventListener('mousemove', function(event) {
    if (isClicked) {
        Box.style.left = event.clientX + 'px';
        Box.style.top = event.clientY + 'px';
        if (isContainer(Area, event.clientX, event.clientY)) {
            Area.style.backgroundColor = 'lightgreen';
        }
        else {
            Area.style.backgroundColor = 'unset';
        }
    }
});
