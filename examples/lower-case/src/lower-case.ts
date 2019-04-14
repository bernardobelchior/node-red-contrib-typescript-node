import { NodeProperties, Red } from "node-red";
import { Node } from "nodered-typescript-node";

module.exports = function(RED: Red) {
    class LowerCase extends Node {
        constructor(config: NodeProperties) {
            super(RED);

            this.createNode(config);

            this.on("input", (msg) => {
                msg.payload = msg.payload.toLowerCase();
                this.send(msg)
            })
        }
    }

    LowerCase.registerType(RED, "lower-case");
};
