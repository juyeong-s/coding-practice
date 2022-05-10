export default function Breadcrumb({ $app, state }) {
  this.state = state;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$target = document.createElement("nav");
  this.$target.className = "Breadcrumb";
  $app.appendChild(this.$target);

  this.render = () => {
    if (this.state.length) {
      console.log(this.state.length);
      this.$target.innerHTML = `<div>root</div>
    ${this.state
      .map((node) => `<div data-index="${node.id}">${node.name}</div>`)
      .join("")}`;
    } else {
      console.log(this.state.length);
      this.$target.innerHTML = `<div>root</div>`;
    }
  };

  this.render();
}
