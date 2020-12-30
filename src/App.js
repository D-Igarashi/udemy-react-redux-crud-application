import React from "react";

const App = () => {
	const profiles = [
		{ name: "Taro", age: 10 },
		{ name: "Jiro" },
		{ name: "Saburo", age: 12 },
		{ name: "Hanako", age: 13 },
		{ name: "Youko", age: 15 }
	]

	return (
		<div>
			{
				profiles.map((profile, index) => {
					return <User name={profile.name} age={profile.age} key={index} />
				})
			}
		</div>
	)
}
const User = (props) => {
	return <div>Hi, I am {props.name} and {props.age} years old.</div>
}
User.defaultProps = {
	age: 1
}

export default App;