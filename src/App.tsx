import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Careers from "./pages/Careers";
import GetAQuote from "./pages/GetAQuote";
import Home from "./pages/Home";
import LetsTalk from "./pages/LetsTalks";
import Process from "./pages/Process";
import Promises from "./pages/Promises";
import Solutions from "./pages/Solutions";
import BusinessAutomation from "./pages/solutions/BusinessAutomation";
import MobileApps from "./pages/solutions/MobileApps";
import WebApps from "./pages/solutions/WebApps";

const App = () => (
	<>
		<Nav />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/solutions" element={<Solutions />} />
			<Route path="/solutions/business_automation/" element={<BusinessAutomation />} />
			<Route path="/solutions/web_applications/" element={<WebApps />} />
			<Route path="/solutions/mobile_applications/" element={<MobileApps />} />

			<Route path="/about" element={<About />} />
			<Route path="/promises" element={<Promises />} />
			<Route path="/careers/*" element={<Careers />} />

			<Route path="/process" element={<Process />} />
			<Route path="/letstalk" element={<LetsTalk />} />
			<Route path="/get_a_quote" element={<GetAQuote />} />
		</Routes>
	</>
);

export default App;
