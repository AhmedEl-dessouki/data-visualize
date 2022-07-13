/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import CSVReader from "react-csv-reader";
import Cytoscape from "cytoscape";
//@ts-ignore
import COSEBilkent from "cytoscape-cose-bilkent";
import popper from "cytoscape-popper";
import CytoscapeComponent from "react-cytoscapejs";
import "./app.css";

type T = Record<
  "data",
  {
    id?: string;
    label?: string;
    source?: string;
    target?: string;
  }
>[];

Cytoscape.use(COSEBilkent);
Cytoscape.use(popper);
const stylesheet = [
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
    },
  },
  {
    selector: "node",
    style: {
      content: "data(id)",
      color: "white",
    },
  },
];

function App() {
  const [nodes, setNodes] = React.useState<T>([]);
  return (
    <div className="App">
      <header className="App-header">
        <CSVReader
          onFileLoaded={(data, fileInfo, originalFile) => {
            console.log(data, fileInfo, originalFile);
            const some = data.reduce(
              (acc: Record<string, string[]>, item, i) =>
                i === 0
                  ? acc
                  : {
                      ...acc,
                      [item[0]]: [...(acc[item[0]] || []), item[1]],
                    },
              {} as Record<string, string[]>,
            );
            const someKeys = Object.keys(some);
            const x = someKeys.reduce(
              (acc: T, key) =>
                key.length === 0
                  ? acc
                  : [
                      ...acc,
                      {
                        data: {
                          id: key,
                          name: key,
                          grabbable: true,
                          position: {},
                          label: key,
                        },
                      },
                      ...some[key].map((node: string) => ({
                        data: {
                          id: node,
                          name: node,
                          grabbable: true,
                          position: {},
                          label: node,
                        },
                      })),
                      ...some[key].map((node: string) => ({
                        data: {
                          source: key,
                          target: node,
                        },
                      })),
                    ],
              [],
            );
            setNodes(x);
          }}
        />
        {nodes.length > 0 && (
          <CytoscapeComponent
            elements={nodes}
            // style={{ width: "600px", height: "600px", background: "white" }}
            stylesheet={stylesheet}
            layout={{ name: "cose-bilkent" }}
            // style={{ height: "1000px", background: "white", width: "100%" }}
            pan={{ x: 100, y: 200 }}
            className="canvas-container"
          />
        )}
      </header>
    </div>
  );
}

export default App;
