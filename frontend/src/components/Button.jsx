function Button({ text, type, color }) {
	let styles =
		"text-white font-medium rounded-full text-sm px-5 py-2.5 text-center ";

	switch (color) {
		case "green":
			styles +=
				"bg-green-700 hover:bg-green-700/25 active:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
			break;
		case "lightblue":
			styles += "bg-sky-500/75 hover:bg-sky-500/25 active:bg-sky-600";
			break;
	}

	return (
		<button type={type} className={styles}>
			{text}
		</button>
	);
}

export default Button;
