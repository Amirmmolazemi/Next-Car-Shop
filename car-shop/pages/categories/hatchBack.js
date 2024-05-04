import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";

function HatchBack() {
  const hatchBackCars = carsData.filter((car) => car.category == "hatchback");
  return <CarList data={hatchBackCars} />;
}

export default HatchBack;
