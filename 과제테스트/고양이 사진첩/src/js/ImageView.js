const IMAGE_PATH_PREFIX = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public`;

export default function ImageView({ $app, initialState }) {
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$target = document.createElement("div");
  this.$target.className = "Modal ImageViewer";

  this.render = () => {
    this.$target.innerHTML = `
      <div class="content">
      ${this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}" />` : ""}
      </div>
    `;
    this.$target.style.display = this.state ? "block" : "none";
    this.$target.addEventListener("click", (e) => {
      e.target === this.$target
        ? this.$target.classList.remove("ImageViewer")
        : false;
      this.$target.innerHTML = "";
      this.$target.style.display = "none";
    });
  };

  this.render();
  $app.appendChild(this.$target);
}
