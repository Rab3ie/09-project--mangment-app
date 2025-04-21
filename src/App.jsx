import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";
import NoProjectSelected from "./component/NoProjectSelected";

function App() {
  function handleAddProject(projects){

  }
  return (
    <>
      <main  className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
        <NoProjectSelected />
      </main>
    </>
  );
}

export default App;
