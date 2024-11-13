import BrandStrap from "../components/BrandStrap"
import BrowseStyle from "../components/BrowseStyle"
import Hero from "../components/Hero"
import HomeProducts from "../components/HomeProducts"

function HomePage() {
  return (
    <div className="">
      <Hero />
      <BrandStrap />
      <HomeProducts title={'New Arrivals'}/>
      <HomeProducts title={'Top Selling'}/>
      <BrowseStyle />
    </div>
  )
}

export default HomePage