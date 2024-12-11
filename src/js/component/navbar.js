import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div class="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favorite) => (


								<li style={{ marginTop: "10px" }}>{favorite}
									<button className="nav-button" onClick={() => actions.removeFavorite(favorite)} >
										<i class="fa-thin fa-x"></i>
									</button>
								</li>

							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
