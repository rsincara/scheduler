export const getCurrentWeekNumber = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const today = new Date(year, month, 0).getTime();
    const now = new Date().getTime();
    const weekNumber = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));

    return weekNumber;
}