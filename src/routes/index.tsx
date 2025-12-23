import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[#edf3ff]">
			<p className="text-2xl">리액트 훅 공부 봐롸봐롸봐라밤</p>
			<img
				src={logo}
				className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
				alt="logo"
			/>
		</div>
	);
}
