import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Layout } from "./Layout";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { User } from "./routes/User";
import { Users } from "./routes/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="header" element={<Header />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
