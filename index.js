const fs = require("fs");

const command = process.argv[2];
const argument = process.argv[3];

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));
};

if (command === "add") {
  const notes = loadNotes();
  notes.push(argument);
  saveNotes(notes);
  console.log("Note ajoutée !");
}

if (command === "list") {
  const notes = loadNotes();
  console.log("Vos notes :");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note}`);
  });
}

if (command === "delete") {
  const notes = loadNotes();
  notes.splice(argument - 1, 1);
  saveNotes(notes);
  console.log("Note supprimée !");
}