import { useState } from "react";
import data from "./data";

const Accordion = () => {

	const [selected, setSelected] = useState(null);

	function handleSingleSelection(getCurrentId) {
		// set clicked title ID to selected
		// add click switching
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}

	return (
		<div className="wrapper">
			<div className="accordion">
				{
					data && data.length > 0 ?
						data.map(dataItem =>
							<div className="item" key={dataItem.id}>
								<div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
									<h3>{dataItem.question}</h3>
									<span>+</span>
								</div>
								{
									selected === dataItem.id ?
										(<div className="content"> {dataItem.answer} </div>)
										: null
								}
							</div>)
						: <div>No data found!</div>

				}
			</div>
		</div>
	);
};
export default Accordion;