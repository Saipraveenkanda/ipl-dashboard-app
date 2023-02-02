import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedData

  return (
    <div className="latest-match-card">
      <div className="card1">
        <div className="left-card">
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="middle-card">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
      </div>
      <hr className="separator-line" />
      <div className="right-card">
        <p className="card-title">First Innings</p>
        <p className="value">{firstInnings}</p>
        <p className="card-title">Second Innings</p>
        <p className="value">{secondInnings}</p>
        <p className="card-title">Man of The Match</p>
        <p className="value">{manOfTheMatch}</p>
        <p className="card-title">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch

/* CARD1 LEFT
CompetingTeam
Date
Venue
Result
/*
// Competing Team Logo CARD2 MIDDLE
/* CARD3 RIGHT
First Innings
    name
Second Innings
    name
Man Of The Match
    name
Umpires
    names
*/
/*
    "umpires": "CB Gaffaney, VK Sharma",
    "result": "Kolkata Knight Riders Won by 7 wickets",
    "man_of_the_match": "Shubman Gill",
    "id": "1216545",
    "date": "2020-09-26",
    "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
    "competing_team": "Sunrisers Hyderabad",
    "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    "first_innings": "Sunrisers Hyderabad",
    "second_innings": "Kolkata Knight Riders",
    "match_status": "Won", */
