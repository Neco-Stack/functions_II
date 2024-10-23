// function intro1(): void {
//     console.log("Hello Function");
// }
// const intros1 = (): void => {
//     console.log("Hello Function");
// }
// const add = (a:number, b: number) => a+b
// intro1();
// intros1();
// console.log(add);

// const showHello = (): void => {
//     const displayedElement = document.getElementById("outputDiv");
//     if (displayedElement){
//         displayedElement.textContent = "Hallo";
//     }
// }
// showHello();

// const numberMultiplactor= (a: number, b: number): number => {
//     const result = a*b; 
//     console.log(`Die Multiplikation von ${a} und ${b} ist: ${result}`);
//     const ergebnis = document.getElementById("resultMultiplicated");
//     if (ergebnis){
//         ergebnis.textContent = `Die Multiplikation von ${a} und ${b} ergibt ${result}`;
//     }
//     return result;
//     }
//     numberMultiplactor(2,5)

// function windowResult( a:number, b: number): void {
//     const windowResult = a * b;
//     window.alert(`Das Ergebnis von ${a} und ${b} ist: ${windowResult}`)
// }
// windowResult(298, 345);

// const displayAlert = (a: number, b: number): void => {
//     const multiplyProduct = a * b; 
//     window.alert(`das Produkt von ${a} und ${b} ist ${multiplyProduct}`)
// }
// displayAlert(1222999, 980000);

type TBankkunde = {
    name: string; 
    nachname: string; 
    wohnort: string; 
    vermögen: number; 
};
function logInCustomerBankDetails(customer: TBankkunde): void {
    const customerInfo= `
    Kundendetails: 
    Name: ${customer.name}
    Nachname: ${customer.nachname}
    Wohnort: ${customer.wohnort}
    Vermögen: ${customer.vermögen}`
    console.log(customerInfo);
}
const kunde: TBankkunde = {
    name: "Necati",
    nachname: "Abay",
    wohnort: "Düsseldorf",
    vermögen: 987000000
}
logInCustomerBankDetails(kunde)
console.log("Necat hat ein geschätztes Vermögen:", kunde.vermögen);



