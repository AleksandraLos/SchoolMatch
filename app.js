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

        let filterSchool = schools.filter((school) => {
            let hobbyExists = false;
            student.hobbies.forEach((hobby) => {
                if (school.activities.includes(hobby)) {
                    hobbyExists = true;
                }
            });
            return school.programmes.includes(student.programme) && hobbyExists;
        });

        filterSchool.forEach((schools) => {
            let listOfSchools = document.createElement("p");
            listOfSchools.textContent = `${schools.name}`;
            listOfSchools.style.color = "green";
            listOfSchools.style.display = "none";
            li.appendChild(listOfSchools);

            li.addEventListener("click", () => {
                if (listOfSchools.style.display === "none") {
                    listOfSchools.style.display = "block";
                } else {
                    listOfSchools.style.display = "none";
                }
            });

        });

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
            studList.textContent = ` ${student.lastName} ${student.firstName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })
    })

    document.getElementById("front").addEventListener("click", () => {
        let studentFilter = students.filter(student => student.programme == "Frontend")
        document.getElementById("list").innerHTML = "";
        studentFilter.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = ` ${student.firstName}  ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })

    })

    document.getElementById("back").addEventListener("click", () => {
        let studentFilter = students.filter(student => student.programme == "Backend")
        document.getElementById("list").innerHTML = "";
        studentFilter.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = `${student.firstName} ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);
        })
    })

    document.getElementById("net").addEventListener("click", () => {
        let studentFilter = students.filter(student => student.programme == ".NET")
        document.getElementById("list").innerHTML = "";
        studentFilter.forEach((student) => {
            let studList = document.createElement("li");
            studList.textContent = `${student.firstName}  ${student.lastName} ${student.age} år`;
            document.getElementById("list").appendChild(studList);

        });
        let studentList = document.addEventListener("click", () => {

        })

    })
}

getInfo();