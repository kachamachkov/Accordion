import data from './data';
import { useState } from 'react';

const Accordion = () => {

	const [selected, setSelected] = useState(null);

	const handleQuestionClick = (questionId) => {
		setSelected(questionId);
	};

	return (
		<div>
			{
				data && data.length > 0 ?
					data.map(item =>
						<div key={item.id}>
							<h2 onClick={() => handleQuestionClick(item.id)}>{item.question}</h2>
							<span onClick={() => handleQuestionClick(item.id)}>+</span>
							<div>
								{selected === item.id ?
									item.answer
									: null
								}
							</div>
						</div>
					)
					:
					<div>No data found!</div>
			}
		</div>
	);
};
export default Accordion;
