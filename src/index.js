"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const s2g_props_1 = require("s2g_props");
const fs = __importStar(require("fs"));
// Read the SVG file
const svgString = fs.readFileSync('./src/input.svg', 'utf8');
// Define the configuration
const specs = {
    class: "stadium",
    classList: ["Stadium"],
    prefix: "",
    children: [{
            class: "section",
            classList: ["Section"],
            prefix: "",
            children: [{
                    prefix: "",
                    class: "row",
                    classList: ["Row"],
                    children: [{
                            prefix: "",
                            class: "seat",
                            classList: ["Seat"],
                        }]
                }]
        }]
};
// Convert SVG to GeoJSON
const result = (0, s2g_props_1.convertFromString)(svgString, specs);
// Write the result to a file
fs.writeFileSync('./out.json', JSON.stringify(result, null, 2));
console.log('Conversion complete! Check out.json for results');
