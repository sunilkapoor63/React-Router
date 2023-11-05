import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/sunilkapoor63")
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
            {data ? (
                <div>
                    <div className='bg-gray-600 text-white p-4 text-3xl'>
                        Github Repositories: {data.public_repos}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <img width={300} src={data.avatar_url} alt="GitHub Avatar" />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Github;
