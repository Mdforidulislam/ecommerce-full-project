import { useContext } from 'react';
import defaultUserPhoto from '/userPhoto.webp'
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useContext(AuthContext)
    const userPhoto = user?.photoURL ? user?.photoURL : defaultUserPhoto;
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log("User logout successfully")
                navigate('/')
            })
            .catch((error) => console.error(error));
    }
    return (
        <div>
            <div className="max-w-4xl mx-auto md:my-36 md:pl-[450px]">
                <h1 className="text-3xl font-semibold text-center mb-12">Profile Information</h1>
                <img className='max-w-500 mx-auto my-5 h-[120px]' src={userPhoto} alt="" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div>

                        <h2 className="text-lg font-medium mb-2">Username</h2>
                        <p className="mb-4">Mouri Chowdhury</p>
                        <h2 className="text-lg font-medium mb-2">Phone Number</h2>
                        <p className="mb-4">014857474</p>
                        <h2 className="text-lg font-medium mb-2">Age</h2>
                        <p className="mb-4">24</p>
                        <h2 className="text-lg font-medium mb-2">Gender</h2>
                        <p>Female</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium mb-2">Email Address</h2>
                        <p className="mb-4">mourichow206@gmail.com</p>
                        <h2 className="text-lg font-medium mb-2">Address</h2>
                        <p className="mb-4">sjanfiabf</p>
                    </div>
                </div>
                <div className="mt-8 md:flex justify-between text-center">
                    <button className="bg-[#2563EB] hover:bg-[#2563EB] text-white btn w-full md:w-auto">Update Profile</button>
                    <button className='btn bg-[#2563EB] hover:bg-[#2563EB] text-white' onClick={handleLogout}>
                        Log Out
                    </button>

                </div>

                {/* <button className='btn' onClick={handleLogout}>
                    Log Out
                </button> */}
            </div>

        </div>
    );
};

export default Profile;