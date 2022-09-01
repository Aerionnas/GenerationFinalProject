// this is our customized html where we enter the values the user enter into the form
const createTaskHtml = (name, description, assignedTo, dueDate, status) =>
    `
    <div class="row pb-5 ">
        <div class="card">
        <div class="card-header h2 move-head">
            Task Information
        </div>
        <ul class="list-group list-group-flush ">
            <li class="list-group-item card-title card-color ">Task Name: ${name}</li>
            <li class="list-group-item card-title  ">Task Description:  ${description}</li>
            <li class="list-group-item card-title ">Assigned To: ${assignedTo}</li>
            <li class="list-group-item card-title  ">Due Date: ${dueDate}</li>
            <li class="list-group-item card-title  ">Status: </li>
            </ul>

            <select class="form-control" id="status" name="Status:">
                <option value="" selected>TO DO</option>
                <option value="">IN PROGRESS</option>
                <option value="">REVIEW</option>
                <option value="">DONE</option>
            </select>

        </div>
        </div>
                </div>
    
    `


   





class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;




    }

    // Create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);
    }

    // render method
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();


            const tasksHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(tasksHtml);


        }

        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.getElementById('tasksList');
        tasksList.innerHTML = tasksHtml;

        
    }

    
 //Create a TaskManager Class
    // const task1 = {
    //     id: 1,
    //     name: 'Meta Live Server Extension',
    //     description: 'Match all ID\'s and Label For',
    //     assignedTo: 'Myself',
    //     dueDate: '08/20/2022',
    //     status: 'TODO'
    // },

    // const task2 = {
    //     id: 2,rfty
    //     name: 'Meta Artificial Intelligence Research Project',
    //     description: 'Fix CSS Part (Lines 2-10)',
    //     assignedTo: 'Myself',
    //     dueDate: '08/21/2022',
    //     status: 'TODO'
    // },
    // const task3 = {
    //     id: 3,
    //     name: ' Meta Final Spring Powerpoint',
    //     description: 'Add PM and UX Designer to PP',
    //     assignedTo: 'Myself',
    //     dueDate: '08/13/2022',
    //     status: 'TODO'
    // },
    // const task4 = {
    //     id: 4,
    //     name: 'UX Designer Job Application',
    //     description: ' Update Technical Resume with Previous Experience',
    //     assignedTo: 'Myself',
    //     dueDate: '09/21/2022',
    //     status: 'TODO'
    // },
    // const task5 = {
    //     id: 5,
    //     name: 'UX Job Salary Sheet',
    //     description: 'Create rows and columns to sheet',
    //     assignedTo: 'Myself',
    //     dueDate: ' 09/15/2022',
    //     status: 'TODO'
    // },
    

    }
    


