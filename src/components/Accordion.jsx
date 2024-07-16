import { useState } from "react";
import data from "./data";
import './styles.css';

const Accordion = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };

  console.log(selected, multiple);


  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {
          data && data.length > 0 ? data.map(dataItem =>
            <div className="item" key={dataItem.id}>
              <h3 className="title" onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)}>{dataItem.question}</h3>
              <span onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)}>+</span>
              {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                  (<div className="content">{dataItem.answer}</div>)
                  : null
              }
            </div>
          ) : <div>No data found</div>
        }

      </div>
    </div>
  );

};
export default Accordion;