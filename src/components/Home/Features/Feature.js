import React, { useRef } from 'react'

function Feature(props) {
    const { videoURL, title, content } = props
    const videoRef = useRef(null)

    const playVideo = () => {        
        const video = videoRef.current;

        video.readyState >= 3 
            ? video.play() 
            : video.addEventListener('canplaythrough', () => { video.play() }, { once: true });

        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });
    };

    const pauseVideo = () => {
        const video = videoRef.current;
        video.pause();
    };

    return (
        <article onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <video ref={videoRef} src={videoURL} muted />

            <section>
                <h2>{title}</h2>
                <p>{content}</p>
             </section>
        </article>
    )
}

export default Feature
