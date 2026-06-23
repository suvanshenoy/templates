import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export function HomePage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="text-center">This is home page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div>foo</div>
			</IonContent>
		</IonPage>
	);
}
