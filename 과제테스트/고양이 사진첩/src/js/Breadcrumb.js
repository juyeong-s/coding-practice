export default function Breadcrumb({ $app, state, onClick }) {
  this.state = state;
  this.onClick = onClick;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";
  $app.appendChild(this.$target);

  this.render = () => {
    if (this.state.length) {
      this.$target.innerHTML = `<div class="nav-item">root</div>
    ${this.state
      .map(
        (node, index) =>
          `<div class="nav-item" data-index="${index + 1}">${node.name}</div>`
      )
      .join("")}`;
    } else {
      this.$target.innerHTML = `<div>root</div>`;
    }
  };

  this.$target.addEventListener("click", (e) => {
    const { index } = e.target.closest(".nav-item").dataset;
    this.onClick(parseInt(index, 10) || null);
  });

  this.render();
}
