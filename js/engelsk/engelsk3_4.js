// godtar at man dropper div
let allowDrop = (ev) => {
  ev.preventDefault();
};

let drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
};

let drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData('text');
  if (data == ev.target.id)
    ev.target.appendChild(document.getElementById(data));
};

let riktig = '';

let counter = () => {
  if (drop(ev)) {
    document.createElement('p');
    riktig = +1;
  }
  p.textContent = riktig;
  appendChild(p);
};
