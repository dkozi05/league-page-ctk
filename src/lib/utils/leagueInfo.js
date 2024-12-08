/*   STEP 1   */
export const leagueID = "1126748650488594432"; // your league ID
export const leagueName = "CTK Fantasy Football"; // your league name
export const dues = 15; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2020, the CTK Fantasy Football League (CTKFFL) has evolved into something amazing. The CTKFFL had small beginnings, starting off as a simple idea to create a fantasy football league for fun. After four years, multiple commissoner changes, and even platform changes, this version of the league looks like it will stay for a long time.</p>
  <p>In the span of these last few years, every manager in this league has shown massive improvements to their football IQ, management skills, and even negotiation tactics (well, some of us at least for that last point.)</p>
  <p>While we've had some controversies in the past, the issues we had encountered were too weak to break the core of this league. The passion the managers have in this league are completley unmatched, where you could not find another group of people as resilient as us.</p>
  <p>As we go into the future, one constant will always remain. Every manager in the CTKFFL has all but two goals. Win the Nathan Currah Legacy Trophy, and avoid winning the Toilet Bowl. With the growth of each manager seeming to be exponential, each year will become increasingly difficult to pull away with a championship.</p>
  <p>Let us keep this league going on for as long as possible, everyone.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "862899044702347264",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Mahomeless Kids",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win. Ever since GM / Owner Callum Witter started this franchise this team in 2020, a winning culture is all he's known. For every season in the Sleeper-era of the CTKFFL, Witter has brought his team to the playoffs, making multiple semi-final appearances in this time frame. As one of the more elite managers in this league, Witter never fails to impress.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
     "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //"valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "null",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

  {
      "managerID": "862895123120377856",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Caleb's Pride Parade",
      "location": null, // (optional)
      "bio": "<p>Ever since GM / Owner Dmitri \"Dim\" Koziarz began his fantasy football career in 2020, he has known nothing but success. Every single season in the Sleeper-era of the CTKFFL, this team has easily made the playoffs. Playoff appearances were not enough for Dim, however. In the 2023-2024 season, his squad managed to win it all, cementing Dim's name in CTKFFL history for eternity.<p> <p>As the new commissioner for the CTKFFL, Dim has completley revamped the league. His only goal as the commish? Have this league survive for the rest of time.",
      "photo": "https://sleepercdn.com/uploads/c0869e1e864a84d0f58b0a0a9dd8d861.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "null (for now)", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 8137, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Next man up.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

  {
      "managerID": "862915446406533120",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "The Slow White Broncos",
      "location": null, // (optional)
      "bio": "Founded in 2020, The Slow White Boncos has become one of the CTK Fantasy Football League's most prominent teams. Ran by Gm / Owner Ivan \"The Juice Is Luice\" Maltar, The Slow White Broncos encompasses everything a team in the CTKFFL should have: Competitiveness, intelligence, and consistancy. Since the beginning of the Sleeper-era, The Slow White Broncos have not missed the playoffs, staying as one of the most consistent teams in the League.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "null (for now)", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It didn't fit.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "862895569268502528",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "The Legion of Boom",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 9226, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Monk",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864636578381848576",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "2 Gurleys 1 Kupp",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "https://sleepercdn.com/uploads/14df17b380439e65135293600ef56d17.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 2216, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Generational burn out",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864638123248836608",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Hervy Franchise",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Witter", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 3321, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Hervy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864661973332246528",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Osama Bin Madden",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "https://sleepercdn.com/uploads/6ef6d229ada78d8749c6a3d6bc71b225.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "CTK Fantasy Football League", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I'm about to blow up",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864663368294891520",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "The Golden Fan Club",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "https://sleepercdn.com/uploads/d4581da4bff09e85eaaa56b93205441a.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Don't lose out",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864690150280675328",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Dak me off",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Mahomeless Kids", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "1126373470918660096",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Any Given Sun God",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_5821.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Akron Volleyball Team",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
