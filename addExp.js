const expData = '{"items": [{"name": "strawberries","expireDate": "10/13"},{"name": "milk","expireDate": "10/13"},{"name": "yogurt","expireDate": "10/14"},{"name": "avocado","expireDate": "10/14"},{"name": "lime","expireDate": "10/14"},{"name": "chicken","expireDate": "10/15"},{"name": "bok-choy","expireDate": "10/25"},{"name": "tomato","expireDate": "10/25"},{"name": "onion","expireDate": "10/25"},{"name": "garlic","expireDate": "11/01"},{"name": "egg","expireDate": "12/06"},{"name": "granola","expireDate": "12/30"}]}';

var obj = JSON.parse(expData);

for (var item in obj.items) {
    document.write(obj.items[item].expireDate + "<br>");
}