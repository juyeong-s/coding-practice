export default function Nodes({ $app, state, onClick, onBackClick }) {
  this.state = state;
  this.onClick = onClick;
  this.onBackClick = onBackClick;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const nodes = document.createElement("div");
  nodes.className = "Nodes";

  this.render = () => {
    const template = this.state.nodes
      .map((node) => {
        return `
        <div class="Node" data-node-id="${node.id}">
          <img src="./assets/${node.type.toLowerCase()}.png"
          data-node-id="${node.id}"/>
          <div>${node.name}</div>
        </div>
      `;
      })
      .join("");

    const backTemplate = `
      <div class="Node">
        <img src="./assets/prev.png" />
      </div>`;

    nodes.innerHTML = this.state.isRoot
      ? template
      : `
      ${backTemplate}
      ${template}
    `;

    $app.appendChild(nodes);
  };

  nodes.addEventListener("click", (e) => {
    const { nodeId } = e.target.closest(".Node").dataset;
    if (nodeId) {
      const selectedNode = this.state.nodes.find((node) => node.id === nodeId);
      if (selectedNode) {
        this.onClick(selectedNode);
      }
    } else {
      this.onBackClick();
    }
  });

  this.render();
}
