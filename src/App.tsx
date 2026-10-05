import { Hero } from "./pages/Hero/Hero"
import { Home } from "./pages/Home/Home"

const App = () => {
  return (

    <>
      <Home />
      <div className="w-90 mx-auto">
        <Hero />
      </div>
    </>

  )
}
export { App }