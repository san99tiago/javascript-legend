// LOOPS IN JAVASACRIPT
// Santiago Garcia Arango

var my_tools = ["Python", "JavaScript", "Java", "C", "C++", "PHP", "MySQL",
    "Arduino", "LabVIEW", "HTML5", "CSS3"];

function share_my_tool(tool, tool_number) {
    console.log("My tool", String(tool_number), "is :", tool);
}

// Generic "for" loop
console.log("\n-------------FIRST FOR LOOP-------------")
for (let i = 0; i < my_tools.length; i++) {
    share_my_tool(my_tools[i], i);
}

// Special "for of" loop
console.log("\n------------SECOND FOR LOOP-------------")
var tool_number = 0;
for (var tool of my_tools) {
    share_my_tool(tool, tool_number);
    tool_number++;
}

// Generic "while" loop
console.log("\n------------WHILE LOOP-------------")
var i = 0;
while (i < my_tools.length) {
    share_my_tool(my_tools[i], i);
    i++;
}