﻿var my = my || { }; //my namespace
my.getMusic = (function () {
    var taglineBase = "<span style='color:white;background-color:black;margin:2px;font-weight:bold;padding:2px;'><span style='font-style: italic;font-size:16px'>Taylor</span> <span style='font-style: italic;'>Quality Guitars</span></span>";
    return { products: [
                        { modelId: 1, pricing: { salePrice: 1649.01, listPrice: 2199.00 }, rating: 5, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"],
                            gallery: {
                                mainPhoto: "314ce.png",
                                thumbNail: ""
                            },
                            categoryId: 1, itemNumber: "T314CE", description: "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar", reviews: [{ "ProductId": 4, "ReviewerName": "guitarhero", description: "This guitar has never let me down. I gig 3-6 nights a week and the 314CE just keeps on ticking. Change the battery and the strings regularly and she sounds like a dream everytime. If you want great sound, playability, dependability and just great playing fun get this guitar. You won\u0027t be sorry.", "ReviewDate": "\/Date(1302181440000)\/", id: 3 }, { "ProductId": 4, "ReviewerName": "billyjack", description: "Best guitar ever!", "ReviewDate": "\/Date(1302218040000)\/", id: 4}], model: { name: "314ce", brand: "Taylor", id: 1 }, category: { name: "Acoustic Guitars", id: 1 }, id: 4, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] 
                        },
                        {
                            modelId: 3,
                            pricing: {
                                salePrice: 4775.00,
                                listPrice: 7199.00
                            },
                            rating: 5,
                            ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"],
                            gallery: {
                                mainPhoto: "T814ce_tobacco_sunburst.jpg",
                                thumbNail: "T814ce_tobacco_sunburst.jpg"
                            },
                            categoryId: 1,
                            itemNumber: "T814CE",
                            description: "Taylor 814-CE Acoustic Electric Guitar in Tobacco Sunburst",
                            reviews: [],
                            model: {
                                name: "814ce",
                                brand: "Taylor",
                                id: 3
                            },
                            category: {
                                name: "Acoustic Guitars",
                                id: 1
                            },
                            id: 3,
                            tagline: taglineBase,
                            options: ["sitka top", "rosewood top"],
                            accessories: ["taylor pick", "light strings", "travel case"]
                        },
                        { modelId: 4, pricing: { salePrice: 5899.00, listPrice: 7999.00 }, rating: 5, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"],
                            gallery: { mainPhoto: "T914CE.jpg", thumbNail: "" }, categoryId: 1, itemNumber: "T914CE", description: "Taylor 814-CE Acoustic Electric Guitar", reviews: [], model: { name: "914ce", brand: "Taylor", id: 4 }, category: { name: "Acoustic Guitars", id: 1 }, id: 3,
                            tagline: taglineBase,
                            warehouses: [
                                { number: 12, locations: [{ section: "W7", row: "G", shelf: 9 }, { section: "Y4", row: "F", shelf: 3}] },
                                { number: 7, locations: [{ section: "E3", row: "V", shelf: 21}] }
                            ],
                            options: ["spruce top", "rosewood top"],
                            accessories: ["taylor pick", "pickup", "travel case"]
                        },
                        {
                            modelId: 5,
                            pricing: { salePrice: 5898.00, listPrice: 7998.00 },
                            rating: 2,
                            ratingStars: ["fullStar", "fullStar", "emptyStar", "emptyStar", "emptyStar"],
                            gallery: { mainPhoto: "", thumbNail: "T916ce_tobacco_sunburst.jpg" },
                            categoryId: 1,
                            itemNumber: "T916CE",
                            description: "Taylor 916-CE Acoustic Electric Guitar in Tobacco Sunburst",
                            reviews: [],
                            model: { name: "916ce", brand: "Taylor", id: 5 },
                            category: { name: "Acoustic Guitars", id: 1 },
                            id: 4,
                            options: ["sitka top", "rosewood top"],
                            accessories: ["light strings", "pickup", "travel case"]
                        },
                        { modelId: 6, pricing: { salePrice: 8999.00, listPrice: 10599.00 }, rating: 5, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"], gallery: { mainPhoto: "TDMSM_front_print.jpg", thumbNail: "" }, categoryId: 1, itemNumber: "T814CE", description: "Taylor DMSM Acoustic Electric Guitar", reviews: [], model: { name: "DMSM", brand: "Taylor", id: 6 }, category: { name: "Acoustic Guitars", id: 1 }, id: 5, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 8, pricing: { salePrice: 4199.00, listPrice: 5199.00 }, rating: 5, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"], gallery: { mainPhoto: "Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar.png", thumbNail: "" }, categoryId: 1, itemNumber: "TK66CE", description: "Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar", reviews: [], model: { name: "K66e", brand: "Taylor", id: 8 }, category: { name: "Acoustic Guitars", id: 1 }, id: 11, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 9, pricing: { salePrice: 299.00, listPrice: 399.00 }, rating: 3, ratingStars: ["fullStar", "fullStar", "fullStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "Taylor Baby Taylor Left-Handed Acoustic Guitar.png", thumbNail: "" }, categoryId: 1, itemNumber: "TBTL", description: "Taylor Baby Taylor Left-Handed Acoustic Guitar", reviews: [], model: { name: "Baby", brand: "Taylor", id: 9 }, category: { name: "Acoustic Guitars", id: 1 }, id: 12, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 10, pricing: { salePrice: 1999.00, listPrice: 2399.00 }, rating: 4, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "emptyStar"], gallery: { mainPhoto: "Taylor T5 Standard Acoustic-Electric Guitar with Spruce Top.png", thumbNail: "" }, categoryId: 1, itemNumber: "TT5E", description: "Taylor T5 Standard Acoustic-Electric Guitar with Spruce Top", reviews: [], model: { name: "T5", brand: "Taylor", id: 10 }, category: { name: "Acoustic Guitars", id: 1 }, id: 13, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 11, pricing: { salePrice: 149.99, listPrice: 169.99 }, rating: 4, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "emptyStar"], gallery: { mainPhoto: "El Dorado Vintage Hand-Tooled Leather Guitar Strap.png", thumbNail: "" }, categoryId: 4, itemNumber: "87123", description: "Dorado Vintage Hand-Tooled Leather Guitar Strap", reviews: [], model: { name: "Vintage", brand: "Dorado", id: 11 }, category: { name: "Straps", id: 4 }, id: 14, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 12, pricing: { salePrice: 16.99, listPrice: 19.99 }, rating: 3, ratingStars: ["fullStar", "fullStar", "fullStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "Moody 2 half Inch Luxury Black Leather Guitar Strap with Tobacco Leather Back.png", thumbNail: "" }, categoryId: 4, itemNumber: "89120", description: "Moody 2 half Inch Luxury Black Leather Guitar Strap with Tobacco Leather Back", reviews: [], model: { name: "Luxury", brand: "Moody", id: 12 }, category: { name: "Straps", id: 4 }, id: 15, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 13, pricing: { salePrice: 150.00, listPrice: 180.00 }, rating: 2, ratingStars: ["fullStar", "fullStar", "emptyStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "LM Products Iron Cross Stud 2 Inch Guitar Strap.png", thumbNail: "" }, categoryId: 4, itemNumber: "12972", description: "LM Products Iron Cross Stud 2 Inch Guitar Strap", reviews: [], model: { name: "Iron Cross", brand: "LM", id: 13 }, category: { name: "Straps", id: 4 }, id: 17, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] },
                        { modelId: 14, pricing: { salePrice: 64.99, listPrice: 64.99 }, rating: 4, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "emptyStar"], gallery: { mainPhoto: "Jodi Head 3 Inch Denny Wide Art Deco Guitar Strap - Brown and Tan Sequin Sparkle.png", thumbNail: "" }, categoryId: 4, itemNumber: "98612", description: "Jodi Head 3\" Denny Wide Art Deco Guitar Strap - Brown and Tan Sequin Sparkle", reviews: [], model: { name: "Deco", brand: "Jodi", id: 14 }, category: { name: "Straps", id: 4 }, id: 18, options: ["red", "blue", "brown"], accessories: ["pick", "travel bag"] },
                        { modelId: 15, pricing: { salePrice: 59.99, listPrice: 64.99 }, rating: 3, ratingStars: ["fullStar", "fullStar", "fullStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "Levy\u0027s Leather Guitar Strap with Dog Tags.png", thumbNail: "" }, categoryId: 4, itemNumber: "71203", description: "Levy\u0027s Leather Guitar Strap with Dog Tags", reviews: [], model: { name: "Dog Tags", brand: "Levy\u0027s", id: 15 }, category: { name: "Straps", id: 4 }, id: 19, options: ["black", "blue", "brown"], accessories: ["pick", "travel bag"] },
                        { modelId: 16, pricing: { salePrice: 14.99, listPrice: 19.99 }, rating: 5, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "fullStar"], gallery: { mainPhoto: "Dunlop Trigger Classical Guitar Capo.png", thumbNail: "" }, categoryId: 3, itemNumber: "76123", description: "Dunlop Trigger Classical Guitar Capo", reviews: [], model: { name: "Trigger", brand: "Dunlop", id: 16 }, category: { name: "Capos", id: 3 }, id: 20, options: ["black", "silver", "brown", "white"], accessories: ["travel bag"] },
                        { modelId: 17, pricing: { salePrice: 16.99, listPrice: 17.99 }, rating: 4, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "emptyStar"], gallery: { mainPhoto: "Paige 6-String Guitar Capo.png", thumbNail: "" }, categoryId: 3, itemNumber: "36581", description: "Paige 6-String Guitar Capo", reviews: [], model: { name: "Basic Capo", brand: "Paige", id: 17 }, category: { name: "Capos", id: 3 }, id: 21, options: ["black", "silver", "brown", "white"], accessories: ["travel bag"] },
                        { modelId: 18, pricing: { salePrice: 24.99, listPrice: 25.99 }, rating: 3, ratingStars: ["fullStar", "fullStar", "fullStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "Glider GL-1 Guitar Capo.png", thumbNail: "" }, categoryId: 3, itemNumber: "23421", description: "Glider GL-1 Guitar Capo", reviews: [], model: { name: "GL-1", brand: "Glider", id: 18 }, category: { name: "Capos", id: 3 }, id: 22, options: ["black", "silver", "brown", "white"], accessories: ["travel bag"] },
                        { modelId: 19, pricing: { salePrice: 14.99, listPrice: 14.99 }, rating: 1, ratingStars: ["fullStar", "emptyStar", "emptyStar", "emptyStar", "emptyStar"], gallery: { mainPhoto: "Planet Waves NS Classical Guitar Capo.png", thumbNail: "" }, categoryId: 3, itemNumber: "25232", description: "Planet Waves NS Classical Guitar Capo", reviews: [], model: { name: "NS", brand: "Planet Waves", id: 19 }, category: { name: "Capos", id: 3 }, id: 23, options: ["black", "silver", "brown", "white"], accessories: ["travel bag"] },
                        { modelId: 2, pricing: { salePrice: 649.00, listPrice: 899.00 }, rating: 3, ratingStars: ["fullStar", "fullStar", "fullStar", "fullStar", "emptyStar"], gallery: { mainPhoto: "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar.png", thumbNail: "" }, categoryId: 1, itemNumber: "T110CE", description: "Taylor 114-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar", reviews: [], model: { name: "110ce", brand: "Taylor", id: 2 }, category: { name: "Acoustic Guitars", id: 1 }, id: 25, options: ["koa", "rosewood top"], accessories: ["taylor pick", "pickup", "travel case"] }
    ]
    };
});
