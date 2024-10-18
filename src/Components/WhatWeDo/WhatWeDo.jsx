import "./WhatWeDo.scss"

function WhatWeDo() {
    return(
        <section className="Services">
            <h2 className="Services__heading">Plumbing Services We Offer...</h2>
            <div className="Services__container">
                <div className="Services__container-card">
                    <div className="Services__container-img">
                        <img className="Services__icon"  src="src/assets/icons/icons8-plumbing-100.png" alt="" />
                    </div>
                    <div className="Services__content">
                        <div className="Services__container-action">
                        <h3 className="Services__action">General Plumbing:</h3>
                        </div>
                        <div className="Services__outlined">
                        <p className="Services__service">• Water Heaters</p>
                        <p className="Services__service">• Faucets & Sinks</p>
                        <p className="Services__service">• Tubs & Showers</p>
                        <p className="Services__service">• Water Treatment</p>
                        <p className="Services__service">• Drains</p>
                        <p className="Services__service">• Pipe Replacement</p>
                        <p className="Services__service">• Leak Repairs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo