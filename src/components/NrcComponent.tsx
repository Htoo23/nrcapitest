import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NrcData {
    name: string;
    nrcNumber: string;
    bloodType: string;
    address: string;
}

const NrcComponent: React.FC = () => {
    const [nrcData, setNrcData] = useState<NrcData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<NrcData[]>('https://localhost:7207/Nrc');
                console.log('API Response:', response.data); // Log the response data
                setNrcData(response.data);
            } catch (error) {
                console.error('Error fetching NRC data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h1>Myanmar NRC Data</h1>
            <ul>
                {nrcData.map((data, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {data.name}<br />
                        <strong>NRC Number:</strong> {data.nrcNumber}<br />
                        <strong>Blood Type:</strong> {data.bloodType}<br />
                        <strong>Address:</strong> {data.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NrcComponent;
