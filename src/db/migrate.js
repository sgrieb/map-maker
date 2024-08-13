import 'dotenv/config'
import fs from 'fs'

let migrationType = null
const folder = `${process.cwd()}/src/db/migrations`
let failedFile = null
let migrationCount = 0

if(process.argv.length >= 3) {
    migrationType = process.argv[2]
}

// loop over the files and run each one
const run = async () => {
    const files = fs.readdirSync(folder)
    
    for(const file of files) {
        // only run all migrations if specified
        if(migrationType !== 'all' && migrationCount > 0) {
            break;
        }

        let migration = await import(`${folder}/${file}`)
        
        try {
            await migration.default.migrate()
            migrationCount++
        }
        catch(e) {
            failedFile = file
            console.log(`Migration ${file} failed with error: \n${e.toString()}`)
            break
        }
    }

    if(failedFile) {
        console.log(`Migrations Failed: ${migrationCount} Migrations completed Successfully :(`)
    } else {
        console.log(`${migrationCount} Migrations Completed Successfully :)`)
    }
}

await run()