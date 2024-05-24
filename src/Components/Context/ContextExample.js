import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const UserContext = createContext(null);

const ContextExample = () => {
  const [theme, setTheme] = useState("light");

  const changeThemeFunction = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeThemeFunction }}>
      <UserContext.Provider value={{ isLoggedIn: true }}>
        <div>
          <GrandParent />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

const GrandParent = () => {
  return (
    <div>
      <div>GrandParent Component</div>
      <Parent />
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <div>Parent Component</div>
      <Child />
    </div>
  );
};

const Child = () => {
  const { theme, changeThemeFunction } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <div>Child Component</div>
      <p>{theme}</p>
      <button onClick={changeThemeFunction}>Change</button>
      <p>{isLoggedIn ? "User is Logged In" : "User Not Logged In"}</p>
    </div>
  );
};

export default ContextExample;
