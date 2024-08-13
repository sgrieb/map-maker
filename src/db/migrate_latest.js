import 'dotenv/config'
import fs from 'fs'

const folder = `${process.cwd()}/src/db/migrations`
let failedFile = null

// loop over the files and run each one
const run = async () => {
    const files = fs.readdirSync(folder)
    
    for(const file of files) {
        let migration = await import(`${folder}/${file}`)
        
        try {
            await migration.default.migrate()
        }
        catch(e) {
            failedFile = file
            console.log(`Migration ${file} failed with error: \n${e.toString()}`)
            break
        }
    }

    if(failedFile) {
        console.log(`Migrations Failed :(`)
    } else {
        console.log(`Migrations Completed  Successfully :)`)
    }
}

await run()