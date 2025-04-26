import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected";
import SelectProject from "./component/SelectProject";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects:[],
    // tasks:[],
  });
  const selectProject = projectsState.projects.find(project => project.id === projectsState.selectProjectId);
  let content = <SelectProject project={selectProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onAddTaskList={selectProject?.tasks || []} />;
  if(projectsState.selectProjectId === null){
    
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectsState.selectProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  function handleStartAddProject(){
    setProjectsState(prevProject => {
     return{
      ...prevProject,
      selectProjectId: null,
     };
    });
  }
  function handleAddProject(projectData){
    setProjectsState(
      (prevproject) => {
        const newProject={
          ...projectData,
          id: Math.random(),
          tasks: [],
        };
        return{
          ...prevproject,
          selectProjectId: undefined,
          projects:[...prevproject.projects, newProject],
        };
      }
    );
  }
  function handleCancelAddProject(){
    setProjectsState(prevProject => {
      return{
       ...prevProject,
       selectProjectId: undefined,
      };
     });
  }
  function handleSelectProject(id){
    setProjectsState(prevProject => {
      return{
       ...prevProject,
       selectProjectId: id,
      };
     });
  }
  function handleDeleteProject(){
    setProjectsState(prevProject => {
      return{
       ...prevProject,
       selectProjectId: undefined,
       projects: prevProject.projects.filter((project) => project.id !== prevProject.selectProjectId),
      };
     });
  }
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
      };

      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === prevState.selectProjectId) {
            return {
              ...project,
              tasks: [...(project.tasks || []), newTask], // Add task to the selected project
            };
          }
          return project;
        }),
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        projects: prevProject.projects.map((project) => {
          if (project.id === prevProject.selectProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== id), // Remove task from the selected project
            };
          }
          return project;
        }),
      };
    });
  }
  console.log(projectsState.projects);

  return (
    <>
      <main  className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectProjectId={projectsState.selectProjectId}/>
        {content}
        
      </main>
    </>
  );
}

export default App;
