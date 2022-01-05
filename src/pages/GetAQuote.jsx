import { useEffect, useState } from "react";
import InfoPage from "@components/InfoPage";
import usePageChange from "@hooks/usePageChange";

export default function GetAQuote() {
	usePageChange(useEffect, "Akto | Get a Quote");

	const [form, setForm] = useState({
		reason: "",
		idea: "",
		name: "",
	});

	const options = [
		"Mobile Application",
		"Web Application",
		"Workflow Automation",
		"Rapid Prototyping",
	];

	return (
		<InfoPage
			title="Get a quote"
			className="formpage"
			subtitle="Please submit your details and we'll email you our pricing"
		>
			<header>
				<h2>Let's get a quote</h2>
			</header>
			<form
				className="form"
				onChange={(e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
			>
				<select name="reason" required>
					<option value="" defaultValue selected hidden>
						What is the service Akto can help you with ?
					</option>
					{options.map((value, i) => (
						<option key={i} value={value}>
							{value}
						</option>
					))}
				</select>
				<textarea
					type="text"
					name="idea"
					placeholder="Can you give us a brief explanation of your idea/solution"
					value={form.idea}
					required
				/>

				<input name="email" type="email" placeholder="Email" value={form.email} required />

				<button type="submit">Submit</button>
			</form>
		</InfoPage>
	);
}
