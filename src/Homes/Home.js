import React from "react"
import Perform from "../PerformCount/Perform"
import "./Home.css"
function Home() {
    return (
        <div className="home__page">
            <div className="image__page">
                <p className="tittle">Health & Beauty Bodycare Sol DE janeiro Bum cream</p> 
                 <img className="main__image"
                    src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg"
                    alt="not found" />
                 <div className="small__image">
                    <img className="image"
                    src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg"
                    alt="not found" />
                    <img className="image"
                    src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg"
                    alt="not found" />
                    <img className="image"
                    src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg"
                    alt="not found" />
                    <img className="image"
                    src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__480.jpg"
                    alt="not found" />
                    </div>
            </div>
            <div className="right__page">
                 <p>Sol De janeiro</p> 
                <h3>Brazillian Bumbum Cream </h3>
                <h3>$68</h3>
                <a href="https://indianexpress.com/article/cities/pune/ice-cream-manufacturers-reel-under-losses-as-demand-sales-plummet-7326210/" 
                target="_blank">return Policy</a>
                <div className="selector"><label>Color</label>
                <select >
                    <option>select color</option>
                    <option>black</option>
                    <option>blue</option>
                </select>
                </div>
                <div className="quality1">
                    <Perform/>
                </div>
                <button className="button__class">Add To Cart</button>
                <div className="last__title">
                    <h3><u>Product Detail</u></h3>
                    <p>A rich yet fast absorbing body Cream with an addiction
                        Vanilla-pistachio scent. loaded with caffeine and antioxidants
                        ,this cream will nourish, firm and import a natural glow to the skin
                    </p>
                    <h5>key Ingredients</h5>
                    <p>Guarana: with five times the caffeine of coffie. Guarana
                        will stimulate circulation, boost energy and smoth skin.
                        capuacu butter: high in fatty-acid this butter will lock
                        in moisture and restore skin elasticity. Coconuts oil: softens ,conditions 
                        nourishes skin
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home;