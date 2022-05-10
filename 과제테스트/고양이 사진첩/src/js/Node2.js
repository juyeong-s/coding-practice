for (let i = 0; i < this.state.nodes.length; i++) {
  const node = document.createElement("div");
  node.className = "Node";
  const img = document.createElement("img");
  img.src = "./assets/directory.png";
  const title = document.createElement("div");
  title.innerHTML = this.state.nodes[i].name;

  node.appendChild(img);
  node.appendChild(title);

  nodes.appendChild(node);
}

if (!this.state.isRoot) {
  const backBtn = `
    <div class="Node">
        <img src="./assets/prev.png" />
    </div>`;
  nodes.prepend(backBtn);
}
