export const resultsPag = (results, pag) => {

    if (results.length < 10)
        return results;

    return results.slice((pag * 10) - 10, pag * 10);
};