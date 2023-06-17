import fs from 'fs';


// add foler files with file f1.txt

// how to read file in synchronous mode
// function readFile() {
//     try{
//         const data = fs.readFileSync('./files/f1.txt', 'utf8');
//         console.log('Synchronous Read: ',data);
//     }catch(e){
//         console.error('Error reading file', e);
//     }
// }

// readFile();

//How to read file asynchronously
// fs.readFile('./files/f1.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error('Error reading file', err);
//         return;
//     }

//     console.log('Synchronous Read successfully : ', data);
    
// });

// how to write file synchronully
const content = 'Hello My name is Rahul i am a developer'

// function writeFile() {
//     try{
//        fs.writeFileSync('./files/f1.txt', content, 'utf8');
        
//     }catch(e){
//         console.error('Error writing file', e);
//     }
// }

// writeFile();

// how to write file asynchronously

// fs.writeFile('./files/f1.txt', content, 'utf8', (err) => {
//     if(err) {
//         console.error('Error writing file', err);
//         return;
//     }
//     console.log('asynchronously wrote successfully');
// });


// how to create directories synchronously

// function createDirectory() {
//     try{
//         fs.mkdirSync('new-directory');
//         console.log('synchronously created directory');
//     }catch(e){
//         console.error('error creating directory', e);
//     }
// }

// createDirectory();

// how to create directories asynchronously

fs.mkdir('new-directory', (err) => {
    if(err) {
        console.error('error creating directory', err);
        return;
    }

    console.log('synchronously created directory');
});
