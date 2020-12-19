// COOL METHODS IN JAVASACRIPT
// Santiago Garcia Arango

var articles = [
    {name: "Computer", price: 100},
    {name: "Mouse", price: 10},
    {name: "USB", price: 8},
    {name: "Celphone", price: 80},
    {name: "Ipad", price: 90},
    {name: "RBPI", price: 34},
    {name: "PowerSupply", price: 25},
];
console.log("\narticles: ", articles);

// Filter by specific condition
var cheap_articles = articles.filter(function(article){
    return article.price <= 50
});
console.log("\ncheap_articles: ", cheap_articles);

// Map or return specific attribute of all array objects
var article_names = articles.map(function(article){
    return article.name
});
console.log("\narticle_names: ", article_names);

// Find specific object based on given attribute
var find_USB = articles.find(function(article){
    return article.name === "USB"
});
console.log("\nfind_USB: ", find_USB);

// Apply personalized function for each object in array
console.log("\nShow only article names (using forEach):");
articles.forEach(function(article){
    console.log(article.name)
});

// Some lets us return Boolean based on given function condition
var is_something_less_than_10 = articles.some(function(article){
    return article.price <= 10;
});
console.log("\nis_something_less_than_10: ", is_something_less_than_10);
