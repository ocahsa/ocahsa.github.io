

fetch("https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/GDHeXhAlQqscEyo_E6Jphv7Oiy0z8v88jxG4t9rj82b8Muk?api_key=RGAPI-bf1e6d69-7122-454b-bc39-9b2a04558f0b", {
    mode: "no-cors"
}).then((response) => response).then((responseBody) => console.log(responseBody));