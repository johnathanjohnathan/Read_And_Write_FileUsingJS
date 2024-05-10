// import module 
import {readFile, writeFile} from "fs/promises"

// membuat fungsi bacaFile
export async function bacaFile(namaFile){
    try{
        const data = await readFile(namaFile,'utf-8')
        return data
    }catch (err){
        console.log(err)
    }
}

// membuat fungsi tulisFile
export function tulisFile(namaFile,data){
    console.log('data written succesuflly')
    return writeFile(namaFile, data, 'utf-8')
}