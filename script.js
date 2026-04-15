function checkDuplicates(){

const input = document
.getElementById("files")
.value;

const files = scanFiles(input);

const duplicates = findDuplicates(files);

const result = document.getElementById("result");

result.innerHTML = "";

duplicates.forEach(file => {

const li = document.createElement("li");

li.innerText = file;

result.appendChild(li);

});

}
