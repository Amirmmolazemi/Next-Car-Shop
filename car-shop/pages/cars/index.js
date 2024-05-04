import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default Details;
