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
    },

    {
        "type": "oop_class_modifier",
        "tooltip": "Class modifier.",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
            {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "none",
                    "NONE"
                ],
                [
                "static",
                "STATIC"
                ],
                [
                "abstract",
                "ABSTRACT"
                ]
            ]
            },
            {
            "type": "input_dummy",
            "name": "TYPE"
            }
        ],
        "output": "CLASSMODIFIER",
        "colour": 180,
    },

    {
        "type": "oop_class_access",
        "tooltip": "Class access block.",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
            {
            "type": "field_dropdown",
            "name": "ACCESS",
            "options": [
                [
                "public",
                "PUBLIC"
                ],
                [
                "private",
                "PRIVATE"
                ],
                [
                "protected",
                "PROTECTED"
                ]
            ]
            },
            {
            "type": "input_dummy",
            "name": "ACCESS"
            }
        ],
        "output": "CLASSACCESS",
        "colour": 180,
        "inputsInline": false
    },
                    

    {
        "type": "val_bool",
        "tooltip": "Boolean value.",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
            {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                "true",
                "TRUE"
                ],
                [
                "false",
                "FALSE"
                ]
            ]
            },
            {
            "type": "input_dummy",
            "name": "TYPE"
            }
        ],
        "output": null,
        "colour": 135,
        "inputsInline": false
    }
                    
                    
]);

Blockly.inject('blocklyDiv', {
    renderer: "thrasos",
    toolbox: `
    <xml>
        <block type="oop_classDefinition">
            <value name="ACCESS">
                <block type="oop_class_access"></block>
            </value>
            <value name="MODIFIER">
                <block type="oop_class_modifier"></block>
            </value>
        </block>
        <block type="oop_newObject"></block>
        <block type="oop_class_modifier"></block>
        <block type="oop_class_access"></block>
    </xml>`
});