import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { path } from './path';

function Navigation(){


    return (
        <BrowserRouter>
            <div className = 'nav-layout'>
                <nav>
                    <ul>
                        {
                            path.map( ( { name, to } ) => {
                                return (
                                    <li 
                                        key = { name } 
                                    >
                                        <NavLink
                                            key = { name }
                                            to = { to }
                                            className = { ( { isActive } ) => isActive ? 'nav-active' : '' }
                                        >
                                            { name }
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <Routes>
                    { 
                        path.map( ( { path, Component } ) => (
                            <Route 
                                key={ path }
                                path={ path }
                                element={ Component }
                            />
                        ) )
                    }

                    {/* <Route path = {'/*'} element = { <Navigate to='generate-diagram' replace /> } /> */}
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default Navigation;