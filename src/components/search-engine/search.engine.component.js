import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, GridColumn } from '../../theme/grid';
import {
  Container,
  SearchEngine,
  Loader,
  Images,
  ImagesGrid,
} from './search.engine.styled';

export const SearchEngineComponent = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(25);
  const [images, setImages] = useState([]);
  const [infiniteScrollLoader, setInfiniteScrollLoader] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setImages([]);
    setOffset(25);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`
      );
      const json = await response.json();
      await setImages(json.data);
      setLoading(false);
      setInfiniteScrollLoader(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('API response error', error);
    }
  };

  const fetchMoreData = async () => {
    const limitImagesFetch = 25;
    setOffset(limitImagesFetch + offset);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=25&offset=${offset}&rating=G&lang=en`
      );
      const json = await response.json();
      await setImages(images.concat(json.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('API response error', error);
    }
  };

  return (
    <Container>
      <SearchEngine>
        <input
          placeholder="Search images..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && query !== '' && fetchData()}
        />
        <FontAwesomeIcon icon={faSearch} />
      </SearchEngine>
      <Images>
        <Grid>
          <GridColumn>
            {loading && (
              <Loader>
                <CircularProgress size={60} />
              </Loader>
            )}
            {!loading && infiniteScrollLoader && (
              <InfiniteScroll
                dataLength={images.length}
                next={fetchMoreData}
                hasMore
                loader={<h4>Loading...</h4>}
              >
                <ImagesGrid>
                  {images.map((img) => {
                    return (
                      <a
                        href={img.images.original.url}
                        key={img.id}
                        target="blank"
                      >
                        <img src={img.images.original.url} alt="img" />
                      </a>
                    );
                  })}
                </ImagesGrid>
              </InfiniteScroll>
            )}
          </GridColumn>
        </Grid>
      </Images>
    </Container>
  );
};