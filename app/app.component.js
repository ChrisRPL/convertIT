"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toast");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.stored = "";
    }
    AppComponent.prototype.copy = function (value, message) {
        Clipboard.setText(value).then(function () {
            console.log("Copied `" + value + "` to the clipboard!");
        });
        Toast.makeText(message).show();
    };
    AppComponent.prototype.paste = function () {
        var _this = this;
        Clipboard.getText().then(function (content) {
            _this.stored = content;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0RBQW9EO0FBQ3BELDBDQUE0QztBQVU1QztJQUlJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLDJCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUUsT0FBZTtRQUN0QyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRCQUFLLEdBQVo7UUFBQSxpQkFJQztRQUhHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5CUSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BQ1csWUFBWSxDQXVCeEI7SUFBRCxtQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIENsaXBib2FyZCBmcm9tIFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5cblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RvcmVkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVkID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29weSh2YWx1ZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgQ2xpcGJvYXJkLnNldFRleHQodmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3BpZWQgYFwiICsgdmFsdWUgKyBcImAgdG8gdGhlIGNsaXBib2FyZCFcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBUb2FzdC5tYWtlVGV4dChtZXNzYWdlKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhc3RlKCkge1xuICAgICAgICBDbGlwYm9hcmQuZ2V0VGV4dCgpLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVkID0gY29udGVudDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufVxuIl19