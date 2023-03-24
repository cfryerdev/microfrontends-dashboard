import React from 'react';
import DashboardTile from "@shared/components/dashboard-tile";
import pkg from "../package.json";

export default () => {
    return (
        <DashboardTile 
            icon="fa-regular fa-address-card" 
            name="profile" 
            description={pkg.description} 
            version={pkg.version} />
    )
};