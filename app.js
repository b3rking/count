class B3rking_Time
{
  constructor() {
    let timestamps = new Date()
    this._day = timestamps.getDay()
    this._date = timestamps.getDate()
    this._month = timestamps.getMonth()
    this._year = timestamps.getFullYear()
    this._hour = timestamps.getHours()
    this._minutes = timestamps.getMinutes()
    this._seconds = timestamps.getSeconds()
  }

  get date_jour() {
    return this._date
  }

  get jour() {
    return this._day
  }

  show() {
    setInterval(() => {
      console.log(this._seconds)
    }, 1000)
  }
}
