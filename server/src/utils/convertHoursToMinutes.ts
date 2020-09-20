export default function convertHourToMinutes(time: string): number {
    // 8:00
    //separa as horas e minutos e converte p/ number
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    
    return timeInMinutes;
}