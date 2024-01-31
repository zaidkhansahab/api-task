// ShowList.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h1 className="mt-4 mb-4 text-center">TV Show List</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={show.show.image ? show.show.image.medium : 'placeholder-image-url'} />
              <Card.Body>
                <Card.Title>{show.show.name}</Card.Title>
                <Card.Text>
                  Genres: {show.show.genres.join(', ')}
                </Card.Text>
                <Link to={`/summary/${show.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShowList;
