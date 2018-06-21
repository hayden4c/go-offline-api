const app = require("express")();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const members = [
  { id: "fbc38c81-4247-42e5-9c90-ed5fcabaf31f", timeCreated: 1, name: "Bill Smith", gender: "Male", age: 70 },
  { id: "fd90d0cb-750f-4b13-9377-173e40644f8a", timeCreated: 2, name: "Helen Baker", gender: "Female", age: 75 },
  { id: "978375d1-7d1b-4644-9be2-34b0bd49c6e8", timeCreated: 3, name: "Barbara Montross", gender: "Female", age: 82 },
  { id: "3f96a6a4-767f-460c-8c84-81567f2257b8", timeCreated: 4, name: "Juan Valderroso", gender: "Male", age: 89 },
  { id: "2c6e85b2-c571-4f01-ab34-4a4b0cb92068", timeCreated: 5, name: "Beatrice Von Elrod", gender: "Female", age: 78 },
  { id: "ca49bb8d-82ee-413e-b1b2-520164f335e9", timeCreated: 6, name: "Carl McNamara", gender: "Male", age: 90 },
  { id: "a2a228c6-7c63-4faf-940d-9e47d6b7bdc3", timeCreated: 7, name: "Nickola Rasputin", gender: "Female", age: 91 },
  { id: "b0a34f72-db9f-4e21-8c02-f191240793d7", timeCreated: 8, name: "Olivia Newtons", gender: "Female", age: 77 },
  { id: "00e39950-b7aa-4070-8025-2e16662495c3", timeCreated: 9, name: "Ollie McDonald", gender: "Male", age: 84 },
  { id: "04f79a34-80cb-4ff9-b1f9-3f65119fd80c", timeCreated: 10, name: "Neon Sanders", gender: "Male", age: 96 },
  { id: "ccd59192-8817-4152-b7c0-0cb4d6a03baa", timeCreated: 11, name: "Laura Plante", gender: "Female", age: 91 },
  { id: "a546d0df-eb1d-4ff6-b7c8-d471671aa6e7", timeCreated: 12, name: "Hulk Hogan", gender: "Male", age: 79 },
  { id: "36c1a7c5-bc51-43f1-ba35-832a059ea80d", timeCreated: 13, name: "Randy Savages", gender: "Male", age: 83 },
  { id: "13fcdf04-3283-48f6-8b5e-53b7e1d89f19", timeCreated: 14, name: "Florence Mendelson", gender: "Female", age: 95 },
  { id: "2a84ac10-9514-4a78-8086-7af15048e31b", timeCreated: 15, name: "Gary Coalman", gender: "Female", age: 89 },
  { id: "1b4ef8c5-8e8d-4e2d-a179-7dc35e1e2155", timeCreated: 16, name: "Tom Hetty", gender: "Male", age: 96 },
  { id: "4bf621d5-0aa7-4f2d-9c41-46a7a1f7faec", timeCreated: 17, name: "Miguella Jackson", gender: "Female", age: 93 },
  { id: "ce1673bd-9d12-4e77-a405-c4f26953bcfa", timeCreated: 18, name: "Aragona Nonna", gender: "Female", age: 88 },
  { id: "cb1a56fe-b24a-44ff-94a1-00d00ffd5737", timeCreated: 19, name: "Danny Poteet", gender: "Male", age: 84 },
  { id: "74ea06e5-3ac8-474b-a441-2bc971b46c3c", timeCreated: 20, name: "Cal Pipken", gender: "Male", age: 91 }
];

app.use(helmet());

app.use(cors({
  origin: "*"
}));

app.use(bodyParser.json());

app.get("/api/members", (request, response) => {
  response
    .status(200)
    .json(members);
  response.end();
});

app.post("/api/members", (request, response) => {
  const member = request.body;
  console.log("adding " + member.name);
  members.push(member);
  response.status(201);
  response.end();
});

app.delete("/api/members", (request, response) => {
  members.splice(20, members.length);
  response.status(200);
  response.end();
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("ready on port " + port + " captain!");
})