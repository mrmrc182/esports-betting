import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Header />

        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
