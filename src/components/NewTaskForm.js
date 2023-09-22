import React, { useState } from "react";

function NewTaskForm({ categories, setTasks, TASKS }) {

  const [formData, setFormData] = useState({
    text: "",
    category: "code"
  });

  function handleChange(event) {
    setFormData(
      {...formData,
        [event.target.name]: event.target.value
      }
    )
  }

  function handleSubmit (event) {
    event.preventDefault()
    setTasks([...TASKS, formData])
  }



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          {
            categories.map ((category) => {
              if (category!=="All"){
                return (<option key={category}>{category}</option>)
              }
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
