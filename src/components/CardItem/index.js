// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {technologyDetails} = props
  const {title, description, imgUrl, className} = technologyDetails
  const containerClassName = `technology-container ${className}`

  return (
    <li className={containerClassName}>
      <h1 className="title">{title}</h1>
      <p className="description-para">{description}</p>
      <img src={imgUrl} className="image" alt="title" />
    </li>
  )
}

export default TechnologyCards
