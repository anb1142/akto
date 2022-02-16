import "@styles/components/Form.scss";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form = (props: Props) => (
	<form className="form" {...props}>
		{props.children}
	</form>
);

export default Form;
