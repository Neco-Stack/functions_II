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

// type TBankkunde = {
//     name: string; 
//     nachname: string; 
//     wohnort: string; 
//     vermögen: number; 
// };
// function logInCustomerBankDetails(customer: TBankkunde): void {
//     const customerInfo= `
//     Kundendetails: 
//     Name: ${customer.name}
//     Nachname: ${customer.nachname}
//     Wohnort: ${customer.wohnort}
//     Vermögen: ${customer.vermögen}`
//     console.log(customerInfo);
// }
// const kunde: TBankkunde = {
//     name: "Necati",
//     nachname: "Abay",
//     wohnort: "Düsseldorf",
//     vermögen: 987000000
// }
// logInCustomerBankDetails(kunde)
// console.log("Neco hat soviel geld auf dem konto:", kunde.vermögen);

// console.log("Necat hat ein geschätztes Vermögen:", kunde.vermögen);
type TPerson = {
    vorname: string; 
    nachname: string;
    alter: number; 
    familienstand: string; 
    groesse: number; 
    zeigeProfil: () => string;
}

let person: TPerson = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
         return `Vorname: ${this.vorname}, Nachname:${this.nachname}, alter: ${this.alter}, famlienstand: ${this.familienstand}, Größe: ${this.groesse}`;
         console.log(person);
     }
 };
 let person2: TPerson = {
    vorname: "Necati", 
    nachname: "Abay", 
    alter: 28,
    familienstand: "glücklich vergeben", 
    groesse: 1.65, 
    zeigeProfil: ()=> {
        return `Vorname: ${person2.vorname}, Nachname:${person2.nachname}, alter: ${person2.alter}, famlienstand: ${person2.familienstand}, Größe: ${person2.groesse}`
    } 
}
console.log(person2.zeigeProfil());





