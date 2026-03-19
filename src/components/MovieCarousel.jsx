import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MovieCard from './MovieCard';
import styles from './MovieCarousel.module.css';

/**
 * MovieCarousel — Carrusel de películas con Swiper
 *
 * Props:
 * - movies: array de objetos película (id, title, posterUrl, genre, duration, rating)
 * - onSelect: función callback opcional para manejar selección (propagada a MovieCard)
 */
const MovieCarousel = ({ movies = [], onSelect }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation]}
                navigation
                loop={true}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                style={{ padding: '1rem 0.5rem 2rem' }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard
                            title={movie.title}
                            posterUrl={movie.posterUrl}
                            genre={movie.genre}
                            duration={movie.duration}
                            rating={movie.rating}
                            onSelect={onSelect ? () => onSelect(movie.id) : undefined}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieCarousel;
