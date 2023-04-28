function gfg() {
    const weakmap1 = new WeakMap();
    const key1 = {};
    weakmap1.set(key1, 12);
    console.log(weakmap1.get(key1));
}
gfg();