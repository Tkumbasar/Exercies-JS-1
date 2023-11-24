let chaussure=prompt("votre pointure");
let année=prompt("votre année de naissance")



function exo7(chauss, ane) {

    return (((((chauss * 2 )+5)*50)-ane)+1766);

}

let result = exo7(chaussure, année);

console.log(result);