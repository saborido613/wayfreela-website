import { createBrowserRouter } from "react-router-dom";
import Path from "./paths";
import Home from "../Components/Home/Home";
import PoliticaPrivacidade from "../Components/PoliticaPrivacidade/PoliticaPrivacidade";
import TermosCondicoes from "../Components/TermosCondicoes/TermosCondicoes";

const router = createBrowserRouter([
    {
      path: Path.POLITICA_PRIVACIDADE,
      element: <PoliticaPrivacidade />
    },
    {
      path: Path.TERMOS_E_CONDICOES,
      element: <TermosCondicoes />,
    },
    {
      path: Path.HOME,
      element: <Home />
    }
      
  ])
  
  export default router;