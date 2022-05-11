import { request } from "../api/api.js";
import Breadcrumb from "./Breadcrumb.js";
import Nodes from "./Nodes.js";
import ImageView from "./ImageView.js";
import Loading from "./Loading.js";

const cache = {};

export default function App($app) {
  this.state = {
    isRoot: true,
    nodes: [],
    depthStack: [],
    currentPath: null,
    selectedFilePath: null,
    isLoading: true,
  };

  const loading = new Loading({ $app, initialState: this.state.isLoading });

  const breadcrumb = new Breadcrumb({
    $app,
    state: this.state.depthStack,
    onClick: (index) => {
      // 루트 노드를 선택한 경우
      if (index === null) {
        this.setState({
          ...this.state,
          isRoot: true,
          depthStack: [],
          nodes: cache["root"],
          selectedFilePath: null,
        });
        return;
      }

      // 현재 path를 선택한 경우
      if (index === this.state.depthStack.length) {
        return;
      }

      // 그 외
      const depthStack = this.state.depthStack.slice(0, index + 1);

      this.setState({
        ...this.state,
        depthStack: depthStack,
        nodes: cache[depthStack[depthStack.length - 1]].id,
        selectedFilePath: null,
      });
    },
  });

  const nodes = new Nodes({
    $app,
    state: this.state,
    onClick: async (node) => {
      try {
        this.setState({
          ...this.state,
          isLoading: true,
        });
        if (node.type === "DIRECTORY") {
          if (cache[node.id]) {
            this.setState({
              ...this.state,
              isRoot: false,
              depthStack: [...this.state.depthStack, node],
              nodes: cache[node.id],
            });
          } else {
            const nextNodes = await request(node.id);
            this.setState({
              ...this.state,
              isRoot: false,
              depthStack: [...this.state.depthStack, node],
              nodes: nextNodes,
            });
            cache[node.id] = nextNodes;
          }
        } else if (node.type === "FILE") {
          this.setState({
            ...this.state,
            selectedFilePath: node.filePath,
          });
        }
      } catch (e) {
        throw new Error(e.message);
      } finally {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    },
    onBackClick: async () => {
      try {
        this.setState({
          ...this.state,
          isLoading: true,
        });
        this.state.depthStack.pop();
        const prevId = this.state.depthStack.length
          ? this.state.depthStack[this.state.depthStack.length].id
          : null;

        if (prevId === null) {
          this.setState({
            isRoot: true,
            nodes: cache["root"],
            depthStack: this.state.depthStack,
          });
        } else {
          this.setState({
            ...this.state,
            isRoot: false,
            nodes: cache[prevId],
            selectedFilePath: null,
            depthStack: this.state.depthStack,
          });
        }
      } catch (e) {
        throw new Error(e.message);
      } finally {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    },
  });

  const imageView = new ImageView({ $app, state: this.state.selectedFilePath });

  this.setState = (nextState) => {
    this.state = nextState;
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      currentPath: this.state.currentPath,
    });
    breadcrumb.setState(this.state.depthStack);
    imageView.setState(this.state.selectedFilePath);
    loading.setState(this.state.isLoading);
  };

  this.init = async () => {
    try {
      const rootNodes = await request(null);

      this.setState({
        ...this.state,
        nodes: rootNodes,
      });
      cache["root"] = rootNodes;
    } catch (e) {
      throw new Error(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };
  this.init();
}
