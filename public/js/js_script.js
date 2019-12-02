
function menuItem(bName, kCal, lac, glu, veg, img) {
    this.name = bName;
    this.kcal = kCal;
    this.lac = lac;
    this.gl = glu;
    this.veg = veg;
    this.img = img;
    this.try = function () {
        return this.burgerName + ' ' +  "contains" + ' '+  this.calories + ' ' + "calories";
    };
}
var bgList = []

bgList.push(new menuItem('The Fake-Chicken Burger', '400', true, true, true, src='http://www.ätabörman.se/wp-content/uploads/2016/01/Burgers-Greenburger.jpg'));
bgList.push(new menuItem('Halloumi Burger', '749', true, false, false, "http://www.max.se/ImageVaultFiles/id_2443/cf_22/Burgers-Halloumi.jpg"));
bgList.push(new menuItem('Oumph burger', '540', true, true, true, "http://www.max.se/ImageVaultFiles/id_2439/cf_22/Burgers-BBQ-Sandwich.jpg"));

var myElement = document.getElementById("burger");