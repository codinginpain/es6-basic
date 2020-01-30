const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
var m1 = materials.map(material => {
    return material.length;
});
console.log(m1);

var m2 = materials.map(function(material) {
    return material.length;
});
console.log(m2);

