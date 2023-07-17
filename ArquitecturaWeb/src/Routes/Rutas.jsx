import { Route, Routes } from "react-router-dom"

import {Menu} from '../Componentes/Menu/Menu';
import {Home} from '../Componentes/Home/Home'
import {About} from '../Componentes/About/About'
import {Servicios} from '../Componentes/Servicios/Servicios'
import {Proyectos} from '../Componentes/Proyect/Proyectos'
import {Contact} from '../Componentes/Contacto/Contact'
import {Footer} from '../Componentes/Footer/Footer'



export function Rutas(){
    return(
        <>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Proyectos" element={<Proyectos />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>

        </>

    )
}