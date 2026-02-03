import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current = videoRef.current.playbackRate = 3;
    })

    return (
         <section id="hero">
             <div>
                 <h1>Macbook Pro</h1>
                 <img src="/title.png" alt="Macbook title" />
             </div>
         <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
             <button>Buy</button>

                 <p>From $1599 or $133.25/mo. for 12 mo. </p>

         </section>
    )
}
export default Hero
