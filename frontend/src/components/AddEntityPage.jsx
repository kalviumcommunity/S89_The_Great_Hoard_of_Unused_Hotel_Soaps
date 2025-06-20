import React, { useState, useEffect } from 'react';

const AddEntityPage = () => {
    const [entity, setEntity] = useState({ name: '', description: '', created_by: '' });
    const [entities, setEntities] = useState([]);
    const [users, setUsers] = useState([]); // List of users
    const [selectedUser, setSelectedUser] = useState(''); // Selected user
    const [loading, setLoading] = useState(false); // Loading state

    // Fetch users (mocked for now)
    useEffect(() => {
        // Replace this with an API call to fetch users
        setUsers(['User1', 'User2', 'User3']);
    }, []);

    // Fetch entities created by the selected user
    useEffect(() => {
        if (selectedUser) {
            fetch(`http://localhost:3000/api/items?created_by=${selectedUser}`)
                .then((res) => res.json())
                .then((data) => setEntities(data))
                .catch((err) => console.error('Error fetching entities:', err));
        }
    }, [selectedUser]);

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
            setEntity({ name: '', description: '', created_by: '' });
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
                <select
                    name="created_by"
                    value={entity.created_by}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select User</option>
                    {users.map((user, index) => (
                        <option key={index} value={user}>
                            {user}
                        </option>
                    ))}
                </select>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Add Entity'}
                </button>
            </form>

            <h2>Filter by User</h2>
            <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
            >
                <option value="">Select User</option>
                {users.map((user, index) => (
                    <option key={index} value={user}>
                        {user}
                    </option>
                ))}
            </select>

            <h2>Entities List</h2>
            <ul>
                {entities.map((e, index) => (
                    <li key={index}>
                        {e.name} - {e.description} (Created by: {e.created_by})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddEntityPage;