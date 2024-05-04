import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const priceFilterCars = carsData.filter(
    (car) => car.price > min && car.price < max
  );
  console.log(priceFilterCars);
  if (!priceFilterCars.length) return <h3>Not Found</h3>;
  return <CarList data={priceFilterCars} />;
}

export default FilteredCars;
