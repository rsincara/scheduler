import Header from "./components/header";
import Main from "./components/main";
import {useEffect} from "react";
import backgroundArmy from './static/army background.jpg';
const App = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url('${backgroundArmy}')`
    })

    return (
        <>
            <Header/>
            <Main/>
        </>
    );
}

export default App;
