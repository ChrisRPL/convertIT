import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Component, OnInit } from "@angular/core";
import * as Clipboard from "nativescript-clipboard"
import * as Toast from "nativescript-toast"






@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




    doneTap(args) {
        var myTextField = args.object;
        myTextField.dismissSoftInput();
    }


    listPickerCountries: Array<string> = ["BIN(2)", "OCT(8)", "DEC(10)", "HEX(16)"];
    selectedListPickerIndex: number = 0;
    nacisniety: number = 0;
    czy_nacisniety: boolean;
    ile_plus: number = 0;
    ile_minus: number = 0;
    ile_razy: number = 0;
    ile_dziel: number = 0;
    ile_pot: number = 0;
    ile_pierw: number = 0;
    ile_kropka: number = 0;
    potega: string = "x" + String.fromCharCode(178)
    obecny





    textFieldValue: string = "";
    ksich = ""
    textFieldValue1: string = "";
    konwerter = function (n, base) {

        if ((n < 0) && (base != '10')) {
            n = 0xFFFFFFFF + n + 1;
        }
        switch (base) {
            case '2':
                return parseInt(n, 10).toString(2);
                break;
            case '16':
                return parseInt(n, 10).toString(16);
                break;
            case '8':
                return parseInt(n, 10).toString(8);
                break;
            case '10':
                return parseInt(n, 10).toString(10);
                break;
            default:
                return ("Wrong input.........");
        }
    }

    asciiConvert = function (znak) {
        switch (znak) {

            case "65" || "101" || "41" || "1000001":
                return 'A'
                break;

            case "66" || "102" || "42" || "1000010":
                return 'B'
                break;

            case "67" || "103" || "43" || "1000011":
                return 'C'
                break;

            case "68" || "104" || "44" || "1000100":
                return 'D'
                break;

            case "69" || "105" || "45" || "1000101":
                return 'E'
                break;

            case "70" || "106" || "46" || "1000110":
                return 'F'
                break;

            case "71" || "107" || "47" || "1000111":
                return 'G'
                break;

            case "72" || "110" || "48" || "1001000":
                return 'H'
                break;

            case "73" || "111" || "49" || "1001001":
                return 'I'
                break;

            case "74" || "112" || "4A" || "1001010":
                return 'J'
                break;

            case "75" || "113" || "4B" || "1001011":
                return 'K'
                break;

            case "76" || "114" || "4C" || "1001100":
                return 'L'
                break;

            case "77" || "115" || "4D" || "1001101":
                return 'M'
                break;

            case "78" || "116" || "4E" || "1001110":
                return 'N'
                break;

            case "79" || "117" || "4F" || "1001111":
                return 'O'
                break;

            case "80" || "120" || "50" || "1010000":
                return 'P'
                break;

            case "81" || "121" || "51" || "1010001":
                return 'Q'
                break;

            case "82" || "122" || "52" || "1010010":
                return 'R'
                break;

            case "83" || "123" || "53" || "1010011":
                return 'S'
                break;

            case "84" || "124" || "54" || "1010100":
                return 'T'
                break;

            case "85" || "125" || "55" || "1010101":
                return 'U'
                break;

            case "86" || "126" || "56" || "1010110":
                return 'V'
                break;

            case "87" || "127" || "57" || "1010111":
                return 'W'
                break;

            case "88" || "130" || "58" || "1011000":
                return 'X'
                break;

            case "89" || "131" || "59" || "1011001":
                return 'Y'
                break;

            case "90" || "132" || "5A" || "1011010":
                return 'Z'
                break;

            //male litery

            case "97" || "141" || "61" || "1100001":
                return 'a'
                break;

            case "98" || "142" || "62" || "1100010":
                return 'b'
                break;

            case "99" || "143" || "63" || "1100011":
                return 'c'
                break;

            case "100" || "144" || "64" || "1100100 ":
                return 'd'
                break;

            case "101" || "145" || "65" || "1100101":
                return 'e'
                break;

            case "102" || "146" || "66" || "1100110":
                return 'f'
                break;

            case "103" || "147" || "67" || "1100111":
                return 'g'
                break;

            case "104" || "150" || "68" || "1101000":
                return 'h'
                break;

            case "105" || "151" || "69" || "1101001":
                return 'i'
                break;

            case "106" || "152" || "6A" || "1101010":
                return 'j'
                break;

            case "107" || "153" || "6B" || "1101011":
                return 'k'
                break;

            case "108" || "154" || "6C" || "1101100":
                return 'l'
                break;

            case "109" || "155" || "6D" || "1101101":
                return 'm'
                break;

            case "110" || "156" || "6E" || "1101110":
                return 'n'
                break;

            case "111" || "157" || "6F" || "1101111":
                return 'o'
                break;

            case "112" || "160" || "70" || "1110000":
                return 'p'
                break;

            case "113" || "161" || "71" || "1110001":
                return 'q'
                break;

            case "114" || "162" || "72" || "1110010":
                return 'r'
                break;

            case "115" || "163" || "73" || "1110011":
                return 's'
                break;

            case "116" || "164" || "74" || "1110100":
                return 't'
                break;

            case "117" || "165" || "75" || "1110101":
                return 'u'
                break;

            case "118" || "166" || "76" || "1110110":
                return 'v'
                break;

            case "119" || "167" || "77" || "1110111":
                return 'w'
                break;

            case "120" || "170" || "78" || "1111000":
                return 'x'
                break;

            case "121" || "171" || "79" || "1111001":
                return 'y'
                break;

            case "122" || "172" || "7A" || "1111010":
                return 'z'
                break;

            case "32" || "040" || "20" || "100000":
                return ' '
                break;

            default:
                return "Empty place or incorrect data type"
                break;


        }
    }


    pierwotny = ""
    ascii = ""

    private options = {
        title: "Data Error",
        message: "Wrong type of input data",
        okButtonText: "OK"
    };
    ascii_z = []


    private zamiana = () => {
        if ((this.selectedBarIndex == 0) && (this.selectedBarIndex1 == 0) || (this.selectedBarIndex == 1) && (this.selectedBarIndex1 == 1) ||
            (this.selectedBarIndex == 2) && (this.selectedBarIndex1 == 2) ||
            (this.selectedBarIndex == 3) && (this.selectedBarIndex1 == 3) ||
            (this.selectedBarIndex == 4) && (this.selectedBarIndex1 == 4)) {
            this.pierwotny = this.textFieldValue
            return this.pierwotny
        }
        else if ((this.selectedBarIndex == 0) && (this.selectedBarIndex1 == 1)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 2), '8')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 0) && (this.selectedBarIndex1 == 2)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 2), '10')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 0) && (this.selectedBarIndex1 == 3)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 2), '16').toLocaleUpperCase()
            if (this.pierwotny.includes("NAN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NAN"))
                return ""
            else
                return this.pierwotny


        }
        else if ((this.selectedBarIndex == 1) && (this.selectedBarIndex1 == 0)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 8), '2')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 1) && (this.selectedBarIndex1 == 2)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 8), '10')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 1) && (this.selectedBarIndex1 == 3)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 8), '16').toLocaleUpperCase()
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 2) && (this.selectedBarIndex1 == 0)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 10), '2')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 2) && (this.selectedBarIndex1 == 1)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 10), '8')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 2) && (this.selectedBarIndex1 == 3)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 10), '16').toLocaleUpperCase()
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 3) && (this.selectedBarIndex1 == 0)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 16), '2')

            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny
        }
        else if ((this.selectedBarIndex == 3) && (this.selectedBarIndex1 == 1)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 16), '8')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny

        }
        else if ((this.selectedBarIndex == 3) && (this.selectedBarIndex1 == 2)) {
            this.pierwotny = this.konwerter(parseInt(this.textFieldValue, 16), '10')
            if (this.pierwotny.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.pierwotny.includes("NaN"))
                return ""
            else
                return this.pierwotny


        }
        else if ((this.selectedBarIndex == 4) && (this.selectedBarIndex1 == 0)) {
            this.ascii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.ascii += this.textFieldValue.charCodeAt(i).toString(2) + " "
            }
            this.pierwotny = this.ascii
            return this.pierwotny

        }
        else if ((this.selectedBarIndex == 4) && (this.selectedBarIndex1 == 1)) {
            this.ascii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.ascii += this.textFieldValue.charCodeAt(i).toString(8) + " "
            }
            this.pierwotny = this.ascii
            return this.pierwotny

        }
        else if ((this.selectedBarIndex == 4) && (this.selectedBarIndex1 == 2)) {
            this.ascii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.ascii += this.textFieldValue.charCodeAt(i).toString(10) + " "
            }
            this.pierwotny = this.ascii
            return this.pierwotny

        }
        else if ((this.selectedBarIndex == 4) && (this.selectedBarIndex1 == 3)) {
            this.ascii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.ascii += this.textFieldValue.charCodeAt(i).toString(16).toLocaleUpperCase() + " "
            }
            this.pierwotny = this.ascii
            return this.pierwotny

        }
        else if ((this.selectedBarIndex == 0) && (this.selectedBarIndex1 == 4)) {
            this.ascii_z = []
            this.ascii = ""
            this.ascii_z = this.textFieldValue.split(' ')

            for (let i = 0; i < this.ascii_z.length; i++) {
                this.ascii_z[i] = this.asciiConvert(parseInt(this.ascii_z[i], 2).toString())
                this.ascii += this.ascii_z[i]
            }
            this.pierwotny = this.ascii
            return this.pierwotny


        }
        else if ((this.selectedBarIndex == 1) && (this.selectedBarIndex1 == 4)) {
            this.ascii_z = []
            this.ascii = ""
            this.ascii_z = this.textFieldValue.split(' ')

            for (let i = 0; i < this.ascii_z.length; i++) {
                this.ascii_z[i] = this.asciiConvert(parseInt(this.ascii_z[i], 8).toString())
                this.ascii += this.ascii_z[i]
            }
            this.pierwotny = this.ascii
            return this.pierwotny


        }
        else if ((this.selectedBarIndex == 2) && (this.selectedBarIndex1 == 4)) {
            this.ascii_z = []
            this.ascii = ""
            this.ascii_z = this.textFieldValue.split(' ')

            for (let i = 0; i < this.ascii_z.length; i++) {
                this.ascii_z[i] = this.asciiConvert(parseInt(this.ascii_z[i], 10).toString())
                this.ascii += this.ascii_z[i]
            }
            this.pierwotny = this.ascii
            return this.pierwotny


        }
        else if ((this.selectedBarIndex == 3) && (this.selectedBarIndex1 == 4)) {
            this.ascii_z = []
            this.ascii = ""
            this.ascii_z = this.textFieldValue.split(' ')

            for (let i = 0; i < this.ascii_z.length; i++) {
                this.ascii_z[i] = this.asciiConvert(parseInt(this.ascii_z[i], 16).toString())
                this.ascii += this.ascii_z[i]
            }
            this.pierwotny = this.ascii
            return this.pierwotny


        }




    }




    private getSegmentedBarItems = () => {
        let segmentedBarItem1 = new SegmentedBarItem();
        segmentedBarItem1.title = "BIN";
        let segmentedBarItem2 = new SegmentedBarItem();
        segmentedBarItem2.title = "OCT";
        let segmentedBarItem3 = new SegmentedBarItem();
        segmentedBarItem3.title = "DEC";
        let segmentedBarItem4 = new SegmentedBarItem();
        segmentedBarItem4.title = "HEX";
        let segmentedBarItem5 = new SegmentedBarItem();
        segmentedBarItem5.title = "ASCII Text";
        return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3, segmentedBarItem4, segmentedBarItem5];
    }
    segmentedBarItems: Array<SegmentedBarItem> = this.getSegmentedBarItems();
    selectedBarIndex: number = 0;

    private getSegmentedBarItems1 = () => {
        let segmentedBarItem1 = new SegmentedBarItem();
        segmentedBarItem1.title = "BIN";
        let segmentedBarItem2 = new SegmentedBarItem();
        segmentedBarItem2.title = "OCT";
        let segmentedBarItem3 = new SegmentedBarItem();
        segmentedBarItem3.title = "DEC";
        let segmentedBarItem4 = new SegmentedBarItem();
        segmentedBarItem4.title = "HEX";
        let segmentedBarItem5 = new SegmentedBarItem();
        segmentedBarItem5.title = "ASCII Text";
        return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3, segmentedBarItem4, segmentedBarItem5];
    }
    segmentedBarItems1: Array<SegmentedBarItem> = this.getSegmentedBarItems1();
    selectedBarIndex1: number = 0;






    wynik = ""
    tab = []
    wynik_int = 0
    pomoc = ""
    kontrola = 0

    plus(): void {

        this.nacisniety = 0
        this.ile_plus += 1
        if ((this.ile_plus > 1) || (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0)) {
            this.wynik = this.wynik
        }
        else {

            if (this.selectedListPickerIndex == 2) {
                this.tab.push(parseFloat(this.wynik).toString())
                this.tab.push("+")
                this.wynik = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString())
                this.tab.push("+")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString())
                this.tab.push("+")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString())
                this.tab.push("+")
                this.wynik = ""

            }
            this.ksich += "+"
        }

    }

    minus(): void {


        this.nacisniety = 0
        this.ile_minus += 1

        if ((this.ile_minus > 1) || (this.ile_razy != 0 || this.ile_plus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0)) {
            this.wynik = this.wynik
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(parseFloat(this.wynik).toString())
                this.tab.push("-")
                this.wynik = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString())
                this.tab.push("-")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString())
                this.tab.push("-")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString())
                this.tab.push("-")
                this.wynik = ""

            }
            this.ksich += "-"
        }

    }

    dzielenie(): void {

        this.nacisniety = 0
        this.ile_dziel += 1

        if ((this.ile_dziel > 1) || (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_plus != 0)) {
            this.wynik = this.wynik
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(parseFloat(this.wynik).toString())
                this.tab.push("/")
                this.wynik = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString())
                this.tab.push("/")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString())
                this.tab.push("/")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString())
                this.tab.push("/")
                this.wynik = ""

            }
            this.ksich += "/"
        }

    }

    mnozenie(): void {

        this.nacisniety = 0
        this.ile_razy += 1

        if ((this.ile_razy > 1) || (this.ile_plus != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0)) {
            this.wynik = this.wynik
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(parseFloat(this.wynik).toString())
                this.tab.push("*")
                this.wynik = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString())
                this.tab.push("*")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString())
                this.tab.push("*")
                this.wynik = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString())
                this.tab.push("*")
                this.wynik = ""

            }
            this.ksich += "*"
        }

    }

    rowna(): void {

        this.nacisniety = 0
        if (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0 || this.ile_plus != 0) {
            this.wynik = this.wynik
        }
        else {

            if (this.selectedListPickerIndex == 2) {
                this.tab.push(parseFloat(this.wynik).toString())
                for (let i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i]
                }

                this.wynik_int = eval(this.pomoc)
                this.wynik = this.wynik_int.toString()
                this.wynik_int = 0
                this.pomoc = ""
                this.tab = []
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString())
                for (let i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i]
                }

                this.wynik_int = eval(this.pomoc).toFixed(2)
                this.wynik = this.konwerter(this.wynik_int, "2")
                this.wynik_int = 0
                this.pomoc = ""
                this.tab = []
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString())
                for (let i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i]
                }

                this.wynik_int = eval(this.pomoc).toFixed(2)
                this.wynik = this.konwerter(this.wynik_int, "8")
                this.wynik_int = 0
                this.pomoc = ""
                this.tab = []
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString())
                for (let i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i]
                }

                this.wynik_int = eval(this.pomoc).toFixed(2)
                this.wynik = this.konwerter(this.wynik_int, "16")
                this.wynik_int = 0
                this.pomoc = ""
                this.tab = []
            }
            if (this.wynik.includes("NaN"))
                this.wynik = "WRONG TYPE OF INPUT DATA"

            this.ksich = this.wynik
        }

    }

    hex1(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "A"
            this.ksich = this.ksich + "A"
        }
    }

    hex2(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "B"
            this.ksich = this.ksich + "B"
        }
    }

    hex3(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "C"
            this.ksich = this.ksich + "C"
        }
    }



    hex4(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "D"
            this.ksich = this.ksich + "D"
        }
    }

    hex5(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "E"
            this.ksich = this.ksich + "E"
        }
    }

    hex6(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "F"
            this.ksich = this.ksich + "F"
        }
    }

    number1(): void {
        this.ile_dziel = 0
        this.ile_kropka = 0
        this.ile_minus = 0
        this.ile_plus = 0
        this.ile_pierw = 0
        this.ile_pot = 0
        this.ile_razy = 0
        this.wynik = this.wynik + "0"
        this.ksich = this.ksich + "0"
    }

    number2(): void {
        this.ile_dziel = 0
        this.ile_kropka = 0
        this.ile_minus = 0
        this.ile_plus = 0
        this.ile_pierw = 0
        this.ile_pot = 0
        this.ile_razy = 0
        this.wynik = this.wynik + "1"
        this.ksich = this.ksich + "1"
    }

    number3(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "2"
            this.ksich = this.ksich + "2"
        }
    }

    number4(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "3"
            this.ksich = this.ksich + "3"
        }
    }

    number5(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "4"
            this.ksich = this.ksich + "4"
        }
    }

    number6(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "5"
            this.ksich = this.ksich + "5"
        }
    }

    number7(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "6"
            this.ksich = this.ksich + "6"
        }
    }

    number8(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "7"
            this.ksich = this.ksich + "7"
        }
    }

    number9(): void {
        if ((this.selectedListPickerIndex == 0) || (this.selectedListPickerIndex == 1))
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "8"
            this.ksich = this.ksich + "8"
        }
    }

    number10(): void {
        if ((this.selectedListPickerIndex == 0) || (this.selectedListPickerIndex == 1))
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.ile_dziel = 0
            this.ile_kropka = 0
            this.ile_minus = 0
            this.ile_plus = 0
            this.ile_pierw = 0
            this.ile_pot = 0
            this.ile_razy = 0
            this.wynik = this.wynik + "9"
            this.ksich = this.ksich + "9"
        }
    }

    clear(): void {
        this.ile_dziel = 0
        this.ile_kropka = 0
        this.ile_minus = 0
        this.ile_plus = 0
        this.ile_pierw = 0
        this.ile_pot = 0
        this.ile_razy = 0
        this.nacisniety = 0
        this.wynik = ""
        this.wynik_int = 0;
        this.ksich = ""
    }

    pow(): void {

        this.nacisniety = 0
        if (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0 || this.ile_plus != 0) {
            this.wynik = this.wynik
        }
        else {
            if (this.selectedListPickerIndex == 0) {
                this.wynik = this.konwerter((parseInt(this.wynik, 2) * parseInt(this.wynik, 2)), "2")

            }
            else if (this.selectedListPickerIndex == 1) {
                this.wynik = this.konwerter((parseInt(this.wynik, 8) * parseInt(this.wynik, 8)), "8")
            }
            else if (this.selectedListPickerIndex == 2) {
                this.wynik = (parseFloat(this.wynik) * parseFloat(this.wynik)).toString()
            }
            else if (this.selectedListPickerIndex == 3) {
                this.wynik = (parseInt(this.konwerter((parseInt(this.wynik, 16) * parseInt(this.wynik, 16)), "16").toLocaleUpperCase(), 16).toFixed(2)).toString()
            }
            this.ksich = this.wynik
        }

    }

    sqrt(): void {

        this.nacisniety = 0
        if (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_kropka != 0 || this.ile_dziel != 0 || this.ile_plus != 0) {
            this.wynik = this.wynik
        }
        else {
            if (this.selectedListPickerIndex == 0) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 2))), "2")

            }
            else if (this.selectedListPickerIndex == 1) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 8))), "8")
            }
            else if (this.selectedListPickerIndex == 2) {
                this.wynik = (Math.sqrt(parseFloat(this.wynik))).toString()
            }
            else if (this.selectedListPickerIndex == 3) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 16))), "16").toLocaleUpperCase()
            }
            this.ksich = this.wynik
        }

    }

    sign(): void {
        this.nacisniety = this.nacisniety + 1

        if (this.nacisniety % 2 != 0) {
            this.ksich += "-"
            this.wynik += "-"
        }
        else {
            this.ksich = this.ksich.slice(0, this.ksich.length - 1)
            this.wynik = this.wynik.slice(0, this.wynik.length - 1)
        }

    }

    czysc(): void {
        this.textFieldValue = ""
    }

    dot(): void {
        this.ile_kropka += 1

        if ((this.ile_kropka > 1) || (this.ile_razy != 0 || this.ile_minus != 0 || this.ile_plus != 0 || this.ile_dziel != 0)) {
            this.wynik = this.wynik
        }
        else {
            this.ksich += "."
            this.wynik += "."
        }

    }


    delete(): void {
        this.nacisniety = 0
        if (this.wynik[this.wynik.length - 1] == "+")
            this.ile_plus = 0
        else if (this.wynik[this.wynik.length - 1] == "-")
            this.ile_minus = 0
        else if (this.wynik[this.wynik.length - 1] == "*")
            this.ile_razy = 0
        else if (this.wynik[this.wynik.length - 1] == "/")
            this.ile_dziel = 0
        else if (this.wynik[this.wynik.length - 1] == ".")
            this.ile_kropka = 0

        this.wynik = this.wynik.slice(0, this.wynik.length - 1)
        this.ksich = this.ksich.slice(0, this.ksich.length - 1)
        this.tab.pop()
    }

    public stored: string;



    public copy(value: string, message: string) {
        Clipboard.setText(value).then(() => {
            console.log("Copied `" + value + "` to the clipboard!");
        });
        Toast.makeText(message).show();
    }







    constructor() {

        exports.doneTap = this.doneTap
        this.stored = "";


    }



    ngOnInit(): void {


    }
}

