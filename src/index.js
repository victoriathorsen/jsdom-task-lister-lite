document.addEventListener("DOMContentLoaded", () => {
  
  const createTask = (e) => {
    e.preventDefault();
    
    let list = document.createElement('li');
    let newTask = e.target['new-task-description'].value;
    list.innerText = newTask
    
    const priority = document.querySelector('#priority')
    const colorPriority = priority.value
    if (colorPriority == "Low") {
      list.style.color = 'green'
    } else if (colorPriority == "Medium"){
      list.style.color = 'orange'
    } else if (colorPriority == "High") {
      list.style.color = 'red'
    }

    const button = document.createElement('button')
    button.innerHTML = "delete"
    button.addEventListener('click', removeTask);
    list.appendChild(button)

    document.querySelector('ul').append(list);
    e.target.reset();
    colorPriority.reset()
  };

  const removeTask = () => {
    let myUl = document.querySelector('ul')
    let find = document.querySelector('li')
    myUl.removeChild(find)
  };

 
  document.querySelector('#create-task-form').addEventListener('submit', createTask);
  
});


