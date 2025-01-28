import StarRating from "@/components/shared/StarRating";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePostReviewMutation } from "@/services/features/review/reviewApi";

function Reviews({ product }) {
  const [ratingInput, setRatingInput] = useState(0);
  const [hoverRatingInput, setHoverRatingInput] = useState(0);
  const [reviewInput, setReviewInput] = useState("");
  const user = useSelector((state) => state.auth.user);
  const [review, { data, error, isLoading }] = usePostReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ratingInput, reviewInput, user });

    await review({
      // user: user?._Id,
      // product: product?._id,
      // date: new Date(),
      data: {
        sku: product?.sku,
        ratingPoints: ratingInput,
        reviewText: reviewInput,
      },
    });
    resetData();
  };

  const resetData = () => {
    setRatingInput(0);
    setReviewInput("");
  }

  return (
    <div className="p-5">
      <h3 className="mb-5">{product?.reviews?.length} Review for {product?.title}</h3>
      <div>
        {product?.reviews?.length > 1 &&
          product?.reviews?.map((review) => (
            <div key={review?._id} className="border-b py-5">
              <div className="flex gap-5">
                <img
                  src={review?.photo}
                  alt={`${review?.firstName} ${review?.lastName}`}
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col gap-1 font-thin">
                  <span className="font-extralight">{`${review?.firstName} ${review?.lastName}`}</span>
                  <span>
                    {new Date(review?.date).toLocaleString("en-US", {
                      // weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      // hour: "2-digit",
                      // minute: "2-digit",
                      // second: "2-digit",
                      // timeZoneName: "short",
                    })}
                  </span>
                  <StarRating rating={review?.ratingPoints} />
                  <p>{review?.reviewText}</p>
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
                      aria-label="star"
                      onClick={() => setRatingInput(star)}
                      onMouseEnter={() => setHoverRatingInput(star)}
                      onMouseLeave={() => setHoverRatingInput(0)}
                      className={`text-2xl ${
                        star <= (hoverRatingInput || ratingInput)
                          ? "text-orange-500"
                          : "text-gray-300"
                      } focus:outline-none`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Your Review"
                value={reviewInput}
                onChange={(e) => setReviewInput(e.target.value)}
                className="w-full p-2 border"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teagreen-500 text-white p-2"
              >
                {isLoading ? "Submitting..." : "Submit"}
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
