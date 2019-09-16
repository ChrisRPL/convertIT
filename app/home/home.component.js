"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
var core_1 = require("@angular/core");
var Clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toast");
var animations_1 = require("@angular/animations");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.listPickerCountries = ["2", "8", "10", "16"];
        this.selectedListPickerIndex = 0;
        this.nacisniety = 0;
        this.textFieldValue = "";
        this.ksich = "";
        this.textFieldValue1 = "";
        this.konwerter = function (n, base) {
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
        };
        this.asciiConvert = function (znak) {
            switch (znak) {
                case "65" || "101" || "41" || "1000001":
                    return 'A';
                    break;
                case "66" || "102" || "42" || "1000010":
                    return 'B';
                    break;
                case "67" || "103" || "43" || "1000011":
                    return 'C';
                    break;
                case "68" || "104" || "44" || "1000100":
                    return 'D';
                    break;
                case "69" || "105" || "45" || "1000101":
                    return 'E';
                    break;
                case "70" || "106" || "46" || "1000110":
                    return 'F';
                    break;
                case "71" || "107" || "47" || "1000111":
                    return 'G';
                    break;
                case "72" || "110" || "48" || "1001000":
                    return 'H';
                    break;
                case "73" || "111" || "49" || "1001001":
                    return 'I';
                    break;
                case "74" || "112" || "4A" || "1001010":
                    return 'J';
                    break;
                case "75" || "113" || "4B" || "1001011":
                    return 'K';
                    break;
                case "76" || "114" || "4C" || "1001100":
                    return 'L';
                    break;
                case "77" || "115" || "4D" || "1001101":
                    return 'M';
                    break;
                case "78" || "116" || "4E" || "1001110":
                    return 'N';
                    break;
                case "79" || "117" || "4F" || "1001111":
                    return 'O';
                    break;
                case "80" || "120" || "50" || "1010000":
                    return 'P';
                    break;
                case "81" || "121" || "51" || "1010001":
                    return 'Q';
                    break;
                case "82" || "122" || "52" || "1010010":
                    return 'R';
                    break;
                case "83" || "123" || "53" || "1010011":
                    return 'S';
                    break;
                case "84" || "124" || "54" || "1010100":
                    return 'T';
                    break;
                case "85" || "125" || "55" || "1010101":
                    return 'U';
                    break;
                case "86" || "126" || "56" || "1010110":
                    return 'V';
                    break;
                case "87" || "127" || "57" || "1010111":
                    return 'W';
                    break;
                case "88" || "130" || "58" || "1011000":
                    return 'X';
                    break;
                case "89" || "131" || "59" || "1011001":
                    return 'Y';
                    break;
                case "90" || "132" || "5A" || "1011010":
                    return 'Z';
                    break;
                //male litery
                case "97" || "141" || "61" || "1100001":
                    return 'a';
                    break;
                case "98" || "142" || "62" || "1100010":
                    return 'b';
                    break;
                case "99" || "143" || "63" || "1100011":
                    return 'c';
                    break;
                case "100" || "144" || "64" || "1100100 ":
                    return 'd';
                    break;
                case "101" || "145" || "65" || "1100101":
                    return 'e';
                    break;
                case "102" || "146" || "66" || "1100110":
                    return 'f';
                    break;
                case "103" || "147" || "67" || "1100111":
                    return 'g';
                    break;
                case "104" || "150" || "68" || "1101000":
                    return 'h';
                    break;
                case "105" || "151" || "69" || "1101001":
                    return 'i';
                    break;
                case "106" || "152" || "6A" || "1101010":
                    return 'j';
                    break;
                case "107" || "153" || "6B" || "1101011":
                    return 'k';
                    break;
                case "108" || "154" || "6C" || "1101100":
                    return 'l';
                    break;
                case "109" || "155" || "6D" || "1101101":
                    return 'm';
                    break;
                case "110" || "156" || "6E" || "1101110":
                    return 'n';
                    break;
                case "111" || "157" || "6F" || "1101111":
                    return 'o';
                    break;
                case "112" || "160" || "70" || "1110000":
                    return 'p';
                    break;
                case "113" || "161" || "71" || "1110001":
                    return 'q';
                    break;
                case "114" || "162" || "72" || "1110010":
                    return 'r';
                    break;
                case "115" || "163" || "73" || "1110011":
                    return 's';
                    break;
                case "116" || "164" || "74" || "1110100":
                    return 't';
                    break;
                case "117" || "165" || "75" || "1110101":
                    return 'u';
                    break;
                case "118" || "166" || "76" || "1110110":
                    return 'v';
                    break;
                case "119" || "167" || "77" || "1110111":
                    return 'w';
                    break;
                case "120" || "170" || "78" || "1111000":
                    return 'x';
                    break;
                case "121" || "171" || "79" || "1111001":
                    return 'y';
                    break;
                case "122" || "172" || "7A" || "1111010":
                    return 'z';
                    break;
                case "32" || "040" || "20" || "100000":
                    return ' ';
                    break;
                default:
                    return "Wrong type of in put data";
                    break;
            }
        };
        this.pierwotny = "";
        this.ascii = "";
        this.options = {
            title: "Data Error",
            message: "Wrong type of input data",
            okButtonText: "OK"
        };
        this.ascii_z = [];
        this.zamiana = function () {
            if ((_this.selectedBarIndex == 0) && (_this.selectedBarIndex1 == 0) || (_this.selectedBarIndex == 1) && (_this.selectedBarIndex1 == 1) ||
                (_this.selectedBarIndex == 2) && (_this.selectedBarIndex1 == 2) ||
                (_this.selectedBarIndex == 3) && (_this.selectedBarIndex1 == 3) ||
                (_this.selectedBarIndex == 4) && (_this.selectedBarIndex1 == 4)) {
                _this.pierwotny = _this.textFieldValue;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 0) && (_this.selectedBarIndex1 == 1)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 2), '8');
                if (_this.pierwotny.includes("NaN") && _this.textFieldValue != "")
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 0) && (_this.selectedBarIndex1 == 2)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 2), '10');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 0) && (_this.selectedBarIndex1 == 3)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 2), '16').toLocaleUpperCase();
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 1) && (_this.selectedBarIndex1 == 0)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 8), '2');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 1) && (_this.selectedBarIndex1 == 2)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 8), '10');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 1) && (_this.selectedBarIndex1 == 3)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 8), '16').toLocaleUpperCase();
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 2) && (_this.selectedBarIndex1 == 0)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 10), '2');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 2) && (_this.selectedBarIndex1 == 1)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 10), '8');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 2) && (_this.selectedBarIndex1 == 3)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 10), '16').toLocaleUpperCase();
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 3) && (_this.selectedBarIndex1 == 0)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 16), '2');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 3) && (_this.selectedBarIndex1 == 1)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 16), '8');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 3) && (_this.selectedBarIndex1 == 2)) {
                _this.pierwotny = _this.konwerter(parseInt(_this.textFieldValue, 16), '10');
                if (_this.pierwotny.includes("NaN"))
                    alert(_this.options);
                else
                    return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 4) && (_this.selectedBarIndex1 == 0)) {
                _this.ascii = "";
                for (var i = 0; i < _this.textFieldValue.length; i++) {
                    _this.ascii += _this.textFieldValue.charCodeAt(i).toString(2) + " ";
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 4) && (_this.selectedBarIndex1 == 1)) {
                _this.ascii = "";
                for (var i = 0; i < _this.textFieldValue.length; i++) {
                    _this.ascii += _this.textFieldValue.charCodeAt(i).toString(8) + " ";
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 4) && (_this.selectedBarIndex1 == 2)) {
                _this.ascii = "";
                for (var i = 0; i < _this.textFieldValue.length; i++) {
                    _this.ascii += _this.textFieldValue.charCodeAt(i).toString(10) + " ";
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 4) && (_this.selectedBarIndex1 == 3)) {
                _this.ascii = "";
                for (var i = 0; i < _this.textFieldValue.length; i++) {
                    _this.ascii += _this.textFieldValue.charCodeAt(i).toString(16).toLocaleUpperCase() + " ";
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 0) && (_this.selectedBarIndex1 == 4)) {
                _this.ascii_z = [];
                _this.ascii = "";
                _this.ascii_z = _this.textFieldValue.split(' ');
                for (var i = 0; i < _this.ascii_z.length; i++) {
                    _this.ascii_z[i] = _this.asciiConvert(parseInt(_this.ascii_z[i], 2).toString());
                    _this.ascii += _this.ascii_z[i];
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 1) && (_this.selectedBarIndex1 == 4)) {
                _this.ascii_z = [];
                _this.ascii = "";
                _this.ascii_z = _this.textFieldValue.split(' ');
                for (var i = 0; i < _this.ascii_z.length; i++) {
                    _this.ascii_z[i] = _this.asciiConvert(parseInt(_this.ascii_z[i], 8).toString());
                    _this.ascii += _this.ascii_z[i];
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 2) && (_this.selectedBarIndex1 == 4)) {
                _this.ascii_z = [];
                _this.ascii = "";
                _this.ascii_z = _this.textFieldValue.split(' ');
                for (var i = 0; i < _this.ascii_z.length; i++) {
                    _this.ascii_z[i] = _this.asciiConvert(parseInt(_this.ascii_z[i], 10).toString());
                    _this.ascii += _this.ascii_z[i];
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
            else if ((_this.selectedBarIndex == 3) && (_this.selectedBarIndex1 == 4)) {
                _this.ascii_z = [];
                _this.ascii = "";
                _this.ascii_z = _this.textFieldValue.split(' ');
                for (var i = 0; i < _this.ascii_z.length; i++) {
                    _this.ascii_z[i] = _this.asciiConvert(parseInt(_this.ascii_z[i], 16).toString());
                    _this.ascii += _this.ascii_z[i];
                }
                _this.pierwotny = _this.ascii;
                return _this.pierwotny;
            }
        };
        this.getSegmentedBarItems = function () {
            var segmentedBarItem1 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem1.title = "BIN";
            var segmentedBarItem2 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem2.title = "OCT";
            var segmentedBarItem3 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem3.title = "DEC";
            var segmentedBarItem4 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem4.title = "HEX";
            var segmentedBarItem5 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem5.title = "ASCII Text";
            return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3, segmentedBarItem4, segmentedBarItem5];
        };
        this.segmentedBarItems = this.getSegmentedBarItems();
        this.selectedBarIndex = 0;
        this.getSegmentedBarItems1 = function () {
            var segmentedBarItem1 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem1.title = "BIN";
            var segmentedBarItem2 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem2.title = "OCT";
            var segmentedBarItem3 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem3.title = "DEC";
            var segmentedBarItem4 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem4.title = "HEX";
            var segmentedBarItem5 = new segmented_bar_1.SegmentedBarItem();
            segmentedBarItem5.title = "ASCII Text";
            return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3, segmentedBarItem4, segmentedBarItem5];
        };
        this.segmentedBarItems1 = this.getSegmentedBarItems1();
        this.selectedBarIndex1 = 0;
        this.wynik = "";
        this.tab = [];
        this.wynik_int = 0;
        this.pomoc = "";
        this.kontrola = 0;
        exports.doneTap = this.doneTap;
        this.stored = "";
    }
    HomeComponent.prototype.doneTap = function (args) {
        var myTextField = args.object;
        myTextField.dismissSoftInput();
    };
    HomeComponent.prototype.plus = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/" || this.tab[this.tab.length - 1] == ".") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(this.wynik);
                this.tab.push("+");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString());
                this.tab.push("+");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString());
                this.tab.push("+");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString());
                this.tab.push("+");
                this.wynik = "";
            }
            this.ksich += "+";
        }
    };
    HomeComponent.prototype.minus = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(this.wynik);
                this.tab.push("-");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString());
                this.tab.push("-");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString());
                this.tab.push("-");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString());
                this.tab.push("-");
                this.wynik = "";
            }
            this.ksich += "-";
        }
    };
    HomeComponent.prototype.dzielenie = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(this.wynik);
                this.tab.push("/");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString());
                this.tab.push("/");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString());
                this.tab.push("/");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString());
                this.tab.push("/");
                this.wynik = "";
            }
            this.ksich += "/";
        }
    };
    HomeComponent.prototype.mnozenie = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(this.wynik);
                this.tab.push("*");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString());
                this.tab.push("*");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString());
                this.tab.push("*");
                this.wynik = "";
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString());
                this.tab.push("*");
                this.wynik = "";
            }
            this.ksich += "*";
        }
    };
    HomeComponent.prototype.rowna = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 2) {
                this.tab.push(this.wynik);
                for (var i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i];
                }
                this.wynik_int = eval(this.pomoc);
                this.wynik = this.wynik_int.toString();
                this.wynik_int = 0;
                this.pomoc = "";
                this.tab = [];
            }
            else if (this.selectedListPickerIndex == 0) {
                this.tab.push(parseInt(this.wynik, 2).toString());
                for (var i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i];
                }
                this.wynik_int = eval(this.pomoc).toFixed(2);
                this.wynik = this.konwerter(this.wynik_int, "2");
                this.wynik_int = 0;
                this.pomoc = "";
                this.tab = [];
            }
            else if (this.selectedListPickerIndex == 1) {
                this.tab.push(parseInt(this.wynik, 8).toString());
                for (var i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i];
                }
                this.wynik_int = eval(this.pomoc).toFixed(2);
                this.wynik = this.konwerter(this.wynik_int, "8");
                this.wynik_int = 0;
                this.pomoc = "";
                this.tab = [];
            }
            else if (this.selectedListPickerIndex == 3) {
                this.tab.push(parseInt(this.wynik, 16).toString());
                for (var i = 0; i < this.tab.length; i++) {
                    this.pomoc += this.tab[i];
                }
                this.wynik_int = eval(this.pomoc).toFixed(2);
                this.wynik = this.konwerter(this.wynik_int, "16");
                this.wynik_int = 0;
                this.pomoc = "";
                this.tab = [];
            }
            if (this.wynik.includes("NaN"))
                this.wynik = "WRONG TYPE OF INPUT DATA";
            this.ksich = this.wynik;
        }
    };
    HomeComponent.prototype.hex1 = function () {
        this.wynik = this.wynik + "A";
        this.ksich = this.ksich + "A";
    };
    HomeComponent.prototype.hex2 = function () {
        this.wynik = this.wynik + "B";
        this.ksich = this.ksich + "B";
    };
    HomeComponent.prototype.hex3 = function () {
        this.wynik = this.wynik + "C";
        this.ksich = this.ksich + "C";
    };
    HomeComponent.prototype.hex4 = function () {
        this.wynik = this.wynik + "D";
        this.ksich = this.ksich + "D";
    };
    HomeComponent.prototype.hex5 = function () {
        this.wynik = this.wynik + "E";
        this.ksich = this.ksich + "E";
    };
    HomeComponent.prototype.hex6 = function () {
        this.wynik = this.wynik + "F";
        this.ksich = this.ksich + "F";
    };
    HomeComponent.prototype.number1 = function () {
        this.wynik = this.wynik + "0";
        this.ksich = this.ksich + "0";
    };
    HomeComponent.prototype.number2 = function () {
        this.wynik = this.wynik + "1";
        this.ksich = this.ksich + "1";
    };
    HomeComponent.prototype.number3 = function () {
        this.wynik = this.wynik + "2";
        this.ksich = this.ksich + "2";
    };
    HomeComponent.prototype.number4 = function () {
        this.wynik = this.wynik + "3";
        this.ksich = this.ksich + "3";
    };
    HomeComponent.prototype.number5 = function () {
        this.wynik = this.wynik + "4";
        this.ksich = this.ksich + "4";
    };
    HomeComponent.prototype.number6 = function () {
        this.wynik = this.wynik + "5";
        this.ksich = this.ksich + "5";
    };
    HomeComponent.prototype.number7 = function () {
        this.wynik = this.wynik + "6";
        this.ksich = this.ksich + "6";
    };
    HomeComponent.prototype.number8 = function () {
        this.wynik = this.wynik + "7";
        this.ksich = this.ksich + "7";
    };
    HomeComponent.prototype.number9 = function () {
        this.wynik = this.wynik + "8";
        this.ksich = this.ksich + "8";
    };
    HomeComponent.prototype.number10 = function () {
        this.wynik = this.wynik + "9";
        this.ksich = this.ksich + "9";
    };
    HomeComponent.prototype.clear = function () {
        this.nacisniety = 0;
        this.wynik = "";
        this.wynik_int = 0;
        this.ksich = "";
    };
    HomeComponent.prototype.pow = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/" || this.tab[this.tab.length - 1] == ".") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 0) {
                this.wynik = this.konwerter((parseInt(this.wynik, 2) * parseInt(this.wynik, 2)), "2");
            }
            else if (this.selectedListPickerIndex == 1) {
                this.wynik = this.konwerter((parseInt(this.wynik, 8) * parseInt(this.wynik, 8)), "8");
            }
            else if (this.selectedListPickerIndex == 2) {
                this.wynik = (parseInt(this.konwerter((parseInt(this.wynik, 10) * parseInt(this.wynik, 10)), "10"), 10).toFixed(2)).toString();
            }
            else if (this.selectedListPickerIndex == 3) {
                this.wynik = (parseInt(this.konwerter((parseInt(this.wynik, 16) * parseInt(this.wynik, 16)), "16").toLocaleUpperCase(), 16).toFixed(2)).toString();
            }
            this.ksich = this.wynik;
        }
    };
    HomeComponent.prototype.sqrt = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/" || this.tab[this.tab.length - 1] == ".") {
            this.wynik = this.wynik;
        }
        else {
            this.nacisniety = 0;
            if (this.selectedListPickerIndex == 0) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 2))), "2");
            }
            else if (this.selectedListPickerIndex == 1) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 8))), "8");
            }
            else if (this.selectedListPickerIndex == 2) {
                this.wynik = (Math.sqrt(parseInt(this.wynik, 10))).toString();
            }
            else if (this.selectedListPickerIndex == 3) {
                this.wynik = this.konwerter((Math.sqrt(parseInt(this.wynik, 16))), "16").toLocaleUpperCase();
            }
            this.ksich = this.wynik;
        }
    };
    HomeComponent.prototype.sign = function () {
        this.nacisniety = this.nacisniety + 1;
        if (this.nacisniety % 2 != 0) {
            this.ksich += "-";
            this.wynik += "-";
        }
        else {
            this.ksich = this.ksich.slice(0, this.ksich.length - 1);
            this.wynik = this.wynik.slice(0, this.wynik.length - 1);
        }
    };
    HomeComponent.prototype.czysc = function () {
        this.textFieldValue = "";
    };
    HomeComponent.prototype.dot = function () {
        if (this.tab[this.tab.length - 1] == "+" || this.tab[this.tab.length - 1] == "-" || this.tab[this.tab.length - 1] == "*" || this.tab[this.tab.length - 1] == "/" || this.tab[this.tab.length - 1] == ".") {
            this.wynik = this.wynik;
        }
        else {
            this.ksich += ".";
            this.wynik += ".";
        }
    };
    HomeComponent.prototype.delete = function () {
        this.wynik = this.wynik.slice(0, this.wynik.length - 1);
        this.ksich = this.ksich.slice(0, this.ksich.length - 1);
        this.tab.pop();
    };
    HomeComponent.prototype.copy = function (value, message) {
        Clipboard.setText(value).then(function () {
            console.log("Copied `" + value + "` to the clipboard!");
        });
        Toast.makeText(message).show();
    };
    HomeComponent.prototype.paste = function () {
        var _this = this;
        Clipboard.getText().then(function (content) {
            _this.stored = content;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css'],
            animations: [
                animations_1.trigger("state", [
                    animations_1.state("inactive", animations_1.style({ "background-color": "red" })),
                    animations_1.state("active", animations_1.style({ "background-color": "green" })),
                    animations_1.transition("inactive => active", [animations_1.animate("600ms ease-out")]),
                    animations_1.transition("active => inactive", [animations_1.animate("600ms ease-out")]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUFtRjtBQUVuRixzQ0FBa0Q7QUFHbEQsa0RBQW1EO0FBQ25ELDBDQUEyQztBQUMzQyxrREFBZ0Y7QUFtQmhGO0lBNjRCSTtRQUFBLGlCQU1DO1FBeDRCRCx3QkFBbUIsR0FBa0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCw0QkFBdUIsR0FBVyxDQUFDLENBQUM7UUFDcEMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUl2QixtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1Ysb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUk7WUFFekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDM0IsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLE9BQU8sUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU07Z0JBQ1YsS0FBSyxJQUFJO29CQUNMLE9BQU8sUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLE9BQU8sUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU07Z0JBQ1YsS0FBSyxJQUFJO29C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QUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtZQUNELElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcs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QUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUNsQjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTthQUVsQjtZQUNELElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdB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QyxLQUFLLEdBQUcsMEJBQTBCLENBQUE7WUFFM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUlELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0TSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7U0FDMUI7YUFDSTtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUV4RjtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDeEY7aUJBQ0ksSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2pJO2lCQUNJLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ3JKO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQzFCO0lBQ0wsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ3RNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUMxQjthQUNJO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7WUFDbkIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUV6RTtpQkFDSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBQ3pFO2lCQUNJLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2hFO2lCQUNJLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTthQUMvRjtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUMxQjtJQUNMLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUVyQyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQTtZQUNqQixJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQTtTQUNwQjthQUNJO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDMUQ7SUFFTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUN0TSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7U0FDMUI7YUFDSTtZQUNELElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQztJQUdELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFNTSw0QkFBSSxHQUFYLFVBQVksS0FBYSxFQUFFLE9BQWU7UUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQUEsaUJBSUM7UUFIRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFhRCxnQ0FBUSxHQUFSO0lBSUEsQ0FBQztJQXo1QlEsYUFBYTtRQWR6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsVUFBVSxFQUFFO2dCQUNSLG9CQUFPLENBQUMsT0FBTyxFQUFFO29CQUNiLGtCQUFLLENBQUMsVUFBVSxFQUFFLGtCQUFLLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxrQkFBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsdUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLG9CQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO29CQUM3RCx1QkFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUJBQ2hFLENBQUM7YUFDTDtTQUNKLENBQUM7O09BQ1csYUFBYSxDQTA1QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTE1QkQsSUEwNUJDO0FBMTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zL3ZhbHVlLWFjY2Vzc29yc1wiO1xuaW1wb3J0ICogYXMgQ2xpcGJvYXJkIGZyb20gXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxuaW1wb3J0IHsgc3RhdGUsIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIlxuaW1wb3J0IHsgZGlzYWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RyYWNlL3RyYWNlXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoXCJzdGF0ZVwiLCBbXG4gICAgICAgICAgICBzdGF0ZShcImluYWN0aXZlXCIsIHN0eWxlKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmVkXCIgfSkpLFxuICAgICAgICAgICAgc3RhdGUoXCJhY3RpdmVcIiwgc3R5bGUoeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJncmVlblwiIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgW2FuaW1hdGUoXCI2MDBtcyBlYXNlLW91dFwiKV0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBbYW5pbWF0ZShcIjYwMG1zIGVhc2Utb3V0XCIpXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cblxuICAgIGRvbmVUYXAoYXJncykge1xuICAgICAgICB2YXIgbXlUZXh0RmllbGQgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgbXlUZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgIH1cblxuXG4gICAgbGlzdFBpY2tlckNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtcIjJcIiwgXCI4XCIsIFwiMTBcIiwgXCIxNlwiXTtcbiAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBuYWNpc25pZXR5OiBudW1iZXIgPSAwO1xuICAgIGN6eV9uYWNpc25pZXR5OiBib29sZWFuO1xuXG5cbiAgICB0ZXh0RmllbGRWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBrc2ljaCA9IFwiXCJcbiAgICB0ZXh0RmllbGRWYWx1ZTE6IHN0cmluZyA9IFwiXCI7XG4gICAga29ud2VydGVyID0gZnVuY3Rpb24gKG4sIGJhc2UpIHtcblxuICAgICAgICBpZiAoKG4gPCAwKSAmJiAoYmFzZSAhPSAnMTAnKSkge1xuICAgICAgICAgICAgbiA9IDB4RkZGRkZGRkYgKyBuICsgMTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGJhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuLCAxMCkudG9TdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcxNic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG4sIDEwKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobiwgMTApLnRvU3RyaW5nKDgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMTAnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChuLCAxMCkudG9TdHJpbmcoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFwiV3JvbmcgaW5wdXQuLi4uLi4uLi5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc2NpaUNvbnZlcnQgPSBmdW5jdGlvbiAoem5haykge1xuICAgICAgICBzd2l0Y2ggKHpuYWspIHtcblxuICAgICAgICAgICAgY2FzZSBcIjY1XCIgfHwgXCIxMDFcIiB8fCBcIjQxXCIgfHwgXCIxMDAwMDAxXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiNjZcIiB8fCBcIjEwMlwiIHx8IFwiNDJcIiB8fCBcIjEwMDAwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0InXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI2N1wiIHx8IFwiMTAzXCIgfHwgXCI0M1wiIHx8IFwiMTAwMDAxMVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnQydcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjY4XCIgfHwgXCIxMDRcIiB8fCBcIjQ0XCIgfHwgXCIxMDAwMTAwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdEJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiNjlcIiB8fCBcIjEwNVwiIHx8IFwiNDVcIiB8fCBcIjEwMDAxMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0UnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI3MFwiIHx8IFwiMTA2XCIgfHwgXCI0NlwiIHx8IFwiMTAwMDExMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnRidcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjcxXCIgfHwgXCIxMDdcIiB8fCBcIjQ3XCIgfHwgXCIxMDAwMTExXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdHJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiNzJcIiB8fCBcIjExMFwiIHx8IFwiNDhcIiB8fCBcIjEwMDEwMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0gnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI3M1wiIHx8IFwiMTExXCIgfHwgXCI0OVwiIHx8IFwiMTAwMTAwMVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnSSdcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjc0XCIgfHwgXCIxMTJcIiB8fCBcIjRBXCIgfHwgXCIxMDAxMDEwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdKJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiNzVcIiB8fCBcIjExM1wiIHx8IFwiNEJcIiB8fCBcIjEwMDEwMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0snXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI3NlwiIHx8IFwiMTE0XCIgfHwgXCI0Q1wiIHx8IFwiMTAwMTEwMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTCdcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjc3XCIgfHwgXCIxMTVcIiB8fCBcIjREXCIgfHwgXCIxMDAxMTAxXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdNJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiNzhcIiB8fCBcIjExNlwiIHx8IFwiNEVcIiB8fCBcIjEwMDExMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ04nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI3OVwiIHx8IFwiMTE3XCIgfHwgXCI0RlwiIHx8IFwiMTAwMTExMVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnTydcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjgwXCIgfHwgXCIxMjBcIiB8fCBcIjUwXCIgfHwgXCIxMDEwMDAwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiODFcIiB8fCBcIjEyMVwiIHx8IFwiNTFcIiB8fCBcIjEwMTAwMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1EnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI4MlwiIHx8IFwiMTIyXCIgfHwgXCI1MlwiIHx8IFwiMTAxMDAxMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnUidcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjgzXCIgfHwgXCIxMjNcIiB8fCBcIjUzXCIgfHwgXCIxMDEwMDExXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiODRcIiB8fCBcIjEyNFwiIHx8IFwiNTRcIiB8fCBcIjEwMTAxMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1QnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI4NVwiIHx8IFwiMTI1XCIgfHwgXCI1NVwiIHx8IFwiMTAxMDEwMVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnVSdcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjg2XCIgfHwgXCIxMjZcIiB8fCBcIjU2XCIgfHwgXCIxMDEwMTEwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdWJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiODdcIiB8fCBcIjEyN1wiIHx8IFwiNTdcIiB8fCBcIjEwMTAxMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1cnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI4OFwiIHx8IFwiMTMwXCIgfHwgXCI1OFwiIHx8IFwiMTAxMTAwMFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnWCdcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjg5XCIgfHwgXCIxMzFcIiB8fCBcIjU5XCIgfHwgXCIxMDExMDAxXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdZJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiOTBcIiB8fCBcIjEzMlwiIHx8IFwiNUFcIiB8fCBcIjEwMTEwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1onXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vbWFsZSBsaXRlcnlcblxuICAgICAgICAgICAgY2FzZSBcIjk3XCIgfHwgXCIxNDFcIiB8fCBcIjYxXCIgfHwgXCIxMTAwMDAxXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiOThcIiB8fCBcIjE0MlwiIHx8IFwiNjJcIiB8fCBcIjExMDAwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2InXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCI5OVwiIHx8IFwiMTQzXCIgfHwgXCI2M1wiIHx8IFwiMTEwMDAxMVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYydcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIjEwMFwiIHx8IFwiMTQ0XCIgfHwgXCI2NFwiIHx8IFwiMTEwMDEwMCBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2QnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDFcIiB8fCBcIjE0NVwiIHx8IFwiNjVcIiB8fCBcIjExMDAxMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2UnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDJcIiB8fCBcIjE0NlwiIHx8IFwiNjZcIiB8fCBcIjExMDAxMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2YnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDNcIiB8fCBcIjE0N1wiIHx8IFwiNjdcIiB8fCBcIjExMDAxMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2cnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDRcIiB8fCBcIjE1MFwiIHx8IFwiNjhcIiB8fCBcIjExMDEwMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2gnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDVcIiB8fCBcIjE1MVwiIHx8IFwiNjlcIiB8fCBcIjExMDEwMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2knXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDZcIiB8fCBcIjE1MlwiIHx8IFwiNkFcIiB8fCBcIjExMDEwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2onXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDdcIiB8fCBcIjE1M1wiIHx8IFwiNkJcIiB8fCBcIjExMDEwMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2snXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDhcIiB8fCBcIjE1NFwiIHx8IFwiNkNcIiB8fCBcIjExMDExMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2wnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMDlcIiB8fCBcIjE1NVwiIHx8IFwiNkRcIiB8fCBcIjExMDExMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ20nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTBcIiB8fCBcIjE1NlwiIHx8IFwiNkVcIiB8fCBcIjExMDExMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ24nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTFcIiB8fCBcIjE1N1wiIHx8IFwiNkZcIiB8fCBcIjExMDExMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ28nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTJcIiB8fCBcIjE2MFwiIHx8IFwiNzBcIiB8fCBcIjExMTAwMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3AnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTNcIiB8fCBcIjE2MVwiIHx8IFwiNzFcIiB8fCBcIjExMTAwMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3EnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTRcIiB8fCBcIjE2MlwiIHx8IFwiNzJcIiB8fCBcIjExMTAwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3InXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTVcIiB8fCBcIjE2M1wiIHx8IFwiNzNcIiB8fCBcIjExMTAwMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3MnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTZcIiB8fCBcIjE2NFwiIHx8IFwiNzRcIiB8fCBcIjExMTAxMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3QnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTdcIiB8fCBcIjE2NVwiIHx8IFwiNzVcIiB8fCBcIjExMTAxMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3UnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMThcIiB8fCBcIjE2NlwiIHx8IFwiNzZcIiB8fCBcIjExMTAxMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3YnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMTlcIiB8fCBcIjE2N1wiIHx8IFwiNzdcIiB8fCBcIjExMTAxMTFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3cnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMjBcIiB8fCBcIjE3MFwiIHx8IFwiNzhcIiB8fCBcIjExMTEwMDBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3gnXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMjFcIiB8fCBcIjE3MVwiIHx8IFwiNzlcIiB8fCBcIjExMTEwMDFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3knXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIxMjJcIiB8fCBcIjE3MlwiIHx8IFwiN0FcIiB8fCBcIjExMTEwMTBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3onXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIzMlwiIHx8IFwiMDQwXCIgfHwgXCIyMFwiIHx8IFwiMTAwMDAwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgJ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldyb25nIHR5cGUgb2YgaW4gcHV0IGRhdGFcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcGllcndvdG55ID0gXCJcIlxuICAgIGFzY2lpID0gXCJcIlxuXG4gICAgcHJpdmF0ZSBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJEYXRhIEVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiV3JvbmcgdHlwZSBvZiBpbnB1dCBkYXRhXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgfTtcbiAgICBhc2NpaV96ID0gW11cblxuXG4gICAgcHJpdmF0ZSB6YW1pYW5hID0gKCkgPT4ge1xuICAgICAgICBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAwKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAwKSB8fCAodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDEpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDEpIHx8XG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDIpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDIpIHx8XG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDMpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDMpIHx8XG4gICAgICAgICAgICAodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDQpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDQpKSB7XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMudGV4dEZpZWxkVmFsdWVcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMCkgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5rb253ZXJ0ZXIocGFyc2VJbnQodGhpcy50ZXh0RmllbGRWYWx1ZSwgMiksICc4JylcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZXJ3b3RueS5pbmNsdWRlcyhcIk5hTlwiKSAmJiB0aGlzLnRleHRGaWVsZFZhbHVlICE9IFwiXCIpXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMCkgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMikpIHtcbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5rb253ZXJ0ZXIocGFyc2VJbnQodGhpcy50ZXh0RmllbGRWYWx1ZSwgMiksICcxMCcpXG4gICAgICAgICAgICBpZiAodGhpcy5waWVyd290bnkuaW5jbHVkZXMoXCJOYU5cIikpXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMCkgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMykpIHtcbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5rb253ZXJ0ZXIocGFyc2VJbnQodGhpcy50ZXh0RmllbGRWYWx1ZSwgMiksICcxNicpLnRvTG9jYWxlVXBwZXJDYXNlKClcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZXJ3b3RueS5pbmNsdWRlcyhcIk5hTlwiKSlcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllcndvdG55XG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMSkgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5rb253ZXJ0ZXIocGFyc2VJbnQodGhpcy50ZXh0RmllbGRWYWx1ZSwgOCksICcyJylcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZXJ3b3RueS5pbmNsdWRlcyhcIk5hTlwiKSlcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllcndvdG55XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAxKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAyKSkge1xuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmtvbndlcnRlcihwYXJzZUludCh0aGlzLnRleHRGaWVsZFZhbHVlLCA4KSwgJzEwJylcbiAgICAgICAgICAgIGlmICh0aGlzLnBpZXJ3b3RueS5pbmNsdWRlcyhcIk5hTlwiKSlcbiAgICAgICAgICAgICAgICBhbGVydCh0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllcndvdG55XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAxKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAzKSkge1xuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmtvbndlcnRlcihwYXJzZUludCh0aGlzLnRleHRGaWVsZFZhbHVlLCA4KSwgJzE2JykudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgaWYgKHRoaXMucGllcndvdG55LmluY2x1ZGVzKFwiTmFOXCIpKVxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDIpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMua29ud2VydGVyKHBhcnNlSW50KHRoaXMudGV4dEZpZWxkVmFsdWUsIDEwKSwgJzInKVxuICAgICAgICAgICAgaWYgKHRoaXMucGllcndvdG55LmluY2x1ZGVzKFwiTmFOXCIpKVxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDIpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDEpKSB7XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMua29ud2VydGVyKHBhcnNlSW50KHRoaXMudGV4dEZpZWxkVmFsdWUsIDEwKSwgJzgnKVxuICAgICAgICAgICAgaWYgKHRoaXMucGllcndvdG55LmluY2x1ZGVzKFwiTmFOXCIpKVxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDIpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDMpKSB7XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMua29ud2VydGVyKHBhcnNlSW50KHRoaXMudGV4dEZpZWxkVmFsdWUsIDEwKSwgJzE2JykudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgaWYgKHRoaXMucGllcndvdG55LmluY2x1ZGVzKFwiTmFOXCIpKVxuICAgICAgICAgICAgICAgIGFsZXJ0KHRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDMpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMua29ud2VydGVyKHBhcnNlSW50KHRoaXMudGV4dEZpZWxkVmFsdWUsIDE2KSwgJzInKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5waWVyd290bnkuaW5jbHVkZXMoXCJOYU5cIikpXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMykgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5rb253ZXJ0ZXIocGFyc2VJbnQodGhpcy50ZXh0RmllbGRWYWx1ZSwgMTYpLCAnOCcpXG4gICAgICAgICAgICBpZiAodGhpcy5waWVyd290bnkuaW5jbHVkZXMoXCJOYU5cIikpXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAzKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAyKSkge1xuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmtvbndlcnRlcihwYXJzZUludCh0aGlzLnRleHRGaWVsZFZhbHVlLCAxNiksICcxMCcpXG4gICAgICAgICAgICBpZiAodGhpcy5waWVyd290bnkuaW5jbHVkZXMoXCJOYU5cIikpXG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDQpICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDApKSB7XG4gICAgICAgICAgICB0aGlzLmFzY2lpID0gXCJcIlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRleHRGaWVsZFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc2NpaSArPSB0aGlzLnRleHRGaWVsZFZhbHVlLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMikgKyBcIiBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmFzY2lpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gNCkgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMuYXNjaWkgPSBcIlwiXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dEZpZWxkVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzY2lpICs9IHRoaXMudGV4dEZpZWxkVmFsdWUuY2hhckNvZGVBdChpKS50b1N0cmluZyg4KSArIFwiIFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMuYXNjaWlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSA0KSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAyKSkge1xuICAgICAgICAgICAgdGhpcy5hc2NpaSA9IFwiXCJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0RmllbGRWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNjaWkgKz0gdGhpcy50ZXh0RmllbGRWYWx1ZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDEwKSArIFwiIFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMuYXNjaWlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSA0KSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSAzKSkge1xuICAgICAgICAgICAgdGhpcy5hc2NpaSA9IFwiXCJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0RmllbGRWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNjaWkgKz0gdGhpcy50ZXh0RmllbGRWYWx1ZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KS50b0xvY2FsZVVwcGVyQ2FzZSgpICsgXCIgXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5hc2NpaVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllcndvdG55XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5zZWxlY3RlZEJhckluZGV4ID09IDApICYmICh0aGlzLnNlbGVjdGVkQmFySW5kZXgxID09IDQpKSB7XG4gICAgICAgICAgICB0aGlzLmFzY2lpX3ogPSBbXVxuICAgICAgICAgICAgdGhpcy5hc2NpaSA9IFwiXCJcbiAgICAgICAgICAgIHRoaXMuYXNjaWlfeiA9IHRoaXMudGV4dEZpZWxkVmFsdWUuc3BsaXQoJyAnKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXNjaWlfei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNjaWlfeltpXSA9IHRoaXMuYXNjaWlDb252ZXJ0KHBhcnNlSW50KHRoaXMuYXNjaWlfeltpXSwgMikudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLmFzY2lpICs9IHRoaXMuYXNjaWlfeltpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmFzY2lpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcblxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAxKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSA0KSkge1xuICAgICAgICAgICAgdGhpcy5hc2NpaV96ID0gW11cbiAgICAgICAgICAgIHRoaXMuYXNjaWkgPSBcIlwiXG4gICAgICAgICAgICB0aGlzLmFzY2lpX3ogPSB0aGlzLnRleHRGaWVsZFZhbHVlLnNwbGl0KCcgJylcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFzY2lpX3oubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzY2lpX3pbaV0gPSB0aGlzLmFzY2lpQ29udmVydChwYXJzZUludCh0aGlzLmFzY2lpX3pbaV0sIDgpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5hc2NpaSArPSB0aGlzLmFzY2lpX3pbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGllcndvdG55ID0gdGhpcy5hc2NpaVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGllcndvdG55XG5cblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnNlbGVjdGVkQmFySW5kZXggPT0gMikgJiYgKHRoaXMuc2VsZWN0ZWRCYXJJbmRleDEgPT0gNCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXNjaWlfeiA9IFtdXG4gICAgICAgICAgICB0aGlzLmFzY2lpID0gXCJcIlxuICAgICAgICAgICAgdGhpcy5hc2NpaV96ID0gdGhpcy50ZXh0RmllbGRWYWx1ZS5zcGxpdCgnICcpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hc2NpaV96Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc2NpaV96W2ldID0gdGhpcy5hc2NpaUNvbnZlcnQocGFyc2VJbnQodGhpcy5hc2NpaV96W2ldLCAxMCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLmFzY2lpICs9IHRoaXMuYXNjaWlfeltpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5waWVyd290bnkgPSB0aGlzLmFzY2lpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waWVyd290bnlcblxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc2VsZWN0ZWRCYXJJbmRleCA9PSAzKSAmJiAodGhpcy5zZWxlY3RlZEJhckluZGV4MSA9PSA0KSkge1xuICAgICAgICAgICAgdGhpcy5hc2NpaV96ID0gW11cbiAgICAgICAgICAgIHRoaXMuYXNjaWkgPSBcIlwiXG4gICAgICAgICAgICB0aGlzLmFzY2lpX3ogPSB0aGlzLnRleHRGaWVsZFZhbHVlLnNwbGl0KCcgJylcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFzY2lpX3oubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzY2lpX3pbaV0gPSB0aGlzLmFzY2lpQ29udmVydChwYXJzZUludCh0aGlzLmFzY2lpX3pbaV0sIDE2KS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHRoaXMuYXNjaWkgKz0gdGhpcy5hc2NpaV96W2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBpZXJ3b3RueSA9IHRoaXMuYXNjaWlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpZXJ3b3RueVxuXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfVxuXG5cblxuXG4gICAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRCYXJJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0xID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbTEudGl0bGUgPSBcIkJJTlwiO1xuICAgICAgICBsZXQgc2VnbWVudGVkQmFySXRlbTIgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtMi50aXRsZSA9IFwiT0NUXCI7XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtMyA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0zLnRpdGxlID0gXCJERUNcIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW00ID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbTQudGl0bGUgPSBcIkhFWFwiO1xuICAgICAgICBsZXQgc2VnbWVudGVkQmFySXRlbTUgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtNS50aXRsZSA9IFwiQVNDSUkgVGV4dFwiO1xuICAgICAgICByZXR1cm4gW3NlZ21lbnRlZEJhckl0ZW0xLCBzZWdtZW50ZWRCYXJJdGVtMiwgc2VnbWVudGVkQmFySXRlbTMsIHNlZ21lbnRlZEJhckl0ZW00LCBzZWdtZW50ZWRCYXJJdGVtNV07XG4gICAgfVxuICAgIHNlZ21lbnRlZEJhckl0ZW1zOiBBcnJheTxTZWdtZW50ZWRCYXJJdGVtPiA9IHRoaXMuZ2V0U2VnbWVudGVkQmFySXRlbXMoKTtcbiAgICBzZWxlY3RlZEJhckluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRCYXJJdGVtczEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtMSA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW0xLnRpdGxlID0gXCJCSU5cIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW0yID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbTIudGl0bGUgPSBcIk9DVFwiO1xuICAgICAgICBsZXQgc2VnbWVudGVkQmFySXRlbTMgPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtMy50aXRsZSA9IFwiREVDXCI7XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtNCA9IG5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHNlZ21lbnRlZEJhckl0ZW00LnRpdGxlID0gXCJIRVhcIjtcbiAgICAgICAgbGV0IHNlZ21lbnRlZEJhckl0ZW01ID0gbmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgc2VnbWVudGVkQmFySXRlbTUudGl0bGUgPSBcIkFTQ0lJIFRleHRcIjtcbiAgICAgICAgcmV0dXJuIFtzZWdtZW50ZWRCYXJJdGVtMSwgc2VnbWVudGVkQmFySXRlbTIsIHNlZ21lbnRlZEJhckl0ZW0zLCBzZWdtZW50ZWRCYXJJdGVtNCwgc2VnbWVudGVkQmFySXRlbTVdO1xuICAgIH1cbiAgICBzZWdtZW50ZWRCYXJJdGVtczE6IEFycmF5PFNlZ21lbnRlZEJhckl0ZW0+ID0gdGhpcy5nZXRTZWdtZW50ZWRCYXJJdGVtczEoKTtcbiAgICBzZWxlY3RlZEJhckluZGV4MTogbnVtYmVyID0gMDtcblxuXG5cblxuXG5cbiAgICB3eW5payA9IFwiXCJcbiAgICB0YWIgPSBbXVxuICAgIHd5bmlrX2ludCA9IDBcbiAgICBwb21vYyA9IFwiXCJcbiAgICBrb250cm9sYSA9IDBcblxuICAgIHBsdXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIitcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi1cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIipcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi9cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi5cIikge1xuICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5uYWNpc25pZXR5ID0gMFxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaCh0aGlzLnd5bmlrKVxuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2goXCIrXCIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMikudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiK1wiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgOCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiK1wiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMTYpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChcIitcIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gXCJcIlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtzaWNoICs9IFwiK1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtaW51cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiK1wiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiLVwiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiKlwiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiL1wiKSB7XG4gICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy53eW5pa1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLm5hY2lzbmlldHkgPSAwXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaCh0aGlzLnd5bmlrKVxuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2goXCItXCIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMikudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiLVwiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgOCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiLVwiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMTYpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChcIi1cIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gXCJcIlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtzaWNoICs9IFwiLVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkemllbGVuaWUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIitcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi1cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIipcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi9cIikge1xuICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmFjaXNuaWV0eSA9IDBcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKHRoaXMud3luaWspXG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChcIi9cIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChwYXJzZUludCh0aGlzLnd5bmlrLCAyKS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2goXCIvXCIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IFwiXCJcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChwYXJzZUludCh0aGlzLnd5bmlrLCA4KS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2goXCIvXCIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IFwiXCJcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChwYXJzZUludCh0aGlzLnd5bmlrLCAxNikudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiL1wiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMua3NpY2ggKz0gXCIvXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ub3plbmllKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIrXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCItXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIqXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHRoaXMud3luaWsgPSB0aGlzLnd5bmlrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hY2lzbmlldHkgPSAwXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaCh0aGlzLnd5bmlrKVxuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2goXCIqXCIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMikudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiKlwiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgOCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKFwiKlwiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMTYpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChcIipcIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gXCJcIlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtzaWNoICs9IFwiKlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb3duYSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiK1wiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiLVwiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiKlwiIHx8IHRoaXMudGFiW3RoaXMudGFiLmxlbmd0aCAtIDFdID09IFwiL1wiKSB7XG4gICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy53eW5pa1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uYWNpc25pZXR5ID0gMFxuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaCh0aGlzLnd5bmlrKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb21vYyArPSB0aGlzLnRhYltpXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud3luaWtfaW50ID0gZXZhbCh0aGlzLnBvbW9jKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSB0aGlzLnd5bmlrX2ludC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5pa19pbnQgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5wb21vYyA9IFwiXCJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYiA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYi5wdXNoKHBhcnNlSW50KHRoaXMud3luaWssIDIpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbW9jICs9IHRoaXMudGFiW2ldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy53eW5pa19pbnQgPSBldmFsKHRoaXMucG9tb2MpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy5rb253ZXJ0ZXIodGhpcy53eW5pa19pbnQsIFwiMlwiKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWtfaW50ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMucG9tb2MgPSBcIlwiXG4gICAgICAgICAgICAgICAgdGhpcy50YWIgPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWIucHVzaChwYXJzZUludCh0aGlzLnd5bmlrLCA4KS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb21vYyArPSB0aGlzLnRhYltpXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud3luaWtfaW50ID0gZXZhbCh0aGlzLnBvbW9jKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMua29ud2VydGVyKHRoaXMud3luaWtfaW50LCBcIjhcIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrX2ludCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLnBvbW9jID0gXCJcIlxuICAgICAgICAgICAgICAgIHRoaXMudGFiID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRMaXN0UGlja2VySW5kZXggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiLnB1c2gocGFyc2VJbnQodGhpcy53eW5paywgMTYpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbW9jICs9IHRoaXMudGFiW2ldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy53eW5pa19pbnQgPSBldmFsKHRoaXMucG9tb2MpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy5rb253ZXJ0ZXIodGhpcy53eW5pa19pbnQsIFwiMTZcIilcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrX2ludCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLnBvbW9jID0gXCJcIlxuICAgICAgICAgICAgICAgIHRoaXMudGFiID0gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnd5bmlrLmluY2x1ZGVzKFwiTmFOXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMud3luaWsgPSBcIldST05HIFRZUEUgT0YgSU5QVVQgREFUQVwiXG5cbiAgICAgICAgICAgIHRoaXMua3NpY2ggPSB0aGlzLnd5bmlrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoZXgxKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy53eW5payArIFwiQVwiXG4gICAgICAgIHRoaXMua3NpY2ggPSB0aGlzLmtzaWNoICsgXCJBXCJcbiAgICB9XG5cbiAgICBoZXgyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy53eW5payArIFwiQlwiXG4gICAgICAgIHRoaXMua3NpY2ggPSB0aGlzLmtzaWNoICsgXCJCXCJcbiAgICB9XG5cbiAgICBoZXgzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy53eW5payArIFwiQ1wiXG4gICAgICAgIHRoaXMua3NpY2ggPSB0aGlzLmtzaWNoICsgXCJDXCJcbiAgICB9XG5cblxuXG4gICAgaGV4NCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIkRcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiRFwiXG4gICAgfVxuXG4gICAgaGV4NSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIkVcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiRVwiXG4gICAgfVxuXG4gICAgaGV4NigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIkZcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiRlwiXG4gICAgfVxuXG4gICAgbnVtYmVyMSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjBcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiMFwiXG4gICAgfVxuXG4gICAgbnVtYmVyMigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjFcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiMVwiXG4gICAgfVxuXG4gICAgbnVtYmVyMygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjJcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiMlwiXG4gICAgfVxuXG4gICAgbnVtYmVyNCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjNcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiM1wiXG4gICAgfVxuXG4gICAgbnVtYmVyNSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjRcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiNFwiXG4gICAgfVxuXG4gICAgbnVtYmVyNigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjVcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiNVwiXG4gICAgfVxuXG4gICAgbnVtYmVyNygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjZcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiNlwiXG4gICAgfVxuXG4gICAgbnVtYmVyOCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjdcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiN1wiXG4gICAgfVxuXG4gICAgbnVtYmVyOSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsgKyBcIjhcIlxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaCArIFwiOFwiXG4gICAgfVxuXG4gICAgbnVtYmVyMTAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud3luaWsgPSB0aGlzLnd5bmlrICsgXCI5XCJcbiAgICAgICAgdGhpcy5rc2ljaCA9IHRoaXMua3NpY2ggKyBcIjlcIlxuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hY2lzbmlldHkgPSAwXG4gICAgICAgIHRoaXMud3luaWsgPSBcIlwiXG4gICAgICAgIHRoaXMud3luaWtfaW50ID0gMDtcbiAgICAgICAgdGhpcy5rc2ljaCA9IFwiXCJcbiAgICB9XG5cbiAgICBwb3coKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIitcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi1cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIipcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi9cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi5cIikge1xuICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmFjaXNuaWV0eSA9IDBcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy5rb253ZXJ0ZXIoKHBhcnNlSW50KHRoaXMud3luaWssIDIpICogcGFyc2VJbnQodGhpcy53eW5paywgMikpLCBcIjJcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMua29ud2VydGVyKChwYXJzZUludCh0aGlzLnd5bmlrLCA4KSAqIHBhcnNlSW50KHRoaXMud3luaWssIDgpKSwgXCI4XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gKHBhcnNlSW50KHRoaXMua29ud2VydGVyKChwYXJzZUludCh0aGlzLnd5bmlrLCAxMCkgKiBwYXJzZUludCh0aGlzLnd5bmlrLCAxMCkpLCBcIjEwXCIpLCAxMCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IChwYXJzZUludCh0aGlzLmtvbndlcnRlcigocGFyc2VJbnQodGhpcy53eW5paywgMTYpICogcGFyc2VJbnQodGhpcy53eW5paywgMTYpKSwgXCIxNlwiKS50b0xvY2FsZVVwcGVyQ2FzZSgpLCAxNikudG9GaXhlZCgyKSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5rc2ljaCA9IHRoaXMud3luaWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNxcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIitcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi1cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIipcIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi9cIiB8fCB0aGlzLnRhYlt0aGlzLnRhYi5sZW5ndGggLSAxXSA9PSBcIi5cIikge1xuICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmFjaXNuaWV0eSA9IDBcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy5rb253ZXJ0ZXIoKE1hdGguc3FydChwYXJzZUludCh0aGlzLnd5bmlrLCAyKSkpLCBcIjJcIilcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZExpc3RQaWNrZXJJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53eW5payA9IHRoaXMua29ud2VydGVyKChNYXRoLnNxcnQocGFyc2VJbnQodGhpcy53eW5paywgOCkpKSwgXCI4XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gKE1hdGguc3FydChwYXJzZUludCh0aGlzLnd5bmlrLCAxMCkpKS50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnd5bmlrID0gdGhpcy5rb253ZXJ0ZXIoKE1hdGguc3FydChwYXJzZUludCh0aGlzLnd5bmlrLCAxNikpKSwgXCIxNlwiKS50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy53eW5pa1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2lnbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uYWNpc25pZXR5ID0gdGhpcy5uYWNpc25pZXR5ICsgMVxuXG4gICAgICAgIGlmICh0aGlzLm5hY2lzbmlldHkgJSAyICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMua3NpY2ggKz0gXCItXCJcbiAgICAgICAgICAgIHRoaXMud3luaWsgKz0gXCItXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua3NpY2ggPSB0aGlzLmtzaWNoLnNsaWNlKDAsIHRoaXMua3NpY2gubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIHRoaXMud3luaWsgPSB0aGlzLnd5bmlrLnNsaWNlKDAsIHRoaXMud3luaWsubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3p5c2MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSBcIlwiXG4gICAgfVxuXG4gICAgZG90KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIrXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCItXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIqXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIvXCIgfHwgdGhpcy50YWJbdGhpcy50YWIubGVuZ3RoIC0gMV0gPT0gXCIuXCIpIHtcbiAgICAgICAgICAgIHRoaXMud3luaWsgPSB0aGlzLnd5bmlrXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtzaWNoICs9IFwiLlwiXG4gICAgICAgICAgICB0aGlzLnd5bmlrICs9IFwiLlwiXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53eW5payA9IHRoaXMud3luaWsuc2xpY2UoMCwgdGhpcy53eW5pay5sZW5ndGggLSAxKVxuICAgICAgICB0aGlzLmtzaWNoID0gdGhpcy5rc2ljaC5zbGljZSgwLCB0aGlzLmtzaWNoLmxlbmd0aCAtIDEpXG4gICAgICAgIHRoaXMudGFiLnBvcCgpXG4gICAgfVxuXG4gICAgcHVibGljIHN0b3JlZDogc3RyaW5nO1xuXG5cblxuICAgIHB1YmxpYyBjb3B5KHZhbHVlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBDbGlwYm9hcmQuc2V0VGV4dCh2YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvcGllZCBgXCIgKyB2YWx1ZSArIFwiYCB0byB0aGUgY2xpcGJvYXJkIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KG1lc3NhZ2UpLnNob3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFzdGUoKSB7XG4gICAgICAgIENsaXBib2FyZC5nZXRUZXh0KCkudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yZWQgPSBjb250ZW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBleHBvcnRzLmRvbmVUYXAgPSB0aGlzLmRvbmVUYXBcbiAgICAgICAgdGhpcy5zdG9yZWQgPSBcIlwiO1xuXG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXG5cbiAgICB9XG59XG5cbiJdfQ==