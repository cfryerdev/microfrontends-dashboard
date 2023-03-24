import React from 'react';
import { NavLink } from "react-router-dom";

const setTitleCasing = (text) => {
    return text.replace(/([^\W_]+[^\s-]*) */g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const DashboardTile = ({ icon, name, description, version }) => {
    return (
        <div className="card app-card">
            <div className="card-body">
                <h4 className="card-title">
                    <i className={`${icon} mr-1`}></i> {setTitleCasing(name)}
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">Version: {version}</h6>
                <p className="card-text">{description}</p>
                <NavLink to={`/loader/${name}`} className="card-link">
                    <i className="fa-solid fa-rocket mr-2"></i> Launch
                </NavLink>
            </div>
        </div>
    )
};

export default DashboardTile;
