function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function copyToClipboard() {
    const copy_btn = document.getElementsByClassName("copy-btn");
    navigator.clipboard.writeText(tomorrows_copy)
        .then(() => {
            copy_btn[0].innerHTML = `<img src="https://img.icons8.com/ios-glyphs/30/ffffff/copy.png" alt="Copy Icon" />
            Copied`;
            setTimeout(() => {
                copy_btn[0].innerHTML = `<img src="https://img.icons8.com/ios-glyphs/30/ffffff/copy.png" alt="Copy Icon" />
            Copy`;
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

const details = {
    "november": {
        "1": {
            "bible_portion": [
                "Jeremiah 29:16-31:12",
                "Hebrews 10:19-11:4"
            ],
            "district": "Tiruvannamalai",
            "state": "Bihar",
            "country": {
                "name": "Republic of the Congo",
                "capital": "Brazzaville"
            },
            "continent": "Asia"
        },
        "2": {
            "bible_portion": [
                "Jeremiah 31:13-32:23",
                "Hebrews 11:5-25"
            ],
            "district": "Tiruvarur",
            "state": "Chhattisgarh",
            "country": {
                "name": "Romania",
                "capital": "Bucharest"
            },
            "continent": "Australia"
        },
        "3": {
            "bible_portion": [
                "Jeremiah 32:24-34:1",
                "Hebrews 11:26-12:6"
            ],
            "district": "Vellore",
            "state": "Goa",
            "country": {
                "name": "Russia",
                "capital": "Moscow"
            },
            "continent": "Europe"
        },
        "4": {
            "bible_portion": [
                "Jeremiah 34:2-36:4",
                "Hebrews 12:7-27"
            ],
            "district": "Viluppuram",
            "state": "Gujarat",
            "country": {
                "name": "Rwanda",
                "capital": "Kigali"
            },
            "continent": "North America"
        },
        "5": {
            "bible_portion": [
                "Jeremiah 36:5-38:1",
                "Hebrews 12:28-13:21"
            ],
            "district": "Virudhunagar",
            "state": "Haryana",
            "country": {
                "name": "Saint Kitts and Nevis",
                "capital": "Basseterre"
            },
            "continent": "South America"
        },
        "6": {
            "bible_portion": [
                "Jeremiah 38:2-40:4",
                "Hebrews 13:22- James 1:18"
            ],
            "district": "Ariyalur",
            "state": "Himachal Pradesh",
            "country": {
                "name": "Saint Lucia",
                "capital": "Castries"
            },
            "continent": "Africa"
        },
        "7": {
            "bible_portion": [
                "Jeremiah 40:5-42:15",
                "James 1:19-2:13"
            ],
            "district": "Chengalpattu",
            "state": "Jharkhand",
            "country": {
                "name": "Saint Vincent and the Grenadines",
                "capital": "Kingstown"
            },
            "continent": "Antarctica"
        },
        "8": {
            "bible_portion": [
                "Jeremiah 42:16-44:25",
                "James 1:19-2:13"
            ],
            "district": "Chennai",
            "state": "Karnataka",
            "country": {
                "name": "Samoa",
                "capital": "Apia"
            },
            "continent": "Asia"
        },
        "9": {
            "bible_portion": [
                "Jeremiah 44:26-48:7",
                "James 2:14-3:12"
            ],
            "district": "Coimbatore",
            "state": "Kerala",
            "country": {
                "name": "San Marino",
                "capital": "San Marino"
            },
            "continent": "Australia"
        },
        "10": {
            "bible_portion": [
                "Jeremiah 49:19-50:31",
                "James 4:16-5:20"
            ],
            "district": "Cuddalore",
            "state": "Madhya Pradesh",
            "country": {
                "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
                "capital": "S\u00e3o Tom\u00e9"
            },
            "continent": "Europe"
        },
        "11": {
            "bible_portion": [
                "Jeremiah 50:32-51:39",
                "1 Peter 1:1-16"
            ],
            "district": "Dharmapuri",
            "state": "Maharashtra",
            "country": {
                "name": "Saudi Arabia",
                "capital": "Riyadh"
            },
            "continent": "North America"
        },
        "12": {
            "bible_portion": [
                "Jeremiah 51:40-52:31",
                "1 Peter 1:17-2:12"
            ],
            "district": "Dindigul",
            "state": "Manipur",
            "country": {
                "name": "Senegal",
                "capital": "Dakar"
            },
            "continent": "South America"
        },
        "13": {
            "bible_portion": [
                "Jeremiah 52:32- Lamentations 2:21",
                "1 Peter 2:13-3:8"
            ],
            "district": "Erode",
            "state": "Meghalaya",
            "country": {
                "name": "Serbia",
                "capital": "Belgrade"
            },
            "continent": "Africa"
        },
        "14": {
            "bible_portion": [
                "Lamentations 2:22-5:5",
                "1 Peter 3:9-4:7"
            ],
            "district": "Kallakurichi",
            "state": "Mizoram",
            "country": {
                "name": "Seychelles",
                "capital": "Victoria"
            },
            "continent": "Antarctica"
        },
        "15": {
            "bible_portion": [
                "Lamentations 5:6- Ezekiel 3:11",
                "1 Peter 4:8-5:10"
            ],
            "district": "Kanchipuram",
            "state": "Nagaland",
            "country": {
                "name": "Sierra Leone",
                "capital": "Freetown"
            },
            "continent": "Asia"
        },
        "16": {
            "bible_portion": [
                "Ezekiel 3:12-6:4",
                "1 Peter 5:11- 2 Peter 1:14"
            ],
            "district": "Kanyakumari",
            "state": "Odisha",
            "country": {
                "name": "Singapore",
                "capital": "Singapore"
            },
            "continent": "Australia"
        },
        "17": {
            "bible_portion": [
                "Ezekiel 6:5-8:18",
                "2 Peter 1:15-2:12"
            ],
            "district": "Karur",
            "state": "Punjab",
            "country": {
                "name": "Slovakia",
                "capital": "Bratislava"
            },
            "continent": "Europe"
        },
        "18": {
            "bible_portion": [
                "Ezekiel 9:1-11:24",
                "2 Peter 2:13-3:10"
            ],
            "district": "Krishnagiri",
            "state": "Rajasthan",
            "country": {
                "name": "Slovenia",
                "capital": "Ljubljana"
            },
            "continent": "North America"
        },
        "19": {
            "bible_portion": [
                "Ezekiel 11:25-14:4",
                "2 Peter 3:11-1 John 1:9"
            ],
            "district": "Madurai",
            "state": "Sikkim",
            "country": {
                "name": "Solomon Islands",
                "capital": "Honiara"
            },
            "continent": "South America"
        },
        "20": {
            "bible_portion": [
                "Ezekiel 14:5-16:31",
                "1 John 1:10-2:21"
            ],
            "district": "Nagapattinam",
            "state": "Tamil Nadu",
            "country": {
                "name": "Somalia",
                "capital": "Mogadishu"
            },
            "continent": "Africa"
        },
        "21": {
            "bible_portion": [
                "Ezekiel 16:32-17:24",
                "1 John 2:22-3:13"
            ],
            "district": "Namakkal",
            "state": "Telangana",
            "country": {
                "name": "South Africa",
                "capital": "Pretoria"
            },
            "continent": "Antarctica"
        },
        "22": {
            "bible_portion": [
                "Ezekiel 17:25-20:13",
                "1 John 3:14-4:10"
            ],
            "district": "Nilgiris",
            "state": "Tripura",
            "country": {
                "name": "South Sudan",
                "capital": "Juba"
            },
            "continent": "Asia"
        },
        "23": {
            "bible_portion": [
                "Ezekiel 20:14-21:18",
                "1 John 4:11-5:13"
            ],
            "district": "Perambalur",
            "state": "Uttarakhand",
            "country": {
                "name": "Spain",
                "capital": "Madrid"
            },
            "continent": "Australia"
        },
        "24": {
            "bible_portion": [
                "Ezekiel 21:19-23:15",
                "1 John 5:14- 2 John 1:9"
            ],
            "district": "Pudukkottai",
            "state": "Uttar Pradesh",
            "country": {
                "name": "Sri Lanka",
                "capital": "Sri Jayawardenapura Kotte"
            },
            "continent": "Europe"
        },
        "25": {
            "bible_portion": [
                "Ezekiel 23:16-24:22",
                "2 John 1:10- 3 John 1:14"
            ],
            "district": "Ramanathapuram",
            "state": "West Bengal",
            "country": {
                "name": "Sudan",
                "capital": "Khartoum"
            },
            "continent": "North America"
        },
        "26": {
            "bible_portion": [
                "Ezekiel 24:23-27:11",
                "Jude 1:1-15"
            ],
            "district": "Ranipet",
            "state": "Andaman and Nicobar Islands",
            "country": {
                "name": "Suriname",
                "capital": "Paramaribo"
            },
            "continent": "South America"
        },
        "27": {
            "bible_portion": [
                "Ezekiel 27:12-29:5",
                "Jude 1:16- Revelation 1:8"
            ],
            "district": "Salem",
            "state": "Chandigarh",
            "country": {
                "name": "Sweden",
                "capital": "Stockholm"
            },
            "continent": "Africa"
        },
        "28": {
            "bible_portion": [
                "Ezekiel 29:6-31:13",
                "Revelation 1:9-2:7"
            ],
            "district": "Sivaganga",
            "state": "Dadra and Nagar Haveli",
            "country": {
                "name": "Switzerland",
                "capital": "Bern"
            },
            "continent": "Antarctica"
        },
        "29": {
            "bible_portion": [
                "Ezekiel 31:14-33:9",
                "Revelation 2:8-24"
            ],
            "district": "Tenkasi",
            "state": "Daman & Diu",
            "country": {
                "name": "Syria",
                "capital": "Damascus"
            },
            "continent": "Asia"
        },
        "30": {
            "bible_portion": [
                "Ezekiel 33:10-34:30",
                "Revelation 2:25-3:15"
            ],
            "district": "Thanjavur",
            "state": "Delhi",
            "country": {
                "name": "Taiwan",
                "capital": "Taipei"
            },
            "continent": "Australia"
        }
    },
    "december": {
        "1": {
            "bible_portion": [
                "Ezekiel 34:31-36:36",
                "Revelation 3:16-4:11"
            ],
            "district": "Thanjavur",
            "state": "Jammu & Kashmir",
            "country": {
                "name": "Tajikistan",
                "capital": "Dushanbe"
            },
            "continent": "Europe"
        },
        "2": {
            "bible_portion": [
                "Ezekiel 36:37-38:18",
                "Revelation 5:1-6:4"
            ],
            "district": "Theni",
            "state": "Ladakh",
            "country": {
                "name": "Tanzania",
                "capital": "Dodoma"
            },
            "continent": "North America"
        },
        "3": {
            "bible_portion": [
                "Ezekiel 38:19-40:19",
                "Revelation 6:5-7:4"
            ],
            "district": "Thoothukudi",
            "state": "Lakshadweep",
            "country": {
                "name": "Thailand",
                "capital": "Bangkok"
            },
            "continent": "South America"
        },
        "4": {
            "bible_portion": [
                "Ezekiel 40:20-42:1",
                "Revelation 7:5-8:6"
            ],
            "district": "Tiruchirappalli",
            "state": "Puducherry",
            "country": {
                "name": "Togo",
                "capital": "Lom\u00e9"
            },
            "continent": "Africa"
        },
        "5": {
            "bible_portion": [
                "Ezekiel 42:2-44:8",
                "Revelation 8:7-9:11"
            ],
            "district": "Tirunelveli",
            "state": "Andhra Pradesh",
            "country": {
                "name": "Tonga",
                "capital": "Nukualofa"
            },
            "continent": "Antarctica"
        },
        "6": {
            "bible_portion": [
                "Ezekiel 44:9-46:1",
                "Revelation 9:12-10:8"
            ],
            "district": "Tirupathur",
            "state": "Arunachal Pradesh",
            "country": {
                "name": "Trinidad and Tobago",
                "capital": "Port of Spain"
            },
            "continent": "Asia"
        },
        "7": {
            "bible_portion": [
                "Ezekiel 46:2-48:7",
                "Revelation 10:9-11:15"
            ],
            "district": "Tiruppur",
            "state": "Assam",
            "country": {
                "name": "Tunisia",
                "capital": "Tunis"
            },
            "continent": "Australia"
        },
        "8": {
            "bible_portion": [
                "Ezekiel 48:8-Daniel 2:8",
                "Revelation 11:16-12:13"
            ],
            "district": "Tiruvallur",
            "state": "Bihar",
            "country": {
                "name": "Turkey",
                "capital": "Ankara"
            },
            "continent": "Europe"
        },
        "9": {
            "bible_portion": [
                "Daniel 2:9-3:14",
                "Revelation 12:14-13:15"
            ],
            "district": "Tiruvannamalai",
            "state": "Chhattisgarh",
            "country": {
                "name": "Turkmenistan",
                "capital": "Ashgabat"
            },
            "continent": "North America"
        },
        "10": {
            "bible_portion": [
                "Daniel 3:15-4:33",
                "Revelation 13:16-14:13"
            ],
            "district": "Tiruvarur",
            "state": "Goa",
            "country": {
                "name": "Tuvalu",
                "capital": "Funafuti"
            },
            "continent": "South America"
        },
        "11": {
            "bible_portion": [
                "Daniel 4:34-6:12",
                "Revelation 14:14-16:2"
            ],
            "district": "Vellore",
            "state": "Gujarat",
            "country": {
                "name": "Uganda",
                "capital": "Kampala"
            },
            "continent": "Africa"
        },
        "12": {
            "bible_portion": [
                "Daniel 6:13-8:3",
                "Revelation 16:3-17:1"
            ],
            "district": "Viluppuram",
            "state": "Haryana",
            "country": {
                "name": "Ukraine",
                "capital": "Kiev"
            },
            "continent": "Antarctica"
        },
        "13": {
            "bible_portion": [
                "Daniel 8:4-9:25",
                "Revelation 17:2-18:3"
            ],
            "district": "Virudhunagar",
            "state": "Himachal Pradesh",
            "country": {
                "name": "United Arab Emirates",
                "capital": "Abu Dhabi"
            },
            "continent": "Asia"
        },
        "14": {
            "bible_portion": [
                "Daniel 9:26-11:28",
                "Revelation 18:4-21"
            ],
            "district": "Ariyalur",
            "state": "Jharkhand",
            "country": {
                "name": "United Kingdom",
                "capital": "London"
            },
            "continent": "Australia"
        },
        "15": {
            "bible_portion": [
                "Daniel 11:29 - Hosea 2:12",
                "Revelation 18:22-19:14"
            ],
            "district": "Chengalpattu",
            "state": "Karnataka",
            "country": {
                "name": "United States",
                "capital": "Washington D.C."
            },
            "continent": "Europe"
        },
        "16": {
            "bible_portion": [
                "Hosea 2:13-7:2",
                "Revelation 19:15-20:10"
            ],
            "district": "Chennai",
            "state": "Kerala",
            "country": {
                "name": "Uruguay",
                "capital": "Montevideo"
            },
            "continent": "North America"
        },
        "17": {
            "bible_portion": [
                "Hosea 7:3-10:14",
                "Revelation 20:11-21:13"
            ],
            "district": "Coimbatore",
            "state": "Madhya Pradesh",
            "country": {
                "name": "Uzbekistan",
                "capital": "Tashkent"
            },
            "continent": "South America"
        },
        "18": {
            "bible_portion": [
                "Hosea 10:15- Joel 1:7",
                "Revelation 21:14-22:7"
            ],
            "district": "Cuddalore",
            "state": "Maharashtra",
            "country": {
                "name": "Vanuatu",
                "capital": "Port Vila"
            },
            "continent": "Africa"
        },
        "19": {
            "bible_portion": [
                "Joel 1:8-3:16",
                "Revelation 22:8-21"
            ],
            "district": "Dharmapuri",
            "state": "Manipur",
            "country": {
                "name": "Vatican City",
                "capital": "Vatican City"
            },
            "continent": "Antarctica"
        },
        "20": {
            "bible_portion": [
                "Joel 3:17-Amos 5:5",
                ""
            ],
            "district": "Dindigul",
            "state": "Meghalaya",
            "country": {
                "name": "Venezuela",
                "capital": "Caracas"
            },
            "continent": "Asia"
        },
        "21": {
            "bible_portion": [
                "Amos 5:6-9:9",
                ""
            ],
            "district": "Erode",
            "state": "Mizoram",
            "country": {
                "name": "Vietnam",
                "capital": "Hanoi"
            },
            "continent": "Australia"
        },
        "22": {
            "bible_portion": [
                "Amos 9:10- Jonah 4:7",
                ""
            ],
            "district": "Kallakurichi",
            "state": "Nagaland",
            "country": {
                "name": "Yemen",
                "capital": "Sana'a"
            },
            "continent": "Europe"
        },
        "23": {
            "bible_portion": [
                "Jonah 4:8- Micah 5:10",
                ""
            ],
            "district": "Kanchipuram",
            "state": "Odisha",
            "country": {
                "name": "Zambia",
                "capital": "Lusaka"
            },
            "continent": "North America"
        },
        "24": {
            "bible_portion": [
                "Micah 5:11- Nahum 3:7",
                ""
            ],
            "district": "Kanyakumari",
            "state": "Punjab",
            "country": {
                "name": "Zimbabwe",
                "capital": "Harare"
            },
            "continent": "South America"
        },
        "25": {
            "bible_portion": [
                "Nahum 3:8 - Zephaniah 1:5",
                ""
            ],
            "district": "Karur",
            "state": "Rajasthan",
            "country": {
                "name": "Afghanistan",
                "capital": "Kabul"
            },
            "continent": "Africa"
        },
        "26": {
            "bible_portion": [
                "Zephaniah 1:6-Haggai 2:5",
                ""
            ],
            "district": "Krishnagiri",
            "state": "Sikkim",
            "country": {
                "name": "Albania",
                "capital": "Tirana"
            },
            "continent": "Antarctica"
        },
        "27": {
            "bible_portion": [
                "Haggai 2:6-Zachariah 4:10"
            ],
            "district": "Madurai",
            "state": "Tamil Nadu",
            "country": {
                "name": "Algeria",
                "capital": "Algiers"
            },
            "continent": "Asia"
        },
        "28": {
            "bible_portion": [
                "Zachariah 4:11-9:9",
                ""
            ],
            "district": "Nagapattinam",
            "state": "Telangana",
            "country": {
                "name": "Andorra",
                "capital": "Andorra la Vella"
            },
            "continent": "Australia"
        },
        "29": {
            "bible_portion": [
                "Zachariah 9:10-13:1",
                ""
            ],
            "district": "Namakkal",
            "state": "Tripura",
            "country": {
                "name": "Angola",
                "capital": "Luanda"
            },
            "continent": "Europe"
        },
        "30": {
            "bible_portion": [
                "Zachariah 13:2- Malachi 2:6",
                ""
            ],
            "district": "Nilgiris",
            "state": "Uttarakhand",
            "country": {
                "name": "Antigua and Barbuda",
                "capital": "St. John's"
            },
            "continent": "North America"
        },
        "31": {
            "bible_portion": [
                "Malachi 2:6-4:6",
                ""
            ],
            "district": "Perambalur",
            "state": "Uttar Pradesh",
            "country": {
                "name": "Argentina",
                "capital": "Buenos Aires"
            },
            "continent": "South America"
        }
    }
};

//Get Today's and Tomorrow's Dates
const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow.toISOString().split('T')[0]); // Outputs YYYY-MM-DD

//Get the day, month and year of the today and tomorrow
const today_day = String(today.getDate()).padStart(2, '0'); // 2-digit day
const today_month = String(today.getMonth() + 1).padStart(2, '0'); // 2-digit month (0-based index)
const today_year = today.getFullYear(); // 4-digit year

const tomorrow_day = String(tomorrow.getDate()).padStart(2, '0'); // 2-digit day
const tomorrow_month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // 2-digit month (0-based index)
const tomorrow_year = tomorrow.getFullYear(); // 4-digit year

//Get the Details of today and tomorrow
const todays_details = details[months[parseInt(today_month) - 1]][today_day];

const tomorrows_details = details[months[parseInt(tomorrow_month) - 1]][tomorrow_day]

const tomorrows_copy = `Good Morning Everyone. Today's (${capitalize(months[parseInt(tomorrow_month) - 1])} ${tomorrow_day}) portion
${tomorrows_details['bible_portion'][0]}
${tomorrows_details['bible_portion'][1]}

Today's District:  ${tomorrows_details['district']}
Today's State:  ${tomorrows_details['state']}
Today's Nation:  ${tomorrows_details['country']['name']} - Capital - ${tomorrows_details['country']['capital']}
Today's Continent:  ${tomorrows_details['continent']}
Pls search WIKI to find details and Pray.`;

const oldTestament = document.getElementById("oldTestament");
const newTestament = document.getElementById("newTestament");
const district = document.getElementById("district");
const state = document.getElementById("state");
const country = document.getElementById("country");
const capital = document.getElementById("capital");
const continent = document.getElementById("continent");

oldTestament.innerText = todays_details['bible_portion'][0];
newTestament.innerText = todays_details['bible_portion'][1];
district.innerText = todays_details['district'];
state.innerText = todays_details['state'];
country.innerText = todays_details['country']['name'];
capital.innerText = `Capital - ${todays_details['country']['capital']}`;
continent.innerText = todays_details['continent'];



