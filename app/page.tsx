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
            colour: "green",
        },
        {
            name: "Helium",
            symbol: "He",
            atomicNumber: 2,
            atomicMass: 4.0026,
            electronegativity: 0,
            period: 1,
            group: 18,
            colour: "pink",
        },
        {
            name: "Lithium",
            symbol: "Li",
            atomicNumber: 3,
            atomicMass: 6.941,
            electronegativity: 1.0,
            period: 2,
            group: 1,
            colour: "red",
        },
        {
            name: "Berylium",
            symbol: "Be",
            atomicNumber: 4,
            atomicMass: 9.0122,
            electronegativity: 1.5,
            period: 2,
            group: 2,
            colour: "orange",
        },
        {
            name: "Boron",
            symbol: "B",
            atomicNumber: 5,
            atomicMass: 10.811,
            electronegativity: 2.0,
            period: 2,
            group: 13,
            colour: "yellow",
        },
        {
            name: "Carbon",
            symbol: "C",
            atomicNumber: 6,
            atomicMass: 12.011,
            electronegativity: 2.5,
            period: 2,
            group: 14,
            colour: "green",
        },
        {
            name: "Nitrogen",
            symbol: "N",
            atomicNumber: 7,
            atomicMass: 14.0067,
            electronegativity: 3.0,
            period: 2,
            group: 15,
            colour: "green",
        },
        {
            name: "Oxygen",
            symbol: "O",
            atomicNumber: 8,
            atomicMass: 15.9994,
            electronegativity: 3.5,
            period: 2,
            group: 16,
            colour: "green",
        },
        {
            name: "Fluorine",
            symbol: "F",
            atomicNumber: 9,
            atomicMass: 18.9984,
            electronegativity: 4.0,
            period: 2,
            group: 17,
            colour: "green",
        },
        {
            name: "Neon",
            symbol: "Ne",
            atomicNumber: 10,
            atomicMass: 20.1797,
            electronegativity: 0,
            period: 2,
            group: 18,
            colour: "pink",
        },
        {
            name: "Sodium",
            symbol: "Na",
            atomicNumber: 11,
            atomicMass: 22.9898,
            electronegativity: 0.9,
            period: 3,
            group: 1,
            colour: "red",
        },
        {
            name: "Magnesium",
            symbol: "Mg",
            atomicNumber: 12,
            atomicMass: 24.305,
            electronegativity: 1.2,
            period: 3,
            group: 2,
            colour: "orange",
        },
        {
            name: "Aluminium",
            symbol: "Al",
            atomicNumber: 13,
            atomicMass: 26.9815,
            electronegativity: 1.5,
            period: 3,
            group: 13,
            colour: "violet",
        },
        {
            name: "Silicon",
            symbol: "Si",
            atomicNumber: 14,
            atomicMass: 28.0855,
            electronegativity: 1.8,
            period: 3,
            group: 14,
            colour: "yellow",
        },
        {
            name: "Phospohorus",
            symbol: "P",
            atomicNumber: 15,
            atomicMass: 30.9738,
            electronegativity: 2.1,
            period: 3,
            group: 15,
            colour: "green",
        },
        {
            name: "Sulphur",
            symbol: "S",
            atomicNumber: 16,
            atomicMass: 32.066,
            electronegativity: 2.5,
            period: 3,
            group: 16,
            colour: "green",
        },
        {
            name: "Chlorine",
            symbol: "Cl",
            atomicNumber: 17,
            atomicMass: 25.4527,
            electronegativity: 3.0,
            period: 3,
            group: 17,
            colour: "green",
        },
        {
            name: "Argon",
            symbol: "Ar",
            atomicNumber: 18,
            atomicMass: 39.948,
            electronegativity: 0,
            period: 3,
            group: 18,
            colour: "pink",
        },
        {
            name: "Potassium",
            symbol: "K",
            atomicNumber: 19,
            atomicMass: 39.0983,
            electronegativity: 0.8,
            period: 4,
            group: 1,
            colour: "red",
        },
        {
            name: "Calcium",
            symbol: "Ca",
            atomicNumber: 20,
            atomicMass: 40.078,
            electronegativity: 1.0,
            period: 4,
            group: 2,
            colour: "orange",
        },
        {
            name: "Scandium",
            symbol: "Sc",
            atomicNumber: 21,
            atomicMass: 44.9559,
            electronegativity: 1.3,
            period: 4,
            group: 3,
            colour: "light-blue",
        },
        {
            name: "Titanium",
            symbol: "Ti",
            atomicNumber: 22,
            atomicMass: 47.867,
            electronegativity: 1.5,
            period: 4,
            group: 4,
            colour: "light-blue",
        },
        {
            name: "Vanadium",
            symbol: "V",
            atomicNumber: 23,
            atomicMass: 50.9415,
            electronegativity: 1.6,
            period: 4,
            group: 5,
            colour: "light-blue",
        },
        {
            name: "Chromium",
            symbol: "Cr",
            atomicNumber: 24,
            atomicMass: 51.9961,
            electronegativity: 1.6,
            period: 4,
            group: 6,
            colour: "light-blue",
        },
        {
            name: "Manganese",
            symbol: "Mn",
            atomicNumber: 25,
            atomicMass: 54.938,
            electronegativity: 1.5,
            period: 4,
            group: 7,
            colour: "light-blue",
        },
        {
            name: "Iron",
            symbol: "Fe",
            atomicNumber: 26,
            atomicMass: 55.847,
            electronegativity: 1.8,
            period: 4,
            group: 8,
            colour: "light-blue",
        },
        {
            name: "Cobalt",
            symbol: "Co",
            atomicNumber: 27,
            atomicMass: 58.9332,
            electronegativity: 1.9,
            period: 4,
            group: 9,
            colour: "light-blue",
        },
        {
            name: "Nickel",
            symbol: "Ni",
            atomicNumber: 28,
            atomicMass: 58.693,
            electronegativity: 1.8,
            period: 4,
            group: 10,
            colour: "light-blue",
        },
        {
            name: "Copper",
            symbol: "Cu",
            atomicNumber: 29,
            atomicMass: 63.546,
            electronegativity: 1.9,
            period: 4,
            group: 11,
            colour: "light-blue",
        },
        {
            name: "Zinc",
            symbol: "Zn",
            atomicNumber: 30,
            atomicMass: 65.39,
            electronegativity: 1.6,
            period: 4,
            group: 12,
            colour: "violet",
        },
        {
            name: "Gallium",
            symbol: "Ga",
            atomicNumber: 31,
            atomicMass: 69.723,
            electronegativity: 1.6,
            period: 4,
            group: 13,
            colour: "violet",
        },
        {
            name: "Germanium",
            symbol: "Ge",
            atomicNumber: 32,
            atomicMass: 72.61,
            electronegativity: 1.8,
            period: 4,
            group: 14,
            colour: "yellow",
        },
        {
            name: "Arsenic",
            symbol: "As",
            atomicNumber: 33,
            atomicMass: 74.9216,
            electronegativity: 2.0,
            period: 4,
            group: 15,
            colour: "yellow",
        },
        {
            name: "Selenium",
            symbol: "Se",
            atomicNumber: 34,
            atomicMass: 78.96,
            electronegativity: 2.4,
            period: 4,
            group: 16,
            colour: "green",
        },
        {
            name: "Bromine",
            symbol: "Br",
            atomicNumber: 35,
            atomicMass: 79.904,
            electronegativity: 2.8,
            period: 4,
            group: 17,
            colour: "green",
        },
        {
            name: "Krypton",
            symbol: "Kr",
            atomicNumber: 36,
            atomicMass: 83.8,
            electronegativity: 0,
            period: 4,
            group: 18,
            colour: "pink",
        },
        {
            name: "Rubidium",
            symbol: "Rb",
            atomicNumber: 37,
            atomicMass: 85.4678,
            electronegativity: 0.8,
            period: 5,
            group: 1,
            colour: "red",
        },
        {
            name: "Strontium",
            symbol: "Sr",
            atomicNumber: 38,
            atomicMass: 87.62,
            electronegativity: 1.0,
            period: 5,
            group: 2,
            colour: "orange",
        },
        {
            name: "Yttrium",
            symbol: "Y",
            atomicNumber: 39,
            atomicMass: 99.905,
            electronegativity: 1.2,
            period: 5,
            group: 3,
            colour: "light-blue",
        },
        {
            name: "Zirconium",
            symbol: "Zr",
            atomicNumber: 40,
            atomicMass: 91.224,
            electronegativity: 1.4,
            period: 5,
            group: 4,
            colour: "light-blue",
        },
        {
            name: "Niobium",
            symbol: "Nb",
            atomicNumber: 41,
            atomicMass: 91.224,
            electronegativity: 1.6,
            period: 5,
            group: 5,
            colour: "light-blue",
        },
        {
            name: "Molybdenum",
            symbol: "Mo",
            atomicNumber: 42,
            atomicMass: 95.94,
            electronegativity: 1.8,
            period: 5,
            group: 6,
            colour: "light-blue",
        },
        {
            name: "Technetium",
            symbol: "Tc",
            atomicNumber: 43,
            atomicMass: 98,
            electronegativity: 1.9,
            period: 5,
            group: 7,
            colour: "light-blue",
        },
        {
            name: "Ruthenium",
            symbol: "Ru",
            atomicNumber: 44,
            atomicMass: 101.07,
            electronegativity: 2.2,
            period: 5,
            group: 8,
            colour: "light-blue",
        },
        {
            name: "Rhodium",
            symbol: "Rh",
            atomicNumber: 45,
            atomicMass: 102.906,
            electronegativity: 2.2,
            period: 5,
            group: 9,
            colour: "light-blue",
        },
        {
            name: "Palladium",
            symbol: "Pd",
            atomicNumber: 46,
            atomicMass: 106.42,
            electronegativity: 2.2,
            period: 5,
            group: 10,
            colour: "light-blue",
        },
        {
            name: "Silver",
            symbol: "Ag",
            atomicNumber: 47,
            atomicMass: 107.868,
            electronegativity: 1.9,
            period: 5,
            group: 11,
            colour: "light-blue",
        },
        {
            name: "Cadmium",
            symbol: "Cd",
            atomicNumber: 48,
            atomicMass: 112.411,
            electronegativity: 1.7,
            period: 5,
            group: 12,
            colour: "violet",
        },
        {
            name: "Indium",
            symbol: "In",
            atomicNumber: 49,
            atomicMass: 114.82,
            electronegativity: 1.7,
            period: 5,
            group: 13,
            colour: "violet",
        },
        {
            name: "Tin",
            symbol: "Sn",
            atomicNumber: 50,
            atomicMass: 118.71,
            electronegativity: 1.8,
            period: 5,
            group: 14,
            colour: "violet",
        },
        {
            name: "Antimony",
            symbol: "Sb",
            atomicNumber: 51,
            atomicMass: 121.757,
            electronegativity: 1.9,
            period: 5,
            group: 15,
            colour: "yellow",
        },
        {
            name: "Tellurium",
            symbol: "Te",
            atomicNumber: 52,
            atomicMass: 127.6,
            electronegativity: 2.1,
            period: 5,
            group: 16,
            colour: "yellow",
        },
        {
            name: "Iodine",
            symbol: "I",
            atomicNumber: 53,
            atomicMass: 126.905,
            electronegativity: 2.5,
            period: 5,
            group: 17,
            colour: "green",
        },
        {
            name: "Xenon",
            symbol: "Xe",
            atomicNumber: 54,
            atomicMass: 131.29,
            electronegativity: 0,
            period: 5,
            group: 18,
            colour: "pink",
        },
        {
            name: "Caesium",
            symbol: "Cs",
            atomicNumber: 55,
            atomicMass: 132.905,
            electronegativity: 0.7,
            period: 6,
            group: 1,
            colour: "red",
        },
        {
            name: "Barium",
            symbol: "Ba",
            atomicNumber: 56,
            atomicMass: 137.327,
            electronegativity: 0.9,
            period: 6,
            group: 2,
            colour: "orange",
        },
        {
            name: "Lanthanum",
            symbol: "La",
            atomicNumber: 57,
            atomicMass: 138.906,
            electronegativity: 0,
            period: 6,
            group: 3,
            colour: "blue",
        },
        {
            name: "Hafnium",
            symbol: "Hf",
            atomicNumber: 72,
            atomicMass: 178.49,
            electronegativity: 1.3,
            period: 6,
            group: 4,
            colour: "light-blue",
        },
        {
            name: "Tantalum",
            symbol: "Ta",
            atomicNumber: 73,
            atomicMass: 180.948,
            electronegativity: 1.5,
            period: 6,
            group: 5,
            colour: "light-blue",
        },
        {
            name: "Tungsten",
            symbol: "W",
            atomicNumber: 74,
            atomicMass: 183.85,
            electronegativity: 1.7,
            period: 6,
            group: 6,
            colour: "light-blue",
        },
        {
            name: "Rhenium",
            symbol: "Re",
            atomicNumber: 75,
            atomicMass: 186.207,
            electronegativity: 1.9,
            period: 6,
            group: 7,
            colour: "light-blue",
        },
        {
            name: "Osmium",
            symbol: "Os",
            atomicNumber: 76,
            atomicMass: 190.23,
            electronegativity: 2.2,
            period: 6,
            group: 8,
            colour: "light-blue",
        },
        {
            name: "Iridium",
            symbol: "Ir",
            atomicNumber: 77,
            atomicMass: 192.22,
            electronegativity: 2.2,
            period: 6,
            group: 9,
            colour: "light-blue",
        },
        {
            name: "Platinum",
            symbol: "Pt",
            atomicNumber: 78,
            atomicMass: 195.084,
            electronegativity: 2.2,
            period: 6,
            group: 10,
            colour: "light-blue",
        },
        {
            name: "Gold",
            symbol: "Au",
            atomicNumber: 79,
            atomicMass: 196.967,
            electronegativity: 2.4,
            period: 6,
            group: 11,
            colour: "light-blue",
        },
        {
            name: "Mercury",
            symbol: "Hg",
            atomicNumber: 80,
            atomicMass: 200.59,
            electronegativity: 1.9,
            period: 6,
            group: 12,
            colour: "violet",
        },
        {
            name: "Thallium",
            symbol: "Tl",
            atomicNumber: 81,
            atomicMass: 204.383,
            electronegativity: 1.8,
            period: 6,
            group: 13,
            colour: "violet",
        },
        {
            name: "Lead",
            symbol: "Pb",
            atomicNumber: 82,
            atomicMass: 207.2,
            electronegativity: 1.9,
            period: 6,
            group: 14,
            colour: "violet",
        },
        {
            name: "Bismuth",
            symbol: "Bi",
            atomicNumber: 83,
            atomicMass: 208.98,
            electronegativity: 1.9,
            period: 6,
            group: 15,
            colour: "violet",
        },
        {
            name: "Polonium",
            symbol: "Po",
            atomicNumber: 94,
            atomicMass: 209,
            electronegativity: 2.0,
            period: 6,
            group: 16,
            colour: "violet",
        },
        {
            name: "Astatine",
            symbol: "At",
            atomicNumber: 85,
            atomicMass: 210,
            electronegativity: 2.2,
            period: 6,
            group: 17,
            colour: "yellow",
        },
        {
            name: "Radon",
            symbol: "Rn",
            atomicNumber: 86,
            atomicMass: 222,
            electronegativity: 0,
            period: 6,
            group: 18,
            colour: "pink",
        },
        {
            name: "Francium",
            symbol: "Fr",
            atomicNumber: 87,
            atomicMass: 223,
            electronegativity: 0.7,
            period: 7,
            group: 1,
            colour: "red",
        },
        {
            name: "Radium",
            symbol: "Ra",
            atomicNumber: 88,
            atomicMass: 226.025,
            electronegativity: 0.9,
            period: 7,
            group: 2,
            colour: "orange",
        },
        {
            name: "Actinium",
            symbol: "Ac",
            atomicNumber: 89,
            atomicMass: 227.028,
            electronegativity: 0,
            period: 7,
            group: 3,
            colour: "teal",
        },
        {
            name: "Rutherfordium",
            symbol: "Rf",
            atomicNumber: 104,
            atomicMass: 261,
            electronegativity: 0,
            period: 7,
            group: 4,
            colour: "light-blue",
        },
        {
            name: "Dubnium",
            symbol: "Db",
            atomicNumber: 105,
            atomicMass: 262,
            electronegativity: 0,
            period: 7,
            group: 5,
            colour: "light-blue",
        },
        {
            name: "Seaborgium",
            symbol: "Sg",
            atomicNumber: 106,
            atomicMass: 263,
            electronegativity: 0,
            period: 7,
            group: 6,
            colour: "light-blue",
        },
        {
            name: "Bohrium",
            symbol: "Bh",
            atomicNumber: 107,
            atomicMass: 262,
            electronegativity: 0,
            period: 7,
            group: 7,
            colour: "light-blue",
        },
        {
            name: "Hassium",
            symbol: "Hs",
            atomicNumber: 108,
            atomicMass: 265,
            electronegativity: 0,
            period: 7,
            group: 8,
            colour: "light-blue",
        },
        {
            name: "Meitnerium",
            symbol: "Mt",
            atomicNumber: 109,
            atomicMass: 266,
            electronegativity: 0,
            period: 7,
            group: 9,
            colour: "grey",
        },
        {
            name: "Darmstadtium",
            symbol: "Ds",
            atomicNumber: 110,
            atomicMass: 271,
            electronegativity: 0,
            period: 7,
            group: 10,
            colour: "grey",
        },
        {
            name: "Roentgenium",
            symbol: "Rg",
            atomicNumber: 111,
            atomicMass: 272,
            electronegativity: 0,
            period: 7,
            group: 11,
            colour: "grey",
        },
        {
            name: "Copernicium",
            symbol: "Cn",
            atomicNumber: 112,
            atomicMass: 285,
            electronegativity: 0,
            period: 7,
            group: 12,
            colour: "violet",
        },
        {
            name: "Nihonium",
            symbol: "Nh",
            atomicNumber: 113,
            atomicMass: 284,
            electronegativity: 0,
            period: 7,
            group: 13,
            colour: "grey",
        },
        {
            name: "Flerovium",
            symbol: "Fl",
            atomicNumber: 114,
            atomicMass: 289,
            electronegativity: 0,
            period: 7,
            group: 14,
            colour: "grey",
        },
        {
            name: "Moscovium",
            symbol: "Mc",
            atomicNumber: 115,
            atomicMass: 288,
            electronegativity: 0,
            period: 7,
            group: 15,
            colour: "grey",
        },
        {
            name: "Livermorium",
            symbol: "Lv",
            atomicNumber: 116,
            atomicMass: 293,
            electronegativity: 0,
            period: 7,
            group: 16,
            colour: "grey",
        },
        {
            name: "Tennessine",
            symbol: "Ts",
            atomicNumber: 117,
            atomicMass: 294,
            electronegativity: 0,
            period: 7,
            group: 17,
            colour: "grey",
        },
        {
            name: "Oganesson",
            symbol: "Og",
            atomicNumber: 118,
            atomicMass: 294,
            electronegativity: 0,
            period: 7,
            group: 18,
            colour: "grey",
        },
        {
            name: "",
            symbol: "Ce",
            atomicNumber: 58,
            atomicMass: 140.115,
            electronegativity: 0,
            period: 8,
            group: 4,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Pr",
            atomicNumber: 59,
            atomicMass: 140.908,
            electronegativity: 0,
            period: 8,
            group: 5,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Nd",
            atomicNumber: 60,
            atomicMass: 144.24,
            electronegativity: 0,
            period: 8,
            group: 6,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Pm",
            atomicNumber: 61,
            atomicMass: 145,
            electronegativity: 0,
            period: 8,
            group: 7,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Sm",
            atomicNumber: 62,
            atomicMass: 150.36,
            electronegativity: 0,
            period: 8,
            group: 8,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Eu",
            atomicNumber: 63,
            atomicMass: 151.965,
            electronegativity: 0,
            period: 8,
            group: 9,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Gd",
            atomicNumber: 64,
            atomicMass: 157.25,
            electronegativity: 0,
            period: 8,
            group: 10,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Tb",
            atomicNumber: 65,
            atomicMass: 158.925,
            electronegativity: 0,
            period: 8,
            group: 11,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Dy",
            atomicNumber: 66,
            atomicMass: 162.5,
            electronegativity: 0,
            period: 8,
            group: 12,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Ho",
            atomicNumber: 67,
            atomicMass: 164.93,
            electronegativity: 0,
            period: 8,
            group: 13,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Er",
            atomicNumber: 68,
            atomicMass: 167.26,
            electronegativity: 0,
            period: 8,
            group: 14,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Tm",
            atomicNumber: 69,
            atomicMass: 168.934,
            electronegativity: 0,
            period: 8,
            group: 15,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Yb",
            atomicNumber: 70,
            atomicMass: 173.04,
            electronegativity: 0,
            period: 8,
            group: 16,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Lu",
            atomicNumber: 71,
            atomicMass: 174.967,
            electronegativity: 0,
            period: 8,
            group: 17,
            colour: "blue",
        },
        {
            name: "",
            symbol: "Th",
            atomicNumber: 90,
            atomicMass: 232.038,
            electronegativity: 0,
            period: 9,
            group: 4,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Pa",
            atomicNumber: 91,
            atomicMass: 231.036,
            electronegativity: 0,
            period: 9,
            group: 5,
            colour: "teal",
        },
        {
            name: "",
            symbol: "U",
            atomicNumber: 92,
            atomicMass: 238.029,
            electronegativity: 0,
            period: 9,
            group: 6,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Np",
            atomicNumber: 93,
            atomicMass: 237.048,
            electronegativity: 0,
            period: 9,
            group: 7,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Pu",
            atomicNumber: 94,
            atomicMass: 244,
            electronegativity: 0,
            period: 9,
            group: 8,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Am",
            atomicNumber: 95,
            atomicMass: 243,
            electronegativity: 0,
            period: 9,
            group: 9,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Cm",
            atomicNumber: 96,
            atomicMass: 247,
            electronegativity: 0,
            period: 9,
            group: 10,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Bk",
            atomicNumber: 97,
            atomicMass: 247,
            electronegativity: 0,
            period: 9,
            group: 11,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Cf",
            atomicNumber: 98,
            atomicMass: 251,
            electronegativity: 0,
            period: 9,
            group: 12,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Es",
            atomicNumber: 99,
            atomicMass: 252,
            electronegativity: 0,
            period: 9,
            group: 13,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Fm",
            atomicNumber: 100,
            atomicMass: 257,
            electronegativity: 0,
            period: 9,
            group: 14,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Md",
            atomicNumber: 101,
            atomicMass: 258,
            electronegativity: 0,
            period: 9,
            group: 15,
            colour: "teal",
        },
        {
            name: "",
            symbol: "No",
            atomicNumber: 102,
            atomicMass: 259,
            electronegativity: 0,
            period: 9,
            group: 16,
            colour: "teal",
        },
        {
            name: "",
            symbol: "Lr",
            atomicNumber: 103,
            atomicMass: 206,
            electronegativity: 0,
            period: 9,
            group: 17,
            colour: "teal",
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
                colour: string;
            };
            amount: number;
            output: JSX.Element;
        }[]
    >([]);
    const [bracket, setBracket] = useState<{
        open: boolean;
        close: boolean;
        elements: {
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
        }[];
        amount: number;
    }>({ open: false, close: false, elements: [], amount: 0 });

    const drawElement = (element: {
        name: string;
        symbol: string;
        atomicNumber: number;
        atomicMass: number;
        electronegativity: number;
        period: number;
        group: number;
        colour: string;
    }) => {
        return (
            <div
                className={`${element.group == 4 ? "w-[50px] ml-[5px]" : "w-[55px]"} ${element.period == 8 ? "h-[50px] mt-[5px]" : "h-[55px]"} grid border cursor-pointer element-block element-${element.colour}`}
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
                                    <sub>{newF[newF.indexOf(exisits)].amount + 1}</sub>
                                </span>
                            ),
                        };
                    } else {
                        newF.push({
                            element: element,
                            amount: 1,
                            output: <span>{element.symbol}</span>,
                        });
                    }
                    setFormula(newF);
                }}>
                <p className="text-[12px] h-[10px] pl-[5px]">{element.atomicNumber}</p>
                <div className="w-[100%] text-center h-[20px]">{element.symbol}</div>
                <p className="w-[100%] text-center text-[12px] h-[15px]">{element.atomicMass}</p>
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
                colour: string;
            };
            amount: number;
            output: JSX.Element;
        }[],
    ) => {
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
                        element.element.atomicMass *
                        element.amount *
                        formula[bracketPos[1] + 1].amount;
                } else {
                    mass += element.element.atomicMass * element.amount;
                }
            },
        );
        return mass;
    };

    return (
        <main className="m-[25px_auto] w-[95%]">
            <div className="grid grid-cols-[55] grid-cols-18 grid-rows-[55] overflow-x-auto w-[100%] mx-auto">
                {elements.map((element) => drawElement(element))}
                <div
                    className="col-[3/4] row-[3/4] cursor-pointer flex items-center justify-center h-[45px]"
                    onClick={() => {
                        if (!bracket.open) {
                            setBracket({ ...bracket, open: true });
                            setFormula([
                                ...formula,
                                {
                                    element: {
                                        symbol: "(",
                                        name: "",
                                        atomicMass: 0,
                                        atomicNumber: 0,
                                        electronegativity: 0,
                                        group: 0,
                                        period: 0,
                                        colour: "",
                                    },
                                    amount: 0,
                                    output: <span>{"("}</span>,
                                },
                            ]);
                        }
                    }}>
                    <p className="bg-[#1e7efb] text-white rounded-[30px] my-[5px] hover:bg-[#4998ff] p-[8px_20px] font-[700] text-[20px]">
                        {"("}
                    </p>
                    {bracket.open ? <sub>1</sub> : <></>}
                </div>
                <div
                    className="col-[4/5] row-[3/4] cursor-pointer flex items-center justify-center h-[45px]"
                    onClick={() => {
                        if (bracket.open && !bracket.close) {
                            setBracket({ ...bracket, open: true, close: true });
                            setFormula([
                                ...formula,
                                {
                                    element: {
                                        symbol: ")",
                                        name: "",
                                        atomicMass: 0,
                                        atomicNumber: 0,
                                        electronegativity: 0,
                                        group: 0,
                                        period: 0,
                                        colour: "",
                                    },
                                    amount: 0,
                                    output: <span>{")"}</span>,
                                },
                            ]);
                        }
                    }}>
                    <p className="bg-[#1e7efb] text-white rounded-[30px] my-[5px] hover:bg-[#4998ff] p-[8px_20px] font-[700] text-[20px] h-[45px]">
                        {")"}
                    </p>
                    {bracket.close ? <sub>1</sub> : <></>}
                </div>
                <div className="col-[5/7] row-[3/4] cursor-pointer flex items-center justify-center w-[110px] flex-col h-[45px]">
                    <p>Amount</p>
                    <input
                        type="Number"
                        className="w-[100%]"
                        value={bracket.amount}
                        onChange={(event) =>
                            setBracket({ ...bracket, amount: parseInt(event?.currentTarget.value) })
                        }
                    />
                </div>
                <div
                    className="col-[7/8] row-[3/4] cursor-pointer flex items-center justify-center bg-[#1e7efb] text-white p-[2px_5px] rounded-[28px] my-[5px] hover:bg-[#4998ff] h-[45px]"
                    onClick={() => {
                        if (bracket.open && bracket.close) {
                            setFormula([
                                ...formula,
                                {
                                    element: {
                                        symbol: "0",
                                        name: "",
                                        atomicMass: 0,
                                        atomicNumber: 0,
                                        electronegativity: 0,
                                        group: 0,
                                        period: 0,
                                        colour: "",
                                    },
                                    amount: bracket.amount,
                                    output: (
                                        <span>
                                            <sub>{bracket.amount}</sub>
                                        </span>
                                    ),
                                },
                            ]);
                            setBracket({
                                ...bracket,
                                open: false,
                                close: false,
                                elements: [],
                                amount: 0,
                            });
                        }
                    }}>
                    Add
                </div>
            </div>
            <div className="m-[25px_10px]">
                {formula.length > 0 ? (
                    <>
                        <p>
                            {formula!.map((item, index) => {
                                const bracketPos = [
                                    formula.findIndex((e) => e.element.symbol == "("),
                                    formula.findIndex((e) => e.element.symbol == ")"),
                                ];
                                if (["(", ")", "0"].includes(item.element.symbol)) {
                                    return <></>;
                                }

                                if (
                                    index > bracketPos[0] &&
                                    index < bracketPos[1] &&
                                    formula[bracketPos[1] + 1]
                                ) {
                                    console.log(formula[bracketPos[1] + 1]);

                                    return (
                                        <>
                                            {item.element.symbol} *{" "}
                                            {item.amount * formula[bracketPos[1] + 1].amount} ={" "}
                                            {item.element.atomicMass} *{" "}
                                            {item.amount * formula[bracketPos[1] + 1].amount} ={" "}
                                            {item.element.atomicMass *
                                                item.amount *
                                                formula[bracketPos[1] + 1].amount}{" "}
                                            g/mol
                                            <br />
                                        </>
                                    );
                                }
                                return (
                                    <>
                                        {item.element.symbol} * {item.amount} ={" "}
                                        {item.element.atomicMass} * {item.amount} ={" "}
                                        {item.element.atomicMass * item.amount} g/mol
                                        <br />
                                    </>
                                );
                            })}
                        </p>
                        <p className="mt-[15px]">
                            {formula!.map((item) => item.output)}
                            {" = "}
                            {calcMass(formula)} g/mol
                        </p>
                        <button
                            className="cursor-pointer bg-[#1e7efb] text-white p-[5px_10px] rounded-[15px] w-[175px] my-[5px] hover:bg-[#4998ff]"
                            onClick={() => {
                                setFormula([]);
                                setBracket({
                                    elements: [],
                                    open: false,
                                    close: false,
                                    amount: 0,
                                });
                            }}>
                            Clear
                        </button>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </main>
    );
}
