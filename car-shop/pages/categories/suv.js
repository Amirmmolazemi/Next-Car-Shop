import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";

function Suv() {
  const suvCars = carsData.filter((car) => car.category == "suv");
  return <CarList data={suvCars} />;
}

export default Suv;
