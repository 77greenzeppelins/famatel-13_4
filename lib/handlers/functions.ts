// export const removeAccents = (string: string) =>
//   string
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '')
//     .replace(/ł/g, 'l');

export const createPath = (string: string) =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ł/g, 'l')
    .replace(/ /g, '-');
