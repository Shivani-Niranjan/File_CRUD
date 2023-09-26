const fs = require("fs")

const filePath = "people.json";

interface Person {
  name: string;
  company: string;
}

interface Data {
  people: Person[];
}

function create(addon: Person): void {
  try {
    const data: Data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (data) {
      data.people.push(addon);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error("Error reading data from file:", error);
  }
}

function print(): Person[] {
  const data: Data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data ? data.people : [];
}

function update(name: string, updatedInfo: Partial<Person>): void {
  const data: Data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (data) {
    const value = data.people.find((person) => person.name === name);
    if (value) {
      Object.assign(value, updatedInfo);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } else {
      console.error("Person not found.");
    }
  }
}

function deletePeople(name: string): void {
  const data: Data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (data) {
    const indexToRemove = data.people.findIndex((person) => person.name === name);
    if (indexToRemove !== -1) {
      data.people.splice(indexToRemove, 1);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } else {
      console.error("Person not found.");
    }
  }
}

const addon: Person = {
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
