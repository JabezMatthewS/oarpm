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
    "february": {
        "1": {
            "bible_portion": [
                "Exodus 19:7-21:25",
                "Matthew 22:7-33"
            ],
            "district": "Thanjavur",
            "state": "Uttar Pradesh",
            "country": {
                "name": "Greece",
                "capital": "Athens"
            },
            "continent": "Asia"
        },
        "2": {
            "bible_portion": [
                "Exodus 21:26-23:25",
                "Matthew 22:34-23:15"
            ],
            "district": "Theni",
            "state": "West Bengal",
            "country": {
                "name": "Grenada",
                "capital": "St. George's"
            },
            "continent": "Australia"
        },
        "3": {
            "bible_portion": [
                "Exodus 23:26-26:6",
                "Matthew 23:16-37"
            ],
            "district": "Thoothukudi",
            "state": "Andaman and Nicobar Islands",
            "country": {
                "name": "Guatemala",
                "capital": "Guatemala City"
            },
            "continent": "Europe"
        },
        "4": {
            "bible_portion": [
                "Exodus 26:7-28:15",
                "Matthew 23:38-24:26"
            ],
            "district": "Tiruchirappalli",
            "state": "Chandigarh",
            "country": {
                "name": "Guinea",
                "capital": "Conakry"
            },
            "continent": "North America"
        },
        "5": {
            "bible_portion": [
                "Exodus 28:16-29:35",
                "Matthew 24:27-25:1"
            ],
            "district": "Tirunelveli",
            "state": "Dadra and Nagar Haveli",
            "country": {
                "name": "Guinea-Bissau",
                "capital": "Bissau"
            },
            "continent": "South America"
        },
        "6": {
            "bible_portion": [
                "Exodus 29:36-32:1",
                "Matthew 25:2-26"
            ],
            "district": "Tirupathur",
            "state": "Daman & Diu",
            "country": {
                "name": "Guyana",
                "capital": "Georgetown"
            },
            "continent": "Africa"
        },
        "7": {
            "bible_portion": [
                "Exodus 32:2-33:23",
                "Matthew 25:27-26:1"
            ],
            "district": "Tiruppur",
            "state": "Delhi",
            "country": {
                "name": "Haiti",
                "capital": "Port-au-Prince"
            },
            "continent": "Antarctica"
        },
        "8": {
            "bible_portion": [
                "Exodus 34:1-35:31",
                "Matthew 26:2-28"
            ],
            "district": "Tiruvallur",
            "state": "Jammu & Kashmir",
            "country": {
                "name": "Honduras",
                "capital": "Tegucigalpa"
            },
            "continent": "Asia"
        },
        "9": {
            "bible_portion": [
                "Exodus 35:32-38:1",
                "Matthew 26:29-52"
            ],
            "district": "Tiruvannamalai",
            "state": "Ladakh",
            "country": {
                "name": "Hungary",
                "capital": "Budapest"
            },
            "continent": "Australia"
        },
        "10": {
            "bible_portion": [
                "Exodus 38:2-39:39",
                "Matthew 26:53-74"
            ],
            "district": "Tiruvarur",
            "state": "Lakshadweep",
            "country": {
                "name": "Iceland",
                "capital": "Reykjav\u00edk"
            },
            "continent": "Europe"
        },
        "11": {
            "bible_portion": [
                "Exodus 39:40-Leviticus 2:12",
                "Matthew 26:75-27:24"
            ],
            "district": "Vellore",
            "state": "Puducherry",
            "country": {
                "name": "India",
                "capital": "New Delhi"
            },
            "continent": "North America"
        },
        "12": {
            "bible_portion": [
                "Leviticus 2:13-5:6",
                "Matthew 27:25-49"
            ],
            "district": "Viluppuram",
            "state": "Andhra Pradesh",
            "country": {
                "name": "Indonesia",
                "capital": "Jakarta"
            },
            "continent": "South America"
        },
        "13": {
            "bible_portion": [
                "Leviticus 5:7-7:15",
                "Matthew 27:50-28:9"
            ],
            "district": "Virudhunagar",
            "state": "Arunachal Pradesh",
            "country": {
                "name": "Iran",
                "capital": "Tehran"
            },
            "continent": "Africa"
        },
        "14": {
            "bible_portion": [
                "Leviticus 7:16-9:5",
                "Matthew 28:10-Mark 1:10"
            ],
            "district": "Ariyalur",
            "state": "Assam",
            "country": {
                "name": "Iraq",
                "capital": "Baghdad"
            },
            "continent": "Antarctica"
        },
        "15": {
            "bible_portion": [
                "Leviticus 9:6-11:29",
                "Mark 1:11-37"
            ],
            "district": "Chengalpattu",
            "state": "Bihar",
            "country": {
                "name": "Ireland",
                "capital": "Dublin"
            },
            "continent": "Asia"
        },
        "16": {
            "bible_portion": [
                "Leviticus 11:30-13:36",
                "Mark 1:38-2:16"
            ],
            "district": "Chennai",
            "state": "Chhattisgarh",
            "country": {
                "name": "Israel",
                "capital": "Jerusalem"
            },
            "continent": "Australia"
        },
        "17": {
            "bible_portion": [
                "Leviticus 13:37-14:44",
                "Mark 2:17-3:10"
            ],
            "district": "Coimbatore",
            "state": "Goa",
            "country": {
                "name": "Italy",
                "capital": "Rome"
            },
            "continent": "Europe"
        },
        "18": {
            "bible_portion": [
                "Leviticus 14:45-16:20",
                "Mark 3:11-4:3"
            ],
            "district": "Cuddalore",
            "state": "Gujarat",
            "country": {
                "name": "Ivory Coast",
                "capital": "Yamoussoukro"
            },
            "continent": "North America"
        },
        "19": {
            "bible_portion": [
                "Leviticus 16:21-19:5",
                "Mark 4:4-30"
            ],
            "district": "Dharmapuri",
            "state": "Haryana",
            "country": {
                "name": "Jamaica",
                "capital": "Kingston"
            },
            "continent": "South America"
        },
        "20": {
            "bible_portion": [
                "Leviticus 19:6-21:3",
                "Mark 4:31-5:15"
            ],
            "district": "Dindigul",
            "state": "Himachal Pradesh",
            "country": {
                "name": "Japan",
                "capital": "Tokyo"
            },
            "continent": "Africa"
        },
        "21": {
            "bible_portion": [
                "Leviticus 21:4-23:14",
                "Mark 5:16-41"
            ],
            "district": "Erode",
            "state": "Jharkhand",
            "country": {
                "name": "Jordan",
                "capital": "Amman"
            },
            "continent": "Antarctica"
        },
        "22": {
            "bible_portion": [
                "Leviticus 23:15-25:14",
                "Mark 5:42-6:21"
            ],
            "district": "Kallakurichi",
            "state": "Karnataka",
            "country": {
                "name": "Kazakhstan",
                "capital": "Astana"
            },
            "continent": "Asia"
        },
        "23": {
            "bible_portion": [
                "Leviticus 25:15-26:28",
                "Mark 6:22-43"
            ],
            "district": "Kanchipuram",
            "state": "Kerala",
            "country": {
                "name": "Kenya",
                "capital": "Nairobi"
            },
            "continent": "Australia"
        },
        "24": {
            "bible_portion": [
                "Leviticus 26:29-Numbers 1:16",
                "Mark 6:44-7:11"
            ],
            "district": "Kanyakumari",
            "state": "Madhya Pradesh",
            "country": {
                "name": "Kiribati",
                "capital": "Tarawa"
            },
            "continent": "Europe"
        },
        "25": {
            "bible_portion": [
                "Numbers 1:17-3:5",
                "Mark 7:12-36"
            ],
            "district": "Karur",
            "state": "Maharashtra",
            "country": {
                "name": "North Korea",
                "capital": "Pyongyang"
            },
            "continent": "North America"
        },
        "26": {
            "bible_portion": [
                "Numbers 3:6-4:26",
                "Mark 7:37-8:24"
            ],
            "district": "Krishnagiri",
            "state": "Manipur",
            "country": {
                "name": "South Korea",
                "capital": "Seoul"
            },
            "continent": "South America"
        },
        "27": {
            "bible_portion": [
                "Numbers 4:27-6:12",
                "Mark 8:25-9:7"
            ],
            "district": "Madurai",
            "state": "Meghalaya",
            "country": {
                "name": "Kosovo",
                "capital": "Pristina"
            },
            "continent": "Africa"
        },
        "28": {
            "bible_portion": [
                "Numbers 6:13-7:58",
                "Mark 9:8-31"
            ],
            "district": "Nagapattinam",
            "state": "Mizoram",
            "country": {
                "name": "Kuwait",
                "capital": "Kuwait City"
            },
            "continent": "Antarctica"
        },
        "29": {
            "bible_portion": "march",
            "district": "Namakkal",
            "state": "Nagaland",
            "country": {
                "name": "Kyrgyzstan",
                "capital": "Bishkek"
            },
            "continent": "Asia"
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

