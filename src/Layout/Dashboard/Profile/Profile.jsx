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
            <div className="divide-y max-w-2xl mx-auto divide-gray-200">
                <div className="py-4">
                    <h2 className="mb-2 lg:text-3xl text-lg my-5 text-center font-semibold">Profile Information</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="relative mt-5 flex h-48 w-48 shrink-0 overflow-hidden rounded-full">
                                <img className="aspect-square h-full w-full" alt="" src={userPhoto} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <h2 className="mb-2 text-lg font-semibold">Username</h2>
                    <div className="flex justify-between">
                        <span>Moury Chowdhury</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Phone Number</h2>
                        <div className="flex justify-between">
                            <span>0154894685415</span>
                        </div>
                    </div>

                    <div className="py-4">
                        <h2 className="mb-2 text-lg font-semibold">Email Address</h2>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span>mouu@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <h2 className="mb-2 text-lg font-semibold">Age</h2>
                    <div className="flex justify-between">
                        <span>24</span>
                    </div>
                </div>
                <div className="py-4">
                    <h2 className="mb-2 text-lg font-semibold">Gender</h2>
                    <div className="flex justify-between">
                        <span>Female</span>
                    </div>
                </div>
                <div className="py-4">
                    <h2 className="mb-2 text-lg font-semibold">Address</h2>
                    <div className="flex justify-between">
                        <span>Dhaka</span>
                    </div>
                </div>

                <div className="mt-8 md:flex justify-between text-center">
                    <button className="bg-[#2563EB] hover:bg-[#2563EB] text-white btn w-full md:w-auto">Update Profile</button>
                    <button className='btn bg-[#2563EB] hover:bg-[#2563EB] text-white' onClick={handleLogout}>
                        Log Out
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Profile;