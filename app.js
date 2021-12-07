let getData = async(URL) => {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
};
async function getInfo() {
    let students = await getData('https://api.mocki.io/v2/01047e91/students');
    let schools = await getData('https://api.mocki.io/v2/01047e91/schools');

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
        //sortera förnamn
    document.getElementById("surname").addEventListener("click", () => {
            console.log("hej");
        })
        //sortera efternamn
    document.getElementById("name").addEventListener("click", () => {
        console.log("name");
    })

}
getInfo();