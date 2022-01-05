import { useState } from "react";
import useModal from "@hooks/useModal";

export default function Modal() {
	const [CV, setCV] = useState(false);
	const { ModalView, closeModal } = useModal();
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		cv: "",
	});
	return (
		<ModalView className="careerapply">
			<h1>Submit Your Details</h1>
			<form
				className="form"
				encType="multipart/form-data"
				onChange={(e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
			>
				<input type="text" name="name" placeholder="Full Name" value={form.name} />
				<input type="email" name="email" placeholder="Email" value={form.email} />
				<input type="tel" name="phone" placeholder="Phone" value={form.phone} />
				<label htmlFor="file">
					<p className={CV ? `f2` : ""}>{!CV ? "Click here to Upload CV" : CV}</p>
					<input
						id="file"
						type="file"
						name="cv"
						accept="application/pdf"
						onChange={(e) => {
							setCV(e.target.files[0].name);
						}}
					/>
				</label>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						closeModal(e);
					}}
				>
					Submit
				</button>
			</form>
		</ModalView>
	);
}
