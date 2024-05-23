import {NavLink} from "react-router-dom";

const Navbar =() => {
    return (
        <div>
           <header className="header">
               <NavLink to="/" className="w-10 h-10 rounded-lg bg-amber-100 items-center justify-center flex font-bold shadow-md">
                   <p className="blue-gradient_text">Shreya</p>
               </NavLink>
               <nav className="flex text-lg gap-7 font-medium">
                   <NavLink to="/about" className={({isActive})=> isActive?'text-blue-500':'text-black-500'}>About</NavLink>
               </nav>
               <nav className="flex text-lg gap-7 font-medium">
                   <NavLink to="/Projects" className={({isActive})=> isActive?'text-blue-500':'text-black-500'}>Projects</NavLink>
               </nav>
           </header>
        </div>
    )
}
export default Navbar;
