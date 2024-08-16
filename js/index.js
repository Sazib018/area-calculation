// traiangle section

function traiangle() {
    const hight = document.getElementById('b').value;
    const width = document.getElementById('h').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
    const area = 0.5 * hightNum * widthNum;

    const areaCalculation = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <div class = "flex items-center gap-3">
    <p>Triangle</p>
    <p>${area} cm^2</p>
    <button class="btn bg-sky-500 text-white hover:bg-sky-800">Covert to m^2</button>
    </div>
    `;

    areaCalculation.appendChild(li);
    }
    else{
        window.alert('please enter number only');
        document.getElementById('b').value = '';
        document.getElementById('h').value = '';
    }
}

// Rectangle section
function Rectangle() {
    const hight = document.getElementById('w').value;
    const width = document.getElementById('l').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
    const area = hightNum * widthNum;

    const areaCalculation = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <div class = "flex items-center gap-3">
    <p>Rectangle</p>
    <p>${area} cm^2</p>
    <button class="btn bg-sky-500 text-white hover:bg-sky-800">Covert to m^2</button>
    </div>
    `;

    areaCalculation.appendChild(li);
    }
    else{
        window.alert('please enter number only');
        document.getElementById('w').value = '';
        document.getElementById('l').value = '';
    }
}

//Parallelogram section
function Parallelogram() {
    const hight = document.getElementById('s').value;
    const width = document.getElementById('f').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
    const area = hightNum * widthNum;

    const areaCalculation = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <div class = "flex items-center gap-3">
    <p>Parallelogram</p>
    <p>${area} cm^2</p>
    <button class="btn bg-sky-500 text-white hover:bg-sky-800">Covert to m^2</button>
    </div>
    `;

    areaCalculation.appendChild(li);
    }
    else{
        window.alert('please enter number only');
        document.getElementById('s').value = '';
        document.getElementById('f').value = '';
    }
}

//Rhombus section
function Rhombus() {
    const hight = document.getElementById('d1').value;
    const width = document.getElementById('d2').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
    const area = 0.5 * hightNum * widthNum;

    const areaCalculation = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <div class = "flex items-center gap-3">
    <p>Rhombus</p>
    <p>${area} cm^2</p>
    <button class="btn bg-sky-500 text-white hover:bg-sky-800">Covert to m^2</button>
    </div>
    `;

    areaCalculation.appendChild(li);
    }
    else{
        window.alert('please enter number only');
        document.getElementById('d1').value = '';
        document.getElementById('d2').value = '';
    }
}

// Pentagon section
function Pentagon() {
    const hight = document.getElementById('k').value;
    const width = document.getElementById('j').value;
    const hightNum = parseFloat(hight);
    const widthNum = parseFloat(width);

    if (isNaN(hightNum) === false && isNaN(widthNum) === false) {
    const area = 0.5 * hightNum * widthNum;

    const areaCalculation = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerHTML = `
    <div class = "flex items-center gap-3">
    <p>Pentagon</p>
    <p>${area} cm^2</p>
    <button class="btn bg-sky-500 text-white hover:bg-sky-800">Covert to m^2</button>
    </div>
    `;

    areaCalculation.appendChild(li);
    }
    else{
        window.alert('please enter number only');
        document.getElementById('k').value = '';
        document.getElementById('j').value = '';
    }
}

