import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {

    console.log(isAuthenticated)
    return (
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <Link to='/'><IoFastFoodOutline /></Link>
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                {isAuthenticated &&
                    <Link to="/cart">
                        <FiShoppingCart />
                    </Link>
                }
                <DropdownMenu isAuthenticated={isAuthenticated} />
            </div>
        </nav>
    );
};
export default Header;