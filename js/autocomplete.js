/*
Created By: Destructiveburn https://destreuctiveburn.com/
https://searchthnat.net/
https://youtube.com/c/DestructiveBurn
*/


//AUTOCOMPLETE SUGGESTIONS
const suggestions = [

//Page One
"Wild Horseradish", "Daffodil", "Leek", "Dandelion", "Parsnip", "Cave Carrot", "Coconut", "Cactus", "Fruit", "Banana", "Sap", "Large Egg (white)", "Egg (white)", "Egg (brown)", "Large Egg (brown)", "Milk", "Large Milk", "Green Bean", "Cauliflower", "Potato", "Garlic", "Kale", "Rhubarb", "Melon", "Tomato", "Morel", "Blueberry", "Fiddlehead Fern", "Hot Pepper", "Wheat", "Radish", "Red Cabbage", "Starfruit", "Corn", "Unmilled Rice", "Eggplant", "Artichoke", "Pumpkin", "Bok Choy", "Yam", "Chanterelle", "Cranberries", "Holly", "Beet", "Ostrich Egg", "Salmonberry", "Amaranth", "Pale Ale", "Hops", "Void Egg", "Mayonnaise", "Duck Mayonnaise", "Void Mayonnaise", "Clay", "Copper Bar", "Iron Bar", "Gold Bar", "Iridium Bar", "Refined Quartz", "Honey (any)", "Pickles (any)", "Jelly (any)", "Beer", "Wine (any)", "Juice (any)", "Clam", "Poppy", "Copper Ore", "Iron Ore", "Coal", "Gold Ore",

//Page Two
"Iridium Ore", "Wood", "Stone", "Nautilus Shell", "Coral", "Rainbow Shell", "Spice Berry", "Sea Urchin", "Grape", "Spring Onion", "Strawberry", "Sweet Pea", "Common Mushroom", "Wild Plum", "Hazelnut", "Blackberry", "Winter Root", "Crystal Fruit", "Snow Yam", "Sweet Gem Berry", "Crocus", "Red Mushroom", "Sunflower", "Purple Mushroom", "Cheese", "Goat Cheese", "Cloth", "Truffle", "Truffle Oil", "Coffee Bean", "Goat Milk", "Large Goat Milk", "Wool", "Duck Egg", "Duck Feather", "Caviar", "Rabbit's Foot", "Aged Roe", "Ancient Fruit", "Mead", "Tulip", "Summer Spangle", "Fairy Rose", "Blue Jazz", "Apple", "Green Tea", "Apricot", "Orange", "Peach", "Pomegranate", "Cherry", "Bug Meat", "Hardwood", "Maple Syrup", "Oak Resin", "Pine Tar", "Slime", "Bat Wing", "Solar Essence", "Void Essence", "Fiber", "Battery Pack", "Dinosaur Mayonnaise", "Roe (any)", "Squid Ink", "Tea Leaves", "Ginger", "Taro Root", "Pineapple", "Mango",

//Page Three
"Cinder Shard", "Magma Cap", "Bone Fragment", "Radioactive Ore", "Radioactive Bar",

//Fish
"Pufferfish", "Anchovy", "Tuna", "Sardine", "Bream", "Largemouth Bass", "Smallmouth Bass", "Rainbow Trout", "Salmon", "Walleye", "Perch", "Carp", "Catfish", "Pike", "Sunfish", "Red Mullet", "Herring", "Eel", "Octopus", "Red Snapper", "Squid", "Seaweed", "Green Algae", "Sea Cucumber", "Super Cucumber", "Ghostfish", "White Algae", "Stonefish", "Crimsonfish", "Angler", "Ice Pip", "Lava Eel", "Legend", "Sandfish", "Scorpion Carp", "Flounder", "Midnight Carp", "Mutant Carp", "Sturgeon", "Tiger Trout", "Bullhead", "Tilapia", "Chub", "Dorado", "Albacore", "Shad", "Lingcod", "Halibut", "Lobster", "Crayfish", "Crab", "Cockle", "Mussel", "Shrimp", "Snail", "Periwinkle", "Oyster", "Woodskip", "Glacierfish", "Void Salmon", "Slimejack", "Midnight Squid", "Spook Fish", "Blobfish", "Stingray", "Lionfish", "Blue Discus",

//Artifacts
"Dwarf Scroll I", "Dwarf Scroll II", "Dwarf Scroll III", "Dwarf Scroll IV", "Chipped Amphora", "Arrowhead", "Ancient Doll", "Elvish Jewelry", "Chewing Stick", "Ornamental Fan", "Dinosaur Egg", "Rare Disc", "Ancient Sword", "Rusty Spoon", "Rusty Spur", "Rusty Cog", "Chicken Statue", "Ancient Seed", "Prehistoric Tool", "Dried Starfish", "Anchor", "Glass Shards", "Bone Flute", "Prehistoric Handaxe", "Dwarvish Helm", "Dwarf Gadget", "Ancient Drum", "Golden Mask", "Golden Relic", "Strange Doll", "Strange Doll", "Prehistoric Scapula", "Prehistoric Tibia", "Prehistoric Skull", "Skeletal Hand", "Prehistoric Rib", "Prehistoric Vertebra", "Skeletal Tail", "Nautilus Fossil", "Amphibian Fossil", "Palm Fossil", "Trilobite",

//Minerals
"Emerald", "Aquamarine", "Ruby", "Amethyst", "Topaz", "Jade", "Diamond", "Prismatic Shard", "Quartz", "Fire Quartz", "Frozen Tear", "Earth Crystal", "Alamite", "Bixite", "Baryte", "Aerinite", "Calcite", "Dolomite", "Esperite", "Fluorapatite", "Geminite", "Helvite", "Jamborite", "Jagoite", "Kyanite", "Lunarite", "Malachite", "Neptunite", "Lemon Stone", "Nekoite", "Orpiment", "Petrified Slime", "Thunder Egg", "Pyrite", "Ocean Stone", "Ghost Crystal", "Tigerseye", "Jasper", "Opal", "Fire Opal", "Celestine", "Marble", "Sandstone", "Granite", "Basalt", "Limestone", "Soapstone", "Hematite", "Mudstone", "Obsidian", "Slate", "Fairy Stone", "Star Shards",

//Cooking
"Fried Egg", "Omelet", "Salad", "Cheese", "Cauliflower", "Baked Fish", "Parsnip Soup", "Vegetable Medley", "Complete Breakfast", "Fried Calamari", "Strange Bun", "Lucky Lunch", "Fried Mushroom", "Pizza", "Bean Hotpot", "Glazed Yams", "Carp Surprise", "Hashbrowns", "Pancakes", "Salmon Dinner", "Fish Taco", "Crispy Bass", "Pepper Poppers", "Bread", "Tom Kha Soup", "Trout Soup", "Chocolate Cake", "Pink Cake", "Rhubarb Pie", "Cookie", "Spaghetti", "Fried Eel", "Spicy Eel", "Sashimi", "Maki Roll", "Tortilla", "Red Plate", "Eggplant Parmesan", "Rice Pudding", "Ice Cream", "Blueberry Tart", "Autumn's Bounty", "Pumpkin Soup", "Super Meal", "Cranberry Sauce", "Stuffing", "Farmer's Lunch", "Survival Burger", "Dish O' The Sea", "Miner's Treat", "Roots Platter", "Triple Shot Espresso", "Seafoam Pudding", "Algae Soup", "Pale Broth", "Plum Pudding", "Artichoke Dip", "Stir Fry", "Roasted Hazelnuts", "Pumpkin Pie", "Radish Salad", "Fruit Salad", "Blackberry Cobbler", "Cranberry Candy", "Bruschetta", "Coleslaw", "Fiddlehead Risotto", "Poppyseed Muffin", "Chowder", "Fish Stew", "Escargot", "Lobster Bisque", "Maple Bar", "Crab Cakes", "Shrimp Cocktail", "Ginger Ale", "Banana Pudding", "Mango Sticky Rice", "Poi", "Tropical Curry", "Squid Ink", "Ravioli",

//Crafting
"Cherry Bomb", "Bomb", "Mega Bomb", "Gate", "Wood Fence", "Stone Fence", "Iron Fence", "Hardwood Fence", "Sprinkler", "Quality Sprinkler", "Iridium Sprinkler", "Mayonnaise Machine", "Bee House", "Preserves Jar", "Cheese Press", "Loom", "Keg", "Oil Maker", "Cask", "Basic Fertilizer", "Quality Fertilizer", "Deluxe Fertilizer", "Speed-Gro", "Deluxe Speed-Gro", "Hyper Speed-Gro", "Basic Retaining Soil", "Quality Retaining Soil", "Deluxe Retaining Soil", "Tree Fertilizer", "Wild Seeds (Sp) (Spring Seeds)", "Wild Seeds (Su) (Summer Seeds)", "Wild Seeds (Fa) (Fall Seeds)", "Wild Seeds (Wi) (Winter Seeds)", "Ancient Seeds", "Grass Starter", "Tea Sapling", "Fiber Seeds", "Wood Floor", "Rustic Plank Floor", "Straw Floor", "Weathered Floor", "Crystal Floor", "Stone Floor", "Stone Walkway Floor", "Brick Floor", "Wood Path", "Gravel Path", "Cobblestone Path", "Stepping Stone Path", "Crystal Path", "Spinner", "Trap Bobber", "Cork Bobber", "Quality Bobber", "Treasure Hunter", "Dressed Spinner", "Barbed Hook", "Magnet", "Bait", "Wild Bait", "Magic Bait", "Crab Pot", "Sturdy Ring", "Warrior Ring", "Ring of Yoba", "Thorns Ring", "Glowstone Ring", "Iridium Band", "Wedding Ring", "Field Snack", "Bug Steak", "Life Elixir", "Oil of Garlic", "Monster Musk", "Fairy Dust", "Warp Totem: Beach", "Warp Totem: Mountains", "Warp Totem: Farm", "Warp Totem: Desert", "Warp Totem: Island", "Rain Totem", "Torch", "Campfire", "Wooden Brazier", "Stone Brazier", "Gold Brazier", "Carved Brazier", "Stump Brazier", "Barrel Brazier", "Skull Brazier", "Marble Brazier", "Wood Lamp-post", "Iron Lamp-post", "Jack-O-Lantern", "Charcoal Kiln", "Crystalarium", "Furnace", "Lightning Rod", "Solar Panel", "Recycling Machine", "Seed Maker", "Slime Incubator", "Ostrich Incubator", "Slime Egg-Press", "Tapper", "Heavy Tapper", "Worm Bin", "Bone Mill", "Geode Crusher", "Tub o' Flowers", "Wicked Statue", "Flute Block", "Drum Block", "Chest", "Stone Chest", "Wood Sign", "Stone Sign", "Dark Sign", "Garden Pot", "Scarecrow", "Deluxe Scarecrow", "Staircase", "Explosive Ammo", "Transmute (Fe)", "Transmute (Au)", "Mini-Jukebox", "Mini-Obelisk", "Farm Computer", "Hopper", "Cookout Kit", "Deluxe Bait",

//Field Office
"Fossilized Leg","Fossilized Ribs","Fossilized Skull","Fossilized Spine","Fossilized Tail","Mummified Frog","Mummified Bat","Snake Skull","Snake Vertebrae",

//People
"Abigail", "Alex", "Caroline", "Clint", "Demetrius", "Dwarf", "Elliott", "Emily", "Evelyn", "George", "Gus", "Haley", "Harvey", "Jas", "Jodi", "Kent", "Krobus", "Leah", "Lewis", "Linus", "Marnie", "Maru", "Pam", "Penny", "Pierre", "Robin", "Sam", "Sandy", "Sebastian", "Shane", "Vincent", "Willy", "Wizard",

//Villager People
"Villager Abigail", "Villager Alex", "Villager Caroline", "Villager Clint", "Villager Demetrius", "Villager Dwarf", "Villager Elliott", "Villager Emily", "Villager Evelyn", "Villager George", "Villager Gus", "Villager Haley", "Villager Harvey", "Villager Jas", "Villager Jodi", "Villager Kent", "Villager Krobus", "Villager Leah", "Villager Lewis", "Villager Linus", "Villager Marnie", "Villager Maru", "Villager Pam", "Villager Penny", "Villager Pierre", "Villager Robin", "Villager Sam", "Villager Sandy", "Villager Sebastian", "Villager Shane", "Villager Vincent", "Villager Willy", "Villager Wizard", "Fizz",

//Secret Notes / Journal Scraps Checklist
"Secret Note #1", "Secret Note #2", "Secret Note #3", "Secret Note #4", "Secret Note #5", "Secret Note #6", "Secret Note #7", "Secret Note #8", "Secret Note #9", "Secret Note #10", "Secret Note #11", "Secret Note #12", "Secret Note #13", "Secret Note #14", "Secret Note #15", "Secret Note #16", "Secret Note #17", "Secret Note #18", "Secret Note #19", "Secret Note #20", "Secret Note #21", "Secret Note #22", "Secret Note #23", "Secret Note #24", "Secret Note #25", "Secret Note #26", "Secret Note #27", "Journal Scrap #1", "Journal Scrap #2", "Journal Scrap #3", "Journal Scrap #4", "Journal Scrap #5", "Journal Scrap #6", "Journal Scrap #7", "Journal Scrap #8", "Journal Scrap #9", "Journal Scrap #10", "Journal Scrap #11", 


/*-----------
1.6 Data
-----------*/

//Shipping
"Smoked Fish", "Moss", "Mystic Syrup", "Raisins", "Carrot", "Summer Squash", "Broccoli", "Powdermelon", 

//Crafting
"Fish Smoker", "Dehydrator", "Blue Grass Starter", "Mystic Tree Seed", "Sonar Bobber", "Challenge Bait", "Treasure Totem", "Heavy Furnace", "Deluxe Worm Bin", "Big Chest", "Big Stone Chest", "Text Sign", "Tent Kit", "Statue Of The Dwarf King", "Statue Of Blessings", "Anvil", "Mini-Forge", 

//Cooking
"Moss Soup",

//Fishing
"Sea Jelly", "River Jelly", "Cave Jelly", "Goby", 

//Special Items & Powers
"Forest Magic", "Dwarvish Translation Guide", "Rusty Key", "Club Card", "Special Charm", "Skull Key", "Magnifying Glass", "Dark Talisman", "Magic Ink", "Bear's Knowledge", "Spring Onion Mastery", "Key To The Town", "Animal Catalogue", "Book of Mysteries", "Dwarvish Safety Manual", "Friendship 101", "Horse: The Book", "Jack Be Nimble, Jack Be Thick", "Jewels Of The Sea", "Mapping Cave Systems", "Monster Compendium", "Ol' Slitherlegs", "Price Catalogue", "The Alleyway Buffet", "The Art O' Crabbing", "The Diamond Hunter", "Treasure Appraisal Guide", "Raccoon Journal", "Way Of The Wind pt. 1", "Way Of The Wind pt. 2", "Woody's Secret", "Farming Mastery", "Mining Mastery", "Foraging Mastery", "Fishing Mastery", "Combat Mastery", 

//Random
"Stardrop", "Island Anywhere", "Island East", "Island West", "Island North", "Island South", 
];


//AUTOCOMPLETE
const input = document.getElementById("Stardew_Input");
const suggestionsContainer = document.getElementById("suggestions-container");
const suggestionsList = document.getElementById("suggestions-list");

suggestionsContainer.style.display = "none";

input.addEventListener("keyup", function (event) {
    const value = event.target.value;
    suggestionsList.innerHTML = "";

    if (value.length > 0) {
        const matchingSuggestions = suggestions
            .filter(function (suggestion) {
                return suggestion.toLowerCase().startsWith(value.toLowerCase());
            })
            .slice(0, 10); // limit the suggestions to a maximum of 5

        if (matchingSuggestions.length > 0) {
            matchingSuggestions.forEach(function (suggestion) {
                const li = document.createElement("li");
                const index = suggestion.toLowerCase().indexOf(value.toLowerCase());
                const matchingText = suggestion.slice(index, index + value.length);
                const restOfText = suggestion.slice(index + value.length);
                const boldText = document.createElement("b");
                boldText.textContent = matchingText;
                const regularText = document.createTextNode(restOfText);
                li.appendChild(boldText);
                li.appendChild(regularText);
                li.addEventListener("click", function () {
                    input.value = suggestion;
                    suggestionsList.innerHTML = "";
                    globaltable(); // call globaltable to update the search
                });

                suggestionsList.appendChild(li);
            });

            suggestionsContainer.style.display = "block";
        } else {
            suggestionsContainer.style.display = "none";
        }
    } else {
        suggestionsContainer.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (event.target !== input) {
        suggestionsList.innerHTML = "";
        suggestionsContainer.style.display = "none";
    }
});

//Search Table  -- This can be alone
function globaltable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Stardew_Input");
    filter = input.value.toUpperCase();
    table = document.getElementById("Stardew_Table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        var rowContent = tr[i].textContent;
        rowContent = rowContent.replace(/[\s]+/g, " ");

        if (rowContent) {
            if (rowContent.toUpperCase().includes(filter)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function clearSearch() {
    input.value = "";
    globaltable();
}
