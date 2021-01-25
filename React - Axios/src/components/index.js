import HomeComp from "./Home"
import BlogComp from "./Blog"
import HakkimizdaComp from "./Hakkimizda"
import ButtonComp from "./Button"
import HeaderComp from "./Header"

export const Home = () => <HomeComp />
export const Blog = () => <BlogComp />
export const Hakkimizda = () => <HakkimizdaComp />
export const Button = () => <ButtonComp />
export const Header = ({links}) => <HeaderComp links={links} />