import {createBrowserRouter, Navigate} from "react-router";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import AboutPage from "../../feature/about/AboutPage";
import ActivityDetailsPage from "../../feature/activities/details/ActivityDetailsPage";
import Counter from "../../feature/counter/Counter";
import TestErrors from "../../feature/errors/TestError";
import NotFound from "../../feature/errors/NotFound";
import ServerError from "../../feature/errors/ServerError";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path: '', element: <HomePage/> },
            {path: 'activities', element: <ActivityDashboard /> },
            {path: 'activities/:id', element: <ActivityDetailsPage/>},//(the :id is a placeholder for the url link to the specific id)
            {path: 'createActivity', element: <ActivityForm key='create'/> },
            {path: 'manage/:id', element:<ActivityForm/> },
            {path: 'counter', element:<Counter/> },
            {path: 'errors', element: <TestErrors/>},
            {path: 'not-found', element:<NotFound/>},
            {path: 'server-error', element:<ServerError/>},
            {path: 'about', element: <AboutPage/>},
            {path: '*', element: <Navigate replace to='/not-found'/>}
        ]
    }
])