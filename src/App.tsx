import React from "react";
import { useNavigate } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("home");
  }, []);

  return <div />;
};

export default App;
