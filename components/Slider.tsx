import "/src/Styles/style.css";

const Slider = () => {
    const items = Array.from({ length: 7 }); // Create an array for the items
    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': items.length }}>
                {items.map((_, index) => (
                    <div
                        className="item"
                        key={index}
                        style={{ '--position': index + 1 }}
                    >
                        <img
                            src={`src/assets/images/image${index + 1}.jpg`}
                            alt={`image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
