import 'dotenv/config'

import * as migrate from './migrations/01_create_lists_table.js'

let hasError = false

try {
    await migrate.default.migrate()
}
catch(e) {
    hasError = true
    console.log(`Migration X failed with error: \n${e.toString()}`)
}

if(hasError) {
    console.log(`Migrations Failed :(`)
} else {
    console.log(`Migrations Completed  Successfully :)`)
}
