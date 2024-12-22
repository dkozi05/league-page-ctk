/*   STEP 1   */
export const leagueID = "1126748650488594432"; // your league ID
export const leagueName = "CTK Fantasy Football"; // your league name
export const dues = 15; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2021, the CTK Fantasy Football League (CTKFFL) has evolved into something amazing. The CTKFFL had small beginnings, starting off as a simple idea to create a fantasy football league for fun. After four years, multiple commissoner changes, and even platform changes, this version of the league looks like it will stay for a long time.</p>
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
      "name": "Callum Witter",
      "location": null, // (optional)
      "bio": "Resilience. The one word that perfectly incapsulates what this team is made of. While not always a team filled with elite players, Mahomeless Kids always finds a way to win. Ever since GM / owner Callum Witter started this franchise this team in 2020, a winning culture is all he's known. For every season in the Sleeper-era of the CTKFFL, Witter has brought his team to the playoffs, making multiple semi-final appearances in this time frame. As one of the more elite managers in this league, Witter never fails to impress.",
      "photo": "/managers/IMG_5821.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pag.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
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
      "name": "Dmitri \"Dim\" Koziarz",
      "location": null, // (optional)
      "bio": "<p>Ever since GM / owner Dmitri \"Dim\" Koziarz began his fantasy football career in 2021, he has known nothing but success. Every single season in the Sleeper-era of the CTKFFL, this team has easily made the playoffs. Playoff appearances were not enough for Dim, however. In the 2023-2024 season, his squad managed to win it all, cementing Dim's name in CTKFFL history for eternity.<p> <p>As the new commissioner for the CTKFFL, Dim has completley revamped the league. His only goal as the commish? Have this league survive for the rest of time.",
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
      "name": "Ivan Maltar",
      "location": null, // (optional)
      "bio": "Founded in 2021, The Slow White Boncos has become one of the CTK Fantasy Football League's most prominent teams. Ran by GM / owner Ivan \"The Juice Is Luice\" Maltar, The Slow White Broncos encompasses everything a team in the CTKFFL should have: Competitiveness, intelligence, and consistancy. Since the beginning of the Sleeper-era, The Slow White Broncos have not missed the playoffs, staying as one of the most consistent teams in the League.",
      "photo": "/managers/Bronco_chase.webp", // square ratio recommended (no larger than 500x500)
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
      "name": "JP \"Jap\" Correia",
      "location": null, // (optional)
      "bio": "<p>The Legion of Boom was founded by owner / GM JP \"Jap\" Correia in 2021 as a founding member of the CTKFFL. The Legion of Boom is the epitome of a tenacious spirit, never backing down in the face of adversity and controversy. In 2022, The Legion of Boom came last, cementing their legacy as the winner of the 2022 Toilet Bowl. <p> <p> The 2022 season was highlighted by the league punishment: Cage treatment. Controversially, Jap did not complete the punishment, creating a stain on The Legion of Boom's legacy. However, this incident ushered a new era of punishments in the CTKFFL, issuing refined punishments and contractual obligations starting in the 2024 season. <p> <p> Having yet to make a playoff appearance, Jap is looking to take his team there in the 2024 season. <p>",
      "photo": "/managers/images.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pag.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
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
      "name": "Luka Mikan",
      "location": null, // (optional)
      "bio": "Founded in 2021, owner / GM Luka Mikan has been an integral member of the CTKFFL from the start. In the pre-Sleeper era, Mikan took home the FIRST EVER championship for the CTKFFL. Following in his favourite teams footsteps, 2 Gurleys 1 Kupp promptly won the Toilet Bowl in the first season of the Sleeper era. In 2024, Mikan and 2 Gurleys 1 Kupp will try and relive their former glories from the pre-Sleeper era. ",
      "photo": "https://sleepercdn.com/uploads/14df17b380439e65135293600ef56d17.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pag.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
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
      "name": "Josh \"Hervy\" Hervatin",
      "location": null, // (optional)
      "bio": " <p>Founded in 2021, GM / owner Josh \"Hervy\" Hervatin has been a consistent force in the CTKFFL. Since the pre-Sleeper era, Hervy has yet to miss the playoffs, establishing Hervy Franchise as one of the greats in the CTKFFL. While he has yet to win a championship, Hervy is determined to make a strong push for one in the 2024 season. <p> <p>  Hervy has been somewhat of a problamatic manager in the past, mainly due to absurd trade offers he has made to other members of the league. At its peak, Hervy's problamatic tendancies caused the commissioner of the time (Nathan Currah) to threaten disciplinary actions against him. Thanks to this intervention, Hervy's tendancies to cause issues to the league have greatly diminished. <p>",
      "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
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
      "name": "Allen \"Seppi\" Hawa",
      "location": null, // (optional)
      "bio": "Osama Bin Madden and Coach/GM Allen \"Seppi\" Hawa have been a constant presence in the CTKFFL. Since 2021, Osama Bin Madden has endured tribulation and hardships since the pre-Sleeper era. After three seasons, multiple years in the losers bracket, and even a Toliet Bowl Finals appearance, Seppi and his team look to make their first playoff appearance in the 2024 season.",
      "photo": "https://sleepercdn.com/uploads/6ef6d229ada78d8749c6a3d6bc71b225.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "CTK Fantasy Football League", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "badge.png", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "From rags to riches.",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
      "managerID": "864663368294891520",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Massimo Scorcia",
      "location": null, // (optional)
      "bio": "Founded in 2021 (and rebranded in 2024), The Golden Fan Club has an extensive history of success. Ran by GM / owner Massimo Scorcia, his squad of players have managed to make the playoffs every single season in the Sleeper-era. After a string of failure early in the 2024 season, Massimo had rebranded to The Golden Fan Club, hoping this would revitalize his team. With this rebrand, Massimo looks forward to finally appearing in a championship game in 2024.",
      "photo": "https://sleepercdn.com/uploads/d4581da4bff09e85eaaa56b93205441a.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pag.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
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
      "name": "Adriano Paganelli",
      "location": null, // (optional)
      "bio": "Founded in 2021, GM / owner Adriano Paganelli has yet to make a name for himself in the CTKFFL. However, just because the history for this franchise is thin, it does not mean Adriano is a bad manager. He has never made a Toilet Bowl appearance, even in the pre-Sleeper era. This league is young. Adriano will eventually carve out his own name in the history books of teh CTKFFL, aiming to win his very first championship. In 2024, he will continue to try and build his team to an elite level. His potential is limitless.",
      "photo": "/managers/pag.jpeg", // square ratio recommended (no larger than 500x500)
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
      "name": "Nathan Currah",
      "location": null, // (optional)
      "bio": "Founded in 2021, owner / GM Nathan Currah has helped shaped the CTKFFL to what it is today. Nathan played an important role in the evolution of this league. As commissioner, he moved the CTKFFL to Sleeper, ushering in the Sleeper era of the league, and paved the way to what this league is today. After some (undeserved) controversies, Nathan was outed as commissioner. From a pure fantasy football perspective, Nathan has been incredible, taking home th FIRST CTKFFL championship in the Sleeper era of the league. After a strong start to the 2024 season, Nathan will try to bring home another chip for Any Given Sun God.",
      "photo": "/managers/nat.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantas football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Dak me off", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/pag.jpeg", // either a specific manager photo or IMG_5821.jpeg or '/managers/question.png'
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
    
