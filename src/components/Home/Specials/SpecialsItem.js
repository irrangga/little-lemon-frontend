const SpecialsItem = ({ image, name, price }) => {
  return (
    <li className="HomeSpecialsItem">
      <img src={image} alt={name} />
      <div>
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </li>
  )
}

export default SpecialsItem