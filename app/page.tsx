"use client";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function Home() {
    const elements = [
        {
            name: "Hydrogen",
            symbol: "H",
            atomicNumber: 1,
            atomicMass: 1.0079,
            electronegativity: 2.1,
        },
        {
            name: "Helium",
            symbol: "He",
            atomicNumber: 2,
            atomicMass: 4.0026,
            electronegativity: 0,
        },
        {
            name: "Lithium",
            symbol: "Li",
            atomicNumber: 3,
            atomicMass: 6.941,
            electronegativity: 1.0,
        },
        {
            name: "Berylium",
            symbol: "Be",
            atomicNumber: 4,
            atomicMass: 9.0122,
            electronegativity: 1.5,
        },
        {
            name: "Boron",
            symbol: "B",
            atomicNumber: 5,
            atomicMass: 10.811,
            electronegativity: 2.0,
        },
        {
            name: "Carbon",
            symbol: "C",
            atomicNumber: 6,
            atomicMass: 12.011,
            electronegativity: 2.5,
        },
        {
            name: "Nitrogen",
            symbol: "N",
            atomicNumber: 7,
            atomicMass: 14.0067,
            electronegativity: 3.0,
        },
        {
            name: "Oxygen",
            symbol: "O",
            atomicNumber: 8,
            atomicMass: 15.9994,
            electronegativity: 3.5,
        },
        {
            name: "Fluorine",
            symbol: "F",
            atomicNumber: 9,
            atomicMass: 18.9984,
            electronegativity: 4.0,
        },
        {
            name: "Neon",
            symbol: "Ne",
            atomicNumber: 10,
            atomicMass: 20.1797,
            electronegativity: 0,
        },
        {
            name: "Sodium",
            symbol: "Na",
            atomicNumber: 11,
            atomicMass: 22.9898,
            electronegativity: 0.9,
        },
        {
            name: "Magnesium",
            symbol: "Mg",
            atomicNumber: 12,
            atomicMass: 24.305,
            electronegativity: 1.2,
        },
        {
            name: "Aluminium",
            symbol: "Al",
            atomicNumber: 13,
            atomicMass: 26.9815,
            electronegativity: 1.5,
        },
        {
            name: "Silicon",
            symbol: "Si",
            atomicNumber: 14,
            atomicMass: 28.0855,
            electronegativity: 1.8,
        },
        {
            name: "Phospohorus",
            symbol: "P",
            atomicNumber: 15,
            atomicMass: 30.9738,
            electronegativity: 2.1,
        },
        {
            name: "Sulphur",
            symbol: "S",
            atomicNumber: 16,
            atomicMass: 32.066,
            electronegativity: 2.5,
        },
        {
            name: "Chlorine",
            symbol: "Cl",
            atomicNumber: 17,
            atomicMass: 25.4527,
            electronegativity: 3.0,
        },
        {
            name: "Argon",
            symbol: "Ar",
            atomicNumber: 18,
            atomicMass: 39.948,
            electronegativity: 0,
        },
        {
            name: "Potassium",
            symbol: "K",
            atomicNumber: 19,
            atomicMass: 39.0983,
            electronegativity: 0.8,
        },
        {
            name: "Calcium",
            symbol: "Ca",
            atomicNumber: 20,
            atomicMass: 40.078,
            electronegativity: 1.0,
        },
        {
            name: "Scandium",
            symbol: "Sc",
            atomicNumber: 21,
            atomicMass: 44.9559,
            electronegativity: 1.3,
        },
        {
            name: "Titanium",
            symbol: "Ti",
            atomicNumber: 22,
            atomicMass: 47.867,
            electronegativity: 1.5,
        },
        {
            name: "Vanadium",
            symbol: "V",
            atomicNumber: 23,
            atomicMass: 50.9415,
            electronegativity: 1.6,
        },
        {
            name: "Chromium",
            symbol: "Cr",
            atomicNumber: 24,
            atomicMass: 51.9961,
            electronegativity: 1.6,
        },
        {
            name: "Manganese",
            symbol: "Mn",
            atomicNumber: 25,
            atomicMass: 54.938,
            electronegativity: 1.5,
        },
        {
            name: "Iron",
            symbol: "Fe",
            atomicNumber: 26,
            atomicMass: 55.847,
            electronegativity: 1.8,
        },
        {
            name: "Cobalt",
            symbol: "Co",
            atomicNumber: 27,
            atomicMass: 58.9332,
            electronegativity: 1.9,
        },
        {
            name: "Nickel",
            symbol: "Ni",
            atomicNumber: 28,
            atomicMass: 58.693,
            electronegativity: 1.8,
        },
        {
            name: "Copper",
            symbol: "Cu",
            atomicNumber: 29,
            atomicMass: 63.546,
            electronegativity: 1.9,
        },
        {
            name: "Zinc",
            symbol: "Zn",
            atomicNumber: 30,
            atomicMass: 65.39,
            electronegativity: 1.6,
        },
        {
            name: "Gallium",
            symbol: "Ga",
            atomicNumber: 31,
            atomicMass: 69.723,
            electronegativity: 1.6,
        },
        {
            name: "Germanium",
            symbol: "Ge",
            atomicNumber: 32,
            atomicMass: 72.61,
            electronegativity: 1.8,
        },
        {
            name: "Arsenic",
            symbol: "As",
            atomicNumber: 33,
            atomicMass: 74.9216,
            electronegativity: 2.0,
        },
        {
            name: "Selenium",
            symbol: "Se",
            atomicNumber: 34,
            atomicMass: 78.96,
            electronegativity: 2.4,
        },
        {
            name: "Bromine",
            symbol: "Br",
            atomicNumber: 35,
            atomicMass: 79.904,
            electronegativity: 2.8,
        },
        {
            name: "Krypton",
            symbol: "Kr",
            atomicNumber: 36,
            atomicMass: 83.8,
            electronegativity: 0,
        },
    ];

    const [comp, setComp] = useState("");
    const [atomicMass, setAtomicMass] = useState(0.0);

    function calcMass(
        element:
            | {
                  name: string;
                  symbol: string;
                  atomicNumber: number;
                  atomicMass: number;
                  electronegativity: number;
                  symbol?: undefined;
              }
            | {
                  name: string;
                  symbol: string;
                  atomicNumber: number;
                  atomicMass: number;
                  electronegativity: number;
                  symbol?: undefined;
              },
        amount: number,
    ) {
        return element!.atomicMass * amount;
    }

    const displayCalc = (item: string) => {
        const molecule = item.split(/(?=[0-9])/);
        if (molecule.length > 1) {
            const element = elements.find((e) => e.symbol === molecule[0]);
            if (element) {
                return {
                    item: (
                        <p>
                            {molecule[1]} x {element!.symbol} = {molecule[1]} x{" "}
                            {element!.atomicMass}
                            g/mol = {calcMass(element!, Number(molecule[1])).toFixed(5)}
                            g/mol
                        </p>
                    ),
                    mass: calcMass(element!, Number(molecule[1])),
                };
            }
        } else {
            const element = elements.find((e) => e.symbol === molecule[0]);
            if (element) {
                return {
                    item: (
                        <p>
                            {element!.symbol} = {element!.atomicMass.toFixed(5)}
                            g/mol
                        </p>
                    ),
                    mass: element!.atomicMass,
                };
            }
        }
        return { item: <></>, mass: 0 };
    };

    const getElements = (input: string) => {
        const output: JSX.Element[] = [];
        const inputFormatted: JSX.Element[] = [];
        let total = 0,
            coeff = 1;

        if (Number(input[0])) coeff = Number(input[0]);

        if (input.includes("(") && input.includes(")")) {
            let mult = 1;
            if (!isNaN(Number(input.split(/[()]/)[2]))) {
                mult = Number(input.split(/[()]/)[2]);
            }

            input.split(/[()]/).forEach((item, index) => {
                let subtotal = 0;
                const inner = item.split(/(?=[A-Z])/);
                if (inner.length <= 1) {
                    // Outside brackets
                    const molecule = item.split(/(?=[0-9])/);
                    if (molecule.length > 1) {
                        const element = elements.find((e) => e.symbol === molecule[0]);
                        if (element) {
                            output.push(
                                <p>
                                    {molecule[1]} x {element!.symbol} = {molecule[1]} x{" "}
                                    {element!.atomicMass.toFixed(5)}
                                    g/mol = {calcMass(element!, Number(molecule[1])).toFixed(5)}
                                    g/mol
                                </p>,
                            );
                            total += calcMass(element!, Number(molecule[1]));
                            inputFormatted.push(
                                <span>
                                    {element!.symbol}
                                    <sub>{molecule[1]}</sub>
                                </span>,
                            );
                        }
                    } else {
                        const element = elements.find((e) => e.symbol === molecule[0]);
                        if (element) {
                            output.push(
                                <p>
                                    {element!.symbol} = {element!.atomicMass.toFixed(5)}
                                    g/mol
                                </p>,
                            );
                            total += element!.atomicMass;
                            inputFormatted.push(<span>{element!.symbol}</span>);
                        }
                    }
                } else {
                    // Inside brackets
                    item.split(/(?=[A-Z])/).forEach((item) => {
                        const molecule = item.split(/(?=[0-9])/);
                        if (molecule.length > 1) {
                            const element = elements.find((e) => e.symbol === molecule[0]);
                            if (element) {
                                output.push(
                                    <p>
                                        {molecule[1]} x {element!.symbol} = {molecule[1]} x{" "}
                                        {element!.atomicMass.toFixed(5)}
                                        g/mol = {calcMass(element!, Number(molecule[1])).toFixed(5)}
                                        g/mol {mult > 1 ? "* " + mult : ""}
                                    </p>,
                                );
                                subtotal += calcMass(element!, Number(molecule[1])) + mult;
                                inputFormatted.push(
                                    <span>
                                        {element!.symbol}
                                        <sub>{molecule[1]}</sub>
                                    </span>,
                                );
                            }
                        } else {
                            const element = elements.find((e) => e.symbol === molecule[0]);
                            if (element) {
                                output.push(
                                    <p>
                                        {element!.symbol} = {element!.atomicMass.toFixed(5)}
                                        g/mol {mult > 1 ? "* " + mult : ""}
                                    </p>,
                                );
                                subtotal += element!.atomicMass * mult;
                                inputFormatted.push(<span>{element!.symbol}</span>);
                            }
                        }
                    });
                }
                total += subtotal;

                if (mult > 1) {
                    if (index == 0) {
                        inputFormatted.push(<span>{"("}</span>);
                    } else if (index == 1) {
                        inputFormatted.push(
                            <span>
                                {")"}
                                <sub>{mult}</sub>
                            </span>,
                        );
                    }
                }
            });
        } else {
            input.split(/(?=[A-Z])/).forEach((item) => {
                const molecule = item.split(/(?=[0-9])/);
                if (molecule.length > 1) {
                    const element = elements.find((e) => e.symbol === molecule[0]);
                    if (element) {
                        output.push(
                            <p>
                                {molecule[1]} x {element!.symbol} = {molecule[1]} x{" "}
                                {element!.atomicMass}
                                g/mol = {calcMass(element!, Number(molecule[1])).toFixed(5)}
                                g/mol
                            </p>,
                        );
                        total += calcMass(element!, Number(molecule[1]));
                        inputFormatted.push(
                            <span>
                                {element!.symbol}
                                <sub>{molecule[1]}</sub>
                            </span>,
                        );
                    }
                } else {
                    const element = elements.find((e) => e.symbol === molecule[0]);
                    if (element) {
                        output.push(
                            <p>
                                {element!.symbol} = {element!.atomicMass.toFixed(5)}
                                g/mol
                            </p>,
                        );
                        total += element!.atomicMass;
                        inputFormatted.push(<span>{element!.symbol}</span>);
                    }
                }
            });
        }

        return (
            <div>
                {output.map((item) => item)}
                <p>
                    {inputFormatted} = {coeff > 1 ? `${coeff} x ${total}g/mol = ` : ""}{" "}
                    {Number(coeff * total).toFixed(5)}
                    g/mol
                </p>
            </div>
        );
    };
    return (
        <main>
            <h1>Periodic Table of Elements</h1>
            <div>
                <label htmlFor="comp">Relative Atomic Mass</label>
                <p className="text-[12px]">Ensure you use caps (H2O)</p>
                <input
                    className="block"
                    type="text"
                    name="comp"
                    placeholder="H2O"
                    value={comp}
                    onChange={(event) => setComp(event.currentTarget.value)}
                />
            </div>
            {comp ? <>{getElements(comp)}</> : <></>}
        </main>
    );
}
