import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));  // test.txt

// dirname
console.log(path.dirname(filePath));   // ./dir1/dir2

// extname()  i.e. extension name
console.log(path.extname(filePath));   // .txt

// parse()
console.log(path.parse(filePath));     // dict/object

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);  // ...\Node-Crash-Course\dir1\dir2\test.txt

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
