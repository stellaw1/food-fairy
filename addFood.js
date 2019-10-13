const foodData = '{"items": [{"name": "egg","expireDate": "1206"},{"name": "milk","expireDate": "1013"},{"name": "yogurt","expireDate": "1014"},{"name": "strawberries","expireDate": "1013"},{"name": "granola","expireDate": "1230"},{"name": "bok-choy","expireDate": "1025"},{"name": "tomato","expireDate": "1025"},{"name": "avocado","expireDate": "1014"},{"name": "lime","expireDate": "1014"},{"name": "garlic","expireDate": "1101"},{"name": "chicken","expireDate": "1015"},{"name": "onion","expireDate": "1025"}]}';

var obj = JSON.parse(foodData);

for (var item in obj.items) {
    document.write(obj.items[item].name + "<br>");
}