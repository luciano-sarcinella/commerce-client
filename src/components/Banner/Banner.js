import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container px-lg-3">
            <section  className={`hero pb-3 bg-cover bg-center d-flex align-items-center ${isMobile ? 'mobile-background' : 'desktop-background'}`}>
                <div className="container py-5">
                    <div className="row px-4 px-lg-5">
                    <div className="col-lg-6">
                        <p className="text-muted small text-uppercase mb-2">New Inspiration 2023</p>
                        <h1 className="h2 text-uppercase mb-3">20% off Nueva temporada</h1><Link className="btn btn-dark rounded-0" to="../productos/1" relative='path'>Ver Coleccion</Link>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner