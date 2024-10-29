import { convertFromString } from 's2g_props';
import * as fs from 'fs';

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
const result = convertFromString(svgString, specs);

// Write the result to a file
fs.writeFileSync('./out.json', JSON.stringify(result, null, 2));

console.log('Conversion complete! Check out.json for results');