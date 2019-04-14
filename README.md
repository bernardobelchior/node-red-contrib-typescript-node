# Node-RED TypeScript Node

*Node-RED TypeScript Node* is a small library for writing Node-RED nodes using TypeScript.
It allows the use of classes by extending the main class `Node` and makes use of the TypeScript type definitions for Node-RED.
Most method are just easier-to-use wrappers around `RED.nodes` functions.


Examples are available in the [`examples`](./examples) directory. 

#### :warning: Warning :warning:
This library is still in its very initial stages. As such, tread with caution.

## API

### `Node`

#### `Node(RED: Red)`

Node-RED Node class that receives a Red instance as constructor.
Custom nodes should extend this class.

#### `Node.createNode(config: NodeProperties): void`

Creates a node using the `config` given. Equivalent to `RED.nodes.createNode()`.

#### `static Node.registerType`

Registers the current class as a Node-RED node. Equivalent to `RED.nodes.registerType`.

#### 

## Credits
This was based on the [*TypeScript-Node-Starter*](https://github.com/Microsoft/TypeScript-Node-Starter) template by Microsoft.
