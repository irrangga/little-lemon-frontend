import GreekSaladImage from "../../../images/greek salad.jpg";
import BruchettaImage from "../../../images/bruchetta.svg";
import LemonDessertImage from "../../../images/lemon dessert.jpg";
import SpecialsItem from "./SpecialsItem";

const SpecialsMenu = () => {
  const specials = [
    {
      image: GreekSaladImage,
      name: "Greek Salad",
      price: "$12.99"
    },
    {
      image: BruchettaImage,
      name: "Bruchetta",
      price: "$5.99"
    },
    {
      image: LemonDessertImage,
      name: "Lemon Dessert",
      price: "$5.00"
    }
  ]

  return (
    <ul className="HomeSpecialsMenu">
      {specials.map((item, index) => (
        <SpecialsItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </ul>
  )
}

export default SpecialsMenu