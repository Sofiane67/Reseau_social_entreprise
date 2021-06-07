export const dateFormat = (date) => {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const dt = new Date();
    const day = days[dt.getDay(date)];
    const dayNum = dt.getDate(date);
    const month = months[dt.getMonth(date)];
    const year = dt.getFullYear(date);

    return `${day} ${dayNum} ${month} ${year}`;
}