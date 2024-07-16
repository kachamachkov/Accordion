import { useState } from "react";
import data from "./data";
import './styles.css';

const Accordion = () => {

  const [selected, setSelected] = useState(null);

  const handleTitleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {
          data && data.length > 0 ? data.map(dataItem =>
            <div className="item" key={dataItem.id}>
              <h3 className="title" onClick={() => handleTitleClick(dataItem.id)}>{dataItem.question}</h3>
              <span onClick={() => handleTitleClick(dataItem.id)}>+</span>
              {
                selected === dataItem.id ?
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