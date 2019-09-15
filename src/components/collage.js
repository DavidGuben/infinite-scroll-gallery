import React from 'react';
import axios from 'axios';
import './collage.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import UnsplashImage from './unsplashimage';


let Collage = () => {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);

    const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "9441dd4a3700e4d30c2044b73650abc8196f3ff0ecd2ef47596599081d3420c4";
    
        axios
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
          .then (res => {
            setImages([...images, ...res.data]);
            setIsLoaded(true);
          });
    };

    React.useEffect(() => {
        fetchImages();
    }, []);

    // Return JSX
    return (
        <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
            <div className="container">
            <div className="header content">
            <h2 className="subtitle is-6">Infinite Gallery</h2>
                <h1 className="title is-1">
                Infinite Scroll Unsplash Gallery
                </h1>
            <InfiniteScroll
                dataLength={images}
                next={() => fetchImages(5)}
                hasMore={true}
                loader={
                <img
                    src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                    alt="loading"
                />}
            >
                <div className="image-grid" style={{ marginTop: "30px" }}>
                    {loaded ? 
                        images.map((image, index) => (
                            <UnsplashImage url={image.urls.regular} key={index} />
                        )): ""}
                </div>
            </InfiniteScroll>
            </div>

            </div>
        </div>
        </div>
    );
};

export default Collage;