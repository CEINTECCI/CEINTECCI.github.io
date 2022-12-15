function load_info(person) {
    let txtFile = new XMLHttpRequest();
    let pathFile = `./src/${person}.txt`;

    txtFile.open("GET",pathFile,false);
    txtFile.send(null);

    let information = txtFile.responseText.split("\r\n");
    let name = document.getElementById(`${person}_name`)
    let job = document.getElementById(`${person}_job`)
    let info = document.getElementById(`${person}_info`)
    let email = document.getElementById(`${person}_em`)

    name.innerText = information[0]
    job.innerText = information[1]
    info.innerText = information[2]
    email.innerHTML = `<b>Correo Eléctronico:</b><br>${information[3]}`
}

const generic_id = "person";
let n_person = 1;
let temp = "";

while (true) {
    temp = generic_id + n_person;
    if (document.getElementById(`${temp}_name`) !== null){
        // console.log(temp)
        load_info(temp);
        n_person += 1
    }else{
        // console.log("Salio"+temp)
        break;
    }
}

