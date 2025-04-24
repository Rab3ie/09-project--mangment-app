import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected";
import SelectProject from "./component/SelectProject";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects:[],
  });
  const selectProject = projectsState.projects.find(project => project.id === projectsState.selectProjectId);
  let content = <SelectProject project={selectProject} onDelete={handleDeleteProject}/>;
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
