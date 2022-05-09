let currDirectory = [];
let prevDrtId = 0;

async function requestRoot() {
    const response = await fetch('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev', {
        method: 'GET',
    });
    currDirectory = await response.json();
}

function attachDirectory() {
    const folder = document.querySelector('.Nodes');
    while(folder.hasChildNodes()){
        folder.removeChild(folder.firstChild);
    }
    const path = document.querySelector('.Breadcrumb');
    while(path.childElementCount > 1){
        path.removeChild(path.lastChild);
    }

    for(let i = 0; i < currDirectory.length; i++){
        const node = document.createElement('div');

        const image = document.createElement('img');
        image.src = "./assets/directory.png";

        const title = document.createElement('span');
        title.innerHTML = currDirectory[i].name;

        node.appendChild(image);
        node.appendChild(title);
        folder.appendChild(node);

        // 경로 렌더링
        node.addEventListener('click', () => {
            const addPath = document.createElement('div');
            addPath.innerHTML = currDirectory[i].name;
            path.appendChild(addPath);
            requestDirectory(currDirectory[i].id);
            pathStack.push(prevDrtId);
            prevDrtId = currDirectory[i].id;
        });

    }
}

async function main(){
    await requestRoot();
    attachDirectory();
}

main();

async function requestDirectory(nodeId) {
    const response = await fetch('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/' + nodeId, {
        method: 'GET',
    });
    currDirectory = await response.json();
    
    attachDirectory();
    addBackElement();
}

const pathStack = [];

function addBackElement() {
    const nodes = document.querySelector(".Nodes");

    const node = document.createElement('div');
    const backImg = document.createElement('img');
    backImg.src = "./assets/prev.png";

    node.appendChild(backImg);
    nodes.prepend(node);

    // 뒤로가기 이벤트
    node.addEventListener("click", () => {
        const nodeId = pathStack.pop();
        console.log(nodeId);
        if(nodeId) requestDirectory(nodeId);
        else main();
    });
}