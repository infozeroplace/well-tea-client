import StarRating from "@/components/shared/StarRating";
import useToast from "@/hooks/useToast";
import { usePostReviewMutation } from "@/services/features/review/reviewApi";
import { Spinner } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Reviews({ productData }) {
  const [ratingInput, setRatingInput] = useState(null);
  const [hoverRatingInput, setHoverRatingInput] = useState(0);
  const [reviewInput, setReviewInput] = useState("");
  const user = useSelector((state) => state.auth.user);
  const [review, { data, error, isLoading }] = usePostReviewMutation();
  const { handleSuccess, handleError } = useToast();
  const [reviews, setReviews] = useState(productData?.reviews);
  const [showReviews, setShowReviews] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await review({
      data: {
        sku: productData?.sku,
        ratingPoints: ratingInput,
        reviewText: reviewInput,
      },
    });
  };
  useEffect(() => {
    if (data?.success) {
      handleSuccess(data?.message);
      setReviews((prev) => [...prev, data?.data]);
      resetData();
    }
    if (error) {
      handleError(error?.message);
    }
  }, [data]);

  const resetData = () => {
    setRatingInput(0);
    setReviewInput("");
  };

  const reviewValidate = () => {
    return ratingInput && reviewInput;
  };

  return (
    <div className="p-5">
      {reviews?.length > 0 ? (
        <div className="">
          <h3 className="mb-5">
            {reviews?.length} Review for {productData?.title}
          </h3>
          <div>
            {[...reviews]
              .reverse()
              .slice(0, showReviews)
              .map((review) => {

                const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-400"];
                const hash = review?.firstName.charCodeAt(0) % colors.length;
                const color = colors[hash];

                return (
                <div key={review?._id} className="border-b py-5">
                  <div className="flex gap-5">
                    <div
                      className={`${color} text-white flex items-center justify-center rounded-full w-14 h-14 `}
                    >
                      {review?.firstName.charAt(0)}
                    </div>
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
                )}
              )}
          </div>

          {reviews?.length > 3 && (
            <div className="text-center w-full mt-5">
              <button
                onClick={() =>
                  setShowReviews(
                    showReviews < reviews?.length ? showReviews + 3 : 3
                  )
                }
                className="bg-teagreen-200 text-teagreen-700 py-2 px-5 rounded-lg"
              >
                {showReviews < reviews?.length
                  ? "See More Reviews"
                  : "See Less Reviews"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>No Reviews Yet</p>
      )}
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
                className="w-full p-2 border outline-gray-400 outline-offset-0"
                required
              />
              <button
                type="submit"
                disabled={!reviewValidate() || isLoading}
                className={`w-full text-white p-2 ${
                  reviewValidate()
                    ? "bg-teagreen-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isLoading ? <Spinner /> : "Submit"}
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
