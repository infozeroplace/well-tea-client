import StarRating from "@/components/shared/StarRating";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

function Reviews({}) {
  const productReviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2021-09-01",
    },
    {
      id: 2,
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      rating: 5,
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2021-09-02",
    },
  ];
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ rating, review, name, email });
    alert("Review submitted!");
  };

  return (
    <div className="p-5">
      <h3 className="mb-5">2 Review for OOlong Tea</h3>
      <div>
        {productReviews.map((review) => (
          <div key={review.id} className="border-b py-5">
            <div className="flex gap-5">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex flex-col gap-1 font-thin">
                <span className="font-extralight">{review.name}</span>
                <span>{review.date}</span>
                <StarRating rating={review.rating} />
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {user ? (
        <div className="my-10">
          <h3 className="mb-10 font-normal">Add Your Review</h3>
          <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <span className="font-extralight">Your Rating:</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`text-2xl ${
                        star <= (hoverRating || rating)
                          ? "text-orange-500"
                          : "text-gray-300"
                      } focus:outline-none`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              {/* <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border"
                  required
                /> */}
              <textarea
                placeholder="Your Review"
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-2 border"
                required
              />
              <button
                type="submit"
                className="w-full bg-teagreen-500 text-white p-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex gap-1 my-10">
          <Link href="/login" className="text-teagreen-500 font-light">
            Sign In
          </Link>
          <span className="font-light">To Write A Review</span>
        </div>
      )}
    </div>
  );
}

export default Reviews;
