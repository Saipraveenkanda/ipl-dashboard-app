import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-list-item">
      <Link className="link-style" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name-heading">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
