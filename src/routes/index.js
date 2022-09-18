import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import  Header  from "../templates/Header";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {
    '/' : Home,
    '/:id' : Character,
    '/Contact' : 'contact',
}

const router = async () => {
   const header = null || document.querySelector('#header');
    const content = null || document.querySelector('#con');
  
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

  };
  
  export default router;