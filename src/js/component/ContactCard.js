import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const [state, setState] = useState({
		full_name: "",
		email: "",
		agenda_slug: "ojedamartisof",
		phone: "",
		address: ""
	});
	const [modify, setModify] = useState(false);

	const { store, actions } = useContext(Context);

	const handleInput = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return store.agendaData.map((el, i) => {
		return (
			<li key={"key-" + i} className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src={`data:image/jpeg;base64,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`}
							alt={el.full_name}
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<i
								className="fas fa-pencil-alt cursor-pointer"
								onClick={e => {
									actions.defineID(el.id);
									if (!modify) {
										setModify(true);
										setState({
											full_name: el.full_name,
											email: el.email,
											agenda_slug: "ojedamartisof",
											phone: el.phone,
											address: el.address
										});
									} else {
										setModify(false);
									}
								}}
							/>

							<i
								className="fas fa-trash-alt btn"
								onClick={e => {
									props.onDelete();
									actions.defineID(el.id);
								}}
							/>
						</div>
						<label className="name lead">
							{modify && store.currentID == el.id ? (
								<input type="text" value={state.full_name} name="full_name" onChange={handleInput} />
							) : (
								el.full_name
							)}
						</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">
							{modify && store.currentID == el.id ? (
								<input value={state.address} name="address" onChange={handleInput} />
							) : (
								el.address
							)}
						</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">
							{modify && store.currentID == el.id ? (
								<input value={state.phone} name="phone" onChange={handleInput} />
							) : (
								el.phone
							)}
						</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">
							{modify && store.currentID == el.id ? (
								<input value={state.email} name="email" onChange={handleInput} />
							) : (
								el.email
							)}
						</span>
						{modify && store.currentID == el.id && (
							<button
								className="d-block mt-3 ml-5 btn btn-success"
								onClick={() => {
									actions.modifyContact(el.id, state);
									actions.modifyData(i, state);
									setModify(false);
								}}>
								Guardar cambios
							</button>
						)}
					</div>
				</div>
			</li>
		);
	});
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
