import { Slide } from "@/types/slide";

export function generateReactComponent(
    slides: Slide[]
) {
    return `
export default function MyCarousel() {
    const slides = ${JSON.stringify(
        slides,
        null,
        4
    )};

    return (
        <div className="carousel">

            {slides.map((slide) => (
                <div
                    key={slide.id}
                    className="slide"
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                    />

                    <h2>{slide.title}</h2>

                    <p>
                        {slide.description}
                    </p>
                </div>
            ))}

        </div>
    );
}
`;
}