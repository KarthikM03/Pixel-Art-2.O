function hai() {
  draw = false
  const m = document.createElement("div");
  m.id = "div1";
  document.querySelector(".gridbox").appendChild(m);
  document.querySelector(".rangee").style.display = "flex";
  document.getElementById("range").value = "15"
  document.querySelector(".outt").textContent = document.getElementById("range").value;

  let k = document.getElementById("input").value;
  let grid = document.getElementById("div1");

  grid.style.gridTemplateColumns = `repeat(${k}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${k}, 1fr)`;

  if(k >2 && k<=70){
    for (j = 1; j <= k*k; j++) {
      const k = document.createElement("div");
      k.classList.add("kk");
      k.addEventListener("mouseover", () => onMouseOver(k));
      k.addEventListener("mousedown", () => onMouseDown(k));
      k.addEventListener("dblclick", () => onClick(k));
      document.getElementById("div1").appendChild(k);
      document.querySelector(".warning").style.display = 'none';
    }
  }
  else{
    document.querySelector(".warning").style.display = 'list-item';
  }
  function onMouseDown(div) {
    let color = document.getElementById("color").value;
    div.style.backgroundColor = `${color}`;
    div.style.border = ".5px solid" + `${color}`;
  }
  function onMouseOver(div) {
    let color = document.getElementById("color").value;
    if(!draw) return
    console.log(draw)
    div.style.backgroundColor = `${color}`;
    div.style.border = ".5px solid" + `${color}`;
  }

  function onClick(div) {
    div.style.backgroundColor = '';
    div.style.border = ".5px solid black";
  }
  window.addEventListener("mousedown",function(){
    draw = true;
  })

  window.addEventListener("mouseup",function(){
    draw = false;
  })
}

function start() {
  const l = document.getElementById("div1");
  l.remove();
  hai();
}

function reset() {
  m = document.getElementById("div1")
  m.remove()
  hai()
}

function range() {
  const rr = document.getElementById("range").value;
  var x = document.querySelectorAll(".kk");
  x.forEach((e) => {
    e.style.height = rr + 'px';
    e.style.width = rr + 'px';
  });
}

