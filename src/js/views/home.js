import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		< div className="container text-center mt-5" >
			<h1>Start Wars</h1>
			<div className="row">
				<h2>Characters</h2>
				<div className="d-flex custom-card">{
					store.characters.map(character => {
						return (
							<div className="col-md-4 col-lg-3">
								<div className="card">
									<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{character.name}</h5>
										<div className="button-group">
											<Link to={`/characters/${character.uid}`}>
												<button className="btn btn-dark">More details</button>
											</Link>
											<button className="btn btn-dark" onClick={() => actions.addFavorite(character.name)}>
												<i className="fa-solid fa-heart"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					})


				}
				</div>

				<h2>Vehicles</h2>
				<div className="d-flex custom-card">{
					store.vehicles.map(vehicle => {
						return (
							<div className="col-md-4 col-lg-3">
								<div className="card">
									<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{vehicle.name}</h5>
										<div className="button-group">
											<Link to={`/vehicles/${vehicle.uid}`}>
												<button className="btn btn-dark">More details</button>
											</Link>
											<button className="btn btn-dark" onClick={() => actions.addFavorite(vehicle.name)}><i className="fa-solid fa-heart"></i></button>
										</div>
									</div>
								</div>
							</div>
						)
					})

				}

				</div>

				<h2>Planets</h2>
				<div className="d-flex custom-card">{
					store.planets.map(planet => {
						return (
							<div className="col-md-4 col-lg-3">
								<div className="card">
									<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<div className="button-group">
											<Link to={`/planets/${planet.uid}`}>
												<button className="btn btn-dark">More details</button>
											</Link>
											<button className="btn btn-dark" onClick={() => actions.addFavorite(planet.name)}><i className="fa-solid fa-heart"></i></button>
										</div>
									</div>
								</div>
							</div>
						)
					})

				}

				</div>
			</div>
		</div>
	)
};
