import 'dotenv/config'
import fs from 'fs'

const folder = `${process.cwd()}/src/db/migrations`
let migrationType = null
let failedFile = null
let migrationCount = 0

if(process.argv.length >= 3) {
    migrationType = process.argv[2]
}

// loop over the files and run each one
const run = async () => {
    let files = fs.readdirSync(folder)
    
    if(migrationType !== 'all') {
        files.reverse()
    }

    for(const file of files) {
        // only run all migrations if specified
        if(migrationType !== 'all' && migrationCount > 0) {
            break;
        }

        let migration = await import(`${folder}/${file}`)
        
        try {
            console.log(`Running ${file}`)
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