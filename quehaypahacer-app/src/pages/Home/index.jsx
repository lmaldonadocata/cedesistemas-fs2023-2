import { Layout } from "../../components/Layout"
import { Topbar } from "../../components/Topbar"
import { Categories } from "./components/Categories"
import { TopEvents } from "./components/TopEvents"



export const Home = () => {

  return (
    <Layout>
      <Categories />
      <TopEvents />
    </Layout>
  )
}
