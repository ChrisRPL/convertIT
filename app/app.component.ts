import { Component } from "@angular/core";
import * as Clipboard from "nativescript-clipboard";
import * as Toast from "nativescript-toast";





@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public stored: string;

    public constructor() {
        this.stored = "";
    }

    public copy(value: string, message: string) {
        Clipboard.setText(value).then(() => {
            console.log("Copied `" + value + "` to the clipboard!");
        });
        Toast.makeText(message).show();
    }

    public paste() {
        Clipboard.getText().then((content) => {
            this.stored = content;
        });
    }



}
