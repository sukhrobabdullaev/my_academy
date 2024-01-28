import { Ivideos } from "./components/courseSidebar";

const Dashboard = async () => {
  const response = await fetch("http://localhost:3000/api");
  const result: Ivideos[] = await response.json();

  return (
    <div className="ml-64">
      {result.map((el) => (
        <div key={el.id}>
          <video controls width="100%">
            <source src={`/${el.path}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      ssss
    </div>
  );
};

export default Dashboard;
