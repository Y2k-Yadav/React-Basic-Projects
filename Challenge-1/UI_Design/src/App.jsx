import "./App.css";
import UserCard from "./components/UserCard";
import users from "./components/users.json";

function App() {
  return (
    <div className="grid grid-cols-4 p-6 gap-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:w-[75%] m-auto">
      {users.map((item) => (
        <UserCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
