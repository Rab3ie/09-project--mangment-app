import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected";
import { useState } from "react";
function App() {
  return (
    <>
      <main  className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject}/>
        {content}
        
      </main>
    </>
  );
}

export default App;
