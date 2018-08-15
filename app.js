document.addEventListener('DOMContentLoaded', (ev) => {

    //heading
    const heads = document.createElement('h1')
    document.body.appendChild(heads);
    heads.innerText = 'PIXEL ART MAKER';

    //canvas
    const canvas = document.createElement('div');
    canvas.setAttribute('class', 'canvas');
    document.body.appendChild(canvas);
    
    //event listner --canvas
    canvas.addEventListener('mouseout', (ev) => {
      if (ev.target.classList.contains('pixel') && mouseState === 'down') {
          if (document.getElementsByClassName('current')[0].id !== 'custom') {
              
                const currentId = document.getElementsByClassName('current')[0].id
                ev.target.setAttribute('id', currentId);

          } else if (document.getElementsByClassName('current')[0].id === 'custom') {
              ev.target.setAttribute('id', 'custom');
              ev.target.style.backgroundColor = document.getElementsByTagName('input')[0].value;
          }
      }
  });

    //palette
    const palette = document.createElement('div');
    palette.setAttribute('class', 'palette');
    document.body.appendChild(palette);
    palette.innerHTML = '<h4>PIXELATE ALL DAY ERRYDAY</h4>';
    
    //event listner -- palette
    palette.addEventListener('click', (ev) => {
      if (ev.target.classList.contains('paint')) {
          current.removeAttribute('style');
          let chosenId = ev.target.id;
          current.setAttribute('id', chosenId)
          return chosenId;
        }
  });
    
    //pixel/squares
    let pixelNumber = 648;
    while (pixelNumber > 0) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        canvas.appendChild(pixel);
        pixelNumber--;
    }

    //colors/paint
    let colorChoices = ['black', 'red', 'yellow', 'navajoWhite', 'greenYellow', 'limeGreen', 'blue', 'cyan', 'mediumPurple', 'midnightBlue'];
    for (let i = 0; i < colorChoices.length; i++) {
        const paint = document.createElement('div');
        paint.setAttribute('class', 'paint');
        paint.setAttribute('id', colorChoices[i])
        palette.appendChild(paint);
    }
    //reset trigger
    const reset = document.createElement('div');
    reset.setAttribute('class', 'reset')
    palette.appendChild(reset);
    reset.innerHTML = '<h5>reset</h5>'
    reset.addEventListener('click', (ev) => {
        for (i = 0; i < document.getElementsByClassName('pixel').length; i++) {
            document.getElementsByClassName('pixel')[i].removeAttribute('id');
            document.getElementsByClassName('pixel')[i].removeAttribute('style');
        }
    });

    //event listener --- mouse drag    
    let mouseState = '';
    canvas.addEventListener('mousedown', (ev) => {
        mouseState = 'down';
        return mouseState;
    })
    canvas.addEventListener('mouseup', (ev) => {
        mouseState = 'up';
        return mouseState;
    });
});

console.log('booyah');
