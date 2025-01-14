import React from "react";
import { DataCompletes } from "../assets/data";

function Count() {
	let redeemedStudents = DataCompletes.filter((datacomplete) =>
		datacomplete["Redemption Status"].toLowerCase().includes("yes")
	);
	let genAICompletions = DataCompletes.filter((datacomplete) =>
		datacomplete["# of GenAI Game Completed"].includes("1")
	);
	let totalCompletions = DataCompletes.filter((datacomplete) =>
		datacomplete["Total Completions of both Pathways"]
			.toLowerCase()
			.includes("yes")
	);
	let GCCFCompletions = DataCompletes.filter(
		(datacomplete) =>
			datacomplete["# of Courses Completed"].includes("4") &&
			datacomplete["# of Skill Badges Completed"].includes("4")
	);
	return (
		<div className="w-full flex justify-center items-center pt-4 py-2 flex-col">
			<div className="w-[80%] grid grid-cols-3 gap-2 text-normal font-semibold text-gray-700 ">
				<p className="flex flex-row justify-between p-2 px-4 outline-1 outline outline-blue-700 m-2 rounded-md shadow-md">
					Total Students : <b className="text-blue-500">{DataCompletes.length}</b>
				</p>
				<p className="flex flex-row justify-between p-2 px-4 outline-1 outline outline-blue-700 m-2 rounded-md shadow-md">
					Total Redemptions : <b className="text-blue-500">{redeemedStudents.length}</b>
				</p>
				<p className="flex flex-row justify-between p-2 px-4 outline-1 outline outline-blue-700 m-2 rounded-md shadow-md">
					Total GenAI Completions : <b className="text-blue-500">{genAICompletions.length}</b>
				</p>
				<p className="flex flex-row justify-between p-2 px-4 outline-1 outline outline-blue-700 m-2 rounded-md shadow-md">
					Total GCCF Completions : <b className="text-blue-500">{GCCFCompletions.length}</b>
				</p>
				<p className="flex flex-row justify-between p-2 px-4 outline-1 outline outline-blue-700 m-2 rounded-md shadow-md">
					Totality Completions : <b className="text-blue-500">{totalCompletions.length}</b>
				</p>
			</div>
		</div>
	);
}

export default Count;
