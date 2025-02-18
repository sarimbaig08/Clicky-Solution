import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviewsData = [
  {
    name: "John Doe",
    review: "Clicky Solutions helped boost our sales tremendously!",
    image: "https://source.unsplash.com/100x100/?man,face",
  },
  {
    name: "Jane Smith",
    review: "Their marketing strategies are top-notch. Highly recommended!",
    image: "https://source.unsplash.com/100x100/?woman,face",
  },
  {
    name: "Michael Lee",
    review: "Amazing web development services, very professional team.",
    image: "https://source.unsplash.com/100x100/?business,man",
  },
  {
    name: "Sarah Wilson",
    review: "Great experience working with Clicky Solutions!",
    image: "https://source.unsplash.com/100x100/?girl,portrait",
  },
  {
    name: "David Brown",
    review: "They provided excellent support for our ecommerce.",
    image: "https://source.unsplash.com/100x100/?man,portrait",
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-6"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            animate={{ x: -currentIndex * 320 }} // Move slider
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {reviewsData.map((review, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">
                  {review.name}
                </h3>
                <p className="text-gray-600 mt-2 text-center">
                  {review.review}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
