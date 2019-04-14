import { NodeProperties, Red } from "node-red";
import { Node} from 'nodered-typescript-node'

module.exports = function (RED: any) {
  class LowerCaseNode extends Node {
    constructor(config: any) {
      super(RED);
      this.createNode(config);
      (this as any).on('input', function(msg: any) {
        msg.payload = msg.payload.toLowerCase();
        this.send(msg);
      });
    }
  }
  LowerCaseNode.registerType(RED, "lower-case");
};
