class Weather{

  constructor(location, country){
    this.location = location;
    this.country = country;
    this.apiKey = 'd6c6959af4195ce703da1c450ca166b3'
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=${this.location},${this.country}&units=metric&appid=${this.apiKey}`;
  }

  async getWeather(){
    const response = await fetch(this.url);
    const data = await response.json();
    console.log(data);
    return data
  }

}