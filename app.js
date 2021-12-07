let getData = async(URL) => {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
};
async function getInfo() {
    let students = await getData('/students.json');
    let schools = await getData('/schools.json');

    students.forEach((student) => {
        let ol = document.getElementById("list");
        let li = document.createElement("li");
        li.textContent = `${student.firstName} ${student.lastName} ${student.age} år`;
        ol.appendChild(li);
    })

    document.getElementById("age").addEventListener("click", () => {
        document.getElementById("list").innerHTML = "";
        let sortAge = students.sort((a, b) => a.age - b.age);
        sortAge.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = `${student.firstName} ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })
    })

    document.getElementById("surname").addEventListener("click", () => {
        document.getElementById("list").innerHTML = "";
        let sortSurname = students.sort((a, b) => a.firstName !== b.firstName ? a.firstName < b.firstName ? -1 : 1 : 0);
        sortSurname.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = `${student.firstName} ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })

    })

    document.getElementById("name").addEventListener("click", () => {
        document.getElementById("list").innerHTML = "";
        let sortName = students.sort((a, b) => a.lastName !== b.lastName ? a.lastName < b.lastName ? -1 : 1 : 0);
        sortName.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = `${student.firstName} ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })
    })

}
getInfo();