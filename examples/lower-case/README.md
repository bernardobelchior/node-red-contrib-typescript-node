# Lower Case Node

This example is the same as [Node-RED's official guide](https://nodered.org/docs/creating-nodes/first-node). 

## Running

Make sure you have `npm` and `Node-RED` installed locally.

### First run

On the first run, you must install the package in Node-RED's directory.
This can be made following the ["Testing your node in Node-RED" section of the official guide](https://nodered.org/docs/creating-nodes/first-node#testing-your-node-in-node-red).
Remember to `npm install` the dependencies.

### Subsequent runs

For development, run `npm run watch`, which will watch for changes in TS files, recompile and restart Node-RED. As of now, this command will *not* watch for changes in HTML files.

For production, run `npm run build`, which will build the files and copy the assets.
