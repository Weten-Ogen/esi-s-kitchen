import Filters from "@/components/customs/filters";
import FoodItems from "@/components/customs/fooditems";
import Footer from "@/components/customs/footer";
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
      <div className="md:flex md:flex-row-reverse items-start ">

        <Packages
          className="mt-20 "
          />
        <Services
      />
      </div>
      <Footer/>
    </section>
  )
}
