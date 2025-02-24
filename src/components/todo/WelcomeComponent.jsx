import { useParams, Link } from "react-router-dom";

function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="welcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">go here</Link>
      </div>
    </div>
  );
}

export default WelcomeComponent