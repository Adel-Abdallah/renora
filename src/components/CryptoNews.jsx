import { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoNewsFeed = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${"76bb47feff60401b952d04fa73f6a8e9"}`
        );
        setNews(response.data.articles);
      } catch (error) {
        setErrorMessage('Error fetching news');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="flow-root">
     {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className="-mb-8">
        {news.map((article) => (
          <li key={article.url}>
            <div className="relative pb-8">
              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className="bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                  >
                    {/* <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.022-14.427a6 6 0 012.996 5.178c.316 3.82-1.928 6.73-5.019 7.57-3.384-.85-5.246-3.064-4.853-6.685a5.998"/> */}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={article.url} className="hover:underline">
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500">
                      {article.description}
                    </p>
                  </div>
                  <time dateTime={article.publishedAt} className="text-sm text-gray-500 whitespace-nowrap">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoNewsFeed;
