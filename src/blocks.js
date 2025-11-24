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
        ],
        "colour": 255
    },
    {
        "type": "functions_define",
        "message0": "function %1 %2 %3",
        "args0": [
            {
                "type": "field_input",
                "name": "NAME",
                "text": "name"
            },
            {
                "type": "input_end_row",
                "name": "NAME"
            },
            {
                "type": "input_statement",
                "name": "FUNC"
            }
        ],
        "colour": 225
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