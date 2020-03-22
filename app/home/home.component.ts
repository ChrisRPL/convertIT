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

    listPickerSystems: Array<string> = ["BIN(2)", "OCT(8)", "DEC(10)", "HEX(16)"];
    selectedListPickerIndex: number = 0;
    pickedCount: number = 0;
    ifPicked: boolean;
    plusesCount: number = 0;
    minusesCount: number = 0;
    multiplicationCount: number = 0;
    divisonCount: number = 0;
    factoryCount: number = 0;
    sqrtCount: number = 0;
    dotsCount: number = 0;
    factory: string = "x" + String.fromCharCode(178)


    textFieldValue: string = "";
    calculationsToShow = ""

    systemsConverter = function (n, base) {

        if ((n < 0) && (base != '10')) {
            n = 0xFFFFFFFF + n + 1;
        }
        switch (base) {
            case '2':
                return parseInt(n, 10).toString(2);
            case '16':
                return parseInt(n, 10).toString(16);
            case '8':
                return parseInt(n, 10).toString(8);
            case '10':
                return parseInt(n, 10).toString(10);
            default:
                return ("Wrong input.........");
        }
    }

    asciiConvert = function (strNumber) {
        switch (strNumber) {

            case "65" || "101" || "41" || "1000001":
                return 'A'

            case "66" || "102" || "42" || "1000010":
                return 'B'

            case "67" || "103" || "43" || "1000011":
                return 'C'

            case "68" || "104" || "44" || "1000100":
                return 'D'

            case "69" || "105" || "45" || "1000101":
                return 'E'

            case "70" || "106" || "46" || "1000110":
                return 'F'

            case "71" || "107" || "47" || "1000111":
                return 'G'

            case "72" || "110" || "48" || "1001000":
                return 'H'

            case "73" || "111" || "49" || "1001001":
                return 'I'

            case "74" || "112" || "4A" || "1001010":
                return 'J'

            case "75" || "113" || "4B" || "1001011":
                return 'K'

            case "76" || "114" || "4C" || "1001100":
                return 'L'

            case "77" || "115" || "4D" || "1001101":
                return 'M'

            case "78" || "116" || "4E" || "1001110":
                return 'N'

            case "79" || "117" || "4F" || "1001111":
                return 'O'

            case "80" || "120" || "50" || "1010000":
                return 'P'

            case "81" || "121" || "51" || "1010001":
                return 'Q'

            case "82" || "122" || "52" || "1010010":
                return 'R'

            case "83" || "123" || "53" || "1010011":
                return 'S'

            case "84" || "124" || "54" || "1010100":
                return 'T'

            case "85" || "125" || "55" || "1010101":
                return 'U'

            case "86" || "126" || "56" || "1010110":
                return 'V'

            case "87" || "127" || "57" || "1010111":
                return 'W'

            case "88" || "130" || "58" || "1011000":
                return 'X'

            case "89" || "131" || "59" || "1011001":
                return 'Y'

            case "90" || "132" || "5A" || "1011010":
                return 'Z'

            case "97" || "141" || "61" || "1100001":
                return 'a'

            case "98" || "142" || "62" || "1100010":
                return 'b'

            case "99" || "143" || "63" || "1100011":
                return 'c'

            case "100" || "144" || "64" || "1100100 ":
                return 'd'

            case "101" || "145" || "65" || "1100101":
                return 'e'

            case "102" || "146" || "66" || "1100110":
                return 'f'

            case "103" || "147" || "67" || "1100111":
                return 'g'

            case "104" || "150" || "68" || "1101000":
                return 'h'

            case "105" || "151" || "69" || "1101001":
                return 'i'

            case "106" || "152" || "6A" || "1101010":
                return 'j'

            case "107" || "153" || "6B" || "1101011":
                return 'k'

            case "108" || "154" || "6C" || "1101100":
                return 'l'

            case "109" || "155" || "6D" || "1101101":
                return 'm'

            case "110" || "156" || "6E" || "1101110":
                return 'n'

            case "111" || "157" || "6F" || "1101111":
                return 'o'

            case "112" || "160" || "70" || "1110000":
                return 'p'

            case "113" || "161" || "71" || "1110001":
                return 'q'

            case "114" || "162" || "72" || "1110010":
                return 'r'

            case "115" || "163" || "73" || "1110011":
                return 's'

            case "116" || "164" || "74" || "1110100":
                return 't'

            case "117" || "165" || "75" || "1110101":
                return 'u'

            case "118" || "166" || "76" || "1110110":
                return 'v'

            case "119" || "167" || "77" || "1110111":
                return 'w'
                break;

            case "120" || "170" || "78" || "1111000":
                return 'x'

            case "121" || "171" || "79" || "1111001":
                return 'y'

            case "122" || "172" || "7A" || "1111010":
                return 'z'

            case "32" || "040" || "20" || "100000":
                return ' '

            default:
                return "Empty place or incorrect data type"


        }
    }


    convertedValue = ""
    convertedAscii = ""

    private options = {
        title: "Data Error",
        message: "Wrong type of input data",
        okButtonText: "OK"
    };
    asciiToConvert = []


    private convertValue = () => {
        if ((this.selectedConvertToIndex == 0) && (this.selectedConvertFromIndex == 0) || (this.selectedConvertToIndex == 1) && (this.selectedConvertFromIndex == 1) ||
            (this.selectedConvertToIndex == 2) && (this.selectedConvertFromIndex == 2) ||
            (this.selectedConvertToIndex == 3) && (this.selectedConvertFromIndex == 3) ||
            (this.selectedConvertToIndex == 4) && (this.selectedConvertFromIndex == 4)) {
            this.convertedValue = this.textFieldValue
            return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 0) && (this.selectedConvertFromIndex == 1)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 2), '8')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 0) && (this.selectedConvertFromIndex == 2)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 2), '10')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 0) && (this.selectedConvertFromIndex == 3)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 2), '16').toLocaleUpperCase()
            if (this.convertedValue.includes("NAN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NAN"))
                return ""
            else
                return this.convertedValue


        }
        else if ((this.selectedConvertToIndex == 1) && (this.selectedConvertFromIndex == 0)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 8), '2')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 1) && (this.selectedConvertFromIndex == 2)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 8), '10')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 1) && (this.selectedConvertFromIndex == 3)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 8), '16').toLocaleUpperCase()
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 2) && (this.selectedConvertFromIndex == 0)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 10), '2')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 2) && (this.selectedConvertFromIndex == 1)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 10), '8')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 2) && (this.selectedConvertFromIndex == 3)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 10), '16').toLocaleUpperCase()
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 3) && (this.selectedConvertFromIndex == 0)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 16), '2')

            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue
        }
        else if ((this.selectedConvertToIndex == 3) && (this.selectedConvertFromIndex == 1)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 16), '8')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue

        }
        else if ((this.selectedConvertToIndex == 3) && (this.selectedConvertFromIndex == 2)) {
            this.convertedValue = this.systemsConverter(parseInt(this.textFieldValue, 16), '10')
            if (this.convertedValue.includes("NaN") && this.textFieldValue != "")
                alert(this.options)
            else if (this.convertedValue.includes("NaN"))
                return ""
            else
                return this.convertedValue


        }
        else if ((this.selectedConvertToIndex == 4) && (this.selectedConvertFromIndex == 0)) {
            this.convertedAscii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.convertedAscii += this.textFieldValue.charCodeAt(i).toString(2) + " "
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue

        }
        else if ((this.selectedConvertToIndex == 4) && (this.selectedConvertFromIndex == 1)) {
            this.convertedAscii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.convertedAscii += this.textFieldValue.charCodeAt(i).toString(8) + " "
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue

        }
        else if ((this.selectedConvertToIndex == 4) && (this.selectedConvertFromIndex == 2)) {
            this.convertedAscii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.convertedAscii += this.textFieldValue.charCodeAt(i).toString(10) + " "
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue

        }
        else if ((this.selectedConvertToIndex == 4) && (this.selectedConvertFromIndex == 3)) {
            this.convertedAscii = ""
            for (let i = 0; i < this.textFieldValue.length; i++) {
                this.convertedAscii += this.textFieldValue.charCodeAt(i).toString(16).toLocaleUpperCase() + " "
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue

        }
        else if ((this.selectedConvertToIndex == 0) && (this.selectedConvertFromIndex == 4)) {
            this.asciiToConvert = []
            this.convertedAscii = ""
            this.asciiToConvert = this.textFieldValue.split(' ')

            for (let i = 0; i < this.asciiToConvert.length; i++) {
                this.asciiToConvert[i] = this.asciiConvert(parseInt(this.asciiToConvert[i], 2).toString())
                this.convertedAscii += this.asciiToConvert[i]
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue


        }
        else if ((this.selectedConvertToIndex == 1) && (this.selectedConvertFromIndex == 4)) {
            this.asciiToConvert = []
            this.convertedAscii = ""
            this.asciiToConvert = this.textFieldValue.split(' ')

            for (let i = 0; i < this.asciiToConvert.length; i++) {
                this.asciiToConvert[i] = this.asciiConvert(parseInt(this.asciiToConvert[i], 8).toString())
                this.convertedAscii += this.asciiToConvert[i]
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue


        }
        else if ((this.selectedConvertToIndex == 2) && (this.selectedConvertFromIndex == 4)) {
            this.asciiToConvert = []
            this.convertedAscii = ""
            this.asciiToConvert = this.textFieldValue.split(' ')

            for (let i = 0; i < this.asciiToConvert.length; i++) {
                this.asciiToConvert[i] = this.asciiConvert(parseInt(this.asciiToConvert[i], 10).toString())
                this.convertedAscii += this.asciiToConvert[i]
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue


        }
        else if ((this.selectedConvertToIndex == 3) && (this.selectedConvertFromIndex == 4)) {
            this.asciiToConvert = []
            this.convertedAscii = ""
            this.asciiToConvert = this.textFieldValue.split(' ')

            for (let i = 0; i < this.asciiToConvert.length; i++) {
                this.asciiToConvert[i] = this.asciiConvert(parseInt(this.asciiToConvert[i], 16).toString())
                this.convertedAscii += this.asciiToConvert[i]
            }
            this.convertedValue = this.convertedAscii
            return this.convertedValue
        }
    }




    private convertToBar = () => {
        let convertToBinaryItem = new SegmentedBarItem();
        convertToBinaryItem.title = "BIN";
        let convertToOctalItem = new SegmentedBarItem();
        convertToOctalItem.title = "OCT";
        let convertToDecimalItem = new SegmentedBarItem();
        convertToDecimalItem.title = "DEC";
        let convertToHexItem = new SegmentedBarItem();
        convertToHexItem.title = "HEX";
        let convertToAsciiItem = new SegmentedBarItem();
        convertToAsciiItem.title = "ASCII Text";
        return [convertToBinaryItem, convertToOctalItem, convertToDecimalItem, convertToHexItem, convertToAsciiItem];
    }
    convertToBarItems: Array<SegmentedBarItem> = this.convertToBar();
    selectedConvertToIndex: number = 0;

    private convertFromBar = () => {
        let convertFromBinaryItem = new SegmentedBarItem();
        convertFromBinaryItem.title = "BIN";
        let convertFromOctalItem = new SegmentedBarItem();
        convertFromOctalItem.title = "OCT";
        let convertFromDecimalItem = new SegmentedBarItem();
        convertFromDecimalItem.title = "DEC";
        let convertFromHexItem = new SegmentedBarItem();
        convertFromHexItem.title = "HEX";
        let convertFromAsciiItem = new SegmentedBarItem();
        convertFromAsciiItem.title = "ASCII Text";
        return [convertFromBinaryItem, convertFromOctalItem, convertFromDecimalItem, convertFromHexItem, convertFromAsciiItem];
    }
    convertFromBarItems: Array<SegmentedBarItem> = this.convertFromBar();
    selectedConvertFromIndex: number = 0;


    hiddenScoreToCalculate = ""
    calculationsHelpTab = []
    hiddenScoreToCalculate_int = 0
    calculationsHelpStr = ""

    add(): void {

        this.pickedCount = 0
        this.plusesCount += 1
        if ((this.plusesCount > 1) || (this.multiplicationCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0)) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {

            if (this.selectedListPickerIndex == 2) {
                this.calculationsHelpTab.push(parseFloat(this.hiddenScoreToCalculate).toString())
                this.calculationsHelpTab.push("+")
                this.hiddenScoreToCalculate = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 2).toString())
                this.calculationsHelpTab.push("+")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 8).toString())
                this.calculationsHelpTab.push("+")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 16).toString())
                this.calculationsHelpTab.push("+")
                this.hiddenScoreToCalculate = ""

            }
            this.calculationsToShow += "+"
        }

    }

    subtract(): void {


        this.pickedCount = 0
        this.minusesCount += 1

        if ((this.minusesCount > 1) || (this.multiplicationCount != 0 || this.plusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0)) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.calculationsHelpTab.push(parseFloat(this.hiddenScoreToCalculate).toString())
                this.calculationsHelpTab.push("-")
                this.hiddenScoreToCalculate = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 2).toString())
                this.calculationsHelpTab.push("-")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 8).toString())
                this.calculationsHelpTab.push("-")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 16).toString())
                this.calculationsHelpTab.push("-")
                this.hiddenScoreToCalculate = ""

            }
            this.calculationsToShow += "-"
        }

    }

    divide(): void {

        this.pickedCount = 0
        this.divisonCount += 1

        if ((this.divisonCount > 1) || (this.multiplicationCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.plusesCount != 0)) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.calculationsHelpTab.push(parseFloat(this.hiddenScoreToCalculate).toString())
                this.calculationsHelpTab.push("/")
                this.hiddenScoreToCalculate = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 2).toString())
                this.calculationsHelpTab.push("/")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 8).toString())
                this.calculationsHelpTab.push("/")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 16).toString())
                this.calculationsHelpTab.push("/")
                this.hiddenScoreToCalculate = ""

            }
            this.calculationsToShow += "/"
        }

    }

    multiply(): void {

        this.pickedCount = 0
        this.multiplicationCount += 1

        if ((this.multiplicationCount > 1) || (this.plusesCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0)) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            if (this.selectedListPickerIndex == 2) {
                this.calculationsHelpTab.push(parseFloat(this.hiddenScoreToCalculate).toString())
                this.calculationsHelpTab.push("*")
                this.hiddenScoreToCalculate = ""
            }
            else if (this.selectedListPickerIndex == 0) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 2).toString())
                this.calculationsHelpTab.push("*")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 1) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 8).toString())
                this.calculationsHelpTab.push("*")
                this.hiddenScoreToCalculate = ""

            }
            else if (this.selectedListPickerIndex == 3) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 16).toString())
                this.calculationsHelpTab.push("*")
                this.hiddenScoreToCalculate = ""

            }
            this.calculationsToShow += "*"
        }

    }

    getScore(): void {

        this.pickedCount = 0
        if (this.multiplicationCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0 || this.plusesCount != 0) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {

            if (this.selectedListPickerIndex == 2) {
                this.calculationsHelpTab.push(parseFloat(this.hiddenScoreToCalculate).toString())
                for (let i = 0; i < this.calculationsHelpTab.length; i++) {
                    this.calculationsHelpStr += this.calculationsHelpTab[i]
                }

                this.hiddenScoreToCalculate_int = eval(this.calculationsHelpStr)
                this.hiddenScoreToCalculate = this.hiddenScoreToCalculate_int.toString()
                this.hiddenScoreToCalculate_int = 0
                this.calculationsHelpStr = ""
                this.calculationsHelpTab = []
            }
            else if (this.selectedListPickerIndex == 0) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 2).toString())
                for (let i = 0; i < this.calculationsHelpTab.length; i++) {
                    this.calculationsHelpStr += this.calculationsHelpTab[i]
                }

                this.hiddenScoreToCalculate_int = eval(this.calculationsHelpStr).toFixed(2)
                this.hiddenScoreToCalculate = this.systemsConverter(this.hiddenScoreToCalculate_int, "2")
                this.hiddenScoreToCalculate_int = 0
                this.calculationsHelpStr = ""
                this.calculationsHelpTab = []
            }
            else if (this.selectedListPickerIndex == 1) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 8).toString())
                for (let i = 0; i < this.calculationsHelpTab.length; i++) {
                    this.calculationsHelpStr += this.calculationsHelpTab[i]
                }

                this.hiddenScoreToCalculate_int = eval(this.calculationsHelpStr).toFixed(2)
                this.hiddenScoreToCalculate = this.systemsConverter(this.hiddenScoreToCalculate_int, "8")
                this.hiddenScoreToCalculate_int = 0
                this.calculationsHelpStr = ""
                this.calculationsHelpTab = []
            }
            else if (this.selectedListPickerIndex == 3) {
                this.calculationsHelpTab.push(parseInt(this.hiddenScoreToCalculate, 16).toString())
                for (let i = 0; i < this.calculationsHelpTab.length; i++) {
                    this.calculationsHelpStr += this.calculationsHelpTab[i]
                }

                this.hiddenScoreToCalculate_int = eval(this.calculationsHelpStr).toFixed(2)
                this.hiddenScoreToCalculate = this.systemsConverter(this.hiddenScoreToCalculate_int, "16")
                this.hiddenScoreToCalculate_int = 0
                this.calculationsHelpStr = ""
                this.calculationsHelpTab = []
            }
            if (this.hiddenScoreToCalculate.includes("NaN"))
                this.hiddenScoreToCalculate = "WRONG TYPE OF INPUT DATA"

            this.calculationsToShow = this.hiddenScoreToCalculate
        }

    }

    addHexValueA(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "A"
            this.calculationsToShow = this.calculationsToShow + "A"
        }
    }

    addHexValueB(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "B"
            this.calculationsToShow = this.calculationsToShow + "B"
        }
    }

    addHexValueC(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "C"
            this.calculationsToShow = this.calculationsToShow + "C"
        }
    }



    addHexValueD(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "D"
            this.calculationsToShow = this.calculationsToShow + "D"
        }
    }

    addHexValueE(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "E"
            this.calculationsToShow = this.calculationsToShow + "E"
        }
    }

    addHexValueF(): void {
        if (this.selectedListPickerIndex != 3)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "F"
            this.calculationsToShow = this.calculationsToShow + "F"
        }
    }

    number1(): void {
        this.divisonCount = 0
        this.dotsCount = 0
        this.minusesCount = 0
        this.plusesCount = 0
        this.sqrtCount = 0
        this.factoryCount = 0
        this.multiplicationCount = 0
        this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "0"
        this.calculationsToShow = this.calculationsToShow + "0"
    }

    number2(): void {
        this.divisonCount = 0
        this.dotsCount = 0
        this.minusesCount = 0
        this.plusesCount = 0
        this.sqrtCount = 0
        this.factoryCount = 0
        this.multiplicationCount = 0
        this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "1"
        this.calculationsToShow = this.calculationsToShow + "1"
    }

    number3(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "2"
            this.calculationsToShow = this.calculationsToShow + "2"
        }
    }

    number4(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "3"
            this.calculationsToShow = this.calculationsToShow + "3"
        }
    }

    number5(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "4"
            this.calculationsToShow = this.calculationsToShow + "4"
        }
    }

    number6(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "5"
            this.calculationsToShow = this.calculationsToShow + "5"
        }
    }

    number7(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "6"
            this.calculationsToShow = this.calculationsToShow + "6"
        }
    }

    number8(): void {
        if (this.selectedListPickerIndex == 0)
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "7"
            this.calculationsToShow = this.calculationsToShow + "7"
        }
    }

    number9(): void {
        if ((this.selectedListPickerIndex == 0) || (this.selectedListPickerIndex == 1))
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "8"
            this.calculationsToShow = this.calculationsToShow + "8"
        }
    }

    number10(): void {
        if ((this.selectedListPickerIndex == 0) || (this.selectedListPickerIndex == 1))
            Toast.makeText("Incorrect system chosen!").show();
        else {
            this.divisonCount = 0
            this.dotsCount = 0
            this.minusesCount = 0
            this.plusesCount = 0
            this.sqrtCount = 0
            this.factoryCount = 0
            this.multiplicationCount = 0
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate + "9"
            this.calculationsToShow = this.calculationsToShow + "9"
        }
    }

    clear(): void {
        this.divisonCount = 0
        this.dotsCount = 0
        this.minusesCount = 0
        this.plusesCount = 0
        this.sqrtCount = 0
        this.factoryCount = 0
        this.multiplicationCount = 0
        this.pickedCount = 0
        this.hiddenScoreToCalculate = ""
        this.hiddenScoreToCalculate_int = 0;
        this.calculationsToShow = ""
    }

    pow(): void {

        this.pickedCount = 0
        if (this.multiplicationCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0 || this.plusesCount != 0) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            if (this.selectedListPickerIndex == 0) {
                this.hiddenScoreToCalculate = this.systemsConverter((parseInt(this.hiddenScoreToCalculate, 2) * parseInt(this.hiddenScoreToCalculate, 2)), "2")

            }
            else if (this.selectedListPickerIndex == 1) {
                this.hiddenScoreToCalculate = this.systemsConverter((parseInt(this.hiddenScoreToCalculate, 8) * parseInt(this.hiddenScoreToCalculate, 8)), "8")
            }
            else if (this.selectedListPickerIndex == 2) {
                this.hiddenScoreToCalculate = (parseFloat(this.hiddenScoreToCalculate) * parseFloat(this.hiddenScoreToCalculate)).toString()
            }
            else if (this.selectedListPickerIndex == 3) {
                this.hiddenScoreToCalculate = (parseInt(this.systemsConverter((parseInt(this.hiddenScoreToCalculate, 16) * parseInt(this.hiddenScoreToCalculate, 16)), "16").toLocaleUpperCase(), 16).toFixed(2)).toString()
            }
            this.calculationsToShow = this.hiddenScoreToCalculate
        }

    }

    sqrt(): void {

        this.pickedCount = 0
        if (this.multiplicationCount != 0 || this.minusesCount != 0 || this.dotsCount != 0 || this.divisonCount != 0 || this.plusesCount != 0) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            if (this.selectedListPickerIndex == 0) {
                this.hiddenScoreToCalculate = this.systemsConverter((Math.sqrt(parseInt(this.hiddenScoreToCalculate, 2))), "2")

            }
            else if (this.selectedListPickerIndex == 1) {
                this.hiddenScoreToCalculate = this.systemsConverter((Math.sqrt(parseInt(this.hiddenScoreToCalculate, 8))), "8")
            }
            else if (this.selectedListPickerIndex == 2) {
                this.hiddenScoreToCalculate = (Math.sqrt(parseFloat(this.hiddenScoreToCalculate))).toString()
            }
            else if (this.selectedListPickerIndex == 3) {
                this.hiddenScoreToCalculate = this.systemsConverter((Math.sqrt(parseInt(this.hiddenScoreToCalculate, 16))), "16").toLocaleUpperCase()
            }
            this.calculationsToShow = this.hiddenScoreToCalculate
        }

    }

    sign(): void {
        this.pickedCount = this.pickedCount + 1

        if (this.pickedCount % 2 != 0) {
            this.calculationsToShow += "-"
            this.hiddenScoreToCalculate += "-"
        }
        else {
            this.calculationsToShow = this.calculationsToShow.slice(0, this.calculationsToShow.length - 1)
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate.slice(0, this.hiddenScoreToCalculate.length - 1)
        }

    }

    clearTextField(): void {
        this.textFieldValue = ""
    }

    dot(): void {
        this.dotsCount += 1

        if ((this.dotsCount > 1) || (this.multiplicationCount != 0 || this.minusesCount != 0 || this.plusesCount != 0 || this.divisonCount != 0)) {
            this.hiddenScoreToCalculate = this.hiddenScoreToCalculate
        }
        else {
            this.calculationsToShow += "."
            this.hiddenScoreToCalculate += "."
        }

    }


    delete(): void {
        this.pickedCount = 0
        if (this.hiddenScoreToCalculate[this.hiddenScoreToCalculate.length - 1] == "+")
            this.plusesCount = 0
        else if (this.hiddenScoreToCalculate[this.hiddenScoreToCalculate.length - 1] == "-")
            this.minusesCount = 0
        else if (this.hiddenScoreToCalculate[this.hiddenScoreToCalculate.length - 1] == "*")
            this.multiplicationCount = 0
        else if (this.hiddenScoreToCalculate[this.hiddenScoreToCalculate.length - 1] == "/")
            this.divisonCount = 0
        else if (this.hiddenScoreToCalculate[this.hiddenScoreToCalculate.length - 1] == ".")
            this.dotsCount = 0

        this.hiddenScoreToCalculate = this.hiddenScoreToCalculate.slice(0, this.hiddenScoreToCalculate.length - 1)
        this.calculationsToShow = this.calculationsToShow.slice(0, this.calculationsToShow.length - 1)
        this.calculationsHelpTab.pop()
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

