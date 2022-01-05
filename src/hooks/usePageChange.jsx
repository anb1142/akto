export default function usePageChange(useEffect, pageName) {
	useEffect(() => {
		document.title = pageName;
		window.scrollTo(0, 0);
	}, []);
}
