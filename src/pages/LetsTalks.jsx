import { useEffect, useState } from "react";

import "@styles/components/FormPage.scss";
import "@styles/components/Form.scss";

import InfoPage from "@components/InfoPage";
import usePageChange from "@hooks/usePageChange";

export default function LetsTalk() {
	usePageChange(useEffect, "Akto | Let's Talk");

	const [form, setForm] = useState({
		name: "",
		email: "",
		reason: "",
	});
	const options = [
		{ value: "Rapid prototyping", label: "I need to do a rapid prototype for my product idea" },
		{ value: "New Product", label: "I am planning to launch a new product" },
		{ value: "Web Application", label: "I need to build a web application" },
		{ value: "Mobile Application", label: "I need to build a mobile application" },
		{ value: "Workflow Automation", label: "I need to build a work flow solution for my business" },
	];

	return (
		<InfoPage
			title="Let's Talk"
			className="formpage"
			subtitle="Find out more about the people leading the way for Akto and our clients."
		>
			<header>
				<h2>Let's schedule a call</h2>
				<p>Fill out the form below, and we'll be in touch to set up a consultive call</p>
			</header>
			<form
				className="form"
				onChange={(e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
			>
				<input name="name" type="text" placeholder="Name" value={form.name} required />
				<input name="email" type="email" placeholder="Email" required value={form.email} />
				<select name="reason" required>
					<option value="" defaultValue disabled hidden>
						What are you trying to achieve?
					</option>
					{options.map(({ value, label }, i) => (
						<option key={i} value={value}>
							{label}
						</option>
					))}
				</select>
				<button type="submit">Submit</button>
			</form>
		</InfoPage>
	);
}
