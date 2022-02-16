import Form from "@components/Form";
import useModal from "@hooks/useModal";
import { CareerSpace } from "@stores/CareerSpace";
import {
	ChangeEvent,
	Dispatch,
	FormEventHandler,
	MouseEventHandler,
	SetStateAction,
	useState,
} from "react";

type Props = {
	applying: string;
	setApplying: Dispatch<SetStateAction<string>>;
};

const CareerApply = (props: Props) => {
	const [CV, setCV] = useState("");

	const close = () => props.setApplying("");

	const { ModalView, closeModal, closeAnim } = useModal(close);

	const [form, setForm] = useState<CareerSpace.Form>({
		name: "",
		email: "",
		phone: "",
		cv: "",
	});
	const handleFileChange = (e: ChangeEvent) => {
		const { files } = e.target as HTMLInputElement;
		if (files !== null) setCV(files[0].name);
	};
	const handleFormChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: MouseEventHandler = (e) => {
		e.preventDefault();
		closeModal();
	};

	return (
		<ModalView
			isOpen={props.applying !== ""}
			close={close}
			className="careerapply"
			contentLabel="careerapply"
			closeAnim={closeAnim}
			closeModal={closeModal}
		>
			<h1>Submit Your Details</h1>
			<Form encType="multipart/form-data" onChange={handleFormChange}>
				<input type="text" name="name" placeholder="Full Name" value={form.name} />
				<input type="email" name="email" placeholder="Email" value={form.email} />
				<input type="tel" name="phone" placeholder="Phone" value={form.phone} />
				<label htmlFor="file">
					<p className={CV === "" ? `f2` : ""}>{!CV ? "Click here to Upload CV" : CV}</p>
					<input
						id="file"
						value={form.cv}
						type="file"
						name="cv"
						accept="application/pdf"
						onChange={handleFileChange}
					/>
				</label>
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</Form>
		</ModalView>
	);
};

export default CareerApply;
