import { useState } from "react";
import data from "./data";
import './styles.css';

const Accordion = () => {

  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelect = (id) => {
    let copyMultiple = [...multiple];

    const indexOfQuestion = copyMultiple.indexOf(id);

    if (indexOfQuestion == -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(indexOfQuestion, 1);

    }
    setMultiple(copyMultiple);
  };

  return (

    <div className="wrapper">
      <button onClick={() => setMultiSelect(!multiSelect)}>Toggle Multi Selection - {multiSelect ? 'On' : 'Off'}</button>
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map(dataItem =>
              <div className="item" key={dataItem.id}>
                <div className="title">{dataItem.question}</div>
                <span onClick={multiSelect ?
                  () => handleMultiSelect(dataItem.id) :
                  () => handleSingleSelect(dataItem.id)}>+</span>

                {
                  selected === dataItem.id || multiple.indexOf(dataItem.id) ?
                    <div>{dataItem.answer}</div> :
                    null
                }
              </div>
            ) :
            <div> No data found! </div>
        }
      </div>
    </div>
  );
};
export default Accordion;