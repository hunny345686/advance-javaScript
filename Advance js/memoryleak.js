function createComponet() {
  const arr = new Array(10000).fill("react");

  const btn = document.getElementById("button");

  function handelClik() {
    console.log(click);
  }

  btn.addEventListener("click", handelClik);
}

reateComponet();
