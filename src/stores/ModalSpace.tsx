import { Dispatch, SetStateAction } from "react";

export namespace ModalSpace {
	export interface Props {
		children: any;
		className?: string;
		isOpen: boolean;
		setOpen: Dispatch<SetStateAction<boolean>>;
		contentLabel: string;
	}
}
