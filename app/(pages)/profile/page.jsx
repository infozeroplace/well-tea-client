"use client";

import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { usePostRewardsMutation } from "@/services/features/reward/rewardApi";
import { useAppSelector } from "@/services/hook";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

const ProfileScreen = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const [
    postRewards,
    { data: redeemData, isLoading: rewardsLoading, isSuccess },
  ] = usePostRewardsMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const rewardsData = [
    {
      discount: 5,
      points: 100,
    },
    {
      discount: 10,
      points: 200,
    },
    {
      discount: 15,
      points: 300,
    },
    {
      discount: 20,
      points: 400,
    },
  ];

  const handleRedeem = async (points) => {
    await postRewards({ data: { points } });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(redeemData?.message);
      onOpen();
    }
  }, [redeemData]);

  const handleCouponCopy = () => {
    const coupon = redeemData?.data?.coupon;
    if (coupon) {
      navigator.clipboard.writeText(coupon);
      toast.success("Coupon code copied to clipboard!");
    }
  };

  return (
    <div className="w-full p-4">
      <div className=" bg-teagreen-100 p-6 section-gap rounded-lg">
        <p className="text-2xl content-gap">Personal Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-3">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user?.phone}
            </p>
          </div>
          <div>
            <p className="mb-2 font-medium">Address</p>
            <p className="">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="">{user?.address || "Location"}</p>
          </div>
        </div>
      </div>
      <div className=" bg-teagreen-100 p-10 rounded-lg space-y-10">
        <p className="text-center">
          Redeeming your points is easy! Click Redeem My Points and copy & paste
          your code at checkout.
        </p>
        <p className="text-center font-medium">
          You have{" "}
          <span className="text-teagreen-600">{user?.rewardPoints}</span> points
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center content-center gap-10">
          {rewardsData.map((reward, index) => (
            <div key={index} className="space-y-2 text-center">
              <h3 className="text-xl font-medium">
                £{reward.discount.toFixed(2)} Off
              </h3>
              <p className="uppercase">{reward.points} points</p>
              <button
                className={`bg-teagreen-600 text-white px-4 py-2 rounded-md ${
                  user?.rewardPoints < reward.points
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handleRedeem(reward.points)}
                disabled={user?.rewardPoints < reward.points}
              >
                Redeem
              </button>
            </div>
          ))}
        </div>
        <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="text-center">
                  Redeem Rewards
                </ModalHeader>
                <ModalBody className="my-5">
                  <div className="text-center space-y-5">
                    <p className="text-teagreen-600">
                      You have successfully redeemed your rewards
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      Your Redeemed Coupon is{" "}
                      <span className="text-teagreen-600">
                        {redeemData?.data?.coupon}
                      </span>
                      <Tooltip content="Copy to Clipboard">
                        <FaRegCopy
                          onClick={handleCouponCopy}
                          className="cursor-pointer"
                        />
                      </Tooltip>
                      {/* <FaCopy /> */}
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    className="bg-rose-100"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <LoadingOverlay isLoading={rewardsLoading} />
    </div>
  );
};

export default ProfileScreen;
