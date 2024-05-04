import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <>
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default Details;
