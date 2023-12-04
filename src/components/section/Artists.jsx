
import React from 'react';

const Artists = () => {
  return (
    <section className="artist-alegria">
        <div className="container">
        <div className="heading center">
            <h2 className="mx-auto">Artists Of Alegria 2024</h2>
        </div>
        <div className="content-wrap">
            <div className="grid">
                <div className="col-lg-4">
                    <div className="card card-strip" data-scroll data-scroll-speed="0.3">
                        <figure>
                            <img src="https://source.unsplash.com/random/200x200" alt="Image 1" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-strip" data-scroll data-scroll-speed="0.5">
                        <figure>
                            <img src="https://source.unsplash.com/random/200x200" alt="Image 1" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-strip" data-scroll data-scroll-speed="0.7">
                        <figure>
                            <img src="https://source.unsplash.com/random/200x200" alt="Image 1" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Artists;
