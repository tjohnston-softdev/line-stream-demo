# Line Stream Demo
By Tyrone Johnston

---

### Introduction
This is a demo project for the [line-by-line](https://www.npmjs.com/package/line-by-line) Node JS library. It opens a given text file and displays the contents (as the name would suggest) line by line.

The [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) function in the default File System library is a very easy, convenient way to open and read files. However, the catch is that it reads the file all at once and stores the contents in memory. This is fine for smaller files but this becomes an issue for files with a large or dynamic size as attempting to store the contents of large files in memory can cause [fatal errors](https://blog.asayer.io/javascript-heap-out-of-memory-error). Therefore, the file should be read in smaller chunks rather than as a whole. There is no right or wrong way to go about this but rather it depends on the project and your needs. If the target needs to be read per-line, I wholeheartedly recommend this library.

I have provided an example text file which simulates a chat log between two people. Each line corresponds to a message. The size is only ~8kb which would be safe to read all at once but because only one line is stored in memory at a time, the actual size does not matter.

---

### Usage
* Open a terminal in the project folder.
* Run `npm install` to download the 'line-by-line' package.
* Run `node index` to execute the demo.

---

### Message Format

```
[yyyy-mm-dd HH:MM:SS] User : Hello World
[2021-01-13 10:01:34] Alice : Lorem ipsum
```

---

### Credits
* [@tjohnston-softdev](https://github.com/tjohnston-softdev) - Demo project.
* [@Osterjour](https://github.com/Osterjour) - Library developer.
* Chat messages generated with [Lorem Ipsum IO](https://loremipsum.io)
* Timestamps generated with the assistance of [RANDOM.ORG](https://www.random.org/)

---

### Further Reading
* [Reading a File Line by Line in Node.js](https://stackabuse.com/reading-a-file-line-by-line-in-node-js/)   
\-Vasyl Lagutin

* [Reading files with Node](https://flaviocopes.com/node-reading-files/)   
\-Flavio Copes

* [Using Node.js to Read Really, Really Large Datasets & Files](https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33)   
\-Paige Niedringhaus

* [Node.js streams for handling huge files](https://medium.com/@searchkisu/node-js-streams-for-handling-huge-files-3e5781f0c35d)   
\-Krishna Singh

* [Reading Large Structured Text Files in Node.js](https://medium.com/swlh/reading-large-structured-text-files-in-node-js-7c4c4b84332b)   
\-Momtchil Momtchev

* [Node.js | fs.createReadStream\(\) Method](https://www.geeksforgeeks.org/node-js-fs-createreadstream-method/)   
\-Geeks For Geeks

\
Links retrieved 1 April 2021

---

### Disclaimer
This demo project is licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). I only wrote this as a reference for using the 'line-by-line' library to read large files. This is not an official demo and I am in no way affiliated with [@Osterjour](https://github.com/Osterjour) or any of their contributors. While I will make an effort to maintain this repository where applicable, I do not accept any responsibility for how you use this code or 'line-by-line' as a whole.
