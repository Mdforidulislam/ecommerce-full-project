import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto md:my-36 md:pl-[450px]">
                <h1 className="text-3xl font-semibold text-center mb-12">Profile Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div>
                        <img src="" alt="" />
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
                <div className="mt-8 text-center">
                    <button className="w-full md:w-auto">Update Profile</button>
                </div>
            </div>

        </div>
    );
};

export default Profile;