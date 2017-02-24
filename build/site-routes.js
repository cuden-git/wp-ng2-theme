"use strict";
var GetRoutes = (function () {
    function GetRoutes(navService) {
        this.navService = navService;
    }
    GetRoutes.prototype.showRoutes = function () {
        this.siteRoutes = this.navService.createRoutes();
        return this.siteRoutes;
    };
    return GetRoutes;
}());
exports.GetRoutes = GetRoutes;
//# sourceMappingURL=site-routes.js.map