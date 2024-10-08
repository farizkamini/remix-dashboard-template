import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-slate-50 font-body">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<MantineProvider theme={theme}>
			<Outlet />
		</MantineProvider>
	);
}
const theme = createTheme({
	fontFamily: "Inter, sans-serif",
});
