import { CarouselView } from "@/components/customs/carouselview";
import Filters from "@/components/customs/filters";
import FoodItems from "@/components/customs/fooditems";
import Footer from "@/components/customs/footer";
import Packages from "@/components/customs/packages";
import Services from "@/components/customs/services";


export default function Home() {
  return (
    <section className="min-h-screen">
      <Filters
        className="w-full max-w-full  bg-secondaryColor text-extraSmall"
      /> 
      <CarouselView/>
      <FoodItems
      />
      <div className="md:flex  items-start p-2 gap-4 ">
        <Packages
          className="mt-10 "
          />
        <Services
      />
      </div>
      <Footer/>
    </section>
  )
}
