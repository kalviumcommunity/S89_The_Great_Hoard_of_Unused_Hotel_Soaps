import React, { useState } from 'react';

const AddEntityPage = () => {
    const [entity, setEntity] = useState({ name: '', description: '' });
    const [entities, setEntities] = useState([]);
    const [loading, setLoading] = useState(false); // New loading state

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntity({ ...entity, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return; // Prevent multiple submissions
        setLoading(true); // Set loading to true

        console.log('Submitting entity:', entity);

        try {
            const response = await fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entity),
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newEntity = await response.json();
            console.log('New entity added:', newEntity);

            setEntities([...entities, newEntity]);
            setEntity({ name: '', description: '' });
        } catch (error) {
            console.error('Error adding entity:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <h1>Add Entity</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={entity.name}
                    onChange={handleChange}
                    placeholder="Entity Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={entity.description}
                    onChange={handleChange}
                    placeholder="Entity Description"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Add Entity'}
                </button>
            </form>
            <h2>Entities List</h2>
            <ul>
                {entities.map((e, index) => (
                    <li key={index}>{e.name} - {e.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddEntityPage;