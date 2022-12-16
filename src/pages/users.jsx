import {
    Routes, Route, Link, NavLink, useParams, Outlet
} from "react-router-dom";


const UsersLayout = () => {
    return (
        <>
        <div
            className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: 400 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>A Page for users</h1>
                        <h2 className='mb-3'>This is a page for users</h2>
                       
                    </div>
                </div>
            </div>
            </div>
        <div>
            
            <NavLink className="btn" to="/users">index</NavLink>
            <NavLink className="btn" to="/users/1">User 1</NavLink>
            <NavLink className="btn" to="/users/2">User 2</NavLink>
            <NavLink className="btn" to="/users/new">Create new user</NavLink>
            <Outlet /> { /* subpages will appear here */}
            </div>
            </>
            )
};

const UsersList = () => {
   return( <div>
        <p>List of all users</p>
        <p>See for example <Link to="1">User 1</Link>.</p>
    </div>)
}


const User = () => {
    const { uid } = useParams();
    return (
        <div>
            <p>This is user #{uid}.</p>
        </div>
    );
}

const NewUser = () =>
    <div>
        <p>Create a new user</p>
    </div>;







export { UsersLayout, UsersList, User, NewUser };