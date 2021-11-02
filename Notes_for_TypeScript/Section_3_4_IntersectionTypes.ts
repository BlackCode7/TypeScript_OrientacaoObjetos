// A Intersection Type combines the member of two or more types.
// Um Tipo de Intersecção combina o membro de dois ou mais tipos.
interface knife{
    cut();
}
interface BottleOpener{
    openBottle();
}
interface ScrewDriver {
    turnScreew();
}

// Mixing types
type SwissArmyKnife = knife & BottleOpener & ScrewDriver;
function use(tool: SwissArmyKnife) {
    console.log("I can do anything");
    tool.cut();
    tool.openBottle();
    tool.turnScreew();
}
