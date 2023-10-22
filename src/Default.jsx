import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Default = () => {
    const tmpStoreKey = 'ToolsFinder(GoodToolsAi)AdminPanelUser'
    sessionStorage.removeItem(tmpStoreKey)
    const navigate = useNavigate()
    useEffect(()=>navigate('/'),[])

    
    return (
        <div>
            
        </div>
    );
};

export default Default;