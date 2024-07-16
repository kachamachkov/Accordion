import { useState } from "react";
import data from "./data";

const Accordion = () => {

	const [selected, setSelected] = useState(null);

	const handleClick = (id) => {

		setSelect(true);
	};

	return (
		<div className="wrapper">
			<div className="accordion">
				{
					data && data.length > 0 ?
						data.map(dataItem =>
							<div className="item" key={dataItem.id}>
								<div className="title">
									<h3>{dataItem.question}</h3>
									<span>+</span>
								</div>
							</div>)
						: <div>No data found!</div>

				}
			</div>
		</div>
	);
};
export default Accordion;