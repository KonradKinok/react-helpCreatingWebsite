/**getRandomElement
 *
 * @param {Array} array
 * @returns
 */
export function getRandomElement(array) {
    // Generuj losowy indeks od 0 do array.length - 1
    const randomIndex = Math.floor(Math.random() * array.length);
    // Zwróć wybrany element
    return array[randomIndex];
}

export function formatedData(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const dateTimeString = `${day}.${month}.${year}r.`;
    return { dateTimeString, dateValue: date };
}