/*
    Initialize the database in memory as an object
*/
const HomeInventoryDatabase = {}

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

/*
    Time to create some data that will inserted into the database
*/

// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

// Add the data to the appropriate tables
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)

const saveDatabase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}
const loadDatabase = function (localStorageKey) {
  const databaseString = localStorage.getItem(localStorageKey)
  return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")