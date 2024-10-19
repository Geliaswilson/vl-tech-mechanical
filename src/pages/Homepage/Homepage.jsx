import './Homepage.scss';
import HomepageHero from "../../Components/HomepageHero/HomepageHero";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
const Homepage = () => {
    return (
        <>
        <main className="homepage">
        <HomepageHero />
        <WhatWeDo />
        </main>
        </>
    )
}
export default Homepage;