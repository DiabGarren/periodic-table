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
        {
            name: "Rubidium",
            symbol: "Rb",
            atomicNumber: 37,
            atomicMass: 85.4678,
            electronegativity: 0.8,
            period: 5,
            group: 1,
        },
        {
            name: "Strontium",
            symbol: "Sr",
            atomicNumber: 38,
            atomicMass: 87.62,
            electronegativity: 1.0,
            period: 5,
            group: 2,
        },
        {
            name: "Yttrium",
            symbol: "Y",
            atomicNumber: 39,
            atomicMass: 99.905,
            electronegativity: 1.2,
            period: 5,
            group: 3,
        },
        {
            name: "Zirconium",
            symbol: "Zr",
            atomicNumber: 40,
            atomicMass: 91.224,
            electronegativity: 1.4,
            period: 5,
            group: 4,
        },
        {
            name: "Niobium",
            symbol: "Nb",
            atomicNumber: 41,
            atomicMass: 91.224,
            electronegativity: 1.6,
            period: 5,
            group: 5,
        },
        {
            name: "Molybdenum",
            symbol: "Mo",
            atomicNumber: 42,
            atomicMass: 95.94,
            electronegativity: 1.8,
            period: 5,
            group: 6,
        },
        {
            name: "Technetium",
            symbol: "Tc",
            atomicNumber: 43,
            atomicMass: 98,
            electronegativity: 1.9,
            period: 5,
            group: 7,
        },
        {
            name: "Ruthenium",
            symbol: "Ru",
            atomicNumber: 44,
            atomicMass: 101.07,
            electronegativity: 2.2,
            period: 5,
            group: 8,
        },
        {
            name: "Rhodium",
            symbol: "Rh",
            atomicNumber: 45,
            atomicMass: 102.906,
            electronegativity: 2.2,
            period: 5,
            group: 9,
        },
        {
            name: "Palladium",
            symbol: "Pd",
            atomicNumber: 46,
            atomicMass: 106.42,
            electronegativity: 2.2,
            period: 5,
            group: 10,
        },
        {
            name: "Silver",
            symbol: "Ag",
            atomicNumber: 47,
            atomicMass: 107.868,
            electronegativity: 1.9,
            period: 5,
            group: 11,
        },
        {
            name: "Cadmium",
            symbol: "Cd",
            atomicNumber: 48,
            atomicMass: 112.411,
            electronegativity: 1.7,
            period: 5,
            group: 12,
        },
        {
            name: "Indium",
            symbol: "In",
            atomicNumber: 49,
            atomicMass: 114.82,
            electronegativity: 1.7,
            period: 5,
            group: 13,
        },
        {
            name: "Tin",
            symbol: "Sn",
            atomicNumber: 50,
            atomicMass: 118.71,
            electronegativity: 1.8,
            period: 5,
            group: 14,
        },
        {
            name: "Antimony",
            symbol: "Sb",
            atomicNumber: 51,
            atomicMass: 121.757,
            electronegativity: 1.9,
            period: 5,
            group: 15,
        },
        {
            name: "Tellurium",
            symbol: "Te",
            atomicNumber: 52,
            atomicMass: 127.6,
            electronegativity: 2.1,
            period: 5,
            group: 16,
        },
        {
            name: "Iodine",
            symbol: "I",
            atomicNumber: 53,
            atomicMass: 126.905,
            electronegativity: 2.5,
            period: 5,
            group: 17,
        },
        {
            name: "Xenon",
            symbol: "Xe",
            atomicNumber: 54,
            atomicMass: 131.29,
            electronegativity: 0,
            period: 5,
            group: 18,
        },
        {
            name: "Caesium",
            symbol: "Cs",
            atomicNumber: 55,
            atomicMass: 132.905,
            electronegativity: 0.7,
            period: 6,
            group: 1,
        },
        {
            name: "Barium",
            symbol: "Ba",
            atomicNumber: 56,
            atomicMass: 137.327,
            electronegativity: 0.9,
            period: 6,
            group: 2,
        },
        {
            name: "Lanthanum",
            symbol: "La",
            atomicNumber: 57,
            atomicMass: 138.906,
            electronegativity: 0,
            period: 6,
            group: 3,
        },
        {
            name: "Hafnium",
            symbol: "Hf",
            atomicNumber: 72,
            atomicMass: 178.49,
            electronegativity: 1.3,
            period: 6,
            group: 4,
        },
        {
            name: "Tantalum",
            symbol: "Ta",
            atomicNumber: 73,
            atomicMass: 180.948,
            electronegativity: 1.5,
            period: 6,
            group: 5,
        },
        {
            name: "Tungsten",
            symbol: "W",
            atomicNumber: 74,
            atomicMass: 183.85,
            electronegativity: 1.7,
            period: 6,
            group: 6,
        },
        {
            name: "Rhenium",
            symbol: "Re",
            atomicNumber: 75,
            atomicMass: 186.207,
            electronegativity: 1.9,
            period: 6,
            group: 7,
        },
        {
            name: "Osmium",
            symbol: "Os",
            atomicNumber: 76,
            atomicMass: 190.23,
            electronegativity: 2.2,
            period: 6,
            group: 8,
        },
        {
            name: "Iridium",
            symbol: "Ir",
            atomicNumber: 77,
            atomicMass: 192.22,
            electronegativity: 2.2,
            period: 6,
            group: 9,
        },
        {
            name: "Platinum",
            symbol: "Pt",
            atomicNumber: 78,
            atomicMass: 195.084,
            electronegativity: 2.2,
            period: 6,
            group: 10,
        },
        {
            name: "Gold",
            symbol: "Au",
            atomicNumber: 79,
            atomicMass: 196.967,
            electronegativity: 2.4,
            period: 6,
            group: 11,
        },
        {
            name: "Mercury",
            symbol: "Hg",
            atomicNumber: 80,
            atomicMass: 200.59,
            electronegativity: 1.9,
            period: 6,
            group: 12,
        },
        {
            name: "Thallium",
            symbol: "Tl",
            atomicNumber: 81,
            atomicMass: 204.383,
            electronegativity: 1.8,
            period: 6,
            group: 13,
        },
        {
            name: "Lead",
            symbol: "Pb",
            atomicNumber: 82,
            atomicMass: 207.2,
            electronegativity: 1.9,
            period: 6,
            group: 14,
        },
        {
            name: "Bismuth",
            symbol: "Bi",
            atomicNumber: 83,
            atomicMass: 208.98,
            electronegativity: 1.9,
            period: 6,
            group: 15,
        },
        {
            name: "Polonium",
            symbol: "Po",
            atomicNumber: 94,
            atomicMass: 209,
            electronegativity: 2.0,
            period: 6,
            group: 16,
        },
        {
            name: "Astatine",
            symbol: "At",
            atomicNumber: 85,
            atomicMass: 210,
            electronegativity: 2.2,
            period: 6,
            group: 17,
        },
        {
            name: "Radon",
            symbol: "Rn",
            atomicNumber: 86,
            atomicMass: 222,
            electronegativity: 0,
            period: 6,
            group: 18,
        },
        {
            name: "Francium",
            symbol: "Fr",
            atomicNumber: 87,
            atomicMass: 223,
            electronegativity: 0.7,
            period: 7,
            group: 1,
        },
        {
            name: "Radium",
            symbol: "Ra",
            atomicNumber: 88,
            atomicMass: 226.025,
            electronegativity: 0.9,
            period: 7,
            group: 2,
        },
        {
            name: "Actinium",
            symbol: "Ac",
            atomicNumber: 89,
            atomicMass: 227.028,
            electronegativity: 0,
            period: 7,
            group: 3,
        },
        {
            name: "Rutherfordium",
            symbol: "Rf",
            atomicNumber: 104,
            atomicMass: 261,
            electronegativity: 0,
            period: 7,
            group: 4,
        },
        {
            name: "Dubnium",
            symbol: "Db",
            atomicNumber: 105,
            atomicMass: 262,
            electronegativity: 0,
            period: 7,
            group: 5,
        },
        {
            name: "Seaborgium",
            symbol: "Sg",
            atomicNumber: 106,
            atomicMass: 263,
            electronegativity: 0,
            period: 7,
            group: 6,
        },
        {
            name: "Bohrium",
            symbol: "Bh",
            atomicNumber: 107,
            atomicMass: 262,
            electronegativity: 0,
            period: 7,
            group: 7,
        },
        {
            name: "Hassium",
            symbol: "Hs",
            atomicNumber: 108,
            atomicMass: 265,
            electronegativity: 0,
            period: 7,
            group: 8,
        },
        {
            name: "Meitnerium",
            symbol: "Mt",
            atomicNumber: 109,
            atomicMass: 266,
            electronegativity: 0,
            period: 7,
            group: 9,
        },
        {
            name: "Darmstadtium",
            symbol: "Ds",
            atomicNumber: 110,
            atomicMass: 271,
            electronegativity: 0,
            period: 7,
            group: 10,
        },
        {
            name: "Roentgenium",
            symbol: "Rg",
            atomicNumber: 111,
            atomicMass: 272,
            electronegativity: 0,
            period: 7,
            group: 11,
        },
        {
            name: "Copernicium",
            symbol: "Cn",
            atomicNumber: 112,
            atomicMass: 285,
            electronegativity: 0,
            period: 7,
            group: 12,
        },
        {
            name: "Nihonium",
            symbol: "Nh",
            atomicNumber: 113,
            atomicMass: 284,
            electronegativity: 0,
            period: 7,
            group: 13,
        },
        {
            name: "Flerovium",
            symbol: "Fl",
            atomicNumber: 114,
            atomicMass: 289,
            electronegativity: 0,
            period: 7,
            group: 14,
        },
        {
            name: "Moscovium",
            symbol: "Mc",
            atomicNumber: 115,
            atomicMass: 288,
            electronegativity: 0,
            period: 7,
            group: 15,
        },
        {
            name: "Livermorium",
            symbol: "Lv",
            atomicNumber: 116,
            atomicMass: 293,
            electronegativity: 0,
            period: 7,
            group: 16,
        },
        {
            name: "Tennessine",
            symbol: "Ts",
            atomicNumber: 117,
            atomicMass: 294,
            electronegativity: 0,
            period: 7,
            group: 17,
        },
        {
            name: "Oganesson",
            symbol: "Og",
            atomicNumber: 118,
            atomicMass: 294,
            electronegativity: 0,
            period: 7,
            group: 18,
        },
        {
            name: "",
            symbol: "Ce",
            atomicNumber: 58,
            atomicMass: 140.115,
            electronegativity: 0,
            period: 8,
            group: 4,
        },
        {
            name: "",
            symbol: "Pr",
            atomicNumber: 59,
            atomicMass: 140.908,
            electronegativity: 0,
            period: 8,
            group: 5,
        },
        {
            name: "",
            symbol: "Nd",
            atomicNumber: 60,
            atomicMass: 144.24,
            electronegativity: 0,
            period: 8,
            group: 6,
        },
        {
            name: "",
            symbol: "Pm",
            atomicNumber: 61,
            atomicMass: 145,
            electronegativity: 0,
            period: 8,
            group: 7,
        },
        {
            name: "",
            symbol: "Sm",
            atomicNumber: 62,
            atomicMass: 150.36,
            electronegativity: 0,
            period: 8,
            group: 8,
        },
        {
            name: "",
            symbol: "Eu",
            atomicNumber: 63,
            atomicMass: 151.965,
            electronegativity: 0,
            period: 8,
            group: 9,
        },
        {
            name: "",
            symbol: "Gd",
            atomicNumber: 64,
            atomicMass: 157.25,
            electronegativity: 0,
            period: 8,
            group: 10,
        },
        {
            name: "",
            symbol: "Tb",
            atomicNumber: 65,
            atomicMass: 158.925,
            electronegativity: 0,
            period: 8,
            group: 11,
        },
        {
            name: "",
            symbol: "Dy",
            atomicNumber: 66,
            atomicMass: 162.5,
            electronegativity: 0,
            period: 8,
            group: 12,
        },
        {
            name: "",
            symbol: "Ho",
            atomicNumber: 67,
            atomicMass: 164.93,
            electronegativity: 0,
            period: 8,
            group: 13,
        },
        {
            name: "",
            symbol: "Er",
            atomicNumber: 68,
            atomicMass: 167.26,
            electronegativity: 0,
            period: 8,
            group: 14,
        },
        {
            name: "",
            symbol: "Tm",
            atomicNumber: 69,
            atomicMass: 168.934,
            electronegativity: 0,
            period: 8,
            group: 15,
        },
        {
            name: "",
            symbol: "Yb",
            atomicNumber: 70,
            atomicMass: 173.04,
            electronegativity: 0,
            period: 8,
            group: 16,
        },
        {
            name: "",
            symbol: "Lu",
            atomicNumber: 71,
            atomicMass: 174.967,
            electronegativity: 0,
            period: 8,
            group: 17,
        },
        {
            name: "",
            symbol: "Th",
            atomicNumber: 90,
            atomicMass: 232.038,
            electronegativity: 0,
            period: 9,
            group: 4,
        },
        {
            name: "",
            symbol: "Pa",
            atomicNumber: 91,
            atomicMass: 231.036,
            electronegativity: 0,
            period: 9,
            group: 5,
        },
        {
            name: "",
            symbol: "U",
            atomicNumber: 92,
            atomicMass: 238.029,
            electronegativity: 0,
            period: 9,
            group: 6,
        },
        {
            name: "",
            symbol: "Np",
            atomicNumber: 93,
            atomicMass: 237.048,
            electronegativity: 0,
            period: 9,
            group: 7,
        },
        {
            name: "",
            symbol: "Pu",
            atomicNumber: 94,
            atomicMass: 244,
            electronegativity: 0,
            period: 9,
            group: 8,
        },
        {
            name: "",
            symbol: "Am",
            atomicNumber: 95,
            atomicMass: 243,
            electronegativity: 0,
            period: 9,
            group: 9,
        },
        {
            name: "",
            symbol: "Cm",
            atomicNumber: 96,
            atomicMass: 247,
            electronegativity: 0,
            period: 9,
            group: 10,
        },
        {
            name: "",
            symbol: "Bk",
            atomicNumber: 97,
            atomicMass: 247,
            electronegativity: 0,
            period: 9,
            group: 11,
        },
        {
            name: "",
            symbol: "Cf",
            atomicNumber: 98,
            atomicMass: 251,
            electronegativity: 0,
            period: 9,
            group: 12,
        },
        {
            name: "",
            symbol: "Es",
            atomicNumber: 99,
            atomicMass: 252,
            electronegativity: 0,
            period: 9,
            group: 13,
        },
        {
            name: "",
            symbol: "Fm",
            atomicNumber: 100,
            atomicMass: 257,
            electronegativity: 0,
            period: 9,
            group: 14,
        },
        {
            name: "",
            symbol: "Md",
            atomicNumber: 101,
            atomicMass: 258,
            electronegativity: 0,
            period: 9,
            group: 15,
        },
        {
            name: "",
            symbol: "No",
            atomicNumber: 102,
            atomicMass: 259,
            electronegativity: 0,
            period: 9,
            group: 16,
        },
        {
            name: "",
            symbol: "Lr",
            atomicNumber: 103,
            atomicMass: 206,
            electronegativity: 0,
            period: 9,
            group: 17,
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
                className={`${element.group == 4 ? "w-[65px] ml-[5px]" : "w-[70px]"} ${element.period == 8 ? "h-[65px] mt-[5px]" : "h-[70px]"} grid border cursor-pointer`}
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

    return (
        <main className="m-[25px_auto] w-[80%]">
            <div className="grid grid-cols-[70] grid-cols-18 grid-rows-[70] overflow-x min-w-[750px]">
                <div className="col-[2/4] row-[1/2] text-[rgb(125_125_125)] p-[10px]">
                    Try clicking on an element
                </div>
                <div className="col-[4/12] row-[1/3]">
                    {formula.length > 0 ? (
                        <>
                            <p>
                                {formula!.map((item) => (
                                    <>
                                        {item.element.symbol} * {item.amount} ={" "}
                                        {item.element.atomicMass} * {item.amount} ={" "}
                                        {item.element.atomicMass * item.amount} g/mol
                                        <br />
                                    </>
                                ))}
                            </p>
                            <p className="mt-[15px]">
                                {formula!.map((item) => item.output)}
                                {" = "}
                                {calcMass(formula)} g/mol
                            </p>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="col-[4/12] row-[3/4]">
                    {formula.length > 0 ? (
                        <button
                            className="cursor-pointer"
                            onClick={() => setFormula([])}>
                            Clear
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
                {elements.map((element) => drawElement(element))}
            </div>
        </main>
    );
}
