import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Quote() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=future', {
          method: 'GET',
          headers: { 'X-Api-Key': 'QAg5054fzc1/nKnO7U7ZxA==8svFSmkD8MNc50DZ' },
          contentType: 'application/json',
        });
        const results = await response.json();
        setQuote(results[0]);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    FetchQuote();
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <>
        <p>
          Please check your network connection!
        </p>
      </>
    );
  }

  return (
    <div className="quote">
      <p>
        &quot;
        {quote.quote}
        &quot;
      </p>
      <p>
        Quote Category:
        {quote.category}
      </p>
      <p>
        Author:
        {quote.author}
      </p>
    </div>
  );
}
