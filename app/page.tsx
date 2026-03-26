"use client";
import { JSX, useState } from "react";

export default function Home() {
    const elements = [
        {
            name: "Hydrogen",
            symbol: "H",
            atomicNumber: 1,
            atomicMass: 1.0079,
            electronegativity: 2.1,
            period: 1,
            group: 1,
        },
        {
            name: "Helium",
            symbol: "He",
            atomicNumber: 2,
            atomicMass: 4.0026,
            electronegativity: 0,
            period: 1,
            group: 18,
        },
        {
            name: "Lithium",
            symbol: "Li",
            atomicNumber: 3,
            atomicMass: 6.941,
            electronegativity: 1.0,
            period: 2,
            group: 1,
        },
        {
            name: "Berylium",
            symbol: "Be",
            atomicNumber: 4,
            atomicMass: 9.0122,
            electronegativity: 1.5,
            period: 2,
            group: 2,
        },
        {
            name: "Boron",
            symbol: "B",
            atomicNumber: 5,
            atomicMass: 10.811,
            electronegativity: 2.0,
            period: 2,
            group: 13,
        },
        {
            name: "Carbon",
            symbol: "C",
            atomicNumber: 6,
            atomicMass: 12.011,
            electronegativity: 2.5,
            period: 2,
            group: 14,
        },
        {
            name: "Nitrogen",
            symbol: "N",
            atomicNumber: 7,
            atomicMass: 14.0067,
            electronegativity: 3.0,
            period: 2,
            group: 15,
        },
        {
            name: "Oxygen",
            symbol: "O",
            atomicNumber: 8,
            atomicMass: 15.9994,
            electronegativity: 3.5,
            period: 2,
            group: 16,
        },
        {
            name: "Fluorine",
            symbol: "F",
            atomicNumber: 9,
            atomicMass: 18.9984,
            electronegativity: 4.0,
            period: 2,
            group: 17,
        },
        {
            name: "Neon",
            symbol: "Ne",
            atomicNumber: 10,
            atomicMass: 20.1797,
            electronegativity: 0,
            period: 2,
            group: 18,
        },
        {
            name: "Sodium",
            symbol: "Na",
            atomicNumber: 11,
            atomicMass: 22.9898,
            electronegativity: 0.9,
            period: 3,
            group: 1,
        },
        {
            name: "Magnesium",
            symbol: "Mg",
            atomicNumber: 12,
            atomicMass: 24.305,
            electronegativity: 1.2,
            period: 3,
            group: 2,
        },
        {
            name: "Aluminium",
            symbol: "Al",
            atomicNumber: 13,
            atomicMass: 26.9815,
            electronegativity: 1.5,
            period: 3,
            group: 13,
        },
        {
            name: "Silicon",
            symbol: "Si",
            atomicNumber: 14,
            atomicMass: 28.0855,
            electronegativity: 1.8,
            period: 3,
            group: 14,
        },
        {
            name: "Phospohorus",
            symbol: "P",
            atomicNumber: 15,
            atomicMass: 30.9738,
            electronegativity: 2.1,
            period: 3,
            group: 15,
        },
        {
            name: "Sulphur",
            symbol: "S",
            atomicNumber: 16,
            atomicMass: 32.066,
            electronegativity: 2.5,
            period: 3,
            group: 16,
        },
        {
            name: "Chlorine",
            symbol: "Cl",
            atomicNumber: 17,
            atomicMass: 25.4527,
            electronegativity: 3.0,
            period: 3,
            group: 17,
        },
        {
            name: "Argon",
            symbol: "Ar",
            atomicNumber: 18,
            atomicMass: 39.948,
            electronegativity: 0,
            period: 3,
            group: 18,
        },
        {
            name: "Potassium",
            symbol: "K",
            atomicNumber: 19,
            atomicMass: 39.0983,
            electronegativity: 0.8,
            period: 4,
            group: 1,
        },
        {
            name: "Calcium",
            symbol: "Ca",
            atomicNumber: 20,
            atomicMass: 40.078,
            electronegativity: 1.0,
            period: 4,
            group: 2,
        },
        {
            name: "Scandium",
            symbol: "Sc",
            atomicNumber: 21,
            atomicMass: 44.9559,
            electronegativity: 1.3,
            period: 4,
            group: 3,
        },
        {
            name: "Titanium",
            symbol: "Ti",
            atomicNumber: 22,
            atomicMass: 47.867,
            electronegativity: 1.5,
            period: 4,
            group: 4,
        },
        {
            name: "Vanadium",
            symbol: "V",
            atomicNumber: 23,
            atomicMass: 50.9415,
            electronegativity: 1.6,
            period: 4,
            group: 5,
        },
        {
            name: "Chromium",
            symbol: "Cr",
            atomicNumber: 24,
            atomicMass: 51.9961,
            electronegativity: 1.6,
            period: 4,
            group: 6,
        },
        {
            name: "Manganese",
            symbol: "Mn",
            atomicNumber: 25,
            atomicMass: 54.938,
            electronegativity: 1.5,
            period: 4,
            group: 7,
        },
        {
            name: "Iron",
            symbol: "Fe",
            atomicNumber: 26,
            atomicMass: 55.847,
            electronegativity: 1.8,
            period: 4,
            group: 8,
        },
        {
            name: "Cobalt",
            symbol: "Co",
            atomicNumber: 27,
            atomicMass: 58.9332,
            electronegativity: 1.9,
            period: 4,
            group: 9,
        },
        {
            name: "Nickel",
            symbol: "Ni",
            atomicNumber: 28,
            atomicMass: 58.693,
            electronegativity: 1.8,
            period: 4,
            group: 10,
        },
        {
            name: "Copper",
            symbol: "Cu",
            atomicNumber: 29,
            atomicMass: 63.546,
            electronegativity: 1.9,
            period: 4,
            group: 11,
        },
        {
            name: "Zinc",
            symbol: "Zn",
            atomicNumber: 30,
            atomicMass: 65.39,
            electronegativity: 1.6,
            period: 4,
            group: 12,
        },
        {
            name: "Gallium",
            symbol: "Ga",
            atomicNumber: 31,
            atomicMass: 69.723,
            electronegativity: 1.6,
            period: 4,
            group: 13,
        },
        {
            name: "Germanium",
            symbol: "Ge",
            atomicNumber: 32,
            atomicMass: 72.61,
            electronegativity: 1.8,
            period: 4,
            group: 14,
        },
        {
            name: "Arsenic",
            symbol: "As",
            atomicNumber: 33,
            atomicMass: 74.9216,
            electronegativity: 2.0,
            period: 4,
            group: 15,
        },
        {
            name: "Selenium",
            symbol: "Se",
            atomicNumber: 34,
            atomicMass: 78.96,
            electronegativity: 2.4,
            period: 4,
            group: 16,
        },
        {
            name: "Bromine",
            symbol: "Br",
            atomicNumber: 35,
            atomicMass: 79.904,
            electronegativity: 2.8,
            period: 4,
            group: 17,
        },
        {
            name: "Krypton",
            symbol: "Kr",
            atomicNumber: 36,
            atomicMass: 83.8,
            electronegativity: 0,
            period: 4,
            group: 18,
        },
    ];

    const [formula, setFormula] = useState<
        {
            element: {
                name: string;
                symbol: string;
                atomicNumber: number;
                atomicMass: number;
                electronegativity: number;
                period: number;
                group: number;
            };
            amount: number;
            output: JSX.Element;
        }[]
    >([]);

    const drawElement = (element: {
        name: string;
        symbol: string;
        atomicNumber: number;
        atomicMass: number;
        electronegativity: number;
        period: number;
        group: number;
    }) => {
        return (
            <div
                key={"el-" + element.symbol}
                className="w-[70px] aspect-[1/1] grid border"
                style={{ gridColumn: element.group }}
                onClick={() => {
                    const newF = [...formula];
                    const exisits = newF.find((e) => e.element.symbol === element.symbol);
                    if (exisits) {
                        newF[newF.indexOf(exisits)] = {
                            element: element,
                            amount: newF[newF.indexOf(exisits)].amount + 1,
                            output: (
                                <span>
                                    {element.symbol}
                                    <sub key={"form-" + formula.length}>
                                        {newF[newF.indexOf(exisits)].amount + 1}
                                    </sub>
                                </span>
                            ),
                        };
                    } else {
                        newF.push({
                            element: element,
                            amount: 1,
                            output: <span key={"form-" + formula.length}>{element.symbol}</span>,
                        });
                    }
                    setFormula(newF);
                }}>
                <div className="text-[12px]">{element.atomicNumber}</div>
                <div className="w-[100%] text-center">{element.symbol}</div>
                <div className="w-[100%] text-center text-[14px]">{element.atomicMass}</div>
            </div>
        );
    };

    const calcMass = (
        formula: {
            element: {
                name: string;
                symbol: string;
                atomicNumber: number;
                atomicMass: number;
                electronegativity: number;
                period: number;
                group: number;
            };
            amount: number;
            output: JSX.Element;
        }[],
    ) => {
        let mass = 0;

        formula.forEach(
            (element: {
                element: {
                    name: string;
                    symbol: string;
                    atomicNumber: number;
                    atomicMass: number;
                    electronegativity: number;
                    period: number;
                    group: number;
                };
                amount: number;
                output: JSX.Element;
            }) => {
                mass += element.element.atomicMass * element.amount;
            },
        );
        return mass;
    };

    console.log(formula);

    return (
        <main className="m-[25px_auto] w-[80%]">
            <div className="grid grid-cols-[70] grid-cols-18 grid-rows-[70] grid-rows-4 overflow-x min-w-[750px]">
                <div className="col-[4/12] row-[1/2] grid grid-rows2 border">
                    <div>{formula.length > 0 ? formula!.map((item) => item.output) : <></>}</div>
                    <div>{formula.length > 0 ? <p>{calcMass(formula)} g/mol</p> : <></>}</div>
                </div>
                <div className="col-[4/12] row-[2/3] border">
                    <button onClick={() => setFormula([])}>Clear</button>
                </div>
                {elements.map((element) => drawElement(element))}
            </div>
        </main>
    );
}
