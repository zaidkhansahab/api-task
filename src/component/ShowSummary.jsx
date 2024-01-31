// ShowSummary.js
import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch detailed show data using the specific show ID
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  return (
    <Container>
      {show && (
        <Card className="mt-4">
          <Card.Img variant="top" src={show.image ? show.image.medium : 'placeholder-image-url'} />
          <Card.Body>
            <Card.Title>{show.name}</Card.Title>
            <Card.Text>
              Genres: {show.genres.join(', ')}
              <br />
              Summary: {show.summary}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ShowSummary;
