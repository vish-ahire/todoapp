import ReactDOM from "react-dom/client"
import React from "react";
import { Login, Home, Header, Register } from "./Component";
import Todo from "./Component/Todo";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./PrivateRoute";

import TodoStore from "./Store/TodoStore";
const Index = () => {
    return (
        
        <Provider store={TodoStore}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/todo"
                        element={
                            <PrivateRoute>
                               <Todo/>
                            </PrivateRoute>
                        }
                    />
                     <Route path="*" element={<Navigate to="/login" replace />}
      />
                </Routes>
            </Router>
        </Provider>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);