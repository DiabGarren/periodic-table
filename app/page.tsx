"use client";
import { useState } from "react";

export default function Home() {
    const elements = [
        {
            name: "Hydrogen",
            symobol: "H",
            atomicNumber: 1,
            atomicMass: 1.0079,
            electronegativity: 2.1,
        },
        {
            name: "Helium",
            symobol: "He",
            atomicNumber: 2,
            atomicMass: 4.0026,
            electronegativity: 0,
        },
        {
            name: "Lithium",
            symobol: "Li",
            atomicNumber: 3,
            atomicMass: 6.941,
            electronegativity: 1.0,
        },
        {
            name: "Berylium",
            symobol: "Be",
            atomicNumber: 4,
            atomicMass: 9.0122,
            electronegativity: 1.5,
        },
        {
            name: "Boron",
            symobol: "B",
            atomicNumber: 5,
            atomicMass: 10.811,
            electronegativity: 2.0,
        },
        {
            name: "Carbon",
            symobol: "C",
            atomicNumber: 6,
            atomicMass: 12.011,
            electronegativity: 2.5,
        },
        {
            name: "Nitrogen",
            symobol: "N",
            atomicNumber: 7,
            atomicMass: 14.0067,
            electronegativity: 3.0,
        },
        {
            name: "Oxygen",
            symobol: "O",
            atomicNumber: 8,
            atomicMass: 15.9994,
            electronegativity: 3.5,
        },
    ];

    const [comp, setComp] = useState("");
    const [atomicMass, setAtomicMass] = useState(0.0);

    const getElements = (input: string) => {
        const output = [""];
        let total = 0,
            coeff = 1;

        if (Number(input[0])) coeff = Number(input[0]);

        input.split(/(?=[A-Z])/).forEach((item, index) => {
            const molecule = item.split(/(?=[0-9])/);

            if (molecule.length > 1) {
                const element = elements.find((e) => e.symobol === molecule[0]);
                if (element) {
                    output.push(
                        `${Number(molecule[1])} x ${element.symobol} = ${Number(molecule[1])} x ${element!.atomicMass}g/mol = ${Number(molecule[1]) * element!.atomicMass}g/mol`,
                    );
                    total += Number(molecule[1]) * element!.atomicMass;
                }
            } else {
                const element = elements.find((e) => e.symobol === item);
                if (element) {
                    output.push(`1 x ${element.symobol} = ${element!.atomicMass}g/mol`);
                    total += element!.atomicMass;
                }
            }
        });

        return (
            <div>
                {output.map((item, index) => (
                    <p
                        key={index}
                        className="ml-[15px]">
                        {item}
                    </p>
                ))}
                <p>
                    {input} = {coeff > 1 ? `${coeff} x ${total}g/mol = ` : ""} {coeff * total}
                    g/mol
                </p>
            </div>
        );
    };
    return (
        <main>
            <h1>Periodic Table of Elements</h1>
            <div>
                <label htmlFor="comp">Enter the formula for the compound</label>
                <p className="text-[12px]">Ensure you use caps (H2O)</p>
                <input
                    className="block"
                    type="text"
                    name="comp"
                    value={comp}
                    onChange={(event) => setComp(event.currentTarget.value)}
                />
            </div>
            {comp ? <>{getElements(comp)}</> : <></>}
        </main>
    );
}
