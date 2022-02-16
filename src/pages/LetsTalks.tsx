import InfoPage from "@components/InfoPage";
import "@styles/components/FormPage.scss";
import { FormEventHandler, useState } from "react";
import Form from "@components/Form";

const LetsTalk = () => {
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
	const handleFormChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
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
			<Form onChange={handleFormChange}>
				<input name="name" type="text" placeholder="Name" value={form.name} required />
				<input name="email" type="email" placeholder="Email" required value={form.email} />
				<select name="reason" required>
					<option value="" defaultValue="true" disabled hidden>
						What are you trying to achieve?
					</option>
					{options.map(({ value, label }, i) => (
						<option key={i} value={value}>
							{label}
						</option>
					))}
				</select>
				<button type="submit">Submit</button>
			</Form>
		</InfoPage>
	);
};

export default LetsTalk;
