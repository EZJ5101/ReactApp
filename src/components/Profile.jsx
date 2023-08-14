import React from "react";

function Profile() {
	const profileData = {
		name: "John Doe",
		bio: "I am a web developer.",
		profilePicture: "https://example.com/profile.jpg",
	};

	return (
		<div>
			<h1>{profileData.name}</h1>
			<p>{profileData.bio}</p>
			<img src={profileData.profilePicture} alt="Profile" />
		</div>
	);
}

export default Profile;
