import Filters from "@/components/customs/filters";
import FoodItems from "@/components/customs/fooditems";
import Packages from "@/components/customs/packages";
import Services from "@/components/customs/services";


export default function Home() {
  return (
    <section className="min-h-screen">
      <Filters
        className="w-full max-w-full  bg-slate-800 text-extraSmall"
      /> 
      <FoodItems
      />
      <div className="md:flex md:items-start ">

        <Packages
          className="mt-20 "
          />
        <Services
      />
      </div>
    </section>
  )
}
