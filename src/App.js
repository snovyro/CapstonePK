import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AuthModal from '@components/AuthModal/AuthModal';

import { Switch, Route, Redirect } from 'react-router-dom';
import Stunting from '@components/Content/Stunting/Stunting';
import NewsList from '@components/Content/News/NewsList';
import GiziList from '@components/Content/Gizi/GiziList';
import NotFound from '@pages/NotFound/NotFound';
import MpasiList from '@components/Content/Mpasi/MpasiList';
import Home from '@pages/Home/Home';
import About from './pages/About/About.tsx';
import { TemplateDetailNews } from './components/Templates/TemplateDetailNews';
import { TemplateDetailGizi } from './components/Templates/TemplateDetailGizi';
import { TemplateDetailMpasi } from './components/Templates/TemplateDetailMpasi';

function App() {
	const [LoginIsShown, setLoginIsShown] = useState(false);

	const showLoginForm = () => {
		setLoginIsShown(true);
	};

	const hideLoginHandler = () => {
		setLoginIsShown(false);
	};

	return (
		<div>
			<div className="xl:hidden flex h-screen">
				<h1 className="m-auto self-center">
					Harap buka dalam versi desktop.
				</h1>
			</div>
			<div className="xl:block hidden">
				{LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
				<Header onShowLoginForm={showLoginForm} />
				<Switch>
					<Route path="/" exact>
						<Redirect to="/home" />
					</Route>
					<Route path="/home" exact>
						<Home />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/stunting">
						<Stunting />
					</Route>
					<Route path="/berita" exact>
						<NewsList />
					</Route>
					<Route path="/berita/:id">
						<TemplateDetailNews />
					</Route>
					<Route path="/gizi" exact>
						<GiziList />
					</Route>
					<Route path="/gizi/:id">
						<TemplateDetailGizi />
					</Route>
					<Route path="/mpasi" exact>
						<MpasiList />
					</Route>
					<Route path="/mpasi/:id">
						<TemplateDetailMpasi />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
