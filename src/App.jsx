import { BrowserRouter } from "react-router-dom";
import * as Components from "components";

export default function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Components.Navbar />
                    <Components.Hero />
                </div>
                <Components.About />
                <Components.Experience />
                <Components.Tech />
                <Components.Works />
                <Components.Feedbacks />
                <div className="relative z-0">
                    <Components.Contact />
                    <Components.StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}
