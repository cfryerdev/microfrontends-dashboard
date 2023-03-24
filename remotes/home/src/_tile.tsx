import React from 'react';
import DashboardTile from "@shared/components/dashboard-tile";
import pkg from "../package.json";

export default () => {
    return (
        <DashboardTile 
            icon="fa-solid fa-house-user" 
            name="home" 
            description={pkg.description} 
            version={pkg.version} />
    )
}