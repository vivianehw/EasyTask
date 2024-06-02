# EasyTask

EasyTask is a task management application built with Angular 18, designed to help companies manage tasks for their employees. The application features a header, a sidebar with a list of employees, and a task display area where tasks can be added, viewed, and marked as completed. All tasks are stored in the browser's local storage, ensuring persistence even after page reloads.

![EasyTask screenshot](/src/assets/readme/easy-task-screenshot.png)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Employee Management**: View a list of 6 employees in the sidebar.
- **Task Management**: Add new tasks and mark existing tasks as completed for each employee.
- **Persistent Storage**: Tasks are stored in the browser's local storage, so they persist even if the page is reloaded.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/vivianehw/EasyTask.git
   cd easytask
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the application:**
   ```sh
   ng serve
   ```
   The application will be available at `http://localhost:4200`.

## Usage

1. **Viewing Employees:**
   - The sidebar displays a list of 6 employees.
   - Click on an employee to view their tasks.

2. **Managing Tasks:**
   - The task area on the right will show the tasks for the selected employee.
   - Add a new task by typing in the input field and clicking the "Add Task" button.
   - Mark a task as completed by clicking the checkbox next to the task.

3. **Persistent Storage:**
   - Tasks are automatically saved to the browser's local storage.
   - Tasks will persist even if the page is reloaded or the browser is closed and reopened.
