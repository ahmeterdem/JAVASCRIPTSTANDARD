const target = {
    property1: "GeeksforGeeks",
    property2: "Computer science portal"
};

const handler = {
    get: function (target, prop, receiver) {
        if (prop === "property2") {
            return "For computer science geeks."+ Reflect.get(target,prop);
        }
        else{
            return Reflect.get(target,prop);
        }
    }
}
const proxy = new Proxy(target, handler);

console.log(proxy.property1);
console.log(proxy.property2);
