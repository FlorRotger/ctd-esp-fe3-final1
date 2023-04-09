import Home from '../Routes/Home';
import Favs from "../Routes/Favs";
import Detail from "../Routes/Detail";
import Contact from "../Routes/Contact";
import Login from "../Routes/Login"

export const routes = [
    {
        id: 1,
        path: '/home',
        Component: Home
    },
    {
        id: 2,
        path: '/favs',
        Component: Favs
    },
    {
        id: 3,
        path: '/dentist/:id',//ruta dinamica
        Component: Detail
    },
    {
        id: 4,
        path: '/contact',
        Component: Contact
    }
];


export {Login};

