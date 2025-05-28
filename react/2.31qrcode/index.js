import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// var qr = require('qr-image');

inquirer
  .prompt([{
    message: "Type your URL: ",
    name: "URL",
  }])
  .then((answers) => {
    console.log(answers.URL);

    var qr_svg = qr.image(answers.URL,);
    qr_svg.pipe(fs.createWriteStream(`url.png`));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
