/* TODO UPDATE THIS FILE ON PROD */

const dealerLocations = [
  {
    "id": 1,
    "position": {
      "lat": 30.066609,
      "lng": -81.4395888
    },
    "title": "365 Solutions Holdco LLC",
    "info": {
      "number": "104390",
      "name": "365 Solutions Holdco LLC",
      "address": "150 Hilden Rd, Ponte Vedra, FL 32081",
      "phone": "(904) 460-2998",
      "website": "https://365solutionsfl.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 2,
    "position": {
      "lat": 26.0482303,
      "lng": -80.1669908
    },
    "title": "A Customer First A/C Refrigeration",
    "info": {
      "number": "49771",
      "name": "A Customer First A/C Refrigeration",
      "address": "185 Sw 20th Way, Ste S-1, Dania, FL 33004",
      "phone": "(954) 321-6212",
      "website": "http://www.acustomerfirstac.com",
      "dealerLevel": "Amana Select",
      "region": "SEFL",
      "branch": "DANI"
    }
  },
  {
    "id": 3,
    "position": {
      "lat": 30.1851835,
      "lng": -81.5651966
    },
    "title": "A/C Engineers NFL",
    "info": {
      "number": "102609",
      "name": "A/C Engineers NFL",
      "address": "9775 Mining Dr, Suite 106 Jacksonville, FL 32257",
      "phone": "(904) 514-8579",
      "website": "https://acengineersnfl.com/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 4,
    "position": {
      "lat": 27.1357074,
      "lng": -80.8883598
    },
    "title": "A1 Air Solutions",
    "info": {
      "number": "63668",
      "name": "A1 Air Solutions",
      "address": "605 Se 13th Ave, Okeechobee, FL 34974",
      "phone": "(863) 261-1002",
      "website": "https://a1airsolutionsfl.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "FTPI"
    }
  },
  {
    "id": 5,
    "position": {
      "lat": 27.2709381,
      "lng": -80.2922207
    },
    "title": "Above All Air Conditioning & Heating",
    "info": {
      "number": "46135",
      "name": "Above All Air Conditioning & Heating",
      "address": "1847 SE Port St, Lucie Blvd Suite 102 Port St. Lucie, FL 34952",
      "phone": "(772) 621-7050",
      "website": "https://aboveallairfl.com/",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 6,
    "position": {
      "lat": 28.8228814,
      "lng": -81.3177127
    },
    "title": "AC Guru",
    "info": {
      "number": "35576",
      "name": "AC Guru",
      "address": "4220 Church St, . Ste 1024, Sanford, FL 32771",
      "phone": "(407) 462-6493",
      "website": "https://HVACrguru.com/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 7,
    "position": {
      "lat": 27.3166255,
      "lng": -80.3870011
    },
    "title": "AC Now LLC",
    "info": {
      "number": "65695",
      "name": "AC Now LLC",
      "address": "1391 NW Saint Lucie West Blvd, Port St. Lucie, FL 34986",
      "phone": "(772) 521-3568",
      "website": "https://acnowLLC.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "FTPI"
    }
  },
  {
    "id": 8,
    "position": {
      "lat": 28.6772795,
      "lng": -81.4496395
    },
    "title": "AC's Heating & Air LLC",
    "info": {
      "number": "44929",
      "name": "AC's Heating & Air LLC",
      "address": "3135 Hunter Pl, Apopka, FL 32703",
      "phone": "(407) 449-7184",
      "website": "https://www.callacs.com",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 9,
    "position": {
      "lat": 27.9607632,
      "lng": -82.3298391
    },
    "title": "Ace Heating & Cooling",
    "info": {
      "number": "42838",
      "name": "Ace Heating & Cooling",
      "address": "1315 Hobbs St, Tampa, FL 33619",
      "phone": "(813) 657-8818",
      "website": "https://www.brandonac.net/",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 10,
    "position": {
      "lat": 27.910255,
      "lng": -82.7877362
    },
    "title": "Adirondack Services Inc.",
    "info": {
      "number": "12197",
      "name": "Adirondack Services Inc.",
      "address": "2024 Seminole Blvd, Largo, FL 33778",
      "phone": "(727) 559-7742",
      "website": "https://www.adirondackservices.com/",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 11,
    "position": {
      "lat": 28.1860903,
      "lng": -81.2797807
    },
    "title": "Air & Refrigeration Technology Services",
    "info": {
      "number": "70847",
      "name": "Air & Refrigeration Technology Services",
      "address": "3623 Moca Dr, St. Cloud, FL 34772",
      "phone": "(407) 759-0920",
      "website": "https://www.myairts.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 12,
    "position": {
      "lat": 27.4178697,
      "lng": -82.546637
    },
    "title": "Air America LLC",
    "info": {
      "number": "44203",
      "name": "Air America LLC",
      "address": "6915 15th St, E #208 Sarasota, FL 34243",
      "phone": "(941) 231-0801",
      "website": "https://www.airamericaflorida.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 13,
    "position": {
      "lat": 26.4615564,
      "lng": -80.0718762
    },
    "title": "Air Depot",
    "info": {
      "number": "48442",
      "name": "Air Depot",
      "address": "110 E Atlantic Ave, Delray Beach, FL 33444",
      "phone": "(561) 330-3009",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "FTPI"
    }
  },
  {
    "id": 14,
    "position": {
      "lat": 28.0213466,
      "lng": -82.3594655
    },
    "title": "Ahoy Heating & Cooling",
    "info": {
      "number": "35051",
      "name": "Ahoy Heating & Cooling",
      "address": "7604 Industrial Ln, Ste 4d, Temple Terrace, FL 33637",
      "phone": "(813) 596-5766",
      "website": "https://callahoy.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 15,
    "position": {
      "lat": 27.8074429,
      "lng": -82.670459
    },
    "title": "Air Innovations LLC",
    "info": {
      "number": "75069",
      "name": "Air Innovations LLC",
      "address": "Keystone Heights, FL 32656",
      "phone": "(904) 596-0555",
      "website": "https://airinnovationsfl.com/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "GAIN"
    }
  },
  {
    "id": 16,
    "position": {
      "lat": 26.7958173,
      "lng": -80.0716403
    },
    "title": "Air Marshall",
    "info": {
      "number": "13775",
      "name": "Air Marshall",
      "address": "348 10th St, Lake Park, FL 33403",
      "phone": "(561) 502-6847",
      "website": "https://airmarshallac.com/",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 17,
    "position": {
      "lat": 30.3175637,
      "lng": -81.7441955
    },
    "title": "Air Solutions Heating & Cooling",
    "info": {
      "number": "3147",
      "name": "Air Solutions Heating & Cooling",
      "address": "546 Ellis Rd S, Jacksonville, FL 32254",
      "phone": "(904) 221-2704",
      "website": "https://www.airsolutionsjax.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 18,
    "position": {
      "lat": 30.2890339,
      "lng": -81.4121913
    },
    "title": "Air Source America Inc.",
    "info": {
      "number": "31823",
      "name": "Air Source America Inc.",
      "address": "207 N 20th St, Jacksonville Beach, FL 32250",
      "phone": "(904) 233-8831",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 19,
    "position": {
      "lat": 28.3055869,
      "lng": -81.3973379
    },
    "title": "Airmag LLC",
    "info": {
      "number": "59682",
      "name": "Airmag LLC",
      "address": "1521 Kelly Ave, Kissimmee, FL 34744",
      "phone": "(407) 235-5637",
      "website": "https://www.airmagac.com/",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 20,
    "position": {
      "lat": 29.7860769,
      "lng": -82.0314892
    },
    "title": "Alday Climate Solutions LLC",
    "info": {
      "number": "61035",
      "name": "Alday Climate Solutions LLC",
      "address": "1967 High St, Longwood, FL 32750",
      "phone": "(407) 808-0864",
      "website": "https://aldaycs.com/",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 21,
    "position": {
      "lat": 28.5875472,
      "lng": -81.2945604
    },
    "title": "All Pro Heating & Air LLC",
    "info": {
      "number": "40479",
      "name": "All Pro Heating & Air LLC",
      "address": "2721 Forsyth Rd, Suite 458 Winter Park, FL 32792",
      "phone": "(407) 676-0076",
      "website": "https://allprocoolingfl.com",
      "dealerLevel": "Amana Premier",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 22,
    "position": {
      "lat": 29.2287143,
      "lng": -82.083431
    },
    "title": "All Star Heating & Cooling",
    "info": {
      "number": "40465",
      "name": "All Star Heating & Cooling",
      "address": "3860 NE 40th, Pl Ocala, FL 34479",
      "phone": "(727) 513-3310",
      "website": "https://www.allstar-ac.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 23,
    "position": {
      "lat": 30.182597,
      "lng": -82.6093521
    },
    "title": "Allen's Refrigeration & Air Conditioning",
    "info": {
      "number": "18966",
      "name": "Allen's Refrigeration & Air Conditioning",
      "address": "24615 Adair Ave, Sorrento, FL 32776",
      "phone": "(352) 383-4998",
      "website": "https://allens-ac.com",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 24,
    "position": {
      "lat": 28.0797031,
      "lng": -80.6394236
    },
    "title": "Anna's Comfort Solutions",
    "info": {
      "number": "76477",
      "name": "Anna's Comfort Solutions",
      "address": "51 NW Carolina St, West Melbourne, FL 32904",
      "phone": "(321) 730-2344",
      "website": "https://www.annasairandheat.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "MELB"
    }
  },
  {
    "id": 25,
    "position": {
      "lat": 30.5621807,
      "lng": -81.8306621
    },
    "title": "Arctic Air Of North Florida",
    "info": {
      "number": "29832",
      "name": "Arctic Air Of North Florida",
      "address": "451688 Fl-200, Callahan, FL 32011",
      "phone": "(904) 607-5777",
      "website": "https://arcticairofnorthernflorida.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 26,
    "position": {
      "lat": 28.2952471,
      "lng": -81.622775
    },
    "title": "Arctic Breeze Air Conditioning & Heating",
    "info": {
      "number": "42190",
      "name": "Arctic Breeze Air Conditioning & Heating",
      "address": "15 Hargrove Ln, Unit 2c Palm Coast, FL 32137",
      "phone": "(386) 270-0375",
      "website": "https://arcticbreezeair.com/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 27,
    "position": {
      "lat": 25.8790041,
      "lng": -80.3267151
    },
    "title": "Austen Air Conditioning",
    "info": {
      "number": "52093",
      "name": "Austen Air Conditioning",
      "address": "6200 W 21st, Ct Hialeah, FL 33016",
      "phone": "(305) 805-8166",
      "website": "https://www.austenairconditioning.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "MLKS"
    }
  },
  {
    "id": 28,
    "position": {
      "lat": 30.1519629,
      "lng": -81.7504514
    },
    "title": "B-cool Air Conditioning & Heating",
    "info": {
      "number": "14562",
      "name": "B-cool Air Conditioning & Heating",
      "address": "1033 Blanding Blvd, Orange Park, FL 32065",
      "phone": "(904) 373-7850",
      "website": "https://bcoolair.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 29,
    "position": {
      "lat": 28.0139245,
      "lng": -81.9309947
    },
    "title": "Beall Heating & Cooling Inc.",
    "info": {
      "number": "44931",
      "name": "Beall Heating & Cooling Inc.",
      "address": "1632 Salesberry St, Lakeland, FL 33803",
      "phone": "(863) 669-0222",
      "website": "http://beallac.com",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 30,
    "position": {
      "lat": 30.5288554,
      "lng": -84.3660654
    },
    "title": "Benson's Heating & A/C Inc.",
    "info": {
      "number": "17476",
      "name": "Benson's Heating & A/C Inc.",
      "address": "5402 Tower Rd, Tallahassee, FL 32303",
      "phone": "(850) 562-3132",
      "website": "https://www.bensonsHVAC.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "TALL"
    }
  },
  {
    "id": 31,
    "position": {
      "lat": 28.3875576,
      "lng": -82.6710707
    },
    "title": "Bill Bowers AC and Heating Inc.",
    "info": {
      "number": "3644",
      "name": "Bill Bowers AC and Heating Inc.",
      "address": "16547 Us Hwy, 19 Suite 102 Hudson, FL 34669",
      "phone": "(727) 683-6652",
      "website": "https://billbowersacheating.com",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 32,
    "position": {
      "lat": 26.5906414,
      "lng": -80.1405578
    },
    "title": "Blessed Air Inc.",
    "info": {
      "number": "53794",
      "name": "Blessed Air Inc.",
      "address": "6081 Moonbeam Dr, Lake Worth Beach, FL 33463",
      "phone": "(561) 713-5354",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "BOYN"
    }
  },
  {
    "id": 33,
    "position": {
      "lat": 28.5242901,
      "lng": -81.3374662
    },
    "title": "Blue Air HVAC LLC",
    "info": {
      "number": "69274",
      "name": "Blue Air HVAC LLC",
      "address": "3725 Conway Rd, Suite B Orlando, FL 32812",
      "phone": "(407) 300-4185",
      "website": "https://myblueairac.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 34,
    "position": {
      "lat": 28.51224,
      "lng": -81.064563
    },
    "title": "BP Air Solutions Inc.",
    "info": {
      "number": "105228",
      "name": "BP Air Solutions Inc.",
      "address": "20836 Maxim Pkwy, Orlando, FL 32833",
      "phone": "(407) 487-1395",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "SARA"
    }
  },
  {
    "id": 35,
    "position": {
      "lat": 30.0946876,
      "lng": -81.4635417
    },
    "title": "Breeze Heating & Air Inc.",
    "info": {
      "number": "45000",
      "name": "Breeze Heating & Air Inc.",
      "address": "69 Breezeway Ct, Ponte Vedra, FL 32081",
      "phone": "(904) 631-2181",
      "website": "",
      "dealerLevel": "Amana Premier",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 36,
    "position": {
      "lat": 28.0922379,
      "lng": -82.0288507
    },
    "title": "Caudill's Heating & Air",
    "info": {
      "number": "13258",
      "name": "Caudill's Heating & Air",
      "address": "4121 Caudill Dr, Lakeland, FL 33810",
      "phone": "(863) 859-2933",
      "website": "http://www.caudills.us",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 37,
    "position": {
      "lat": 28.0421503,
      "lng": -81.7472175
    },
    "title": "Chain Of Lakes Refrigeration & Air",
    "info": {
      "number": "67387",
      "name": "Chain Of Lakes Refrigeration & Air",
      "address": "1825 E Lake Cannon Dr, NW Winter Haven, FL 33881",
      "phone": "(863) 249-1442",
      "website": "https://www.chainoflakesrefrigeration.com/",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 38,
    "position": {
      "lat": 30.2469773,
      "lng": -81.5340759
    },
    "title": "Chills On Wheels Heating & Air",
    "info": {
      "number": "44515",
      "name": "Chills On Wheels Heating & Air",
      "address": "5011 Gate Pkwy, Suite 100 Jacksonville, FL 32256",
      "phone": "(844) 688-2653",
      "website": "https://www.chillsonwheels.com/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 39,
    "position": {
      "lat": 30.354674,
      "lng": -81.698629
    },
    "title": "Christian Brothers Heating & Air",
    "info": {
      "number": "60788",
      "name": "Christian Brothers Heating & Air",
      "address": "2800 Almeda St, Jacksonville, FL 32209",
      "phone": "(904) 551-1914",
      "website": "https://www.caLLChristianbrothersflorida.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 40,
    "position": {
      "lat": 27.8956767,
      "lng": -81.8631814
    },
    "title": "Citrus Air Conditioners",
    "info": {
      "number": "13283",
      "name": "Citrus Air Conditioners",
      "address": "155 Century Blvd, Bartow, FL 33830",
      "phone": "(863) 534-1171",
      "website": "https://www.citrusairconditioners.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 41,
    "position": {
      "lat": 29.2409705,
      "lng": -81.0532631
    },
    "title": "Climate Control",
    "info": {
      "number": "34216",
      "name": "Climate Control",
      "address": "1315 Lpga Blvd, Holly Hill, FL 32117",
      "phone": "(386) 672-8688",
      "website": "https://climatecontrolfl.com/",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 42,
    "position": {
      "lat": 29.0302408,
      "lng": -80.9217991
    },
    "title": "Climatron Inc.",
    "info": {
      "number": "43466",
      "name": "Climatron Inc.",
      "address": "6 Riverwalk Dr. New Smyrna Beach FL 32211",
      "phone": "(386) 566-4444",
      "website": "",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 43,
    "position": {
      "lat": 28.2586218,
      "lng": -82.7080116
    },
    "title": "Comfort Airz",
    "info": {
      "number": "70573",
      "name": "Comfort Airz",
      "address": "7712 Massachusetts Ave, New Port Richey, FL 34653",
      "phone": "(727) 841-0550",
      "website": "https://comfortairz.com",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 44,
    "position": {
      "lat": 25.89275,
      "lng": -80.37111
    },
    "title": "Comfort Concepts Cooling & Heating",
    "info": {
      "number": "75388",
      "name": "Comfort Concepts Cooling & Heating",
      "address": "13117 NW 107th, Ave Hialeah Gardens, FL 33018",
      "phone": "(305) 231-9832",
      "website": "https://comfort-techinc.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 45,
    "position": {
      "lat": 26.3017486,
      "lng": -80.1051924
    },
    "title": "Contractair Inc.",
    "info": {
      "number": "50722",
      "name": "Contractair Inc.",
      "address": "1220 Sw 1st, Way Deerfield Beach, FL 33441",
      "phone": "(954) 231-6148",
      "website": "https://www.contractairinc.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "DEER"
    }
  },
  {
    "id": 46,
    "position": {
      "lat": 25.8920035,
      "lng": -80.326659
    },
    "title": "Cool Running Air Inc.",
    "info": {
      "number": "54968",
      "name": "Cool Running Air Inc.",
      "address": "2125 W 76th, St Hialeah, FL 33016",
      "phone": "(305) 417-6322",
      "website": "https://coolrunningsair.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "MLKS"
    }
  },
  {
    "id": 47,
    "position": {
      "lat": 28.4904397,
      "lng": -82.5450683
    },
    "title": "Craig W Krueger Air Conditioning & Heat LLC",
    "info": {
      "number": "7049",
      "name": "Craig W Krueger Air Conditioning & Heat LLC",
      "address": "4151 Lamson Ave, Spring Hill, FL 34608",
      "phone": "(352) 221-9595",
      "website": "https://www.cwkair.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 48,
    "position": {
      "lat": 26.187655,
      "lng": -80.198425
    },
    "title": "Crane Air Conditioning LLC",
    "info": {
      "number": "49251",
      "name": "Crane Air Conditioning LLC",
      "address": "5098 NW 37th, Ave Ste D, Fort Lauderdale, FL 33309",
      "phone": "(954) 485-8248",
      "website": "https://www.craneac.com",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "FTLA"
    }
  },
  {
    "id": 49,
    "position": {
      "lat": 25.9030725,
      "lng": -80.2983397
    },
    "title": "Debonair Mechanical",
    "info": {
      "number": "57989",
      "name": "Debonair Mechanical",
      "address": "13972 NW 60th, Ave Miami Lakes, FL 33014",
      "phone": "(305) 826-2240",
      "website": "http://www.debonairac.com",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "MLKS"
    }
  },
  {
    "id": 50,
    "position": {
      "lat": 30.2823898,
      "lng": -82.1202634
    },
    "title": "Dependable Heating & Air",
    "info": {
      "number": "2947",
      "name": "Dependable Heating & Air",
      "address": "7 N 4th, St Macclenny, FL 32063",
      "phone": "(904) 259-6546",
      "website": "https://www.dependableacandelectric.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 51,
    "position": {
      "lat": 28.0935632,
      "lng": -80.6655065
    },
    "title": "Don't Sweat It Air & Heat",
    "info": {
      "number": "44712",
      "name": "Don't Sweat It Air & Heat",
      "address": "694 Atlantis Rd, #3 Melbourne, FL 32904",
      "phone": "(321) 426-8328",
      "website": "https://www.dontsweatitairandheat.com",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "MELB"
    }
  },
  {
    "id": 52,
    "position": {
      "lat": 30.522593,
      "lng": -84.3699792
    },
    "title": "Donny's Heating & A/C",
    "info": {
      "number": "16335",
      "name": "Donny's Heating & A/C",
      "address": "5115 Woodlane Cir, Crawfordville, FL 32327",
      "phone": "(850) 942-4349",
      "website": "https://donnysHVAC.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "TALL"
    }
  },
  {
    "id": 53,
    "position": {
      "lat": 28.6967204,
      "lng": -81.3147429
    },
    "title": "E&G HVAC",
    "info": {
      "number": "69081",
      "name": "E&G HVAC",
      "address": "1255 Belle Ave, Unit 176 Winter Springs, FL 32708",
      "phone": "(407) 533-0474",
      "website": "http://eg-HVAC.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 54,
    "position": {
      "lat": 27.9380901,
      "lng": -82.2926372
    },
    "title": "Electric Today",
    "info": {
      "number": "45418",
      "name": "Electric Today",
      "address": "148 Central Dr, Brandon, FL 33510",
      "phone": "(813) 653-4221",
      "website": "https://homeserviceheroesfl.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 55,
    "position": {
      "lat": 28.7919303,
      "lng": -81.5498301
    },
    "title": "Emergency Heating & Air Inc.",
    "info": {
      "number": "42579",
      "name": "Emergency Heating & Air Inc.",
      "address": "5627 Verna Blvd, Jacksonville, FL 32205",
      "phone": "(904) 376-5013",
      "website": "https://www.emergencyHVACjax.com/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 56,
    "position": {
      "lat": 30.3093256,
      "lng": -81.5594703
    },
    "title": "Estes Heating & AC",
    "info": {
      "number": "2926",
      "name": "Estes Heating & AC",
      "address": "1954 Southside Blvd, Jacksonville, FL 32216",
      "phone": "(904) 241-6727",
      "website": "https://www.airbyestes.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 57,
    "position": {
      "lat": 28.113733,
      "lng": -81.946354
    },
    "title": "Fallin's Central Air Conditioning",
    "info": {
      "number": "65048",
      "name": "Fallin's Central Air Conditioning",
      "address": "5801 Walt Loop Rd, Lakeland, FL 33809",
      "phone": "(863) 640-2949",
      "website": "https://fallinscentralair.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 58,
    "position": {
      "lat": 28.673193,
      "lng": -81.514709
    },
    "title": "Fishers Heat & Air",
    "info": {
      "number": "64002",
      "name": "Fishers Heat & Air",
      "address": "101 Fourth St, Bunnell, FL 32110",
      "phone": "(386) 313-6020",
      "website": "https://fishersair.com/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 59,
    "position": {
      "lat": 28.5032926,
      "lng": -81.3791255
    },
    "title": "Florala",
    "info": {
      "number": "30808",
      "name": "Florala",
      "address": "175 Drennen Rd, Orlando, FL 32806",
      "phone": "(407) 398-1800",
      "website": "https://www.florala.com/",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 60,
    "position": {
      "lat": 25.6647594,
      "lng": -80.3848103
    },
    "title": "Florida Atlantic A/C & Repair",
    "info": {
      "number": "49462",
      "name": "Florida Atlantic A/C & Repair",
      "address": "11740 Sw 110th, Ln Miami, FL 33186",
      "phone": "(786) 445-5852",
      "website": "https://fatlanticair.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "KEND"
    }
  },
  {
    "id": 61,
    "position": {
      "lat": 27.6061173,
      "lng": -82.5273831
    },
    "title": "Fonz Heating & Air",
    "info": {
      "number": "62705",
      "name": "Fonz Heating & Air",
      "address": "10211 Bud Rhoden Rd, Palmetto, FL 34221",
      "phone": "(941) 799-9263",
      "website": "https://www.fonzheatingandair.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "SARA"
    }
  },
  {
    "id": 62,
    "position": {
      "lat": 30.3092396,
      "lng": -81.7452458
    },
    "title": "Gator Air & Energy",
    "info": {
      "number": "61735",
      "name": "Gator Air & Energy",
      "address": "4949 Sw 41st Blvd, Unit #20 Gainesville, FL 32608",
      "phone": "(352) 275-4827",
      "website": "https://gatoracrepair.com",
      "dealerLevel": "Amana Premier",
      "region": "NFL",
      "branch": "GAIN"
    }
  },
  {
    "id": 63,
    "position": {
      "lat": 29.8438692,
      "lng": -81.3210515
    },
    "title": "Gibsons Heating & AC",
    "info": {
      "number": "45587",
      "name": "Gibsons Heating & AC",
      "address": "250 Segovia Rd, St. Augustine, FL 32086",
      "phone": "(904) 229-8131",
      "website": "",
      "dealerLevel": "Amana Premier",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 64,
    "position": {
      "lat": 30.1651485,
      "lng": -81.7095626
    },
    "title": "Global Warming & Cooling LLC",
    "info": {
      "number": "66513",
      "name": "Global Warming & Cooling LLC",
      "address": "2022 Carnes St, Unit 3 Orange Park, FL 32073",
      "phone": "(904) 267-0101",
      "website": "https://gwcHVAC.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 65,
    "position": {
      "lat": 28.4805571,
      "lng": -81.2869363
    },
    "title": "Green's Energy Services",
    "info": {
      "number": "1790",
      "name": "Green's Energy Services",
      "address": "186 N Goldenrod Rd, Orlando, FL 32807",
      "phone": "(407) 282-5000",
      "website": "https://www.greensenergy.com",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 66,
    "position": {
      "lat": 25.4693495,
      "lng": -80.4796105
    },
    "title": "Homestead Air Conditioning & Heating Corp",
    "info": {
      "number": "57457",
      "name": "Homestead Air Conditioning & Heating Corp",
      "address": "80 Sw 1st, Ave Homestead, FL 33030",
      "phone": "(305) 247-7532",
      "website": "https://www.homesteadac.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "KEND"
    }
  },
  {
    "id": 67,
    "position": {
      "lat": 26.0082734,
      "lng": -80.2009367
    },
    "title": "Honest Air Inc.",
    "info": {
      "number": "65307",
      "name": "Honest Air Inc.",
      "address": "322 S 57th, Way Hollywood, FL 33023",
      "phone": "(954) 483-9956",
      "website": "https://facebook.com/honestairac/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "STUA"
    }
  },
  {
    "id": 68,
    "position": {
      "lat": 28.03324,
      "lng": -81.77621
    },
    "title": "Ice-C-Cool Air LLC",
    "info": {
      "number": "102485",
      "name": "Ice-C-Cool Air LLC",
      "address": "1101 NW 42nd, St Winter Haven, FL 33881",
      "phone": "(954) 957-9577",
      "website": "https://www.iceccool.com/",
      "dealerLevel": "Amana Select",
      "region": "SEFL",
      "branch": "FTLA"
    }
  },
  {
    "id": 69,
    "position": {
      "lat": 28.279424,
      "lng": -82.710884
    },
    "title": "Iceberg Heating & Air",
    "info": {
      "number": "35265",
      "name": "Iceberg Heating & Air",
      "address": "8410 Afton Ln, Port Richey, FL 34668",
      "phone": "(863) 632-7541",
      "website": "https://icebergairconditioning.com",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 70,
    "position": {
      "lat": 27.960296,
      "lng": -82.4219483
    },
    "title": "Independent Air Conditioning",
    "info": {
      "number": "65907",
      "name": "Independent Air Conditioning",
      "address": "3424 E 7th, Ave Tampa, FL 33605",
      "phone": "(813) 421-2247",
      "website": "http://www.813air.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 71,
    "position": {
      "lat": 28.0101374,
      "lng": -81.7337074
    },
    "title": "Integrity Refrig & A/C Services",
    "info": {
      "number": "45461",
      "name": "Integrity Refrig & A/C Services",
      "address": "1226 6th St, Sw Winter Haven, FL 33880",
      "phone": "(863) 557-4608",
      "website": "https://integrityrefrigerationandac.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 72,
    "position": {
      "lat": 26.2613202,
      "lng": -80.1143134
    },
    "title": "Irving The A/C Man",
    "info": {
      "number": "69232",
      "name": "Irving The A/C Man",
      "address": "5031 NE 6th, Ave Pompano Beach, FL 33064",
      "phone": "(954) 292-1208",
      "website": "https://irvingtheacman.com",
      "dealerLevel": "Amana Select",
      "region": "SEFL",
      "branch": "DEER"
    }
  },
  {
    "id": 73,
    "position": {
      "lat": 26.4596567,
      "lng": -80.0935528
    },
    "title": "Island Heating & Air Conditioning",
    "info": {
      "number": "41397",
      "name": "Island Heating & Air Conditioning",
      "address": "135 S Congress Ave, Delray Beach, FL 33445",
      "phone": "(561) 278-3488",
      "website": "https://www.islandairconditioning.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 74,
    "position": {
      "lat": 25.8744298,
      "lng": -80.3026229
    },
    "title": "J Martin AC Inc.",
    "info": {
      "number": "59929",
      "name": "J Martin AC Inc.",
      "address": "5701 W 9th Ln, Hialeah, FL 33012",
      "phone": "(786) 357-0190",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "MLKS"
    }
  },
  {
    "id": 75,
    "position": {
      "lat": 28.0173328,
      "lng": -81.9077979
    },
    "title": "J Molnar Heating & Cooling Inc.",
    "info": {
      "number": "32134",
      "name": "J Molnar Heating & Cooling Inc.",
      "address": "440 S Combee Rd, Lakeland, FL 33801",
      "phone": "(863) 333-4916",
      "website": "http://www.molnarair.com",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 76,
    "position": {
      "lat": 25.9113696,
      "lng": -80.3411681
    },
    "title": "JA Repair Service Inc.",
    "info": {
      "number": "47948",
      "name": "JA Repair Service Inc.",
      "address": "8711 NW 151st, Terrace Miami Lakes, FL 33018",
      "phone": "(786) 229-3352",
      "website": "https://www.jarepairservice.com",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "MLKS"
    }
  },
  {
    "id": 77,
    "position": {
      "lat": 27.2262696,
      "lng": -80.2387851
    },
    "title": "Jb's A/C",
    "info": {
      "number": "65359",
      "name": "Jb's A/C",
      "address": "1086 NE Industrial Blvd, Jensen Beach, FL 34957",
      "phone": "(772) 225-6600",
      "website": "http://jbservicesfl.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "STUA"
    }
  },
  {
    "id": 78,
    "position": {
      "lat": 25.9295111,
      "lng": -80.3357748
    },
    "title": "K.C. A/C LLC",
    "info": {
      "number": "74580",
      "name": "K.C. A/C LLC",
      "address": "8281 NW 171st St, Doral, FL 33166",
      "phone": "(305) 592-3287",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 79,
    "position": {
      "lat": 28.7219637,
      "lng": -81.5412053
    },
    "title": "K&E A/C & Ref",
    "info": {
      "number": "70782",
      "name": "K&E A/C & Ref",
      "address": "2436 Knoll Dr, Apopka, FL 32712",
      "phone": "(407) 232-5112",
      "website": "https://www.kandeac.com/",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 80,
    "position": {
      "lat": 30.1998179,
      "lng": -84.3682634
    },
    "title": "Keith Key Heating & Air",
    "info": {
      "number": "15657",
      "name": "Keith Key Heating & Air",
      "address": "24 Rainbow Dr, Crawfordville, FL 32327",
      "phone": "(850) 926-3546",
      "website": "https://www.keithkeyHVAC.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "TALL"
    }
  },
  {
    "id": 81,
    "position": {
      "lat": 28.2251183,
      "lng": -82.4578652
    },
    "title": "Lakeside Heating Cooling & Plumbing Inc.",
    "info": {
      "number": "60820",
      "name": "Lakeside Heating Cooling & Plumbing Inc.",
      "address": "4608 Land O Lakes Blvd, Land O Lakes, FL 34639",
      "phone": "(813) 444-9474",
      "website": "https://lakesidecomfortpros.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "BRAN"
    }
  },
  {
    "id": 82,
    "position": {
      "lat": 28.074027,
      "lng": -81.817552
    },
    "title": "Michael Newbern A/C",
    "info": {
      "number": "13916",
      "name": "Michael Newbern A/C",
      "address": "1139 Berkley Rd, Auburndale, FL 33823",
      "phone": "(863) 967-1956",
      "website": "https://www.newbernac.com",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 83,
    "position": {
      "lat": 29.4677067,
      "lng": -81.2558784
    },
    "title": "Mighty Oak Air & Heat",
    "info": {
      "number": "70128",
      "name": "Mighty Oak Air & Heat",
      "address": "4751 E Moody Blvd, #7e Bunnell, FL 32110",
      "phone": "(386) 888-0688",
      "website": "https://callmightyoak.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 84,
    "position": {
      "lat": 27.2975543,
      "lng": -81.3674241
    },
    "title": "Miller HVAC Service",
    "info": {
      "number": "69308",
      "name": "Miller HVAC Service",
      "address": "20 W Interlake Blvd, Lake Placid, FL 33852",
      "phone": "(863) 699-5455",
      "website": "https://www.millerscentralair.com",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 85,
    "position": {
      "lat": 28.5640929,
      "lng": -81.2975677
    },
    "title": "Mrs Busy Bee Air Conditioning",
    "info": {
      "number": "70652",
      "name": "Mrs Busy Bee Air Conditioning",
      "address": "6648 Old Cheney Hwy, Orlando, FL 32807",
      "phone": "(407) 715-0400",
      "website": "https://www.mrsbusybeefl.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 86,
    "position": {
      "lat": 30.2484351,
      "lng": -81.7416339
    },
    "title": "Nicks's Solar & Air Systems",
    "info": {
      "number": "703",
      "name": "Nicks's Solar & Air Systems",
      "address": "4891 Timuquana Rd, Jacksonville, FL 32210",
      "phone": "(904) 759-1093",
      "website": "http://www.nickssolarair.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 87,
    "position": {
      "lat": 28.5376847,
      "lng": -81.35173
    },
    "title": "No Sweat AC & Heating",
    "info": {
      "number": "17280",
      "name": "No Sweat AC & Heating",
      "address": "423 S Bumby Ave, Orlando, FL 32806",
      "phone": "(407) 497-4259",
      "website": "https://www.nosweatorlando.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 88,
    "position": {
      "lat": 28.578074,
      "lng": -81.4125118
    },
    "title": "One Hour Heating & Air Conditioning",
    "info": {
      "number": "70604",
      "name": "One Hour Heating & Air Conditioning",
      "address": "2400 Silver Star Rd, Suite A Orlando, FL 32804",
      "phone": "(407) 974-3283",
      "website": "https://www.onehourheatandair.com/north-orlando/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "OCAL"
    }
  },
  {
    "id": 89,
    "position": {
      "lat": 30.427065,
      "lng": -84.298935
    },
    "title": "Parker Services Inc.",
    "info": {
      "number": "4762",
      "name": "Parker Services Inc.",
      "address": "1600 Mill St, Tallahassee, FL 32310",
      "phone": "(850) 320-7451",
      "website": "https://www.tallahasseeac.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "TALL"
    }
  },
  {
    "id": 90,
    "position": {
      "lat": 27.8966633,
      "lng": -81.8349945
    },
    "title": "Phoenix Heating Cooling & Gas Inc.",
    "info": {
      "number": "66730",
      "name": "Phoenix Heating Cooling & Gas Inc.",
      "address": "115 N 1st Ave, Bartow FL",
      "phone": "(863) 800-3405",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 91,
    "position": {
      "lat": 26.715364,
      "lng": -80.0532942
    },
    "title": "Premier Comfort Services Inc.",
    "info": {
      "number": "51470",
      "name": "Premier Comfort Services Inc.",
      "address": "5407 N Haverhill Rd, Suite 341 West Palm Beach, FL 33407",
      "phone": "(561) 444-3670",
      "website": "https://premiercomfortac.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "WPBH"
    }
  },
  {
    "id": 92,
    "position": {
      "lat": 26.2527937,
      "lng": -80.1507986
    },
    "title": "Prime Time Cooling Inc.",
    "info": {
      "number": "51696",
      "name": "Prime Time Cooling Inc.",
      "address": "1940 NW 18th St, Bay 4 Pompano Beach, FL 33064",
      "phone": "(954) 864-3725",
      "website": "https://primetimecooling.com",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "FTLA"
    }
  },
  {
    "id": 93,
    "position": {
      "lat": 27.2709381,
      "lng": -80.2922207
    },
    "title": "Quick Air Usa LLC",
    "info": {
      "number": "104186",
      "name": "Quick Air Usa LLC",
      "address": "111 N Orange Ave, Ste 800, Orlando, FL 32801",
      "phone": "(866) 207-8555",
      "website": "https://quickairusa.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 94,
    "position": {
      "lat": 27.8391479,
      "lng": -82.6882102
    },
    "title": "Really Professional Cooling Service",
    "info": {
      "number": "42554",
      "name": "Really Professional Cooling Service",
      "address": "3791 Park Blvd, Pinellas Park, FL 33781",
      "phone": "(727) 301-4968",
      "website": "https://www.getcoldnow.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 95,
    "position": {
      "lat": 28.6970836,
      "lng": -81.3601076
    },
    "title": "Reliance Air LLC",
    "info": {
      "number": "67224",
      "name": "Reliance Air LLC",
      "address": "600 Savage Ct, Suite 620 Longwood, FL 32750",
      "phone": "(386) 209-1777",
      "website": "https://www.relianceairandheat.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 96,
    "position": {
      "lat": 29.1783111,
      "lng": -82.0565545
    },
    "title": "Robert's Air Conditioning & Heating",
    "info": {
      "number": "68033",
      "name": "Robert's Air Conditioning & Heating",
      "address": "5621 Se 9th, Street Ocala, FL 34480",
      "phone": "(352) 817-6659",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "OCAL"
    }
  },
  {
    "id": 97,
    "position": {
      "lat": 29.141687,
      "lng": -80.9885358
    },
    "title": "Rossi Heating & Air Cond",
    "info": {
      "number": "42427",
      "name": "Rossi Heating & Air Cond",
      "address": "215 Church St, Port Orange, FL 32127",
      "phone": "(386) 767-7422",
      "website": "https://rossiac.com/",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 98,
    "position": {
      "lat": 28.4858956,
      "lng": -82.6040544
    },
    "title": "Seabreeze A/C & Heat",
    "info": {
      "number": "3738",
      "name": "Seabreeze A/C & Heat",
      "address": "3725 Commercial Way, Spring Hill, FL 34606",
      "phone": "(352) 686-4899",
      "website": "http://www.seabreezeairandheat.com",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 99,
    "position": {
      "lat": 28.9690959,
      "lng": -80.9015982
    },
    "title": "Servair Heating & Air Conditioning",
    "info": {
      "number": "42216",
      "name": "Servair Heating & Air Conditioning",
      "address": "1853 Guava Dr, Edgewater, FL 32141",
      "phone": "(386) 427-1531",
      "website": "https://servairac.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 100,
    "position": {
      "lat": 28.3619963,
      "lng": -82.184236
    },
    "title": "Servando Cruz",
    "info": {
      "number": "36356",
      "name": "Servando Cruz",
      "address": "38220 Buford Ave, Dade City, FL 33525",
      "phone": "(352) 518-0669",
      "website": "https://cruzairconditioning.com",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 101,
    "position": {
      "lat": 25.8680291,
      "lng": -80.2350032
    },
    "title": "Silver Air Services",
    "info": {
      "number": "48213",
      "name": "Silver Air Services",
      "address": "2230 NW 103rd, Ave Pembroke Pines, FL 33026",
      "phone": "(954) 443-0501",
      "website": "",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "DANI"
    }
  },
  {
    "id": 102,
    "position": {
      "lat": 26.2994845,
      "lng": -80.1485282
    },
    "title": "Solar Air Inc.",
    "info": {
      "number": "51654",
      "name": "Solar Air Inc.",
      "address": "3330 Sw 13th, Ave Fort Lauderdale, FL 33315",
      "phone": "(954) 320-7398",
      "website": "https://www.solar-airinc.com",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "DANI"
    }
  },
  {
    "id": 103,
    "position": {
      "lat": 29.660737,
      "lng": -81.67652
    },
    "title": "Southern Air",
    "info": {
      "number": "6667",
      "name": "Southern Air",
      "address": "3849 Reid St, Palatka, FL 32177",
      "phone": "(386) 766-5136",
      "website": "https://southernair.net/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "OCAL"
    }
  },
  {
    "id": 104,
    "position": {
      "lat": 26.7574159,
      "lng": -80.0683527
    },
    "title": "Spectrum Renovations AC LLC",
    "info": {
      "number": "54202",
      "name": "Spectrum Renovations AC LLC",
      "address": "1107 53rd Ct S, Mangonia Park, FL 33407",
      "phone": "(561) 231-4931",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "WPBH"
    }
  },
  {
    "id": 105,
    "position": {
      "lat": 27.806479,
      "lng": -82.74958
    },
    "title": "St. Pete Heat & Air",
    "info": {
      "number": "35749",
      "name": "St. Pete Heat & Air",
      "address": "3865 Tyrone Blvd N, St. Petersburg, FL 33710",
      "phone": "(727) 521-2001",
      "website": "https://www.stpeteairconditioningfl.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 106,
    "position": {
      "lat": 28.115009,
      "lng": -80.6900643
    },
    "title": "Style Crest",
    "info": {
      "number": "42096",
      "name": "Style Crest",
      "address": "500 North Dr, Ste 2, Melbourne, FL 32934",
      "phone": "(321) 384-8670",
      "website": "https://stylecrestservices.com",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "MELB"
    }
  },
  {
    "id": 107,
    "position": {
      "lat": 28.6686425,
      "lng": -81.3903829
    },
    "title": "Sunrise Heat & Air",
    "info": {
      "number": "64972",
      "name": "Sunrise Heat & Air",
      "address": "658 Douglas Ave, Suite 1110 Altamonte Springs, FL 32714",
      "phone": "(407) 324-0682",
      "website": "https://sunriseheatingandair.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 108,
    "position": {
      "lat": 30.3010944,
      "lng": -86.0716485
    },
    "title": "Sunrise Heating & Air",
    "info": {
      "number": "5546",
      "name": "Sunrise Heating & Air",
      "address": "3411 Wright Way, Tallahassee, FL 32303",
      "phone": "(850) 222-8999",
      "website": "https://sunriseheatingandair.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "ORLN"
    }
  },
  {
    "id": 109,
    "position": {
      "lat": 29.585772,
      "lng": -81.251409
    },
    "title": "Sunshine State Heating & AC",
    "info": {
      "number": "42846",
      "name": "Sunshine State Heating & AC",
      "address": "78 Burroughs Dr, Palm Coast, FL 32137",
      "phone": "(386) 627-5500",
      "website": "https://www.sunshinestateac.com/",
      "dealerLevel": "Amana Elite",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 110,
    "position": {
      "lat": 26.7858408,
      "lng": -80.2431022
    },
    "title": "Temp Tech Services",
    "info": {
      "number": "52841",
      "name": "Temp Tech Services",
      "address": "12796 73rd Ct, N West Palm Beach, FL 33412",
      "phone": "(561) 689-9715",
      "website": "",
      "dealerLevel": "Amana Select",
      "region": "SEFL",
      "branch": "WPBH"
    }
  },
  {
    "id": 111,
    "position": {
      "lat": 28.5785002,
      "lng": -81.4282446
    },
    "title": "Temperature Pro Orlando",
    "info": {
      "number": "60453",
      "name": "Temperature Pro Orlando",
      "address": "3773 Silver Star Rd, Orlando, FL 32808",
      "phone": "(407) 440-4545",
      "website": "https://temperaturepro.com/orlando-fl/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "ORLD"
    }
  },
  {
    "id": 112,
    "position": {
      "lat": 25.6209252,
      "lng": -80.4142193
    },
    "title": "Tempvac Corp",
    "info": {
      "number": "47922",
      "name": "Tempvac Corp",
      "address": "15711 Sw 137th, Ave Miami, FL 33177",
      "phone": "(786) 262-9721",
      "website": "",
      "dealerLevel": "Amana Elite",
      "region": "SEFL",
      "branch": "KEND"
    }
  },
  {
    "id": 113,
    "position": {
      "lat": 26.2263504,
      "lng": -80.2043046
    },
    "title": "The A/C Guy Inc.",
    "info": {
      "number": "55262",
      "name": "The A/C Guy Inc.",
      "address": "311 Fl-7, Margate, FL 33063",
      "phone": "(954) 970-0888",
      "website": "http://acguyinc.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "FTLA"
    }
  },
  {
    "id": 114,
    "position": {
      "lat": 30.3395653,
      "lng": -81.5640538
    },
    "title": "The Great Indoors Inc.",
    "info": {
      "number": "102156",
      "name": "The Great Indoors Inc.",
      "address": "8524 Mathonia Ave, Jacksonville, FL 32211",
      "phone": "(904) 945-0855",
      "website": "",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 115,
    "position": {
      "lat": 28.0844522,
      "lng": -82.579004
    },
    "title": "Thorpe Heating & Cooling Inc.",
    "info": {
      "number": "14480",
      "name": "Thorpe Heating & Cooling Inc.",
      "address": "8402 Us Hwy, 98 N Lakeland, FL 33809",
      "phone": "(863) 858-2577",
      "website": "https://thorpeac.com",
      "dealerLevel": "Amana Premier",
      "region": "TB",
      "branch": "LAKE"
    }
  },
  {
    "id": 116,
    "position": {
      "lat": 30.3236055,
      "lng": -81.7852514
    },
    "title": "Tipton Air Services",
    "info": {
      "number": "46973",
      "name": "Tipton Air Services",
      "address": "23 Jackson Ave N, Jacksonville, FL 32220",
      "phone": "(904) 553-2621",
      "website": "https://tiptonairfla.com/",
      "dealerLevel": "Amana Select",
      "region": "NFL",
      "branch": "JAXD"
    }
  },
  {
    "id": 117,
    "position": {
      "lat": 27.9658533,
      "lng": -82.8001026
    },
    "title": "Todd's A/C & Refrigeration",
    "info": {
      "number": "35141",
      "name": "Todd's A/C & Refrigeration",
      "address": "16603 Us Hwy, 19 N Clearwater, FL 33764",
      "phone": "(727) 585-6970",
      "website": "https://www.toddsairconditioning.com/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 118,
    "position": {
      "lat": 26.6271374,
      "lng": -80.0648062
    },
    "title": "Tomco",
    "info": {
      "number": "75202",
      "name": "Tomco",
      "address": "907 N A St, Lake Worth Beach, FL 33460",
      "phone": "(470) 430-0330",
      "website": "https://tomco-HVAC.com/",
      "dealerLevel": "Amana Select",
      "region": "CFL",
      "branch": "DAYT"
    }
  },
  {
    "id": 119,
    "position": {
      "lat": 27.807319,
      "lng": -82.675583
    },
    "title": "Total Air Air Conditioning & Heating",
    "info": {
      "number": "6527",
      "name": "Total Air Air Conditioning & Heating",
      "address": "3100 39th Ave N, St. Petersburg, FL 33714",
      "phone": "(727) 378-9596",
      "website": "https://totalairinc.net/",
      "dealerLevel": "Amana Elite",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 120,
    "position": {
      "lat": 29.9040986,
      "lng": -81.3323755
    },
    "title": "Touchstone Heating & Air Inc.",
    "info": {
      "number": "29275",
      "name": "Touchstone Heating & Air Inc.",
      "address": "439 SE Country Club Rd, Lake City, FL 32025",
      "phone": "(386) 496-3467",
      "website": "https://www.touchstoneheatingonline.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "GAIN"
    }
  },
  {
    "id": 121,
    "position": {
      "lat": 28.1169374,
      "lng": -80.6894584
    },
    "title": "Turtley Awesome Cooling",
    "info": {
      "number": "62070",
      "name": "Turtley Awesome Cooling",
      "address": "727 North Dr, Ste A, Melbourne, FL 32934",
      "phone": "(321) 890-2000",
      "website": "https://www.callturtleyawesome.com",
      "dealerLevel": "Amana Premier",
      "region": "CFL",
      "branch": "MELB"
    }
  },
  {
    "id": 122,
    "position": {
      "lat": 28.0514115,
      "lng": -81.7959943
    },
    "title": "United A/C & Refrigeration",
    "info": {
      "number": "51425",
      "name": "United A/C & Refrigeration",
      "address": "517 Recker Hwy, Auburndale, FL 33823",
      "phone": "(863) 271-9920",
      "website": "https://www.unitedacflorida.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "DEER"
    }
  },
  {
    "id": 123,
    "position": {
      "lat": 28.0514115,
      "lng": -81.7959943
    },
    "title": "United Refrigeration",
    "info": {
      "number": "2633",
      "name": "United Refrigeration",
      "address": "517 Recker Hwy, Auburndale, FL 33823",
      "phone": "(863) 271-9920",
      "website": "https://www.unitedacflorida.com/",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "OCAL"
    }
  },
  {
    "id": 124,
    "position": {
      "lat": 27.9550009,
      "lng": -82.7687922
    },
    "title": "Up 2 Par Air Conditioning",
    "info": {
      "number": "104275",
      "name": "Up 2 Par Air Conditioning",
      "address": "709 S Keystone Ave, Clearwater, FL 33756",
      "phone": "(727) 252-3863",
      "website": "https://up2parair.com",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "CLEA"
    }
  },
  {
    "id": 125,
    "position": {
      "lat": 29.6097743,
      "lng": -82.380987
    },
    "title": "Veran Inland Construction Corp",
    "info": {
      "number": "36589",
      "name": "Veran Inland Construction Corp",
      "address": "2907 State Rd, 590 Suite 4 Clearwater, FL 33759",
      "phone": "(727) 422-5444",
      "website": "",
      "dealerLevel": "Amana Select",
      "region": "TB",
      "branch": "PTRI"
    }
  },
  {
    "id": 126,
    "position": {
      "lat": 26.725882,
      "lng": -80.084268
    },
    "title": "Wallen Air Conditioning Inc.",
    "info": {
      "number": "28921",
      "name": "Wallen Air Conditioning Inc.",
      "address": "1470 Congress Ave, West Palm Beach, FL 33409",
      "phone": "(561) 684-5555",
      "website": "https://wallenac.com",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "WPBH"
    }
  },
  {
    "id": 127,
    "position": {
      "lat": 26.09588,
      "lng": -80.186025
    },
    "title": "Weathershield A/C",
    "info": {
      "number": "57428",
      "name": "Weathershield A/C",
      "address": "3121 Sw 21st St, Suite 673 Hollywood (Pembroke Park), FL 33009",
      "phone": "(954) 985-9900",
      "website": "http://www.ilovemyac.com",
      "dealerLevel": "Amana Select",
      "region": "SEFL",
      "branch": "DANI"
    }
  },
  {
    "id": 128,
    "position": {
      "lat": 28.5438004,
      "lng": -81.3787676
    },
    "title": "Wilson Heating & Air Conditioning",
    "info": {
      "number": "2698",
      "name": "Wilson Heating & Air Conditioning",
      "address": "97 Masters Dr, St. Augustine, FL 32084",
      "phone": "(904) 827-1216",
      "website": "https://wilsonairconditioning.com",
      "dealerLevel": "Amana Elite",
      "region": "NFL",
      "branch": "JAXS"
    }
  },
  {
    "id": 129,
    "position": {
      "lat": 26.1835228,
      "lng": -80.2910493
    },
    "title": "Zoom Zoom Air Conditioning",
    "info": {
      "number": "50871",
      "name": "Zoom Zoom Air Conditioning",
      "address": "4666 Hiatus Rd, Sunrise, FL 33351",
      "phone": "(954) 627-1842",
      "website": "https://zoomzoomac.com/",
      "dealerLevel": "Amana Premier",
      "region": "SEFL",
      "branch": "FTLA"
    }
  }
];

// Configuration for the map
const mapConfig = {
  defaultCenter: { lat: 28.2689191, lng: -82 },
  defaultZoom: 6.5,
  focusedZoom: 12,
  mapId: "AMANA_DEALER_MAP"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = { dealerLocations, mapConfig };
} else {
  // Browser environment - make globally available
  window.dealerLocations = dealerLocations;
  window.mapConfig = mapConfig;
}
