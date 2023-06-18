import { f7 } from "framework7-svelte";

export function page_panic(trace_msg: string, f7router) {  // Ispired to Kernel Panic 🐧
    const error = new Error(trace_msg.concat(" Mostro un messaggio di errore."));
    console.error(error);
    f7.dialog.alert("Errore irrecuperabile. L'app verrà riportata alla pagina principale");
    f7router.navigate("/homepage/");
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}