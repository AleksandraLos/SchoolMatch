let li = document.getElementById("list");

fetch("/students.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((object) => {
            let person = document.createElement("li");
            person.innerHTML = object.firstName;; //todo: namn+efternamn?
            list.appendChild(person);
        });
    });