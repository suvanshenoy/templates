import { IonApp, setupIonicReact } from "@ionic/react";
import { HomePage } from "./pages";

setupIonicReact();

export function App() {
	return (
		<IonApp>
			<HomePage />
		</IonApp>
	);
}
