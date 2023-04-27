const fs = require("fs");

async function createFile() {
  try {
    await fs.promises.writeFile("demo.txt", "Hello world!");
    console.log("File created successfully");
  } catch (error) {
    console.log("There is some error Occured :" + error);
  }
}

createFile();
