import { useState } from 'react';
import data from './data';

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId);
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={() =>
                                    handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ? (
                                <div className="content">
                                    {dataItem.answer}{' '}
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}
