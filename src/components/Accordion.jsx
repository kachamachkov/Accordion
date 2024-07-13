import data from './data';
import { useState } from 'react';

const Accordion = () => {

	const [selected, setSelected] = useState(null);

	return (
		<div>
			{
				data && data.length > 0 ?
					data.map(item =>
						<div key={item.id}>
							<h2 >{item.question}</h2>
							<span>+</span>
						</div>
					)
					:
					<div>No data found!</div>
			}
		</div>
	);
};
export default Accordion;
