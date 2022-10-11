
const obj = new TaskManager(0);


let ourForm = document.getElementById('create-task-form');
ourForm.addEventListener('submit', function (event){

    event.preventDefault();

    // we got each elemment by its id name
    const taskName = document.getElementById('task-name');
    const taskDescription = document.getElementById('task-description');
    const assignTo = document.getElementById('assign-to');
    const date = document.getElementById('date');

    // we got the values of these elements and assigned it to the parameters of the add task method
    const name = taskName.value;
    const description = taskDescription.value;
    const assignedTo = assignTo.value;
    const dueDate = date.value;

    // Javascript Validation: takes presedence over the HTML

    // ensure that user types in a name for the task
    if(name===null || name===""){
        swal("Alert:","You must insert a name for the task! ");
        return false;
    }

    // ensure that user enters a description for the task
    else if(description === null || description ===""){
        swal("Alert:","Please insert a brief description", "error");
        return false;
    }

    // this checks that the user inserts into the assigned to field
    else if(assignedTo === null || assignedTo === ""){
        swal("Alert:","Please insert the name of the person that you would like to assign this task to.", "error");
        return false;
    }
    // checks to see if the user inserted number or special characters
    else if( (/[0-9`!@#$%^&*()_+\-={};':"|,.<>?~]/.test(assignedTo))){
        swal("Alert:","Numbers are not allowed \n Only letters are allowed \n Special characters are not allowed.", "error" );
        return false;
    }
    // this checks if the user has inputted letters and at least one space
    else if( !(/\s[a-zA-z]/.test(assignedTo))){
        swal("Alert:","You must enter a first and last name with a space in between. \n Only letters are allowed. \n ", "error" );
        return false;
    }
   

    
    
    // when the submit button is clicked, this message will pop up
    if('submit'){
        swal("Message:","Congratulations, the Task Information submitted successfully! We generated a card with the informaton specified.", "success");
    }

    // the add task method is called on out instance of task manager (it add the task to the array with the specified information)
    obj.addTask(name,description,assignedTo,dueDate);

    // the add render method is called on out instance of task manager  and it allows the information from the user to be placed on the card

    obj.render();

    
    
    
    // Clear form
    taskName.value = '';
    taskDescription.value = '';
    assignTo.value = '';
    date.value = '';

});

// prints the array of tasks
console.log(obj.tasks);


// createTaskHtml('Task2', 'go shopping', 'Billy Bob', '09/1/2022');
