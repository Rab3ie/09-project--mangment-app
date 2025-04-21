import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects:[],
  });
  let content;
  if(projectsState.selectProjectId === null){
    
    content = <NewProject onAdd={handleAddProject} />
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
  
  
  return (
    <>
      <main  className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
        {content}
        
      </main>
    </>
  );
}

export default App;
