function load_info(person) {
    let txtFile = new XMLHttpRequest();
    let pathFile = `./src/${person}.txt`;

    txtFile.open("GET",pathFile,false);
    txtFile.send(null);

    let information = txtFile.responseText.split("\r\n");
    let nombreContainer = document.getElementById("nombre")
    nombreContainer.innerText = information[0]
}

