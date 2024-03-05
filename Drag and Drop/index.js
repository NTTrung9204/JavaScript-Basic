const Box = document.getElementsByClassName('box');
const Area = document.getElementsByClassName('area');

console.log(Box);

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
    Array.from(Area).forEach(area => {
        if (isContainer(area, e.clientX, e.clientY)) {
            e.target.style.transition = 'all 0.3s';
            moveInContainer(e.target, area);
        }
    });
});

Array.from(Box).forEach(element => {
    element.addEventListener('mousedown', function() {
        isClicked = true;
        console.log(isClicked);
        element.style.transition = 'all 0.0s';
    });

    element.addEventListener('mousemove', function(event) {
        console.log(isClicked);
        if (isClicked) {
            event.target.style.left = event.clientX + 'px';
            event.target.style.top = event.clientY + 'px';
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

