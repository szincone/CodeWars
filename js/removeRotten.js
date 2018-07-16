let removeRotten = (bagOfFruits) => {
    // Adding if for edge cases
    if (bagOfFruits === undefined || bagOfFruits === null) { 
        bagOfFruits = []
    }
    // Iterate over the array
    for (let i=0; i < bagOfFruits.length; i++) {
        // if the element in the array includes rotten, split at rotten (get rid of)
        // join with nothing, and convert to lowercase
        if (bagOfFruits[i].includes("rotten")) {
            bagOfFruits[i] = bagOfFruits[i].split("rotten").join("").toLowerCase();
        }
        else {
            // do nothing
        }
    }
    // return our new array
    return bagOfFruits;
}
