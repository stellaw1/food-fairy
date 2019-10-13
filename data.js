function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

const type = getUrlVars()["type"]

console.log(type)


var url = 'https://us-central1-dubhacks-food-waste.cloudfunctions.net/getRecipe?type=';
url += type;
console.log(url)

var promise = fetch(url)
  .then(data => data.json())
  .then(result => {
    var obj = result;
    document.getElementById("name").innerHTML = obj.name;
    document.getElementById("source").innerHTML = obj.Source;

    var x = document.createElement("div");                        // Create a <p> node
    var t = document.createTextNode("Ingredients: ");    // Create a text node
    x.appendChild(t);                                           // Append the text to <p>
    document.getElementById("main").appendChild(x);
    console.log(obj.Ingredients)
    for (var ingr in obj.Ingredients) {
      var x = document.createElement("h6");                        // Create a <p> node
      var t = document.createTextNode(obj.Ingredients[ingr]);    // Create a text node
      x.appendChild(t);                                           // Append the text to <p>
      document.getElementById("main").appendChild(x);
    }

    var x = document.createElement("br")
    document.getElementById("main").appendChild(x);

    var x = document.createElement("div");                        // Create a <p> node
    var t = document.createTextNode("Instruction: ");    // Create a text node
    x.appendChild(t);                                           // Append the text to <p>
    document.getElementById("main").appendChild(x);
    console.log(obj.Instruction)
    for (var ingr in obj.Ingredients) {
      var x = document.createElement("h6");                        // Create a <p> node
      var t = document.createTextNode(obj.Instruction[ingr]);    // Create a text node
      x.appendChild(t);                                           // Append the text to <p>
      document.getElementById("main").appendChild(x);
    }

    // document.appendChild("Ingredients: <br><br>");
    // document.write("Ingredients: <br><br>");
    // for (var ingr in obj.Ingridients) {
    //   document.write(obj.Ingridients[ingr] + "<br>");
    // }

    // document.write("<br><br>Instructions: <br><br>");
    // for (var instr in obj.Instruction) {
    //   document.write(obj.Instruction[instr] + "<br>");
    // }
  })


