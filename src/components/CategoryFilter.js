import React, { useState } from "react";

function CategoryFilter({ categories, setTasks, TASKS }) {

  const [selected, setSelected] = useState("")
  

  function handleClick (event) {
    setTasks(TASKS);
    setSelected(event.target.id);
    if (event.target.id === "All") {
      setTasks={TASKS};
    }
    else {
      setTasks(TASKS.filter((task) => {
        if (task.category === event.target.id) return true;
        else return false;
      }))
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category) => {
          if (selected === category) {
            return (<button id={category} className="selected"
           onClick={handleClick}
            key={category}>
              {category}
                </button>)
          }
          else {
            return (<button id={category} className=""
           onClick={handleClick}
            key={category}>
              {category}
                </button>)
          }
        })
      }
    </div>
  );
}

export default CategoryFilter;
