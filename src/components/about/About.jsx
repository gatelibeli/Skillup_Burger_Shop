import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/dogechef.jpeg";
const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>Doge Shop</h4>
                    <p>
                        This is Doge Shop. The place for most tasty burgers on the
                        enitre earth.
                    </p>
                    <p>
                        Explore the various type of food and burgers. Click below to see the
                        menu
                    </p>
                    <Link to="/">
                        <RiFindReplaceLine />
                    </Link>
                </article>
                <div>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Doge</h3>
                        </div>
                        <p>
                            I am Doge, the founder of Burger Shop. Affiliated to
                            Doge Taste...
                        </p>
                    </article>
                </div>
            </main>
        </section>
    );
};
export default About;
