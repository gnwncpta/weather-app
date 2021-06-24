function displayDate(){
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date();
    const day = days[date.getDay()]
    const tanggal = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear();

    return `${day}, ${tanggal} ${month} ${year}`;
}

export default displayDate;