import { NodeProperties, Red } from "node-red";
import { Node } from "node-red-contrib-typescript-node";

module.exports = function(RED: Red) {
  class LowerCaseNode extends Node {
    constructor(config: NodeProperties) {
      super(RED);

      this.createNode(config);

      this.on("input", function(msg: any) {
        msg.payload = msg.payload.toLowerCase();
        this.send(msg);
      });
    }
  }

  LowerCaseNode.registerType(RED, "lower-case");
};
