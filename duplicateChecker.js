function findDuplicates(files){

let seen = new Set();
let duplicates = new Set();

files.forEach(file => {

if(seen.has(file)){
duplicates.add(file);
}else{
seen.add(file);
}

});

return Array.from(duplicates);

}
