import fs from 'fs/promises'
import readline from 'readline'


// const file = await fs.readFile('./files/f1.txt', 'utf8');
// console.log(file);

// await fs.writeFile('./files/f1.txt', 'Hello Rahul', 'utf8')
//   .catch(err => console.log('file error : ', err));

// await fs.appendFile('./files/f1.txt','/nThis is nice example', 'utf8').
//   catch(err => console.log('error while appending file : ', err))

// await fs.unlink('./files/f1.txt', 'utf8').
//   catch(err => console.log('error while deleting file : ', err));
  


// Create a program that reads the contents of multiple files in a directory asynchronously and logs the contents to the console.

// async function readFiles(files) {
//   try{
//     const filePromises = files.map(file => fs.readFile(file, 'utf8'));
//     const fileContents = await Promise.all(filePromises);
  
//     fileContents.forEach((content, index) => {
//       console.log('content of ${files[index]}', content);
//     });
//   }catch(err){
//     console.log('error while reading files ', err);
//   }
// }

// readFiles(['./files/f1.txt', './files/f2.txt']);

// Extend the previous program to write the contents of a file asynchronously, given user input.

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function writeToFile() {
//   rl.question('Enter the file name to write: ', async (fileName) => {
//     try{
//       const fileContent = await promptUserInput('Enter the content to write: ');
//       await fs.writeFile(fileName, fileContent, 'utf8');
//       console.log('sussess to write file'),
//         rl.close();
//     }catch(err){
//       console.log('error while writing file', err);
//       rl.close();
//     }
//   });
// }

// function promptUserInput(prompt){
//  return new Promise(resolve => {
//    rl.question(prompt, answer => resolve(answer));
//  });
// }

// writeToFile();