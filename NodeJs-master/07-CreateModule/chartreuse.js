/**
 * Transforme du texte en chartreuse
 * @param {string} text le texte
 * @returns 
 */
 const makeChartreuse = function(text) {
    return `\x1b[92m ${text} \x1b[0m`;
}

// l'export défaut de ES6 n'existe pas en commonJS
// export default makeChartreuse;

module.exports = makeChartreuse;

// En EJS, l'export du module serait comme ça : 
// module.exports = {
//     default : makeChartreuse,
//     autreExport : 1
// }