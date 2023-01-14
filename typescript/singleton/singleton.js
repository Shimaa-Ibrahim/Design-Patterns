var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton._singletonInstance) {
            Singleton._singletonInstance = new Singleton();
            Singleton._singletonInstance.creationAttempts = 1;
            console.log("create new singleton instance");
            return Singleton._singletonInstance;
        }
        console.log("singleton instance is already created");
        Singleton._singletonInstance.creationAttempts++;
        return Singleton._singletonInstance;
    };
    Singleton.prototype.Say = function () {
        console.log("Singleton says \"Creations attempts are ".concat(Singleton._singletonInstance.creationAttempts, "\""));
    };
    return Singleton;
}());
function implementSingleton() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
    s1.Say();
    s2.Say();
}
implementSingleton();
