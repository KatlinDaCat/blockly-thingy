Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "functions_main",
        "message0": "main ",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "FUNC"
            }
        ]
    },
    {
        "type": "functions_define",
        "message0": "function ",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "FUNC"
            }
        ]
    }
]);

Blockly.inject('blocklyDiv', {
    renderer: "thrasos",
    toolbox: `
    <xml>
        <block type="functions_main"></block>
        <block type="functions_define"></block>
    </xml>`
});