import { request } from "../api/api.js";
import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import ImageView from "./ImageView.js";

export default function App($app) {
  this.state = {
    isRoot: true,
    nodes: [],
    depthStack: [],
    currentPath: null,
    isLoading: false,
  };

  const nodes = new Nodes({
    $app,
    state: this.state,
    onClick: async (node) => {
      try {
        if (node.type === "DIRECTORY") {
          const nextNodes = await request(node.id);
          this.setState({
            ...this.state,
            isRoot: false,
            depthStack: [...this.state.depthStack, node],
            nodes: nextNodes,
          });
        } else if (node.type === "FILE") {
          this.setState({
            ...this.state,
            selectedFilePath: node.filePath,
          });
        }
      } catch (e) {
        throw new Error(e.message);
      }
    },
    onBackClick: async () => {
      try {
        this.state.depthStack.pop();
        const len = this.state.depthStack.length;
        const prevId = len ? this.state.depthStack[len] : null;
        const nodes = await request(prevId);

        // if (prevId === null) {
        //   const rootNodes = await request();
        //   this.setState({
        //     isRoot: true,
        //     nodes: rootNodes,
        //   });
        // } else {
        // }
        this.setState({
          ...this.state,
          isRoot: !prevId,
          nodes: nodes,
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
  });

  const breadcrumb = new Breadcrumb({ $app, state: this.state.depthStack });

  const imageView = new ImageView({ $app, state: this.state.selectedFilePath });

  this.setState = (nextState) => {
    this.state = nextState;
    nodes.setState({ isRoot: this.state.isRoot, nodes: this.state.nodes });
    breadcrumb.setState(this.state.depthStack);
    imageView.setState(this.state.selectedFilePath);
  };

  this.init = async () => {
    try {
      const rootNodes = await request(null);

      this.setState({
        ...this.state,
        nodes: rootNodes,
      });
    } catch (e) {
      throw new Error(e);
    }
  };
  this.init();
}
