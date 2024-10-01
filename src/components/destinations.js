 const destArray = [
  {
    "id":1,
    "name": "Hagia Sophia",
    "description": "An architectural marvel, the Hagia Sophia is a historic site that has served as a cathedral, mosque, and museum.",
    "location": "Sultanahmet, 34122 Istanbul",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.9,
    "country": "Turkey",
    "city": "Istanbul",
    "image": [
      "/Desenation/HagiaSophia.jpg",
      "/Desenation/HagiaSophia1.jpg",
    ]
  },
  {
    "id":2,
    "name": "Cappadocia",
    "description": "Known for its unique rock formations, cave dwellings, and hot air balloon rides offering panoramic views.",
    "location": "Nevşehir Province",
    "category": "Natural Wonder",
    "type": "Tourist Region",
    "rating": 4.9,
    "country": "Turkey",
    "city": "Nevşehir",
    "image": [
      "/Desenation/Cappadocia.jpg",
      "/Desenation/Cappadocia1.jpg",
    ]
  },
  {
    "id":3,
    "name": "Topkapi Palace",
    "description": "The grand residence of Ottoman sultans, featuring impressive gardens and historical artifacts.",
    "location": "Cankurtaran, 34122 Istanbul",
    "category": "Historical Site",
    "type": "Museum",
    "rating": 4.8,
    "country": "Turkey",
    "city": "Istanbul",
    "image": [
      "/Desenation/TopkapiPalace.jpg",
      "/Desenation/TopkapiPalace1.jpg",
    ]
  },
  {
    "id":4,
    "name": "Pamukkale",
    "description": "Famous for its white travertine terraces formed by mineral-rich thermal waters.",
    "location": "Denizli Province",
    "category": "Natural Wonder",
    "type": "Geological Formation",
    "rating": 4.8,
    "country": "Turkey",
    "city": "Denizli",
    "image": [
      "/Desenation/Pamukkale.jpg",
      "/Desenation/Pamukkale1.jpg",
    ]
  },
  {
    "id":5,
    "name": "Ephesus",
    "description": "One of the best-preserved ancient cities, renowned for its ruins and the Library of Celsus.",
    "location": "Selçuk, İzmir Province",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.9,
    "country": "Turkey",
    "city": "Selçuk",
    "image": [
      "/Desenation/Ephesus.jpg",
      "/Desenation/Ephesus1.jpg",
    ]
  },
  {
    "id":6,
    "name": "Bodrum Castle",
    "description": "A medieval castle overlooking Bodrum Harbor, housing the Museum of Underwater Archaeology.",
    "location": "Bodrum, Muğla Province",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.7,
    "country": "Turkey",
    "city": "Bodrum",
    "image": [
    "/Desenation/BodrumCastle.jpg",
      "/Desenation/BodrumCastle1.jpg",
    ]
  },
  {
    "id":7,
    "name": "Antalya Old Town",
    "description": "A charming historical district with narrow streets, traditional architecture, and vibrant bazaars.",
    "location": "Antalya",
    "category": "Historical District",
    "type": "Cultural Area",
    "rating": 4.8,
    "country": "Turkey",
    "city": "Antalya",
    "image": [
      "/Desenation/AntalyaOldTown.jpg",
      "/Desenation/AntalyaOldTown1.jpg",
    ]
  },
  {
    "id":8,
    "name": "Mount Ararat",
    "description": "The highest peak in Turkey, known for its stunning views and as a potential landing place for Noah's Ark.",
    "location": "Ağrı Province",
    "category": "Natural Landmark",
    "type": "Mountain",
    "rating": 4.6,
    "country": "Turkey",
    "city": "Ağrı",
    "image": [
      "/Desenation/MountArarat.jpg",
      "/Desenation/MountArarat1.jpg",
    ]
  },
  {
    "id":9,
    "name": "Aspendos Theatre",
    "description": "One of the best-preserved ancient theatres in the world, famous for its acoustics and architectural grandeur.",
    "location": "Serik, Antalya Province",
    "category": "Historical Site",
    "type": "Theatre",
    "rating": 4.8,
    "country": "Turkey",
    "city": "Serik",
    "image": [
     "/Desenation/AspendosTheatre.jpg",
      "/Desenation/AspendosTheatre1.jpg",
    ]
  },
  {
    "id":10,
    "name": "Göbekli Tepe",
    "description": "An archaeological site believed to be the world's oldest temple complex, dating back to the 10th millennium BCE.",
    "location": "Şanlıurfa Province",
    "category": "Archaeological Site",
    "type": "Ancient Monument",
    "rating": 4.9,
    "country": "Turkey",
    "city": "Şanlıurfa",
    "image": [
     "/Desenation/GöbekliTepe.jpg",
     "/Desenation/GöbekliTepe1.jpg",
    ]
  },

  {
    "id":11,
    "name": "Burj Khalifa",
    "description": "The tallest building in the world, offering breathtaking views from its observation decks.",
    "location": "1 Sheikh Mohammed bin Rashid Blvd, Dubai",
    "category": "Architectural Landmark",
    "type": "Skyscraper",
    "rating": 4.9,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/BurjKhalifa.jpg",
      "/Desenation/BurjKhalifa1.jpg",
    ]
  },
  {
    "id":12,
    "name": "The Dubai Mall",
    "description": "One of the largest shopping malls in the world, featuring an aquarium, ice rink, and extensive dining options.",
    "location": "1 Sheikh Mohammed bin Rashid Blvd, Dubai",
    "category": "Shopping Center",
    "type": "Retail",
    "rating": 4.8,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/TheDubaiMall.jpg",
      "/Desenation/TheDubaiMall1.jpg"
    ]
  },
  {
    "id":13,
    "name": "Palm Jumeirah",
    "description": "An artificial archipelago and a luxury resort area known for its palm-shaped islands and upscale amenities.",
    "location": "Dubai",
    "category": "Man-made Island",
    "type": "Resort Area",
    "rating": 4.7,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/PalmJumeirah.jpg",
      "/Desenation/PalmJumeirah1.jpg"
    ]
  },
  {
    "id":14,
    "name": "Sheikh Zayed Grand Mosque",
    "description": "A grand mosque known for its stunning architecture and serene atmosphere, with the capacity to hold over 40,000 worshippers.",
    "location": "Sheikh Rashid Bin Saeed Street, Abu Dhabi",
    "category": "Religious Site",
    "type": "Mosque",
    "rating": 4.9,
    "city": "Abu Dhabi",
    "country": "UAE",
    "image": [
      "/Desenation/SheikhZayedGrandMosque.jpg",
      "/Desenation/SheikhZayedGrandMosque1.jpg"
    ]
  },
  {
    "id":15,
    "name": "Emirates Palace",
    "description": "A luxury hotel known for its opulent design and grandeur, offering a range of high-end amenities and experiences.",
    "location": "West Corniche, Abu Dhabi",
    "category": "Luxury Hotel",
    "type": "Hotel",
    "rating": 4.8,
    "city": "Abu Dhabi",
    "country": "UAE",
    "image": [
      "/Desenation/EmiratesPalace.jpg",
      "/Desenation/EmiratesPalace1.jpg"
    ]
  },
  {
    "id":16,
    "name": "Dubai Marina",
    "description": "A vibrant waterfront area with a range of dining, shopping, and entertainment options, known for its modern skyscrapers and marina views.",
    "location": "Dubai Marina, Dubai",
    "category": "Urban Area",
    "type": "Marina",
    "rating": 4.7,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/DubaiMarina.jpg",
      "/Desenation/DubaiMarina1.jpg"
    ]
  },
  {
    "id":17,
    "name": "Al Ain Oasis",
    "description": "A UNESCO World Heritage site featuring a traditional oasis with a sophisticated irrigation system and lush palm groves.",
    "location": "Al Ain, Abu Dhabi",
    "category": "Natural Site",
    "type": "Oasis",
    "rating": 4.6,
    "city": "Al Ain",
    "country": "UAE",
    "image": [
      "/Desenation/AlAinOasis.jpg",
      "/Desenation/AlAinOasis1.jpg"
    ]
  },
  {
    "id":18,
    "name": "Jumeirah Beach",
    "description": "A popular public beach known for its soft white sand and clear waters, offering various recreational activities and stunning views.",
    "location": "Jumeirah Beach Road, Dubai",
    "category": "Beach",
    "type": "Public Beach",
    "rating": 4.8,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/JumeirahBeach.jpg",
      "/Desenation/JumeirahBeach1.jpg"
    ]
  },
  {
    "id":19,
    "name": "Al Bastakiya Quarter",
    "description": "A historic district in Dubai showcasing traditional Arabian architecture and culture, with museums, art galleries, and cultural heritage sites.",
    "location": "Dubai",
    "category": "Historical District",
    "type": "Cultural Heritage",
    "rating": 4.7,
    "city": "Dubai",
    "country": "UAE",
    "image": [
      "/Desenation/AlBastakiyaQuarter.jpg",
      "/Desenation/AlBastakiyaQuarter1jpg"
    ]
  },
  {
    "id":20,
    "name": "Louvre Abu Dhabi",
    "description": "An art and civilization museum showcasing works from around the world, housed in a striking modern building designed by Jean Nouvel.",
    "location": "Saadiyat Island, Abu Dhabi",
    "category": "Museum",
    "type": "Art Museum",
    "rating": 4.9,
    "city": "Abu Dhabi",
    "country": "UAE",
    "image": [
      "/Desenation/LouvreAbuDhabi.jpg",
      "/Desenation/LouvreAbuDhabi1.jpg"
    ]
  },

  {
    "id":21,
    "name": "Masjid al-Haram",
    "description": "The largest mosque in the world, surrounding the Kaaba in Mecca, and the holiest site in Islam.",
    "location": "Mecca, 21955",
    "category": "Religious Site",
    "type": "Landmark",
    "rating": 5.0,
    "city": "Mecca",
    "country": "Saudi",
    "image": [
      "/Desenation/Masjidal-Haram.jpg",
      "/Desenation/Masjidal-Haram1.jpg"
    ]
  },
  {
    "id":22,
    "name": "Al-Masjid an-Nabawi",
    "description": "A significant mosque in Medina, where the Prophet Muhammad is buried, and the second holiest site in Islam.",
    "location": "Medina, 42311",
    "category": "Religious Site",
    "type": "Landmark",
    "rating": 5.0,
    "city": "Medina",
    "image": [
      "/Desenation/Al-Masjidan-Nabawi.jpg",
      "/Desenation/Al-Masjidan-Nabawi1.jpg"
    ]
  },
  {
    "id":23,
    "name": "Kingdom Centre",
    "description": "A major skyscraper in Riyadh known for its unique design and the Sky Bridge with panoramic views.",
    "location": "Kingdom Centre, Riyadh 11321",
    "category": "Modern Landmark",
    "type": "Skyscraper",
    "rating": 4.8,
    "city": "Riyadh",
    "country": "Saudi",
    "image": [
      "/Desenation/KingdomCentre.jpg",
      "/Desenation/KingdomCentre1.jpg"
    ]
  },
  {
    "id":24,
    "name": "Al-Ula",
    "description": "An archaeological and historical site with rock formations, ancient tombs, and historical ruins.",
    "location": "Al-Ula, 43511",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.9,
    "city": "Al-Ula",
    "country": "Saudi",
    "image": [
      "/Desenation/Al-Ula.jpg",
      "/Desenation/Al-Ula1.jpg"
    ]
  },
  {
    "id":25,
    "name": "Diriyah",
    "description": "A historic town in Riyadh known for its traditional mud-brick architecture and historical significance.",
    "location": "Diriyah, Riyadh 13711",
    "category": "Historic Town",
    "type": "Cultural Heritage",
    "rating": 4.7,
    "city": "Riyadh",
    "country": "Saudi",
    "image": [
      "/Desenation/Diriyah.jpg",
      "/Desenation/Diriyah1.jpg"
    ]
  },
  {
    "id":26,
    "name": "Jeddah Corniche",
    "description": "A picturesque waterfront area in Jeddah featuring parks, sculptures, and views of the Red Sea.",
    "location": "Jeddah, 23332",
    "category": "Urban Park",
    "type": "Seaside Promenade",
    "rating": 4.6,
    "city": "Jeddah",
    "country": "Saudi",
    "image": [
      "/Desenation/JeddahCorniche.jpg",
      "/Desenation/JeddahCorniche1.jpg"
    ]
  },
  {
    "id":27,
    "name": "Asir National Park",
    "description": "A large national park in the Asir region known for its diverse wildlife, stunning landscapes, and hiking trails.",
    "location": "Asir, 62421",
    "category": "Natural Park",
    "type": "Nature Reserve",
    "rating": 4.8,
    "city": "Asir",
    "country": "Saudi",
    "image": [
      "/Desenation/AsirNationalPark.jpg",
      "/Desenation/AsirNationalPark1.jpg"
    ]
  },
  {
    "id":28,
    "name": "Red Sea Mall",
    "description": "A large shopping and entertainment complex in Jeddah offering a wide range of retail, dining, and leisure options.",
    "location": "Jeddah, 23332",
    "category": "Shopping Mall",
    "type": "Commercial Center",
    "rating": 4.5,
    "city": "Jeddah",
    "country": "Saudi",
    "image": [
      "/Desenation/RedSeaMall.jpg",
      "/Desenation/RedSeaMall1.jpg"
    ]
  },
  {
    "id":29,
    "name": "Abha Dam",
    "description": "A scenic dam located near Abha, offering recreational activities and beautiful views of the surrounding landscapes.",
    "location": "Abha, 62522",
    "category": "Natural Attraction",
    "type": "Dam",
    "rating": 4.4,
    "city": "Abha",
    "country": "Saudi",
    "image": [
      "/Desenation/AbhaDam.jpg",
      "/Desenation/AbhaDam1.jpg"
    ]
  },
  {
    "id":30,
    "name": "King Fahd's Fountain",
    "description": "The world's tallest fountain, located in Jeddah, providing a stunning water display over the Red Sea.",
    "location": "Jeddah, 23332",
    "category": "Landmark",
    "type": "Fountain",
    "rating": 4.6,
    "city": "Jeddah",
    "country": "Saudi",
    "image": [
      "/Desenation/KingFahd'sFountain.jpg",
      "/Desenation/KingFahd'sFountain1.jpg"
    ]
  },

  {
    "id":31,
    "name": "Petra",
    "description": "An ancient city famous for its rock-cut architecture and water conduit system. Known as the Rose City due to its pink sandstone cliffs.",
    "location": "Wadi Musa, Petra, Jordan",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.9,
    "city": "Petra",
    "country": "Jordan",
    "image": [
      "/Desenation/Petra.jpg",
      "/Desenation/Petra1.jpg"
    ]
  },
  {
    "id":32,
    "name": "Wadi Rum",
    "description": "A protected desert wilderness in southern Jordan known for its stunning sandstone mountains and vast red sand dunes.",
    "location": "Wadi Rum, Jordan",
    "category": "Natural Landscape",
    "type": "Desert",
    "rating": 4.8,
    "city": "Wadi Rum",
    "country": "Jordan",
    "image": [
      "/Desenation/WadiRum.jpg",
      "/Desenation/WadiRum1.jpg"
    ]
  },
  {
    "id":33,
    "name": "Dead Sea",
    "description": "A salt lake bordered by Jordan to the east and Israel and Palestine to the west, famous for its high salinity and therapeutic mud.",
    "location": "Sweimeh, Jordan",
    "category": "Natural Wonder",
    "type": "Salt Lake",
    "rating": 4.7,
    "city": "Sweimeh",
    "country": "Jordan",
    "image": [
      "/Desenation/DeadSea.jpg",
      "/Desenation/DeadSea1.jpg"
    ]
  },
  {
    "id":34,
    "name": "Amman Citadel",
    "description": "An ancient site located on a hill in downtown Amman, featuring ruins from the Roman, Byzantine, and Umayyad periods.",
    "location": "Amman, Jordan",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.6,
    "city": "Amman",
    "country": "Jordan",
    "image": [
      "/Desenation/AmmanCitadel.jpg",
      "/Desenation/AmmanCitadel1.jpg"
    ]
  },
  {
    "id":35,
    "name": "Jerash",
    "description": "One of the best-preserved Roman provincial towns in the world, known for its impressive ruins and grand architecture.",
    "location": "Jerash, Jordan",
    "category": "Historical Site",
    "type": "Roman Ruins",
    "rating": 4.7,
    "city": "Jerash",
    "country": "Jordan",
    "image": [
      "/Desenation/Jerash.jpg",
      "/Desenation/Jerash1.jpg"
    ]
  },
  {
    "id":36,
    "name": "Aqaba",
    "description": "A port city on the Red Sea known for its coral reefs and water sports activities, including diving and snorkeling.",
    "location": "Aqaba, Jordan",
    "category": "Coastal City",
    "type": "Beach Destination",
    "rating": 4.5,
    "city": "Aqaba",
    "country": "Jordan",
    "image": [
      "/Desenation/Aqaba.jpg",
      "/Desenation/Aqaba1.jpg"
    ]
  },
  {
    "id":37,
    "name": "Mount Nebo",
    "description": "A significant religious site from where Moses is said to have viewed the Promised Land before his death. Offers panoramic views of the Jordan Valley.",
    "location": "Mount Nebo, Jordan",
    "category": "Religious Site",
    "type": "Historical Landmark",
    "rating": 4.4,
    "city": "Mount Nebo",
    "country": "Jordan",
    "image": [
      "/Desenation/MountNebo.jpg",
      "/Desenation/MountNebo1.jpg"
    ]
  },
  {
    "id":38,
    "name": "Madaba",
    "description": "Known for its mosaic maps and historical churches, Madaba is a city with rich Christian heritage and stunning ancient mosaics.",
    "location": "Madaba, Jordan",
    "category": "Historical City",
    "type": "Cultural Heritage",
    "rating": 4.6,
    "city": "Madaba",
    "country": "Jordan",
    "image": [
      "/Desenation/Madaba.jpg",
      "/Desenation/Madaba1.jpg"
    ]
  },
  {
    "id":39,
    "name": "King Hussein National Park",
    "description": "A large park in Amman featuring various recreational facilities, gardens, and the Jordan Museum.",
    "location": "Amman, Jordan",
    "category": "Public Park",
    "type": "Recreational Area",
    "rating": 4.3,
    "city": "Amman",
    "country": "Jordan",
    "image": [
      "/Desenation/KingHusseinNationalPark.jpg",
      "/Desenation/KingHusseinNationalPark1.jpg"
    ]
  },
  {
    "id":40,
    "name": "The Jordan Museum",
    "description": "A museum in Amman showcasing Jordan's cultural heritage and history, including artifacts and exhibits from various periods.",
    "location": "Amman, Jordan",
    "category": "Museum",
    "type": "Cultural Museum",
    "rating": 4.5,
    "city": "Amman",
    "country": "Jordan",
    "image": [
      "/Desenation/TheJordanMuseum.jpg",
      "/Desenation/TheJordanMuseum1.jpg"
    ]
  },

  {
    "id":41,
    "name": "Marrakech Medina",
    "description": "A historic district known for its vibrant souks, traditional riads, and stunning palaces.",
    "location": "Marrakech, Morocco",
    "category": "Historic District",
    "type": "Cultural Site",
    "rating": 4.8,
    "city": "Marrakech",
    "country": "Morocco",
    "image": [
      "/Desenation/MarrakechMedina.jpg",
      "/Desenation/MarrakechMedina1.jpg"
    ]
  },
  {
    "id":42,
    "name": "Chefchaouen",
    "description": "A picturesque town famous for its blue-painted buildings and charming streets.",
    "location": "Chefchaouen, Morocco",
    "category": "Mountain Town",
    "type": "Scenic Area",
    "rating": 4.7,
    "city": "Chefchaouen",
    "country": "Morocco",
    "image": [
      "/Desenation/Chefchaouen.jpg",
      "/Desenation/Chefchaouen1.jpg"
    ]
  },
  {
    "id":43,
    "name": "Fes El Bali",
    "description": "An ancient medina known for its well-preserved medieval architecture and bustling markets.",
    "location": "Fes, Morocco",
    "category": "Historic District",
    "type": "Cultural Site",
    "rating": 4.8,
    "city": "Fes",
    "country": "Morocco",
    "image": [
      "/Desenation/FesElBali.jpg",
      "/Desenation/FesElBali1.jpg"
    ]
  },
  {
    "id":44,
    "name": "Essaouira",
    "description": "A coastal city known for its well-preserved 18th-century medina, relaxed vibe, and vibrant arts scene.",
    "location": "Essaouira, Morocco",
    "category": "Coastal City",
    "type": "Historic Site",
    "rating": 4.7,
    "city": "Essaouira",
    "country": "Morocco",
    "image": [
      "/Desenation/Essaouira.jpg",
      "/Desenation/Essaouira1.jpg"
    ]
  },
  {
    "id":45,
    "name": "Atlas Mountains",
    "description": "A mountain range offering stunning landscapes, trekking opportunities, and traditional Berber villages.",
    "location": "Atlas Mountains, Morocco",
    "category": "Mountain Range",
    "type": "Natural Landmark",
    "rating": 4.9,
    "city": "Various",
    "country": "Morocco",
    "image": [
      "/Desenation/AtlasMountains.jpg",
      "/Desenation/AtlasMountains1.jpg"
    ]
  },
  {
    "id":46,
    "name": "Rabat",
    "description": "The capital city of Morocco known for its historic sites, beautiful gardens, and modern amenities.",
    "location": "Rabat, Morocco",
    "category": "Capital City",
    "type": "Historic and Modern Site",
    "rating": 4.6,
    "city": "Rabat",
    "country": "Morocco",
    "image": [
      "/Desenation/Rabat.jpg",
      "/Desenation/Rabat1.jpg"
    ]
  },
  {
    "id":47,
    "name": "Casablanca",
    "description": "A major city known for its modern business district, historical architecture, and vibrant nightlife.",
    "location": "Casablanca, Morocco",
    "category": "Major City",
    "type": "Urban Area",
    "rating": 4.5,
    "city": "Casablanca",
    "country": "Morocco",
    "image": [
      "/Desenation/Casablanca.jpg",
      "/Desenation/Casablanca1.jpg"
    ]
  },
  {
    "id":48,
    "name": "Ouarzazate",
    "description": "Known as the 'Gateway to the Sahara,' this town is famous for its kasbahs and film studios.",
    "location": "Ouarzazate, Morocco",
    "category": "Desert Town",
    "type": "Historic Site",
    "rating": 4.6,
    "city": "Ouarzazate",
    "country": "Morocco",
    "image": [
      "/Desenation/Ouarzazate.jpg",
      "/Desenation/Ouarzazate1.jpg"
    ]
  },
  {
    "id":49,
    "name": "Merzouga",
    "description": "A small village on the edge of the Sahara Desert, known for its stunning sand dunes and desert excursions.",
    "location": "Merzouga, Morocco",
    "category": "Desert Village",
    "type": "Natural Landmark",
    "rating": 4.8,
    "city": "Merzouga",
    "country": "Morocco",
    "image": [
      "/Desenation/Merzouga.jpg",
      "/Desenation/Merzouga1.jpg"
    ]
  },
  {
    "id":50,
    "name": "Tangier",
    "description": "A port city known for its rich history, cultural blend, and picturesque coastal views.",
    "location": "Tangier, Morocco",
    "category": "Port City",
    "type": "Historic and Scenic Site",
    "rating": 4.7,
    "city": "Tangier",
    "country": "Morocco",
    "image": [
      "/Desenation/Tangier.jpg",
      "/Desenation/Tangier1.jpg"
    ]
  },

  {
    "id": 51,
    "name": "Pyramids of Giza",
    "description": "One of the Seven Wonders of the Ancient World, the Pyramids of Giza are Egypt's most iconic landmarks.",
    "location": "Giza Plateau, Giza, Egypt",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.9,
    "city": "Giza",
    "country": "Egypt",
    "image": [
      "/Desenation/PyramidsofGiza.jpg",
      "/Desenation/PyramidsofGiza1.jpg"
    ]
  },
  {
    "id": 52,
    "name": "Karnak Temple",
    "description": "A vast temple complex in Luxor, dedicated to the god Amun-Ra, with massive columns and intricate carvings.",
    "location": "Luxor, Egypt",
    "category": "Historical Site",
    "type": "Ancient Temple",
    "rating": 4.8,
    "city": "Luxor",
    "country": "Egypt",
    "image": [
      "/Desenation/KarnakTemple.jpg",
      "/Desenation/KarnakTemple1.jpg"
    ]
  },
  {
    "id": 53,
    "name": "The Egyptian Museum",
    "description": "Home to the world's most extensive collection of ancient Egyptian artifacts, including the treasures of King Tutankhamun.",
    "location": "Tahrir Square, Cairo, Egypt",
    "category": "Museum",
    "type": "Cultural",
    "rating": 4.7,
    "city": "Cairo",
    "country": "Egypt",
    "image": [
      "/Desenation/TheEgyptianMuseum.jpg",
      "/Desenation/TheEgyptianMuseum1.jpg"
    ]
  },
  {
    "id": 54,
    "name": "Abu Simbel Temples",
    "description": "Two massive rock-cut temples built by Ramses II, famous for their grandeur and the annual sun alignment.",
    "location": "Abu Simbel, Aswan, Egypt",
    "category": "Historical Site",
    "type": "Ancient Temple",
    "rating": 4.9,
    "city": "Aswan",
    "country": "Egypt",
    "image": [
      "/Desenation/AbuSimbelTemples.jpg",
      "/Desenation/AbuSimbelTemples1.jpg"
    ]
  },
  {
    "id": 55,
    "name": "Valley of the Kings",
    "description": "An ancient burial ground for pharaohs, including the tomb of Tutankhamun, located on the west bank of the Nile in Luxor.",
    "location": "West Bank, Luxor, Egypt",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.8,
    "city": "Luxor",
    "country": "Egypt",
    "image": [
      "/Desenation/ValleyoftheKings.jpg",
      "/Desenation/ValleyoftheKings1.jpg"
    ]
  },
  {
    "id": 56,
    "name": "Temple of Philae",
    "description": "Located on an island in the Nile, this temple is dedicated to the goddess Isis and is known for its beautiful reliefs.",
    "location": "Aswan, Egypt",
    "category": "Historical Site",
    "type": "Ancient Temple",
    "rating": 4.7,
    "city": "Aswan",
    "country": "Egypt",
    "image": [
      "/Desenation/TempleofPhilae.jpg",
      "/Desenation/TempleofPhilae1.jpg"
    ]
  },
  {
    "id": 57,
    "name": "Alexandria Library (Bibliotheca Alexandrina)",
    "description": "A modern recreation of the ancient Library of Alexandria, this cultural center houses a vast collection of books and artifacts.",
    "location": "El Shatby, Alexandria, Egypt",
    "category": "Cultural Center",
    "type": "Library",
    "rating": 4.6,
    "city": "Alexandria",
    "country": "Egypt",
    "image": [
      "/Desenation/AlexandriaLibrary.jpg",
      "/Desenation/AlexandriaLibrary1.jpg"
    ]
  },
  {
    "id": 58,
    "name": "Siwa Oasis",
    "description": "A remote desert oasis known for its natural beauty, ancient ruins, and saltwater lakes.",
    "location": "Siwa, Western Desert, Egypt",
    "category": "Natural Site",
    "type": "Oasis",
    "rating": 4.8,
    "city": "Siwa",
    "country": "Egypt",
    "image": [
      "/Desenation/SiwaOasis.jpg",
      "/Desenation/SiwaOasis1.jpg"
    ]
  },
  {
    "id": 59,
    "name": "Citadel of Saladin",
    "description": "A medieval Islamic fortress offering panoramic views of Cairo, home to the Mosque of Muhammad Ali.",
    "location": "Al Abageyah, Cairo, Egypt",
    "category": "Historical Site",
    "type": "Fortress",
    "rating": 4.7,
    "city": "Cairo",
    "country": "Egypt",
    "image": [
      "/Desenation/CitadelofSaladin.jpg",
      "/Desenation/CitadelofSaladin1.jpg"
    ]
  },
  {
    "id": 60,
    "name": "White Desert National Park",
    "description": "Known for its unique white rock formations, this desert is a surreal landscape for nature lovers and adventurers.",
    "location": "Farafra, Western Desert, Egypt",
    "category": "Natural Site",
    "type": "Desert",
    "rating": 4.9,
    "city": "Farafra",
    "country": "Egypt",
    "image": [
      "/Desenation/WhiteDesertNationalPark.jpg",
      "/Desenation/WhiteDesertNationalPark1.jpg"
    ]
  },

  {
    "id":61,
    "name": "Petronas Twin Towers",
    "description": "Iconic twin skyscrapers and a major landmark of Kuala Lumpur, offering stunning city views from the sky bridge and observation deck.",
    "location": "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
    "category": "Landmark",
    "type": "Skyscraper",
    "rating": 4.8,
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "image": [
      "/Desenation/PetronasTwinTowers.jpg",
      "/Desenation/PetronasTwinTowers1.jpg"
    ]
},
{
    "id":62,
    "name": "Langkawi Sky Bridge",
    "description": "A curved pedestrian bridge offering breathtaking views of Langkawi and the surrounding islands.",
    "location": "Langkawi, 07000 Langkawi, Malaysia",
    "category": "Attraction",
    "type": "Suspension Bridge",
    "rating": 4.7,
    "city": "Langkawi",
    "country": "Malaysia",
    "image": [
      "/Desenation/LangkawiSkyBridge.jpg",
      "/Desenation/LangkawiSkyBridge1.jpg"
    ]
},
{
    "id":63,
    "name": "Penang George Town",
    "description": "A historic city known for its well-preserved colonial architecture and vibrant street art.",
    "location": "George Town, 10000 Penang, Malaysia",
    "category": "Historic Area",
    "type": "City",
    "rating": 4.6,
    "city": "Penang",
    "country": "Malaysia",
    "image": [
      "/Desenation/PenangGeorgeTown.jpg",
      "/Desenation/PenangGeorgeTown1.jpg"
    ]
},
{
    "id":64,
    "name": "Kinabalu National Park",
    "description": "A UNESCO World Heritage Site known for its biodiversity and the majestic Mount Kinabalu.",
    "location": "Pekan Ranau, 89300 Sabah, Malaysia",
    "category": "Nature Reserve",
    "type": "National Park",
    "rating": 4.9,
    "city": "Kota Kinabalu",
    "country": "Malaysia",
    "image": [
      "/Desenation/KinabaluNationalPark.jpg",
      "/Desenation/KinabaluNationalPark1.jpg"
    ]
},
{
    "id":65,
    "name": "Batu Caves",
    "description": "A series of caves and cave temples located in limestone hills, popular for its Hindu shrine and giant golden statue of Lord Murugan.",
    "location": "Gombak, 68100 Kuala Lumpur, Malaysia",
    "category": "Cultural Site",
    "type": "Cave Temple",
    "rating": 4.5,
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "image": [
      "/Desenation/BatuCaves.jpg",
      "/Desenation/BatuCaves1.jpg"
    ]
},
{
    "id":66,
    "name": "Taman Negara National Park",
    "description": "One of the world's oldest tropical rainforests, offering jungle trekking, canopy walks, and wildlife spotting.",
    "location": "Kuala Tahan, 27000 Pahang, Malaysia",
    "category": "Nature Reserve",
    "type": "National Park",
    "rating": 4.8,
    "city": "Kuala Tahan",
    "country": "Malaysia",
    "image": [
      "/Desenation/TamanNegaraNationalPark.jpg",
      "/Desenation/TamanNegaraNationalPark1.jpg"
    ]
},
{
    "id":67,
    "name": "Perhentian Islands",
    "description": "Beautiful islands known for their white sandy beaches, crystal-clear waters, and excellent diving and snorkeling opportunities.",
    "location": "Perhentian Islands, Terengganu, Malaysia",
    "category": "Beach Destination",
    "type": "Island",
    "rating": 4.7,
    "city": "Kuala Terengganu",
    "country": "Malaysia",
    "image": [
      "/Desenation/PerhentianIslands.jpg",
      "/Desenation/PerhentianIslands1.jpg"
    ]
},
{
    "id":68,
    "name": "Cameron Highlands",
    "description": "A cool hill station known for its tea plantations, strawberry farms, and scenic mountain views.",
    "location": "Cameron Highlands, Pahang, Malaysia",
    "category": "Hill Station",
    "type": "Highland Resort",
    "rating": 4.6,
    "city": "Cameron Highlands",
    "country": "Malaysia",
    "image": [
      "/Desenation/CameronHighlands.jpg",
      "/Desenation/CameronHighlands1.jpg"
    ]
},
{
    "id":69,
    "name": "Johor Bahru City Square",
    "description": "A bustling shopping mall located in the heart of Johor Bahru, offering a wide range of retail and dining options.",
    "location": "Johor Bahru, 80000 Johor, Malaysia",
    "category": "Shopping District",
    "type": "Mall",
    "rating": 4.4,
    "city": "Johor Bahru",
    "country": "Malaysia",
    "image": [
      "/Desenation/JohorBahruCitySquare.jpg",
      "/Desenation/JohorBahruCitySquare1.jpg"
    ]
},
{
    "id":70,
    "name": "Langkawi Underwater World",
    "description": "A large oceanarium featuring a wide variety of marine life and interactive exhibits.",
    "location": "Pantai Cenang, 07000 Langkawi, Malaysia",
    "category": "Aquarium",
    "type": "Oceanarium",
    "rating": 4.5,
    "city": "Langkawi",
    "country": "Malaysia",
    "image": [
      "/Desenation/LangkawiUnderwaterWorld.jpg",
      "/Desenation/LangkawiUnderwaterWorld1.jpg"
    ]
},

  {
    "id":71,
    "name": "Persepolis",
    "description": "An ancient ceremonial capital of the Achaemenid Empire, renowned for its grand ruins and historical significance.",
    "location": "Marvdasht, Fars Province, Iran",
    "category": "Historical Site",
    "type": "Archaeological",
    "rating": 4.9,
    "city": "Shiraz",
    "country": "Iran",
    "image": [
      "/Desenation/Persepolis.jpg",
      "/Desenation/Persepolis1.jpg"
    ]
  },
  {
    "id":72,
"name": "Chogha Zanbil",
  "description": "An ancient Elamite complex and ziggurat, a UNESCO World Heritage site, showcasing impressive mud-brick architecture from the 13th century BC.",
  "location": "Khuzestan Province, Iran",
  "category": "Historical Site",
  "type": "Ziggurat",
  "rating": 4.8,
  "city": "Susa",
  "country": "Iran",
  "image": [
    "/Desenation/ChoghaZanbil.jpeg",
    "/Desenation/ChoghaZanbil1.jpg"
  ]
},
  {
    "id":73,
    "name": "Nasir al-Mulk Mosque",
    "description": "A stunning mosque known for its beautiful stained glass windows and vibrant interior.",
    "location": "Shiraz, Fars Province, Iran",
    "category": "Cultural Landmark",
    "type": "Religious Site",
    "rating": 4.8,
    "city": "Shiraz",
    "country": "Iran",
    "image": [
      "/Desenation/Nasiral-MulkMosque.jpg",
      "/Desenation/Nasiral-MulkMosque1.jpg"
    ]
  },
  {
    "id":74,
    "name": "Golestan Palace",
    "description": "A historical royal complex in Tehran, known for its lavish architecture and intricate tile work.",
    "location": "Tehran, Iran",
    "category": "Historical Palace",
    "type": "Cultural Heritage",
    "rating": 4.7,
    "city": "Tehran",
    "country": "Iran",
    "image": [
      "/Desenation/GolestanPalace.jpg",
      "/Desenation/GolestanPalace1.jpg"
    ]
  },
  {
    "id":75,
    "name": "Zayandeh River",
    "description": "A major river flowing through Isfahan, famous for its scenic views and historical bridges.",
    "location": "Isfahan, Iran",
    "category": "Natural Landmark",
    "type": "River",
    "rating": 4.6,
    "city": "Isfahan",
    "country": "Iran",
    "image": [
      "/Desenation/ZayandehRiver.jpg",
      "/Desenation/ZayandehRiver1.jpg"
    ]
  },
  {
    "id":76,
    "name": "Mount Damavand",
    "description": "The highest peak in Iran, known for its volcanic activity and stunning alpine views.",
    "location": "Mazandaran Province, Iran",
    "category": "Natural Landmark",
    "type": "Mountain",
    "rating": 4.8,
    "city": "Mazandaran",
    "country": "Iran",
    "image": [
      "/Desenation/MountDamavand.jpg",
      "/Desenation/MountDamavand1.jpg"
    ]
  },
  {
    "id":77,
  "name": "Kandovan Village",
  "description": "A historical village famous for its unique cave dwellings carved into volcanic rocks, offering a glimpse into ancient living styles.",
  "location": "East Azerbaijan Province, Iran",
  "category": "Cultural Heritage",
  "type": "Village",
  "rating": 4.6,
  "city": "Tabriz",
  "country": "Iran",
  "image": [
    "/Desenation/KandovanVillage.jpeg",
    "/Desenation/KandovanVillage1.jpg"
  ]
},
  {
    "id":78,
    "name": "Kerman Desert",
    "description": "A vast desert region known for its unique landscapes and historical caravanserais.",
    "location": "Kerman, Iran",
    "category": "Natural Landscape",
    "type": "Desert",
    "rating": 4.4,
    "city": "Kerman",
    "country": "Iran",
    "image": [
      "/Desenation/KermanDesert.jpg",
      "/Desenation/KermanDesert1.jpg"
    ]
  },
  {
    "id":79,
    "name": "Shiraz Old Bazaar",
    "description": "A bustling market area in Shiraz, known for its traditional shops and vibrant atmosphere.",
    "location": "Shiraz, Fars Province, Iran",
    "category": "Market",
    "type": "Cultural Site",
    "rating": 4.6,
    "city": "Shiraz",
    "country": "Iran",
    "image": [
      "/Desenation/ShirazOldBazaar.jpg",
      "/Desenation/ShirazOldBazaar1.jpg"
    ]
  },
  {
    "id":80,
    "name": "Persian Gardens",
    "description": "A collection of beautiful, historically significant gardens showcasing Persian landscape design.",
    "location": "Various locations across Iran",
    "category": "Cultural Heritage",
    "type": "Gardens",
    "rating": 4.7,
    "city": "Various",
    "country": "Iran",
    "image": [
      "/Desenation/PersianGardens.jpg",
      "/Desenation/PersianGardens1.jpg"
    ]
  },

  {
    "id":81,
    "name": "Sultan Qaboos Grand Mosque",
    "description": "An architectural marvel and one of the largest mosques in the world, featuring intricate designs and a grand prayer hall.",
    "location": "Muscat, Oman",
    "category": "Religious Site",
    "type": "Landmark",
    "rating": 4.9,
    "city": "Muscat",
    "country": "Oman",
    "image": [
      "/Desenation/SultanQaboosGrandMosque.jpg",
      "/Desenation/SultanQaboosGrandMosque1.jpg"
    ]
  },
  {
    "id":82,
    "name": "Wadi Shab",
    "description": "A stunning natural attraction known for its beautiful canyon, crystal-clear pools, and picturesque hiking trails.",
    "location": "Wadi Shab, Oman",
    "category": "Natural Attraction",
    "type": "Canyon",
    "rating": 4.8,
    "city": "Sur",
    "country": "Oman",
    "image": [
      "/Desenation/WadiShab.jpg",
      "/Desenation/WadiShab1.jpg"
    ]
  },
  {
    "id":83,
    "name": "Mutrah Souq",
    "description": "A vibrant traditional market in Muscat, offering a variety of goods such as spices, textiles, and jewelry.",
    "location": "Muscat, Oman",
    "category": "Market",
    "type": "Shopping District",
    "rating": 4.7,
    "city": "Muscat",
    "country": "Oman",
    "image": [
      "/Desenation/MutrahSouq.jpg",
      "/Desenation/MutrahSouq1.jpg"
    ]
  },
  {
    "id":84,
    "name": "Jebel Akhdar",
    "description": "A mountainous region known for its stunning scenery, traditional villages, and cool climate.",
    "location": "Nizwa, Oman",
    "category": "Natural Attraction",
    "type": "Mountain Range",
    "rating": 4.8,
    "city": "Nizwa",
    "country": "Oman",
    "image": [
      "/Desenation/JebelAkhdar.jpg",
      "/Desenation/JebelAkhdar1.jpg"
    ]
  },
  {
    "id":85,
    "name": "Ras al Jinz Turtle Reserve",
    "description": "A conservation area dedicated to protecting nesting turtles and providing visitors with the opportunity to observe these creatures in their natural habitat.",
    "location": "Ras al Jinz, Oman",
    "category": "Wildlife Sanctuary",
    "type": "Conservation Area",
    "rating": 4.7,
    "city": "Sur",
    "country": "Oman",
    "image": [
      "/Desenation/RasalJinzTurtleReserve.jpg",
      "/Desenation/RasalJinzTurtleReserve1.jpg"
    ]
  },
  {
    "id":86,
    "name": "Bahla Fort",
    "description": "A UNESCO World Heritage site, this fort is a historic structure surrounded by impressive defensive walls and towers.",
    "location": "Bahla, Oman",
    "category": "Historical Site",
    "type": "Fortress",
    "rating": 4.6,
    "city": "Bahla",
    "country": "Oman",
    "image": [
      "/Desenation/BahlaFort.jpg",
      "/Desenation/BahlaFort1.jpg"
    ]
  },
  {
    "id":87,
    "name": "Al Jalali and Al Mirani Forts",
    "description": "Historic forts located in Muscat, offering panoramic views of the city and the harbor.",
    "location": "Muscat, Oman",
    "category": "Historical Site",
    "type": "Fortresses",
    "rating": 4.6,
    "city": "Muscat",
    "country": "Oman",
    "image": [
      "/Desenation/AlJalaliandAlMiraniForts.jpg",
      "/Desenation/AlJalaliandAlMiraniForts1.jpg"
    ]
  },
  {
    "id":88,
    "name": "Nizwa Fort",
    "description": "A historic fort in Nizwa with a massive round tower and excellent views of the surrounding area.",
    "location": "Nizwa, Oman",
    "category": "Historical Site",
    "type": "Fortress",
    "rating": 4.7,
    "city": "Nizwa",
    "country": "Oman",
    "image": [
      "/Desenation/NizwaFort.jpg",
      "/Desenation/NizwaFort1.jpg"
    ]
  },
  {
    "id":89,
    "name": "Salalah",
    "description": "A beautiful city in the Dhofar region known for its lush green landscapes, historical sites, and unique monsoon season.",
    "location": "Salalah, Oman",
    "category": "City",
    "type": "Tourist Destination",
    "rating": 4.8,
    "city": "Salalah",
    "country": "Oman",
    "image": [
      "/Desenation/Salalah.jpg",
      "/Desenation/Salalah1.jpg"
    ]
  },
  {
    "id":90,
    "name": "Sur",
    "description": "A coastal city known for its traditional dhow-building industry and beautiful beaches.",
    "location": "Sur, Oman",
    "category": "City",
    "type": "Tourist Destination",
    "rating": 4.6,
    "city": "Sur",
    "country": "Oman",
    "image": [
      "/Desenation/Sur.jpg",
      "/Desenation/Sur1.jpg"
    ]
  },

  {
    "id":91,
    "name": "Lahore Fort",
    "description": "A historic fortification in the city of Lahore, known for its Mughal architecture and historical significance.",
    "location": "Lahore, Pakistan",
    "category": "Historical Site",
    "type": "Fort",
    "rating": 4.8,
    "city": "Lahore",
    "country": "Pakistan",
    "image": [
      "/Desenation/LahoreFort.jpg",
      "/Desenation/LahoreFort1.jpg"
    ]
  },
  {
    "id":92,
    "name": "Badshahi Mosque",
    "description": "One of the largest mosques in the world, renowned for its grand Mughal architecture and stunning beauty.",
    "location": "Lahore, Pakistan",
    "category": "Religious Site",
    "type": "Mosque",
    "rating": 4.9,
    "city": "Lahore",
    "country": "Pakistan",
    "image": [
      "/Desenation/BadshahiMosque.jpg",
      "/Desenation/BadshahiMosque1.jpg"
    ]
  },
  {
    "id":93,
    "name": "Faisal Mosque",
    "description": "The largest mosque in Pakistan, known for its modern design and prominent location at the foot of the Margalla Hills.",
    "location": "Islamabad, Pakistan",
    "category": "Religious Site",
    "type": "Mosque",
    "rating": 4.8,
    "city": "Islamabad",
    "country": "Pakistan",
    "image": [
      "/Desenation/FaisalMosque.jpg",
      "/Desenation/FaisalMosque1.jpg"
    ]
  },
  {
    "id":94,
    "name": "Karimabad",
    "description": "A picturesque village in the Hunza Valley, known for its stunning mountain views and historical sites.",
    "location": "Hunza Valley, Pakistan",
    "category": "Scenic Spot",
    "type": "Village",
    "rating": 4.9,
    "city": "Hunza",
    "country": "Pakistan",
    "image": [
      "/Desenation/Karimabad.jpg",
      "/Desenation/Karimabad1.jpg"
    ]
  },
  {
    "id":95,
    "name": "Murree Hills",
    "description": "A popular hill station offering scenic views, pleasant weather, and recreational activities.",
    "location": "Murree, Pakistan",
    "category": "Hill Station",
    "type": "Tourist Spot",
    "rating": 4.7,
    "city": "Murree",
    "country": "Pakistan",
    "image": [
      "/Desenation/MurreeHills.jpg",
      "/Desenation/MurreeHills1.jpg"
    ]
  },
  {
    "id":96,
    "name": "Swat Valley",
    "description": "Known for its beautiful landscapes, lush green valleys, and rich cultural heritage.",
    "location": "Swat, Pakistan",
    "category": "Scenic Spot",
    "type": "Valley",
    "rating": 4.9,
    "city": "Swat",
    "country": "Pakistan",
    "image": [
      "/Desenation/SwatValley.jpg",
      "/Desenation/SwatValley1.jpg"
    ]
  },
  {
    "id":97,
    "name": "Skardu",
    "description": "A major town in the Gilgit-Baltistan region known for its stunning lakes, mountains, and trekking opportunities.",
    "location": "Gilgit-Baltistan, Pakistan",
    "category": "Scenic Spot",
    "type": "Town",
    "rating": 4.8,
    "city": "Skardu",
    "country": "Pakistan",
    "image": [
      "/Desenation/Skardu.jpg",
      "/Desenation/Skardu1.jpg"
    ]
  },
  {
    "id":98,
    "name": "Taxila",
    "description": "An ancient city with significant archaeological sites dating back to the Gandhara period.",
    "location": "Taxila, Pakistan",
    "category": "Historical Site",
    "type": "Archaeological Site",
    "rating": 4.7,
    "city": "Taxila",
    "country": "Pakistan",
    "image": [
      "/Desenation/Taxila.jpg",
      "/Desenation/Taxila1.jpg"
    ]
  },
  {
    "id":99,
    "name": "Bunji",
    "description": "A small town in the Astore District, known for its natural beauty and proximity to various trekking routes.",
    "location": "Astore, Pakistan",
    "category": "Scenic Spot",
    "type": "Town",
    "rating": 4.6,
    "city": "Astore",
    "country": "Pakistan",
    "image": [
      "/Desenation/Bunji.jpg",
      "/Desenation/Bunji1.jpg"
    ]
  },
  {
    "id":100,
    "name": "Ratti Gali Lake",
    "description": "A high-altitude alpine glacial lake known for its crystal-clear waters and breathtaking views.",
    "location": "Azad Kashmir, Pakistan",
    "category": "Natural Landmark",
    "type": "Lake",
    "rating": 4.9,
    "city": "Azad Kashmir",
    "country": "Pakistan",
    "image": [
      "/Desenation/RattiGaliLake.jpg",
      "/Desenation/RattiGaliLake1.jpg"
    ]
  },

  {
    "id":101,
    "name": "Matterhorn",
    "description": "The iconic, pyramid-shaped peak is one of the highest summits in the Alps, offering breathtaking views and skiing opportunities.",
    "location": "Zermatt, Switzerland",
    "category": "Natural Landmark",
    "type": "Mountain",
    "rating": 4.9,
    "city": "Zermatt",
    "country": "Switzerland",
    "image": [
      "/Desenation/Matterhorn.jpg",
      "/Desenation/Matterhorn1.jpg"
    ]
  },
  {
    "id":102,
    "name": "Lake Geneva",
    "description": "One of Europe's largest freshwater lakes, surrounded by vineyards, picturesque towns, and the Swiss and French Alps.",
    "location": "Geneva, Switzerland",
    "category": "Natural Attraction",
    "type": "Lake",
    "rating": 4.8,
    "city": "Geneva",
    "country": "Switzerland",
    "image": [
      "/Desenation/LakeGeneva.jpg",
      "/Desenation/LakeGeneva1.jpg"
    ]
  },
  {
    "id":103,
    "name": "Jungfraujoch",
    "description": "Known as the 'Top of Europe,' Jungfraujoch offers a high-altitude experience with panoramic views of the Alps and glaciers.",
    "location": "Interlaken, Switzerland",
    "category": "Mountain Pass",
    "type": "Adventure",
    "rating": 4.9,
    "city": "Interlaken",
    "country": "Switzerland",
    "image": [
      "/Desenation/Jungfraujoch.jpg",
      "/Desenation/Jungfraujoch1.jpg"
    ]
  },
  {
    "id":104,
    "name": "Château de Chillon",
    "description": "A medieval castle set on the shores of Lake Geneva, offering tours of its towers, dungeons, and lakeside views.",
    "location": "Montreux, Switzerland",
    "category": "Historical Landmark",
    "type": "Castle",
    "rating": 4.7,
    "city": "Montreux",
    "country": "Switzerland",
    "image": [
      "/Desenation/ChâteaudeChillon.jpg",
      "/Desenation/ChâteaudeChillon1.jpg"
    ]
  },
  {
    "id":105,
    "name": "Bern Old Town",
    "description": "A UNESCO World Heritage site with cobbled streets, medieval buildings, and the Zytglogge clock tower.",
    "location": "Bern, Switzerland",
    "category": "Cultural Attraction",
    "type": "Old Town",
    "rating": 4.8,
    "city": "Bern",
    "country": "Switzerland",
    "image": [
      "/Desenation/BernOldTown.jpg",
      "/Desenation/BernOldTown1.jpg"
    ]
  },
  {
    "id":106,
    "name": "Lucerne Chapel Bridge",
    "description": "The iconic wooden footbridge featuring a tower and 17th-century paintings, offering scenic views of Lucerne's Old Town.",
    "location": "Lucerne, Switzerland",
    "category": "Historical Landmark",
    "type": "Bridge",
    "rating": 4.7,
    "city": "Lucerne",
    "country": "Switzerland",
    "image": [
      "/Desenation/LucerneChapelBridge.jpg",
      "/Desenation/LucerneChapelBridge1.jpg"
    ]
  },
  {
    "id":107,
    "name": "Mount Pilatus",
    "description": "A mountain near Lucerne known for its steep cogwheel railway, hiking trails, and breathtaking alpine views.",
    "location": "Lucerne, Switzerland",
    "category": "Adventure",
    "type": "Mountain",
    "rating": 4.9,
    "city": "Lucerne",
    "country": "Switzerland",
    "image": [
      "/Desenation/MountPilatus.jpg",
      "/Desenation/MountPilatus1.jpg"
    ]
  },
  {
    "id":108,
    "name": "Swiss National Park",
    "description": "Switzerland's only national park, offering pristine landscapes, wildlife, and over 80 km of hiking trails.",
    "location": "Zernez, Switzerland",
    "category": "National Park",
    "type": "Nature Reserve",
    "rating": 4.8,
    "city": "Zernez",
    "country": "Switzerland",
    "image": [
      "/Desenation/SwissNationalPark.jpg",
      "/Desenation/SwissNationalPark1.jpg"
    ]
  },
  {
    "id":109,
    "name": "Lausanne Cathedral",
    "description": "A masterpiece of Gothic architecture, this cathedral features stunning stained glass windows and panoramic views of the city.",
    "location": "Lausanne, Switzerland",
    "category": "Religious Site",
    "type": "Cathedral",
    "rating": 4.7,
    "city": "Lausanne",
    "country": "Switzerland",
    "image": [
      "/Desenation/LausanneCathedral.jpg",
      "/Desenation/LausanneCathedral1.jpg"
    ]
  },
  {
    "id":110,
    "name": "Geneva Jet d'Eau",
    "description": "One of Geneva's most famous landmarks, this giant water fountain shoots water 140 meters into the air.",
    "location": "Geneva, Switzerland",
    "category": "Landmark",
    "type": "Fountain",
    "rating": 4.6,
    "city": "Geneva",
    "country": "Switzerland",
    "image": [
      "/Desenation/GenevaJetd'Eau.jpg",
      "/Desenation/GenevaJetd'Eau1.jpg"
    ]
  },

  {
    "id":111,
    "name": "Buckingham Palace",
    "description": "The official London residence of the British monarch, renowned for its state rooms and the Changing of the Guard ceremony.",
    "location": "Westminster, London SW1A 1AA",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.8,
    "city": "London",
    "country": "UK",
    "image": [
      "/Desenation/BuckinghamPalace.jpg",
      "/Desenation/BuckinghamPalace1.jpg"
    ]
  },
  {
    "id":112,
    "name": "Stonehenge",
    "description": "A prehistoric monument in Wiltshire, known for its mysterious stone circle that dates back to around 3000 BC.",
    "location": "Amesbury, Wiltshire SP4 7DE",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.7,
    "city": "Wiltshire",
    "country": "UK",
    "image": [
      "/Desenation/Stonehenge.jpg",
      "/Desenation/Stonehenge1.jpg"
    ]
  },
  {
    "id":113,
    "name": "Big Ben & The Houses of Parliament",
    "description": "Iconic clock tower and the seat of the UK Parliament, offering guided tours and an in-depth look at British history and politics.",
    "location": "Westminster, London SW1A 0AA",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.9,
    "city": "London",
    "country": "UK",
    "image": [
      "/Desenation/BigBen&TheHousesofParliament.jpg",
      "/Desenation/BigBen&TheHousesofParliament1.jpg"
    ]
  },
  {
    "id":114,
    "name": "Edinburgh Castle",
    "description": "A historic fortress overlooking the city of Edinburgh, home to Scotland’s crown jewels and the National War Museum.",
    "location": "Castlehill, Edinburgh EH1 2NG",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.8,
    "city": "Edinburgh",
    "country": "UK",
    "image": [
      "/Desenation/EdinburghCastle.jpg",
      "/Desenation/EdinburghCastle1.jpg"
    ]
  },
  {
    "id":115,
    "name": "Tower of London",
    "description": "A historic castle on the north bank of the River Thames, known for housing the Crown Jewels and its role in British history.",
    "location": "St Katharine's & Wapping, London EC3N 4AB",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.7,
    "city": "London",
    "country": "UK",
    "image": [
      "/Desenation/TowerofLondon.jpg",
      "/Desenation/TowerofLondon1.jpg"
    ]
  },
  {
    "id":116,
    "name": "Lake District National Park",
    "description": "A region of rugged mountains and picturesque lakes, ideal for hiking, boating, and exploring quaint villages.",
    "location": "Cumbria, England",
    "category": "Natural Site",
    "type": "National Park",
    "rating": 4.9,
    "city": "Cumbria",
    "country": "UK",
    "image": [
      "/Desenation/LakeDistrictNationalPark.jpg",
      "/Desenation/LakeDistrictNationalPark1.jpg"
    ]
  },
  {
    "id":117,
    "name": "The Roman Baths",
    "description": "A well-preserved site of ancient Roman baths, featuring interactive displays and a chance to learn about Roman Britain.",
    "location": "Stall St, Bath BA1 1LZ",
    "category": "Historical Site",
    "type": "Museum",
    "rating": 4.7,
    "city": "Bath",
    "country": "UK",
    "image": [
      "/Desenation/TheRomanBaths.jpg",
      "/Desenation/TheRomanBaths1.jpg"
    ]
  },
  {
    "id":118,
    "name": "Windsor Castle",
    "description": "The oldest and largest inhabited castle in the world, serving as an official residence of the British monarch.",
    "location": "Windsor, Berkshire SL4 1NJ",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.8,
    "city": "Windsor",
    "country": "UK",
    "image": [
      "/Desenation/WindsorCastle.jpg",
      "/Desenation/WindsorCastle1.jpg"
    ]
  },
  {
    "id":119,
    "name": "The British Museum",
    "description": "One of the world's largest museums, home to a vast collection of art and artifacts from around the world, including the Rosetta Stone.",
    "location": "Great Russell St, Bloomsbury, London WC1B 3DG",
    "category": "Museum",
    "type": "Cultural Site",
    "rating": 4.9,
    "city": "London",
    "country": "UK",
    "image": [
      "/Desenation/TheBritishMuseum.jpg",
      "/Desenation/TheBritishMuseum1.jpg"
    ]
  },
  {
    "id":120,
    "name": "The Cotswolds",
    "description": "A charming rural area known for its rolling hills, picturesque villages, and beautiful English countryside.",
    "location": "Gloucestershire, England",
    "category": "Natural Site",
    "type": "countryside",
    "rating": 4.8,
    "city": "Gloucestershire",
    "country": "UK",
    "image": [
      "/Desenation/TheCotswolds.jpg",
      "/Desenation/TheCotswolds1.jpg"
    ]
  },

  {
    "id":121,
    "name": "Schönbrunn Palace",
    "description": "A former imperial summer residence with opulent rooms and vast gardens.",
    "location": "Schönbrunner Schloßstraße 47, 1130 Vienna",
    "category": "Historical Landmark",
    "type": "Palace",
    "rating": 4.8,
    "city": "Vienna",
    "country": "Austria",
    "image": [
      "/Desenation/SchönbrunnPalace.jpg",
      "/Desenation/SchönbrunnPalace1.jpg"
    ]
  },
  {
    "id":122,
    "name": "The Hofburg",
    "description": "The former imperial palace and current residence of the President of Austria.",
    "location": "Michaelerkuppel, 1010 Vienna",
    "category": "Historical Landmark",
    "type": "Palace",
    "rating": 4.7,
    "city": "Vienna",
    "country": "Austria",
    "image": [
      "/Desenation/TheHofburg.jpg",
      "/Desenation/TheHofburg1.jpg"
    ]
  },
  {
    "id":123,
    "name": "St. Stephen's Cathedral",
    "description": "A Gothic masterpiece and one of Vienna’s most important religious buildings.",
    "location": "Stephansplatz 3, 1010 Vienna",
    "category": "Religious Site",
    "type": "Cathedral",
    "rating": 4.8,
    "city": "Vienna",
    "country": "Austria",
    "image": [
      "/Desenation/St.Stephen'sCathedral.jpg",
      "/Desenation/St.Stephen'sCathedral1.jpg"
    ]
  },
  {
    "id":124,
    "name": "Hallstatt",
    "description": "A picturesque lakeside village known for its stunning alpine views.",
    "location": "Hallstatt, 4830 Upper Austria",
    "category": "Nature & Scenic",
    "type": "Village",
    "rating": 4.9,
    "city": "Hallstatt",
    "country": "Austria",
    "image": [
      "/Desenation/Hallstatt.jpg",
      "/Desenation/Hallstatt1.jpg"
    ]
  },
  {
    "id":125,
    "name": "Belvedere Palace",
    "description": "A baroque palace complex housing the Austrian Gallery of Art.",
    "location": "Prinz-Eugen-Straße 27, 1030 Vienna",
    "category": "Museum",
    "type": "Palace",
    "rating": 4.7,
    "city": "Vienna",
    "country": "Austria",
    "image": [
      "/Desenation/BelvederePalace.jpg",
      "/Desenation/BelvederePalace1.jpg"
    ]
  },
  {
    "id":126,
    "name": "Zell am See",
    "description": "A stunning alpine town with a beautiful lake and a popular ski resort.",
    "location": "Zell am See, 5700 Salzburg",
    "category": "Nature & Scenic",
    "type": "Town",
    "rating": 4.9,
    "city": "Zell am See",
    "country": "Austria",
    "image": [
      "/Desenation/ZellamSee.jpg",
      "/Desenation/ZellamSee1.jpg"
    ]
  },
  {
    "id":127,
    "name": "Innsbruck",
    "description": "A city in the Alps known for its winter sports and historic old town.",
    "location": "Innsbruck, 6020 Tyrol",
    "category": "City & Nature",
    "type": "City",
    "rating": 4.7,
    "city": "Innsbruck",
    "country": "Austria",
    "image": [
      "/Desenation/Innsbruck.jpg",
      "/Desenation/Innsbruck1.jpg"
    ]
  },
  {
    "id":128,
    "name": "Melk Abbey",
    "description": "A baroque Benedictine monastery overlooking the Danube River.",
    "location": "Abt-Berthold-Dietmayr-Straße 1, 3390 Melk",
    "category": "Religious Site",
    "type": "Monastery",
    "rating": 4.7,
    "city": "Melk",
    "country": "Austria",
    "image": [
      "/Desenation/MelkAbbey.jpg",
      "/Desenation/MelkAbbey1.jpg"
    ]
  },
  {
    "id":129,
    "name": "Grossglockner High Alpine Road",
    "description": "A scenic mountain road offering breathtaking views of Austria’s highest peak.",
    "location": "Grossglockner, Carinthia",
    "category": "Nature & Scenic",
    "type": "Scenic Drive",
    "rating": 4.9,
    "city": "Grossglockner",
    "country": "Austria",
    "image": [
      "/Desenation/GrossglocknerHighAlpineRoad.jpg",
      "/Desenation/GrossglocknerHighAlpineRoad1.jpg"
    ]
  },
  {
    "id":130,
    "name": "Salzburg Old Town",
    "description": "A UNESCO World Heritage Site known for its baroque architecture and the birthplace of Mozart.",
    "location": "Altstadt, 5020 Salzburg",
    "category": "Historical Landmark",
    "type": "Town",
    "rating": 4.8,
    "city": "Salzburg",
    "country": "Austria",
    "image": [
      "/Desenation/SalzburgOldTown.jpg",
      "/Desenation/SalzburgOldTown1.jpg"
    ]
  },

  {
    "id":131,
    "name": "Belém Tower",
    "description": "A UNESCO World Heritage site, this iconic fortress once protected the city from seafaring invaders and is a symbol of Portugal's Age of Discovery.",
    "location": "Avenida Brasília, 1400-038 Lisbon",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.8,
    "city": "Lisbon",
    "country": "Portugal",
    "image": [
      "/Desenation/BelémTower.jpg",
      "/Desenation/BelémTower1.jpg"
    ]
  },
  {
    "id":132,
    "name": "Jerónimos Monastery",
    "description": "A magnificent example of Manueline architecture, this monastery is a testament to Portugal's wealth during the Age of Exploration.",
    "location": "Praça do Império 1400-206, Lisbon",
    "category": "Historical Site",
    "type": "Monastery",
    "rating": 4.9,
    "city": "Lisbon",
    "country": "Portugal",
    "image": [
      "/Desenation/JerónimosMonastery.jpg",
      "/Desenation/JerónimosMonastery1.jpg"
    ]
  },
  {
    "id":133,
    "name": "Sintra",
    "description": "A charming town known for its fairytale-like palaces, castles, and lush gardens set against the scenic backdrop of the Serra de Sintra hills.",
    "location": "Sintra, 2710-609 Lisbon",
    "category": "Town",
    "type": "Cultural",
    "rating": 4.9,
    "city": "Sintra",
    "country": "Portugal",
    "image": [
      "/Desenation/Sintra.jpg",
      "/Desenation/Sintra1.jpg"
    ]
  },
  {
    "id":134,
    "name": "Douro Valley",
    "description": "Renowned for its stunning landscapes and terraced vineyards, the Douro Valley is a premier wine region producing world-famous Port wine.",
    "location": "Douro Valley, Northern Portugal",
    "category": "Natural Wonder",
    "type": "Wine Region",
    "rating": 4.8,
    "city": "Douro Valley",
    "country": "Portugal",
    "image": [
      "/Desenation/DouroValley.jpg",
      "/Desenation/DouroValley1.jpg"
    ]
  },
  {
    "id":135,
    "name": "Pena Palace",
    "description": "A vivid example of 19th-century Romanticism, Pena Palace sits atop a hill overlooking Sintra and is one of Portugal's most visited monuments.",
    "location": "Estrada da Pena, 2710-609 Sintra",
    "category": "Palace",
    "type": "Castle",
    "rating": 4.8,
    "city": "Sintra",
    "country": "Portugal",
    "image": [
      "/Desenation/PenaPalace.jpg",
      "/Desenation/PenaPalace1.jpg"
    ]
  },
  {
    "id":136,
    "name": "Ribeira District",
    "description": "Located along the Douro River, Porto's Ribeira district is a UNESCO World Heritage site famous for its colorful buildings, riverside cafes, and historic charm.",
    "location": "Ribeira, 4050-506 Porto",
    "category": "Neighborhood",
    "type": "Cultural",
    "rating": 4.7,
    "city": "Porto",
    "country": "Portugal",
    "image": [
      "/Desenation/Ribeira District.jpg",
      "/Desenation/RibeiraDistrict1.jpg"
    ]
  },
  {
    "id":137,
    "name": "Madeira",
    "description": "An archipelago known for its stunning natural beauty, Madeira offers dramatic cliffs, botanical gardens, and world-class hiking trails.",
    "location": "Madeira, Portugal",
    "category": "Island",
    "type": "Natural Wonder",
    "rating": 4.9,
    "city": "Funchal",
    "country": "Portugal",
    "image": [
      "/Desenation/Madeira.jpg",
      "/Desenation/Madeira1.jpg"
    ]
  },
  {
    "id":138,
    "name": "Algarve Beaches",
    "description": "The Algarve region is famous for its stunning golden beaches, dramatic cliffs, and vibrant coastal towns, making it a top destination for sunseekers.",
    "location": "Algarve, Southern Portugal",
    "category": "Beach",
    "type": "Natural Wonder",
    "rating": 4.8,
    "city": "Albufeira",
    "country": "Portugal",
    "image": [
      "/Desenation/AlgarveBeaches.jpg",
      "/Desenation/AlgarveBeaches1.jpg"
    ]
  },
  {
    "id":139,
    "name": "Coimbra",
    "description": "Known for its historic university, Coimbra is one of Portugal’s oldest cities with a rich cultural and architectural heritage.",
    "location": "Coimbra, 3000-001 Portugal",
    "category": "City",
    "type": "Cultural",
    "rating": 4.7,
    "city": "Coimbra",
    "country": "Portugal",
    "image": [
      "/Desenation/Coimbra.jpg",
      "/Desenation/Coimbra1.jpg"
    ]
  },
  {
    "id":140,
    "name": "Azores",
    "description": "A group of volcanic islands in the Atlantic, the Azores are known for their lush landscapes, crater lakes, and outdoor adventures.",
    "location": "Azores, Portugal",
    "category": "Island",
    "type": "Natural Wonder",
    "rating": 4.9,
    "city": "Ponta Delgada",
    "country": "Portugal",
    "image": [
      "/Desenation/Azores.jpg",
      "/Desenation/Azores1.jpg"
    ]
  },

  {
    "id":141,
    "name": "Anne Frank House",
    "description": "A historic house and biographical museum dedicated to Anne Frank, a Jewish wartime diarist.",
    "location": "Prinsengracht 263-267, 1016 GV Amsterdam",
    "category": "Historical Site",
    "type": "Museum",
    "rating": 4.9,
    "city": "Amsterdam",
    "country": "Netherlands",
    "image": [
      "/Desenation/AnneFrankHouse.jpg",
      "/Desenation/AnneFrankHouse1.jpg"
    ]
  },
  {
    "id":142,
    "name": "Van Gogh Museum",
    "description": "An art museum dedicated to the works of Vincent van Gogh and his contemporaries.",
    "location": "Museumplein 6, 1071 DJ Amsterdam",
    "category": "Art Museum",
    "type": "Museum",
    "rating": 4.8,
    "city": "Amsterdam",
    "country": "Netherlands",
    "image": [
      "/Desenation/VanGoghMuseum.jpg",
      "/Desenation/VanGoghMuseum1.jpg"
    ]
  },
  {
    "id":143,
    "name": "Rijksmuseum",
    "description": "The national museum of the Netherlands, showcasing Dutch art and history from the Middle Ages to the present.",
    "location": "Museumstraat 1, 1071 XX Amsterdam",
    "category": "Art Museum",
    "type": "Museum",
    "rating": 4.9,
    "city": "Amsterdam",
    "country": "Netherlands",
    "image": [
      "/Desenation/Rijksmuseum.jpg",
      "/Desenation/Rijksmuseum1.jpg"
    ]
  },
  {
    "id":144,
    "name": "Keukenhof Gardens",
    "description": "A large flower garden known for its springtime tulip displays and picturesque landscapes.",
    "location": "Stationsweg 166A, 2161 AM Lisse",
    "category": "Botanical Garden",
    "type": "Garden",
    "rating": 4.8,
    "city": "Lisse",
    "country": "Netherlands",
    "image": [
      "/Desenation/KeukenhofGardens.jpg",
      "/Desenation/KeukenhofGardens1.jpg"
    ]
  },
  {
    "id":145,
    "name": "Zaanse Schans",
    "description": "An open-air museum showcasing traditional Dutch windmills, wooden houses, and crafts.",
    "location": "Schansend 1, 1509 AW Zaandam",
    "category": "Cultural Heritage",
    "type": "Open-Air Museum",
    "rating": 4.7,
    "city": "Zaandam",
    "country": "Netherlands",
    "image": [
      "/Desenation/ZaanseSchans.jpg",
      "/Desenation/ZaanseSchans1.jpg"
    ]
  },
  {
    "id":146,
    "name": "Madurodam",
    "description": "A miniature park featuring detailed models of famous Dutch landmarks and cities.",
    "location": "George Maduroplein 1, 2584 RZ The Hague",
    "category": "Theme Park",
    "type": "Miniature Park",
    "rating": 4.6,
    "city": "The Hague",
    "country": "Netherlands",
    "image": [
      "/Desenation/Madurodam.jpg",
      "/Desenation/Madurodam1.jpg"
    ]
  },
  {
    "id":147,
    "name": "Efteling Theme Park",
    "description": "A large theme park with fairy-tale inspired attractions, rides, and shows.",
    "location": "Europalaan 1, 5171 KW Kaatsheuvel",
    "category": "Theme Park",
    "type": "Amusement Park",
    "rating": 4.8,
    "city": "Kaatsheuvel",
    "country": "Netherlands",
    "image": [
      "/Desenation/EftelingThemePark.jpg",
      "/Desenation/EftelingThemePark1.jpg"
    ]
  },
  {
    "id":148,
    "name": "Hoge Veluwe National Park",
    "description": "A national park featuring heathlands, sand dunes, and woodlands, along with the Kröller-Müller Museum.",
    "location": "Houtkampweg 9, 6731 AV Otterlo",
    "category": "National Park",
    "type": "Nature Reserve",
    "rating": 4.7,
    "city": "Otterlo",
    "country": "Netherlands",
    "image": [
      "/Desenation/HogeVeluweNationalPark.jpg",
      "/Desenation/HogeVeluweNationalPark1.jpg"
    ]
  },
  {
    "id":149,
    "name": "Rotterdam Markthal",
    "description": "A modern market hall with a wide variety of food stalls, restaurants, and a distinctive architectural design.",
    "location": "Dominee Jan Scharpstraat 298, 3011 GJ Rotterdam",
    "category": "Market",
    "type": "Food Market",
    "rating": 4.6,
    "city": "Rotterdam",
    "country": "Netherlands",
    "image": [
      "/Desenation/RotterdamMarkthal.jpg",
      "/Desenation/RotterdamMarkthal1.jpg"
    ]
  },
  {
    "id":150,
    "name": "Utrecht Dom Tower",
    "description": "The tallest church tower in the Netherlands, offering panoramic views of the city of Utrecht.",
    "location": "Domplein 9, 3512 JE Utrecht",
    "category": "Historical Landmark",
    "type": "Tower",
    "rating": 4.7,
    "city": "Utrecht",
    "country": "Netherlands",
    "image": [
      "/Desenation/UtrechtDomTower.jpg",
      "/Desenation/UtrechtDomTower1.jpg"
    ]
  },

  {
    "id":151,
    "name": "Colosseum",
    "description": "An iconic ancient amphitheater in the heart of Rome, known for its impressive architecture and historic gladiator games.",
    "location": "Piazza del Colosseo, 1, 00184 Rome",
    "category": "Historical Landmark",
    "type": "Ancient Ruin",
    "rating": 4.8,
    "city": "Rome",
    "country":"italy",
    "image": [
      "/Desenation/Colosseum.jpg",
      "/Desenation/Colosseum1.jpg"
    ]
  },
  {
    "id":152,
    "name": "Venice Canals",
    "description": "A network of canals winding through Venice, offering picturesque views and romantic gondola rides.",
    "location": "Venice, 30100 Venice",
    "category": "Cultural Landmark",
    "type": "Canal System",
    "rating": 4.9,
    "city": "Venice",
    "country":"italy",
    "image": [
      "/Desenation/VeniceCanals.jpg",
      "/Desenation/VeniceCanals1.jpg"
    ]
  },
  {
    "id":153,
    "name": "Leaning Tower of Pisa",
    "description": "A freestanding bell tower known for its unintended tilt, located in the city of Pisa.",
    "location": "Piazza del Duomo, 56126 Pisa",
    "category": "Architectural Landmark",
    "type": "Bell Tower",
    "rating": 4.7,
    "city": "Pisa",
    "country":"italy",
    "image": [
      "/Desenation/LeaningTowerofPisa.jpg",
      "/Desenation/LeaningTowerofPisa1.jpg"
    ]
  },
  {
    "id":154,
    "name": "Florence Cathedral",
    "description": "An architectural masterpiece with a stunning dome designed by Brunelleschi, located in the heart of Florence.",
    "location": "Piazza del Duomo, 50122 Florence",
    "category": "Religious Landmark",
    "type": "Cathedral",
    "rating": 4.9,
    "city": "Florence",
    "country":"italy",
    "image": [
      "/Desenation/FlorenceCathedral.jpg",
      "/Desenation/FlorenceCathedral1.jpg"
    ]
  },
  {
    "id":155,
    "name": "The Vatican Museums",
    "description": "A vast collection of art and historical artifacts housed within the Vatican City, including the Sistine Chapel.",
    "location": "Viale Vaticano, 00165 Rome",
    "category": "Museum",
    "type": "Art Museum",
    "rating": 4.9,
    "city": "Rome",
    "country":"italy",
    "image": [
      "/Desenation/TheVaticanMuseums.jpg",
      "/Desenation/TheVaticanMuseums1.jpg"
    ]
  },
  {
    "id":156,
    "name": "Cinque Terre",
    "description": "A stunning coastal region consisting of five picturesque villages perched on cliffs overlooking the Ligurian Sea.",
    "location": "Cinque Terre National Park, 19018 La Spezia",
    "category": "Natural Landscape",
    "type": "Coastal Village",
    "rating": 4.8,
    "city": "La Spezia",
    "country":"italy",
    "image": [
      "/Desenation/CinqueTerre.jpg",
      "/Desenation/CinqueTerre1.jpg"
    ]
  },
  {
    "id":157,
    "name": "Pompeii",
    "description": "An ancient city famously preserved by the eruption of Mount Vesuvius in 79 AD, offering insight into Roman life.",
    "location": "Pompei, 80045 Naples",
    "category": "Archaeological Site",
    "type": "Ancient Ruins",
    "rating": 4.8,
    "city": "Naples",
    "country":"italy",
    "image": [
      "/Desenation/Pompeii.jpg",
      "/Desenation/Pompeii1.jpg"
    ]
  },
  {
    "id":158,
    "name": "Siena Cathedral",
    "description": "A magnificent cathedral in Siena known for its intricate façade and beautiful frescoes.",
    "location": "Piazza del Duomo, 53100 Siena",
    "category": "Religious Landmark",
    "type": "Cathedral",
    "rating": 4.7,
    "city": "Siena",
    "country":"italy",
    "image": [
      "/Desenation/SienaCathedral.jpg",
      "/Desenation/SienaCathedral1.jpg"
    ]
  },
  {
    "id":159,
    "name": "Milan Cathedral",
    "description": "A grand Gothic cathedral in Milan known for its stunning spires and elaborate façade.",
    "location": "Piazza del Duomo, 20122 Milan",
    "category": "Religious Landmark",
    "type": "Cathedral",
    "rating": 4.8,
    "city": "Milan",
    "country":"italy",
    "image": [
      "/Desenation/MilanCathedral.jpg",
      "/Desenation/MilanCathedral1.jpg"
    ]
  },
  {
    "id":160,
    "name": "Amalfi Coast",
    "description": "A stunning stretch of coastline known for its dramatic cliffs, charming villages, and crystal-clear waters.",
    "location": "Amalfi Coast, 84011 Salerno",
    "category": "Natural Landscape",
    "type": "Coastal Region",
    "rating": 4.9,
    "city": "Salerno",
    "country":"italy",
    "image": [
      "/Desenation/AmalfiCoast.jpg",
      "/Desenation/AmalfiCoast1.jpg"
    ]
  },

  {
    "id":161,
    "name": "Eiffel Tower",
    "description": "The iconic symbol of Paris, offering stunning views of the city from its observation decks.",
    "location": "Champ de Mars, 75007 Paris",
    "category": "Landmark",
    "type": "Iconic Landmark",
    "rating": 4.9,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/EiffelTower.jpg",
      "/Desenation/EiffelTower1.jpg"
    ]
  },
  {
    "id":162,
    "name": "Louvre Museum",
    "description": "Home to thousands of works of art, including the Mona Lisa and the Venus de Milo.",
    "location": "Rue de Rivoli, 75001 Paris",
    "category": "Museum",
    "type": "Art Museum",
    "rating": 4.8,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/LouvreMuseum.jpg",
      "/Desenation/LouvreMuseum1.jpg"
    ]
  },
  {
    "id":163,
    "name": "Notre-Dame Cathedral",
    "description": "A masterpiece of Gothic architecture, known for its stunning facade and beautiful interior.",
    "location": "Place du Parvis de Notre-Dame, 75004 Paris",
    "category": "Historical Site",
    "type": "Gothic Cathedral",
    "rating": 4.8,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/Notre-DameCathedral.jpg",
      "/Desenation/Notre-DameCathedral1.jpg"
    ]
  },
  {
    "id":164,
    "name": "Champs-Élysées & Arc de Triomphe",
    "description": "A famous avenue known for its shopping, dining, and the majestic Arc de Triomphe.",
    "location": "Avenue des Champs-Élysées, 75008 Paris",
    "category": "Avenue",
    "type": "Shopping and Landmark",
    "rating": 4.7,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/Champs-Élysées& ArcdeTriomphe.jpg",
      "/Desenation/Champs-Élysées&ArcdeTriomphe1.jpg"
    ]
  },
  {
    "id":165,
    "name": "Montmartre & Sacré-Cœur Basilica",
    "description": "A historic district known for its artistic heritage and the beautiful basilica offering panoramic views of Paris.",
    "location": "35 Rue du Chevalier de la Barre, 75018 Paris",
    "category": "Historic District",
    "type": "Artistic and Religious Site",
    "rating": 4.8,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/Montmartre&Sacré-CœurBasilica.jpg",
      "/Desenation/Montmartre&Sacré-CœurBasilica1.jpg"
    ]
  },
  {
    "id":166,
    "name": "Musée d'Orsay",
    "description": "An art museum housed in a former railway station, featuring works from the Impressionist and Post-Impressionist periods.",
    "location": "1 Rue de la Légion d'Honneur, 75007 Paris",
    "category": "Museum",
    "type": "Art Museum",
    "rating": 4.8,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/Muséed'Orsay.jpg",
      "/Desenation/Muséed'Orsay1.jpg"
    ]
  },
  {
    "id":167,
    "name": "Luxembourg Gardens",
    "description": "Beautifully landscaped gardens ideal for a relaxing stroll, featuring fountains, statues, and a picturesque pond.",
    "location": "6 Rue de Médicis, 75006 Paris",
    "category": "Park",
    "type": "Public Garden",
    "rating": 4.7,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/LuxembourgGardens.jpg",
      "/Desenation/LuxembourgGardens1.jpg"
    ]
  },
  {
    "id":168,
    "name": "Palace of Versailles",
    "description": "A short trip from Paris, this opulent palace is renowned for its grand architecture and extensive gardens.",
    "location": "Place d'Armes, 78000 Versailles",
    "category": "Palace",
    "type": "Historic and Cultural Site",
    "rating": 4.9,
    "city": "Versailles",
    "country": "France",
    "image": [
      "/Desenation/PalaceofVersailles.jpg",
      "/Desenation/PalaceofVersailles1.jpg"
    ]
  },
  {
    "id":169,
    "name": "Sainte-Chapelle",
    "description": "A Gothic chapel famous for its stunning stained glass windows.",
    "location": "8 Boulevard du Palais, 75001 Paris",
    "category": "Chapel",
    "type": "Gothic Chapel",
    "rating": 4.8,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/Sainte-Chapelle.jpg",
      "/Desenation/Sainte-Chapelle1.jpg"
    ]
  },
  {
    "id":170,
    "name": "Seine River Cruise",
    "description": "A scenic boat tour along the Seine River offering views of many of Paris's most famous landmarks.",
    "location": "Various departure points along the Seine",
    "category": "Tour",
    "type": "River Cruise",
    "rating": 4.7,
    "city": "Paris",
    "country": "France",
    "image": [
      "/Desenation/SeineRiverCruise.jpg",
      "/Desenation/SeineRiverCruise1.jpg"
    ]
  },

  {
    "id":171,
    "name": "Sagrada Família",
    "description": "An iconic basilica designed by Antoni Gaudí, still under construction and known for its unique architecture.",
    "location": "Carrer de Mallorca, 401, 08013 Barcelona",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.9,
    "city": "Barcelona",
    "country": "Spain",
    "image": [
      "/Desenation/SagradaFamília1.jpg",
      "/Desenation/SagradaFamília.jpg"
    ]
  },
  {
    "id":172,
    "name": "Alhambra",
    "description": "A stunning palace and fortress complex located in Granada, featuring Islamic architecture and beautiful gardens.",
    "location": "Calle Real de la Alhambra, s/n, 18009 Granada",
    "category": "Historical Site",
    "type": "Palace",
    "rating": 4.9,
    "city": "Granada",
    "country": "Spain",
    "image": [
      "/Desenation/Alhambra.jpg",
      "/Desenation/Alhambra1.jpg"
    ]
  },
  {
    "id":173,
    "name": "Park Güell",
    "description": "A public park designed by Antoni Gaudí, famous for its colorful mosaics and unique architectural elements.",
    "location": "Carrer d'Olot, s/n, 08024 Barcelona",
    "category": "Public Park",
    "type": "Landmark",
    "rating": 4.8,
    "city": "Barcelona",
    "country": "Spain",
    "image": [
      "/Desenation/ParkGüell1.jpg",
      "/Desenation/ParkGüell.jpg"
    ]
  },
  {
    "id":174,
    "name": "Plaza Mayor",
    "description": "A large public square in Madrid, known for its stunning architecture and vibrant atmosphere.",
    "location": "Plaza Mayor, 28012 Madrid",
    "category": "Public Square",
    "type": "Landmark",
    "rating": 4.7,
    "city": "Madrid",
    "country": "Spain",
    "image": [
      "/Desenation/PlazaMayor.jpg",
      "/Desenation/PlazaMayor1.jpg"
    ]
  },
  {
    "id":175,
    "name": "La Rambla",
    "description": "A famous tree-lined street in Barcelona, known for its shops, restaurants, and bustling atmosphere.",
    "location": "La Rambla, 08002 Barcelona",
    "category": "Shopping District",
    "type": "Landmark",
    "rating": 4.5,
    "city": "Barcelona",
    "country": "Spain",
    "image": [
      "/Desenation/LaRambla.jpg",
      "/Desenation/LaRambla1.jpg"
    ]
  },
  {
    "id":176,
    "name": "Museo del Prado",
    "description": "One of the world's leading art museums, housing a collection of European masterpieces, including works by Goya and Velázquez.",
    "location": "Calle de Ruiz de Alarcón, 23, 28014 Madrid",
    "category": "Museum",
    "type": "Cultural",
    "rating": 4.9,
    "city": "Madrid",
    "country": "Spain",
    "image": [
      "/Desenation/MuseodelPrado.jpg",
      "/Desenation/MuseodelPrado1.jpg"
    ]
  },
  {
    "id":177,
    "name": "La Giralda",
    "description": "A former minaret turned bell tower, part of the Seville Cathedral, offering panoramic views of Seville.",
    "location": "Av. de la Constitución, s/n, 41004 Seville",
    "category": "Historical Site",
    "type": "Tower",
    "rating": 4.8,
    "city": "Seville",
    "country": "Spain",
    "image": [
      "/Desenation/LaGiralda.jpg",
      "/Desenation/LaGiralda1.jpg"
    ]
  },
  {
    "id":178,
    "name": "Casa Batlló",
    "description": "A modernist building designed by Antoni Gaudí, known for its colorful facade and intricate interior design.",
    "location": "Passeig de Gràcia, 43, 08007 Barcelona",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.8,
    "city": "Barcelona",
    "country": "Spain",
    "image": [
      "/Desenation/CasaBatlló.jpg",
      "/Desenation/CasaBatlló1.jpg"
    ]
  },
  {
    "id":179,
    "name": "Catedral de Santiago de Compostela",
    "description": "A pilgrimage site and religious landmark, known for its stunning Romanesque architecture.",
    "location": "Praza do Obradoiro, s/n, 15704 Santiago de Compostela",
    "category": "Religious Site",
    "type": "Landmark",
    "rating": 4.9,
    "city": "Santiago de Compostela",
    "country": "Spain",
    "image": [
      "/Desenation/CatedraldeSantiagodeCompostela.jpg",
      "/Desenation/CatedraldeSantiagodeCompostela1.jpg"
    ]
  },
  {
    "id":180,
    "name": "Montjuïc",
    "description": "A large hill in Barcelona, offering museums, gardens, and panoramic views of the city and the sea.",
    "location": "Montjuïc, 08038 Barcelona",
    "category": "Natural Site",
    "type": "Landmark",
    "rating": 4.7,
    "city": "Barcelona",
    "country": "Spain",
    "image": [
      "/Desenation/Montjuïc1.jpg",
      "/Desenation/Montjuïc.jpg"
    ]
  },

  {
    "id":181,
    "name": "Brandenburg Gate",
    "description": "An 18th-century neoclassical monument, symbolizing peace and unity, located in the heart of Berlin.",
    "location": "Pariser Platz, 10117 Berlin",
    "category": "Historical Site",
    "type": "Landmark",
    "rating": 4.8,
    "city": "Berlin",
    "country": "Germany",
    "image": [
      "/Desenation/BrandenburgGate1.jpg",
      "/Desenation/BrandenburgGate.jpg"
    ]
  },
  {
    "id":182,
    "name": "Neuschwanstein Castle",
    "description": "A fairy-tale castle set in the Bavarian Alps, famous for inspiring Disney's Cinderella Castle.",
    "location": "Neuschwansteinstraße 20, 87645 Schwangau",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.9,
    "city": "Schwangau",
    "country": "Germany",
    "image": [
      "/Desenation/NeuschwansteinCastle.jpg",
      "/Desenation/NeuschwansteinCastle1.jpg"
    ]
  },
  {
    "id":183,
    "name": "Berlin Wall Memorial",
    "description": "A historic site commemorating the Berlin Wall and its impact on the city, with original sections of the wall and an informative museum.",
    "location": "Bernauer Str. 111, 13355 Berlin",
    "category": "Historical Site",
    "type": "Memorial",
    "rating": 4.7,
    "city": "Berlin",
    "country": "Germany",
    "image": [
      "/Desenation/BerlinWallMemorial.jpg",
      "/Desenation/BerlinWallMemorial1.jpg"
    ]
  },
  {
    "id":184,
    "name": "Oktoberfest",
    "description": "The world's largest beer festival, held annually in Munich, featuring traditional Bavarian food, music, and culture.",
    "location": "Theresienwiese, 80336 Munich",
    "category": "Cultural Festival",
    "type": "Festival",
    "rating": 4.9,
    "city": "Munich",
    "country": "Germany",
    "image": [
      "/Desenation/Oktoberfest.jpg",
      "/Desenation/Oktoberfest1.jpg"
    ]
  },
  {
    "id":185,
    "name": "The Black Forest",
    "description": "A dense, wooded mountain range in southwest Germany, known for its picturesque villages, hiking trails, and cuckoo clocks.",
    "location": "Black Forest, Baden-Württemberg",
    "category": "Natural Attraction",
    "type": "Forest",
    "rating": 4.8,
    "city": "Baden-Württemberg",
    "country": "Germany",
    "image": [
      "/Desenation/TheBlackForest.jpg",
      "/Desenation/TheBlackForest1.jpg"
    ]
  },
  {
    "id":186,
    "name": "Heidelberg Castle",
    "description": "A stunning Renaissance castle overlooking the town of Heidelberg, offering panoramic views of the Neckar River.",
    "location": "Schloss Heidelberg, 69117 Heidelberg",
    "category": "Historical Site",
    "type": "Castle",
    "rating": 4.7,
    "city": "Heidelberg",
    "country": "Germany",
    "image": [
      "/Desenation/HeidelbergCastle.jpg",
      "/Desenation/HeidelbergCastle1.jpg"
    ]
  },
  {
    "id":187,
    "name": "Cologne Cathedral",
    "description": "A Gothic masterpiece and UNESCO World Heritage site, known for its towering spires and intricate stained glass windows.",
    "location": "Domkloster 4, 50667 Cologne",
    "category": "Religious Site",
    "type": "Cathedral",
    "rating": 4.9,
    "city": "Cologne",
    "country": "Germany",
    "image": [
      "/Desenation/CologneCathedral.jpg",
      "/Desenation/CologneCathedral1.jpg"
    ]
  },
  {
    "id":188,
    "name": "Zugspitze",
    "description": "Germany's highest peak, offering breathtaking alpine views and year-round skiing, located on the border with Austria.",
    "location": "Zugspitze, 82491 Garmisch-Partenkirchen",
    "category": "Natural Attraction",
    "type": "Mountain",
    "rating": 4.8,
    "city": "Garmisch-Partenkirchen",
    "country": "Germany",
    "image": [
      "/Desenation/Zugspitze1.jpg",
      "/Desenation/Zugspitze.jpg"
    ]
  },
  {
    "id":189,
    "name": "Sanssouci Palace",
    "description": "A beautiful Rococo-style palace built by Frederick the Great, surrounded by sprawling gardens in Potsdam.",
    "location": "Maulbeerallee, 14469 Potsdam",
    "category": "Historical Site",
    "type": "Palace",
    "rating": 4.7,
    "city": "Potsdam",
    "country": "Germany",
    "image": [
      "/Desenation/SanssouciPalace1.jpg",
      "/Desenation/SanssouciPalace.jpg"
    ]
  },
  {
    "id":190,
    "name": "Miniatur Wunderland",
    "description": "The world's largest model railway exhibition, featuring incredibly detailed miniature cities, landscapes, and train routes.",
    "location": "Kehrwieder 2-4, 20457 Hamburg",
    "category": "Family Attraction",
    "type": "Exhibition",
    "rating": 4.9,
    "city": "Hamburg",
    "country": "Germany",
    "image": [
      "/Desenation/MiniaturWunderland1.jpg",
      "/Desenation/MiniaturWunderland.jpg"
    ]
  },

  {
    "id":191,
    "name": "Santorini",
    "description": "Santorini is a beautiful island known for its iconic white-washed buildings with blue domes, stunning sunsets, and crystal-clear waters.",
    "location": "Thira, Greece",
    "category": "Island Destination",
    "type": "Island",
    "rating": 4.9,
    "city": "Thira",
    "country": "Greece",
    "image": [
      "/Desenation/Santorini.jpg",
      "/Desenation/Santorini1.jpg"
    ]
},
{
    "id":192,
    "name": "Athens",
    "description": "Athens, the capital of Greece, is a city steeped in history, home to the famous Acropolis, Parthenon, and other ancient ruins.",
    "location": "Athens, Greece",
    "category": "Historical City",
    "type": "City",
    "rating": 4.8,
    "city": "Athens",
    "country": "Greece",
    "image": [
      "/Desenation/Athens.jpg",
      "/Desenation/Athens1.jpg"
    ]
},
{
    "id":193,
    "name": "Mykonos",
    "description": "Mykonos is a cosmopolitan island famous for its vibrant nightlife, beautiful beaches, and charming white-washed buildings.",
    "location": "Mykonos, Greece",
    "category": "Island Destination",
    "type": "Island",
    "rating": 4.7,
    "city": "Mykonos",
    "country": "Greece",
    "image": [
      "/Desenation/Mykonos.jpg",
      "/Desenation/Mykonos1.jpg"
    ]
},
{
    "id":194,
    "name": "Crete",
    "description": "Crete is the largest Greek island, known for its varied landscapes, from stunning beaches to mountainous regions and ancient ruins like the Palace of Knossos.",
    "location": "Heraklion, Greece",
    "category": "Island Destination",
    "type": "Island",
    "rating": 4.8,
    "city": "Heraklion",
    "country": "Greece",
    "image": [
      "/Desenation/Crete.jpg",
      "/Desenation/Crete1.jpg"
    ]
},
{
    "id":195,
    "name": "Rhodes",
    "description": "Rhodes is a medieval island, famous for its ancient ruins, vibrant nightlife, and beautiful beaches.",
    "location": "Rhodes, Greece",
    "category": "Island Destination",
    "type": "Island",
    "rating": 4.6,
    "city": "Rhodes",
    "country": "Greece",
    "image": [
      "/Desenation/Rhodes.jpg",
      "/Desenation/Rhodes1.jpg"
    ]
},
{
    "id":196,
    "name": "Delphi",
    "description": "Delphi is an ancient site famous for the Oracle of Delphi and its significance in Greek mythology, offering visitors a deep dive into the country's ancient past.",
    "location": "Delphi, Greece",
    "category": "Historical Site",
    "type": "Archaeological",
    "rating": 4.7,
    "city": "Delphi",
    "country": "Greece",
    "image": [
      "/Desenation/Delphi.jpg",
      "/Desenation/Delphi1.jpg"
    ]
},
{
    "id":197,
    "name": "Meteora",
    "description": "Meteora is known for its dramatic rock formations and the monasteries perched on top, offering a unique blend of spirituality and natural beauty.",
    "location": "Kalambaka, Greece",
    "category": "Natural Wonder",
    "type": "Mountain",
    "rating": 4.9,
    "city": "Kalambaka",
    "country": "Greece",
    "image": [
      "/Desenation/Meteora.jpg",
      "/Desenation/Meteora1.jpg"
    ]
},
{
    "id":198,
    "name": "Corfu",
    "description": "Corfu is a lush island in the Ionian Sea, known for its beautiful beaches, Venetian architecture, and vibrant culture.",
    "location": "Corfu, Greece",
    "category": "Island Destination",
    "type": "Island",
    "rating": 4.7,
    "city": "Corfu",
    "country": "Greece",
    "image": [
      "/Desenation/Corfu.jpg",
      "/Desenation/Corfu1.jpg"
    ]
},
{
    "id":199,
    "name": "Thessaloniki",
    "description": "Thessaloniki is Greece's second-largest city, known for its vibrant culture, historic monuments, and bustling waterfront.",
    "location": "Thessaloniki, Greece",
    "category": "Historical City",
    "type": "City",
    "rating": 4.8,
    "city": "Thessaloniki",
    "country": "Greece",
    "image": [
      "/Desenation/Thessaloniki.jpg",
      "/Desenation/Thessaloniki1.jpg"
    ]
},
{
    "id":200,
    "name": "Nafplio",
    "description": "Nafplio is a charming coastal town, known for its picturesque harbor, medieval castles, and beautiful old town.",
    "location": "Nafplio, Greece",
    "category": "Coastal Town",
    "type": "Town",
    "rating": 4.6,
    "city": "Nafplio",
    "country": "Greece",
    "image": [
      "/Desenation/Nafplio.jpg",
      "/Desenation/Nafplio1.jpg"
    ]
}

]



export default destArray