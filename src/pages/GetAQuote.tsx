import InfoPage from "@components/InfoPage";
import { FormEventHandler, useState } from "react";
import Form from "@components/Form";

const GetAQuote = () => {
	const [form, setForm] = useState({
		reason: "",
		idea: "",
		email: "",
	});

	const options = [
		"Mobile Application",
		"Web Application",
		"Workflow Automation",
		"Rapid Prototyping",
	];
	const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<InfoPage
			title="Get a quote"
			className="formpage"
			subtitle="Please submit your details and we'll email you our pricing"
		>
			<header>
				<h2>Let's get a quote</h2>
			</header>
			<Form className="form" onChange={handleChange}>
				<select name="reason" required>
					<option value="" defaultValue="true" selected hidden>
						What is the service Akto can help you with ?
					</option>
					{options.map((value, i) => (
						<option key={i} value={value}>
							{value}
						</option>
					))}
				</select>
				<textarea
					name="idea"
					placeholder="Can you give us a brief explanation of your idea/solution"
					value={form.idea}
					required
				/>

				<input name="email" type="email" placeholder="Email" value={form.email} required />

				<button type="submit">Submit</button>
			</Form>
		</InfoPage>
	);
};

export default GetAQuote;
