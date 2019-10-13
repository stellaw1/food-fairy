const data =
  '{"name": "Guacamole","Ingridients": ["yogurt","strawberries","granola"],"Instruction": ["1. To cut the avocados, run a knife around the avocado (from top to bottom) and twist in half. Pull out and discard the pit. Using a spoon or your thumb, remove the flesh and place into a medium-sized bowl.","2. Mince or grate the garlic.","3. Cut the lime in half and squeeze both halves into the bowl with the avocado, being careful not to get any seeds in the bowl.","4. Add the garlic and salt. Using a fork gently mash each avocado half a few times then stir all ingredients together."],"Source": "https://www.theendlessmeal.com/easy-guacamole-recipe/"}';

var obj = JSON.parse(data);

document.getElementById("name").innerHTML = obj.name;
document.getElementById("source").innerHTML = obj.Source;

document.write("Ingredients: <br><br>");
for (var ingr in obj.Ingridients) {
  document.write(obj.Ingridients[ingr] + "<br>");
}

document.write("<br><br>Instructions: <br><br>");
for (var instr in obj.Instruction) {
  document.write(obj.Instruction[instr] + "<br>");
}
