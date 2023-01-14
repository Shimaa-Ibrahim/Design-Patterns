class Singleton {

    creationAttempts: number = 0;
    private static _singletonInstance: Singleton;

    private constructor() {}

    static getInstance(): Singleton{
        if (!Singleton._singletonInstance) {
            Singleton._singletonInstance = new Singleton();
            Singleton._singletonInstance.creationAttempts++;
            console.log("create new singleton instance");
            return Singleton._singletonInstance;
        }

        console.log("singleton instance is already created");
        Singleton._singletonInstance.creationAttempts++;

        return Singleton._singletonInstance;
    }


    Say(): void {
        console.log(`Singleton says "Creations attempts are ${Singleton._singletonInstance.creationAttempts}"`)
    }
}

function implementSingleton() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }

    s1.Say();
    s2.Say();
}


implementSingleton()