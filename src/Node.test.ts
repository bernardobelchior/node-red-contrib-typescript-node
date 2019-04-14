import { Node } from "./Node";
import { NodeProperties, Red } from "node-red";

describe("Node", () => {
    class NodeTest extends Node {
        constructor(red: Red) {
            super(red);
        }
    }

    const RED: Red = {
        nodes: {
            registerType: jest.fn(),
            createNode: jest.fn(),
        }
    } as any as Red;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should register type with the subclass constructor", () => {
        const opts = {
            opt1: true
        };

        const type = "node-test";

        NodeTest.registerType(RED, type, opts);

        expect(RED.nodes.registerType).toHaveBeenCalledWith(type, NodeTest.prototype.constructor, opts);
        expect(RED.nodes.registerType).not.toHaveBeenCalledWith(type, Node.prototype.constructor, opts);
    });

    it("should create node with config", () => {
        const config: NodeProperties = {id: "123", name: "node-test", type: "node-test"};

        const node = new NodeTest(RED);

        expect(RED.nodes.createNode).not.toHaveBeenCalled();

        node.createNode(config);

        expect(RED.nodes.createNode).toHaveBeenCalledWith(node, config);
    });
});

