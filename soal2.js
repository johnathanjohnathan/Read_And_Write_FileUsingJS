//import modul readAndWrite.js
import { bacaFile, tulisFile } from "./readAndWrite.js"

let hasilBaca = await bacaFile('homework.log')

let hasilTulis = tulisFile('log.txt',hasilBaca)