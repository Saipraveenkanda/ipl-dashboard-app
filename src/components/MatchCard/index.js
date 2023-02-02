import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const updatedDetail = {
    competingTeam: matchDetail.competing_team,
    competingTeamLogo: matchDetail.competing_team_logo,
    result: matchDetail.result,
    matchStatus: matchDetail.match_status,
  }
  const {competingTeamLogo, competingTeam, result, matchStatus} = updatedDetail

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="opponent-logo"
      />
      <p className="opponent-heading">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={`status ${matchStatus.toLowerCase()}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

/*
competing_team
: 
"Sunrisers Hyderabad"
competing_team_logo
: 
"https://assets.ccbp.in/frontend/react-js/srh-logo-img.png"
date
: 
"2020-10-08"
first_innings
: 
"Sunrisers Hyderabad"
id
: 
"1216542"
man_of_the_match
: 
"JM Bairstow"
match_status
: 
"Lost"
result
: 
"Sunrisers Hyderabad Won by 69 runs"
second_innings
: 
"Kings XI Punjab"
umpires
: 
"AK Chaudhary, Nitin Menon"
venue
: 
"At Dubai International Cricket Stadium, Dubai"

*/
