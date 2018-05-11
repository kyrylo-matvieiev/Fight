import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from "./fight";

// create two instances
let fighter = new Fighter("Anaconda", 10, 12);
let improvedFighter = new ImprovedFighter("Tiger", 122, 1);

fight(fighter, improvedFighter, [25, 12, 43]);
// call fight function
