const data = '{"name": "Guacamole", "Ingridients": ["yogurt","strawberries","granola"], "Instruction": ["1. Cut the avocados.","2. Mince garlic.","3. Cut the lime. ", "4. Stir all ingredients."]}';

var obj = JSON.parse(data);

document.getElementById("insert").innerHTML = obj.name;

document.write("Ingredients: <br><br>");
for (var ingr in obj.Ingridients) {
    document.write(obj.Ingridients[ingr] + "<br>");
}

document.write("<br><br>Instructions: <br><br>");
for (var instr in obj.Instruction) {
    document.write(obj.Instruction[instr] + "<br>");
}

