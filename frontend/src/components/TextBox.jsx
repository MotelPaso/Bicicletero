function TextBox({ name, id, type, placeholder }) {
	return (
		<input
			className="p-3 m-3 w-[70%] text-black bg-white "
			name={name}
			type={type}
			id={id}
			placeholder={placeholder}
		/>
	);
}

export default TextBox;
