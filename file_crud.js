"use strict";
// const fs = require("fs");
// const filePath = "people.json";
// function create_people(addon) {
//     try {
//         const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//         if (data) {
//             data.people.push(addon);
//             fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//         }
//     }
//     catch (error) {
//         console.error("Error reading data from file:", error);
//         return null;
//     }
// }
// function print() {
//     const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     return data ? data.people : [];
// }
// function update_people(name, updatedInfo) {
//     const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     if (data) {
//         const value = data.people.find((person) => person.name === name);
//         if (value) {
//             Object.assign(value, updatedInfo);
//             fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//         } else {
//             console.error("Person not found.");
//         }
//     }
// }
// function delete_people(name) {
//     const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     if (data) {
//         const remove = data.people.findIndex((person) => person.name === name);
//         if (remove !== -1) {
//             data.people.splice(remove, 1);
//             fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//         } else {
//             console.error("Person not found.");
//         }
//     }
// }
// const addon = {
//     name: "Shivani",
//     company: "devrev",
// };
// create_people(addon);
// console.log("data added")
// update_people("vidya", { company: "Updated devrev" });
// console.log("data updated");
// delete_people("mukund");
// console.log("record deleted");
// console.log("printing all people");
// console.log(print());
// import * as fs from "fs";
const fs = require("fs");
const filePath = "people.json";
function create(addon) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        if (data) {
            data.people.push(addon);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        }
    }
    catch (error) {
        console.error("Error reading data from file:", error);
    }
}
function print() {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return data ? data.people : [];
}
function update(name, updatedInfo) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (data) {
        const value = data.people.find((person) => person.name === name);
        if (value) {
            Object.assign(value, updatedInfo);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        }
        else {
            console.error("Person not found.");
        }
    }
}
function deletePeople(name) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (data) {
        const indexToRemove = data.people.findIndex((person) => person.name === name);
        if (indexToRemove !== -1) {
            data.people.splice(indexToRemove, 1);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        }
        else {
            console.error("Person not found.");
        }
    }
}
const addon = {
    name: "Shivani",
    company: "devrev",
};
create(addon);
console.log("data added");
update("vidya", { company: "Updated devrev" });
console.log("data updated");
deletePeople("mukund");
console.log("record deleted");
console.log("printing all people");
console.log(print());
