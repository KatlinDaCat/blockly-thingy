Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "oop_classDefinition",
        "tooltip": "",
        "helpUrl": "",
        "message0": "class %1 %2 %3 Access: %4 Modifier: %5",
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
            "name": "MEMBERS",
            "check": "CLASSMEMBER"
            },
            {
            "type": "input_value",
            "name": "ACCESS",
            "align": "RIGHT",
            "check": "CLASSACCESS"
            },
            {
            "type": "input_value",
            "name": "MODIFIER",
            "align": "RIGHT",
            "check": "CLASSMODIFIER"
            }
        ],
        "colour": 180,
        "inputsInline": false
    },              

    {
        "type": "oop_newObject",
        "tooltip": "Creates a new Object from a class.",
        "helpUrl": "",
        "message0": "new %1 %2",
        "args0": [
            {
            "type": "field_variable",
            "name": "NAME",
            "variable": "classes"
            },
            {
            "type": "input_dummy",
            "name": "CLASS"
            }
        ],
        "output": "OBJECT",
        "colour": 180
    }
                    
]);

Blockly.inject('blocklyDiv', {
    renderer: "thrasos",
    toolbox: `
    <xml>
        <block type="oop_classDefinition">
            <value name="ACCESS">
                
            </value>
        </block>
        <block type="oop_newObject"></block>
    </xml>`
});