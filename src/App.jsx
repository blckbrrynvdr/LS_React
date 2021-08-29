import React, { PureComponent } from 'react';
import './App.css';
 
class App extends PureComponent {
  state = {
    isLoading: false,
    data: [],
    error: null,
  }
 
  componentDidMount() {
    this.setState({ isLoading: true});
    fetch('http://api.tvmaze.com/shows/180/episodes', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          this.setState({ data, isLoading: false });
        }, 1000);
      })
      .catch(error => {
        this.setState({ error, isLoading: false});
      });
  }
 
  render() {
    const { data, isLoading, error } = this.state;
 
    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;
 
    return (
      <div>
        <h1>Firefly</h1>
        {data.map(ep => (
          <div key={ep.id}>
            {ep.image && <img src={ep.image.original} alt={ep.name} />}
          </div>
        ))}
      </div>
    );
  }
}
 
export default App;