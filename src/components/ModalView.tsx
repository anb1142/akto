import "@styles/components/ModalView.scss";
import ReactModal from "react-modal";
ReactModal.setAppElement("body");

type ModalProps = {
	children: any;
	className?: string;
	contentLabel: string;
	isOpen: boolean;
	close: () => void;
	closeAnim: boolean;
	closeModal: () => void;
};

const ModalView = (props: ModalProps) => (
	<ReactModal
		isOpen={props.isOpen}
		onRequestClose={props.closeModal}
		shouldCloseOnOverlayClick={true}
		contentLabel={props.contentLabel}
		overlayClassName={`overlay ${props.closeAnim ? "close" : ""}`}
		className={`
				modal 
				${props.className ? props.className : ""} 
				${props.closeAnim ? "close" : ""}
			`}
	>
		<button onClick={props.closeModal}>×</button>
		{props.children}
	</ReactModal>
);

export default ModalView;
