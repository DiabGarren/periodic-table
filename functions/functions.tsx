import { JSX } from "react";

export function calcMolarMass(
    formula: {
        element: {
            name: string;
            symbol: string;
            atomicNumber: number;
            atomicMass: number;
            electronegativity: number;
            period: number;
            group: number;
            colour: string;
        };
        amount: number;
        output: JSX.Element;
    }[],
) {
    let mass = 0;

    formula.forEach(
        (
            element: {
                element: {
                    name: string;
                    symbol: string;
                    atomicNumber: number;
                    atomicMass: number;
                    electronegativity: number;
                    period: number;
                    group: number;
                    colour: string;
                };
                amount: number;
                output: JSX.Element;
            },
            index,
        ) => {
            const bracketPos = [
                formula.findIndex((e) => e.element.symbol == "("),
                formula.findIndex((e) => e.element.symbol == ")"),
            ];

            if (index > bracketPos[0] && index < bracketPos[1] && formula[bracketPos[1] + 1]) {
                mass +=
                    element.element.atomicMass * element.amount * formula[bracketPos[1] + 1].amount;
            } else {
                mass += element.element.atomicMass * element.amount;
            }
        },
    );
    // Round to 4 decimal places
    return +mass.toFixed(4);
}

// export function identifyElements(
//     reaction: string,
//     elements: {
//         name: string;
//         symbol: string;
//         atomicNumber: number;
//         atomicMass: number;
//         electronegativity: number;
//         period: number;
//         group: number;
//         colour: string;
//     }[],
// ) {
//     const output: {
//         symbol: string | undefined;
//         name: string | undefined;
//         atomicMass: number | undefined;
//         amount: number | undefined;
//         inBrackets: boolean;
//         bracketAmount: number | undefined;
//     }[] = [];
//     const brackets = [reaction.indexOf("("), reaction.indexOf(")")];

//     let reactionArr = reaction.split(/(?=[A-Z])/).map((e) => e.split(""));

//     if (brackets[0] != -1 && brackets[1] != -1) {
//         reactionArr = reaction.split(/[()]/).map((e) => e.split(/(?=[A-Z])/));
//     }

//     console.log(reaction.split(/[()]/).map((e) => e.split(/(?=[A-Z])/)));
//     reactionArr.map((element, index) => {
//         console.log(element);

//         const amount = 1;
//         const inB = false;
//         const bracketAmount = 1;

//         if (element.length > 1) {
//             console.log(element, index);
//             element.map((elem, i) => {
//                 const eAmount = elem.split(/(\d{1,})/);
//                 console.log(elem);
//             });
//         } else {
//             const eAmount = String(element).split(/(\d{1,})/);
//             console.log(element, index);
//         }

//         element.map((elem, i) => {
//             // output.push({
//             //     symbol: e?.symbol,
//             //     name: e?.name,
//             //     atomicMass: e?.atomicMass,
//             //     amount: amount,
//             //     bracketAmount: bracketAmount,
//             //     inBrackets: inB,
//             // });
//         });
//     });

//     return output;
// }
