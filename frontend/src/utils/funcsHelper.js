export const dateFormat = (date) => {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const dt = new Date(date);
    const day = days[dt.getDay(date)];
    const dayNum = dt.getDate(date);
    const month = months[dt.getMonth(date)];
    const year = dt.getFullYear(date);

    return `${day} ${dayNum} ${month} ${year}`;
};

export const timeFormat = date => {
    const dt = new Date(date);
    const hours = dt.getHours(date);
    const minutes = dt.getMinutes(date);
    const secondes = dt.getSeconds(date);

    return `${hours}:${minutes}:${secondes}`;
}

export const formData = dataStored => {
    const formData = new FormData();
    formData.append("text", dataStored.text);
    if (dataStored.imageUrl) formData.append("imageUrl", dataStored.imageUrl);
    return formData;
}