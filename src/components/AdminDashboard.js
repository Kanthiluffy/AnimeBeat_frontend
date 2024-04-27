// // // AdminDashboard.js

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './AdminDashboard.css'; // Import CSS file

// // const AdminDashboard = () => {
// //   const [artists, setArtists] = useState([]);
// //   const [newArtist, setNewArtist] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //   });
// //   const [editingArtist, setEditingArtist] = useState(null);

// //   const [users, setUsers] = useState([]);
// //   const [newUser, setNewUser] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     username: '',
// //   });
// //   const [editingUser, setEditingUser] = useState(null);

// //   // Fetch data from backend on component mount
// //   useEffect(() => {
// //     fetchArtists();
// //     fetchUsers();
// //   }, []);

// //   const fetchArtists = async () => {
// //     try {
// //       const artistsResponse = await axios.get('http://localhost:8080/api/artists');
// //       setArtists(artistsResponse.data);
// //     } catch (error) {
// //       console.error('Error fetching artists:', error);
// //     }
// //   };

// //   const fetchUsers = async () => {
// //     try {
// //       const usersResponse = await axios.get('http://localhost:8080/api/users');
// //       setUsers(usersResponse.data);
// //     } catch (error) {
// //       console.error('Error fetching users:', error);
// //     }
// //   };

// //   const handleArtistInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewArtist({ ...newArtist, [name]: value });
// //   };

// //   const handleUserInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewUser({ ...newUser, [name]: value });
// //   };

// //   const handleArtistSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:8080/api/artists', newArtist);
// //       setNewArtist({ firstName: '', lastName: '', email: '' });
// //       fetchArtists(); // Refresh artist data after adding
// //     } catch (error) {
// //       console.error('Error adding artist:', error);
// //     }
// //   };

// //   const handleUserSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:8080/api/users', newUser);
// //       setNewUser({ firstName: '', lastName: '', email: '', username: '' });
// //       fetchUsers(); // Refresh user data after adding
// //     } catch (error) {
// //       console.error('Error adding user:', error);
// //     }
// //   };

// //   const handleArtistEdit = (artist) => {
// //     setEditingArtist(artist);
// //     setNewArtist({ ...artist });
// //   };

// //   const handleUserEdit = (user) => {
// //     setEditingUser(user);
// //     setNewUser({ ...user });
// //   };

// //   const handleArtistUpdate = async () => {
// //     try {
// //       await axios.put(`http://localhost:8080/api/artists/${editingArtist._id}`, newArtist);
// //       setEditingArtist(null);
// //       setNewArtist({ firstName: '', lastName: '', email: '' });
// //       fetchArtists(); // Refresh artist data after updating
// //     } catch (error) {
// //       console.error('Error updating artist:', error);
// //     }
// //   };

// //   const handleUserUpdate = async () => {
// //     try {
// //       await axios.put(`http://localhost:8080/api/users/${editingUser._id}`, newUser);
// //       setEditingUser(null);
// //       setNewUser({ firstName: '', lastName: '', email: '', username: '' });
// //       fetchUsers(); // Refresh user data after updating
// //     } catch (error) {
// //       console.error('Error updating user:', error);
// //     }
// //   };

// //   const handleArtistDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:8080/api/artists/${id}`);
// //       fetchArtists(); // Refresh artist data after deleting
// //     } catch (error) {
// //       console.error('Error deleting artist:', error);
// //     }
// //   };

// //   const handleUserDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:8080/api/users/${id}`);
// //       fetchUsers(); // Refresh user data after deleting
// //     } catch (error) {
// //       console.error('Error deleting user:', error);
// //     }
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <h1>Admin Dashboard</h1>

// //       <div className="admin-section">
// //         <h2>Artists</h2>
// //         <form onSubmit={editingArtist ? handleArtistUpdate : handleArtistSubmit}>
// //           <input
// //             type="text"
// //             name="firstName"
// //             placeholder="First Name"
// //             value={newArtist.firstName}
// //             onChange={handleArtistInputChange}
// //           />
// //           <input
// //             type="text"
// //             name="lastName"
// //             placeholder="Last Name"
// //             value={newArtist.lastName}
// //             onChange={handleArtistInputChange}
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={newArtist.email}
// //             onChange={handleArtistInputChange}
// //           />
// //           <button type="submit">{editingArtist ? 'Update' : 'Add'}</button>
// //           {editingArtist && (
// //             <button type="button" onClick={() => setEditingArtist(null)}>Cancel</button>
// //           )}
// //         </form>

// //         <ul className="admin-list">
// //           {artists.map(artist => (
// //             <li key={artist._id} className="admin-list-item">
// //               {artist.firstName} {artist.lastName} - {artist.email}
// //               <div className="admin-actions">
// //                 <button onClick={() => handleArtistEdit(artist)}>Edit</button>
// //                 <button onClick={() => handleArtistDelete(artist._id)}>Delete</button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="admin-section">
// //         <h2>Users</h2>
// //         <form onSubmit={editingUser ? handleUserUpdate : handleUserSubmit}>
// //           <input
// //             type="text"
// //             name="firstName"
// //             placeholder="First Name"
// //             value={newUser.firstName}
// //             onChange={handleUserInputChange}
// //           />
// //           <input
// //             type="text"
// //             name="lastName"
// //             placeholder="Last Name"
// //             value={newUser.lastName}
// //             onChange={handleUserInputChange}
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={newUser.email}
// //             onChange={handleUserInputChange}
// //           />
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={newUser.username}
// //             onChange={handleUserInputChange}
// //           />
// //           <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
// //           {editingUser && (
// //             <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
// //           )}
// //         </form>

// //         <ul className="admin-list">
// //           {users.map(user => (
// //             <li key={user._id} className="admin-list-item">
// //               {user.firstName} {user.lastName} - {user.email} - {user.username}
// //               <div className="admin-actions">
// //                 <button onClick={() => handleUserEdit(user)}>Edit</button>
// //                 <button onClick={() => handleUserDelete(user._id)}>Delete</button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// // AdminDashboard.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminDashboard.css'; // Import CSS file

// const AdminDashboard = () => {
//   const [artists, setArtists] = useState([]);
//   const [newArtist, setNewArtist] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });
//   const [editingArtist, setEditingArtist] = useState(null);

//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//   });
//   const [editingUser, setEditingUser] = useState(null);

//   const [songs, setSongs] = useState([]);
//   const [newSong, setNewSong] = useState({
//     name: '',
//     thumbnail: '',
//     track: '',
//     artist: '',
//   });
//   const [editingSong, setEditingSong] = useState(null);

//   const [playlists, setPlaylists] = useState([]);
//   const [newPlaylist, setNewPlaylist] = useState({
//     name: '',
//     thumbnail: '',
//     owner: '',
//     songs: [],
//     collaborators: [],
//   });
//   const [editingPlaylist, setEditingPlaylist] = useState(null);

//   // Fetch data from backend on component mount
//   useEffect(() => {
//     fetchArtists();
//     fetchUsers();
//     fetchSongs();
//     fetchPlaylists();
//   }, []);

//   useEffect(() => {
//     fetchArtists();
//   }, []);

//   const fetchArtists = async () => {
//     try {
//       const artistsResponse = await axios.get('http://localhost:8080/api/artists');
//       setArtists(artistsResponse.data);
//     } catch (error) {
//       console.error('Error fetching artists:', error);
//     }
//   };

//   const handleArtistInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewArtist({ ...newArtist, [name]: value });
//   };

//   const handleSubmitArtist = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingArtist) {
//         await axios.put(`http://localhost:8080/api/artists/${editingArtist._id}`, newArtist);
//         setEditingArtist(null);
//       } else {
//         await axios.post('http://localhost:8080/api/artists', newArtist);
//       }
//       setNewArtist({ firstName: '', lastName: '', email: '' });
//       fetchArtists(); // Refresh artist data after adding or updating
//     } catch (error) {
//       console.error('Error submitting artist:', error);
//     }
//   };

//   const handleEditArtist = (artist) => {
//     setEditingArtist(artist);
//     setNewArtist({ ...artist });
//   };

//   const handleDeleteArtist = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/artists/${id}`);
//       fetchArtists(); // Refresh artist data after deleting
//     } catch (error) {
//       console.error('Error deleting artist:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const usersResponse = await axios.get('http://localhost:8080/api/users');
//       setUsers(usersResponse.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleUserInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

//   const handleSubmitUser = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingUser) {
//         await axios.put(`http://localhost:8080/api/users/${editingUser._id}`, newUser);
//         setEditingUser(null);
//       } else {
//         await axios.post('http://localhost:8080/api/users', newUser);
//       }
//       setNewUser({ firstName: '', lastName: '', email: '', username: '' });
//       fetchUsers(); // Refresh user data after adding or updating
//     } catch (error) {
//       console.error('Error submitting user:', error);
//     }
//   };

//   const handleEditUser = (user) => {
//     setEditingUser(user);
//     setNewUser({ ...user });
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/users/${id}`);
//       fetchUsers(); // Refresh user data after deleting
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const fetchSongs = async () => {
//     try {
//       const songsResponse = await axios.get('http://localhost:8080/api/songs');
//       setSongs(songsResponse.data);
//     } catch (error) {
//       console.error('Error fetching songs:', error);
//     }
//   };

//   const fetchPlaylists = async () => {
//     try {
//       const playlistsResponse = await axios.get('http://localhost:8080/api/playlists');
//       setPlaylists(playlistsResponse.data);
//     } catch (error) {
//       console.error('Error fetching playlists:', error);
//     }
//   };

  
  

  

//   // Add similar functions for editing, updating, and deleting artists, users, songs, and playlists

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>

//       {/* Artists Section */}
//       <div className="admin-section">
//         <h2>Artists</h2>
//         <form onSubmit={handleSubmitArtist}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={newArtist.firstName}
//             onChange={handleArtistInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={newArtist.lastName}
//             onChange={handleArtistInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={newArtist.email}
//             onChange={handleArtistInputChange}
//           />
//           <button type="submit">{editingArtist ? 'Update' : 'Add'}</button>
//           {editingArtist && (
//             <button type="button" onClick={() => setEditingArtist(null)}>Cancel</button>
//           )}
//         </form>

//         <ul className="admin-list">
//           {artists.map(artist => (
//             <li key={artist._id} className="admin-list-item">
//               {artist.firstName} {artist.lastName} - {artist.email}
//               <div className="admin-actions">
//                 <button onClick={() => handleEditArtist(artist)}>Edit</button>
//                 <button onClick={() => handleDeleteArtist(artist._id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
      
//     </div>
  
//       {/* Users Section */}
//       <div className="admin-section">
//         <h2>Users</h2>
//         <form onSubmit={handleSubmitUser}>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={newUser.firstName}
//             onChange={handleUserInputChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={newUser.lastName}
//             onChange={handleUserInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={handleUserInputChange}
//           />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={newUser.username}
//             onChange={handleUserInputChange}
//           />
//           <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
//           {editingUser && (
//             <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
//           )}
//         </form>

//         <ul className="admin-list">
//           {users.map(user => (
//             <li key={user._id} className="admin-list-item">
//               {user.firstName} {user.lastName} - {user.email} - {user.username}
//               <div className="admin-actions">
//                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
    

//       {/* Songs Section */}
//       <div className="admin-section">
//         <h2>Songs</h2>
//         {/* Song form and list rendering */}
//       </div>

//       {/* Playlists Section */}
//       <div className="admin-section">
//         <h2>Playlists</h2>
//         {/* Playlist form and list rendering */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
