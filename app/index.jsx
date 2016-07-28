'use strict';

import './styles/bootstrap.less';
import './styles/main.scss'

import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

const Home = React.createClass({
	render() {
		return (
			<h1>Hello react!</h1>
		);
	}
});

const App = React.createClass({
	render() {
		return (
			<div>
				<Navbar inverse fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">台大電機課程地圖</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem href="#">首頁</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div className="container" id="page">

					{this.props.children}

				</div>
			</div>
		);
	}
});

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
), document.body);