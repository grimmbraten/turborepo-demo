export const greet = (name: string): string => {
	return `Hello, ${name}!`;
};

console.log(greet("Turborepo from github action cache test"));
