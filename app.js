document.addEventListener('DOMContentLoaded', () => {

const header = document.createElement('h1');
    document.body.appendChild(header);

    header.textContent = 'P I X E L    A R T';


for (i = 0; i < 4; i++) {
    const grid = document.createElement('div');

    document.body.appendChild(grid);
    grid.setAttribute('class', 'canvas');
    grid.addEventListener('click', (ev) => {
        grid.style.backgroundColor = 'red';
    });
}

for (j = 0; j < 11; j++) {
    const colors = document.createElement('div');

    document.body.appendChild(colors);
    colors.setAttribute('class', 'palette');
}


    });
