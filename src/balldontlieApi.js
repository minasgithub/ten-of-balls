const getPlayers = () => {
    return fetch(`https://www.balldontlie.io/api/v1/players`, {
        headers: {
            'Cache-Control': 'max-age=7200'
        },
    })
        .then((response) => response.json())
        .then((response) => {
            const players = [];
            response.data.forEach((p) => {
                players.push({
                    name: `${p.first_name} ${p.last_name}`, team_full_name: p.team.full_name, 
                    team_name: p.team.name, position: p.position, abbr: p.team.abbreviation, city: p.team.city,
                    conference: p.team.conference
                });
            });
        return players;
    });
}

const getTeams = () => {
    return fetch(`https://www.balldontlie.io/api/v1/teams`)
        .then((response) => response.json())
        .then((response) => {
            const teams = [];
            response.data.forEach((t) => {
                teams.push({
                    full_name: t.full_name, name: t.name, abbr: t.abbreviation, city: t.city, conference: t.conference
                });
            });
        return teams;
    });
}

export { getPlayers, getTeams };