import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewSlider = () => {
  const clientReviews = [
    {
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Sophia Reynolds",
      review:
        "The digital marketing strategies completely transformed our online presence. We've seen a 3x increase in engagement!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "James Carter",
      review:
        "Exceptional SEO and ad targeting! Our brand visibility skyrocketed, bringing in high-quality leads like never before.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Emily Parker",
      review:
        "Our Shopify store was built with perfection. The design is sleek, user-friendly, and boosted our conversions significantly!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      name: "Daniel Smith",
      review:
        "They took our Shopify store to the next level! The custom features and seamless checkout experience increased our sales.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      name: "Olivia Martinez",
      review:
        "The sales strategy they provided helped us close deals faster and improved our overall conversion rate drastically!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      name: "Liam Johnson",
      review:
        "Our custom website exceeded our expectations! It’s fast, responsive, and exactly what we envisioned for our business.",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-center mt-20">
        What Our Clients Say
      </h1>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
        }}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="flex py-20"
      >
        {clientReviews.map((reviews, index) => (
          <SwiperSlide key={index}>
            <div className="relative max-w-sm rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute left-6 top-6 fill-slate-100"
              >
                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
              </svg>
              <blockquote className="relative">
                <p className="text-lg tracking-tight text-slate-900">
                  {reviews.review}
                </p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <div className="font-display text-base text-slate-900">
                    {reviews.name}
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50">
                  <img
                    alt="User Image"
                    className="h-14 w-14 object-cover"
                    src={reviews.image}
                  />
                </div>
              </figcaption>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSlider;
