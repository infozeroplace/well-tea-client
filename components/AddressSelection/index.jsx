"use client";

import { countries } from "@/data/countries";
import { useDisclosure } from "@heroui/react";

const AddressSelection = ({
  user,
  addresses = [],
  shippingAddress,
  billingAddress,
  useSameShipping,
  onSameShipping,
  onChangeShippingFields,
  onChangeBillingFields,
  onChangeShippingAddress,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col gap-2 mb-2">
        <h2 className="mb-2">Shipping Address</h2>
        {user && (
          <select
            defaultValue={shippingAddress?._id || ""}
            onChange={onChangeShippingAddress}
            className="border rounded p-2 w-full text-brand__font__size__sm outline-none"
          >
            {addresses.map((address) => (
              <option key={address._id} value={address._id}>
                {address.firstName} {address.lastName}, {address.address1}{" "}
                {address.city}, {address.postalCode}, {address.country}
              </option>
            ))}
          </select>
        )}
        <div className="flex flex-col gap-2">
          <div>
            <select
              name="country"
              value={shippingAddress?.country || ""}
              onChange={onChangeShippingFields}
              className="border rounded p-2 w-full text-brand__font__size__sm outline-none"
              placeholder="Country"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                onChange={onChangeShippingFields}
                defaultValue={shippingAddress?.firstName || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="First name"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                onChange={onChangeShippingFields}
                defaultValue={shippingAddress?.lastName || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="address1"
              onChange={onChangeShippingFields}
              defaultValue={shippingAddress?.address1 || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
              placeholder="Address 1"
            />
          </div>
          <div>
            <input
              type="text"
              name="address2"
              onChange={onChangeShippingFields}
              defaultValue={shippingAddress?.address2 || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
              placeholder="Address 2"
            />
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-full">
              <input
                type="text"
                name="city"
                onChange={onChangeShippingFields}
                defaultValue={shippingAddress?.city || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="City"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="postalCode"
                onChange={onChangeShippingFields}
                defaultValue={shippingAddress?.postalCode || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Postal Code"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="phone"
              onChange={onChangeShippingFields}
              defaultValue={shippingAddress?.phone || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2">Billing Address</h2>
        <div className="my-2 flex items-center gap-2">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={useSameShipping}
              onChange={(e) => onSameShipping(e.target.checked)}
            />
            <span>Use shipping address as billing address</span>
          </label>
        </div>

        {!useSameShipping && (
          <div className="flex flex-col gap-2">
            <div>
              <select
                name="country"
                value={billingAddress?.country || ""}
                onChange={onChangeBillingFields}
                className="border rounded p-2 w-full text-brand__font__size__sm outline-none"
                placeholder="Country"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  onChange={onChangeBillingFields}
                  defaultValue={billingAddress?.firstName || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                  placeholder="First name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  onChange={onChangeBillingFields}
                  defaultValue={billingAddress?.lastName || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="address1"
                onChange={onChangeBillingFields}
                defaultValue={billingAddress?.address1 || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Address 1"
              />
            </div>
            <div>
              <input
                type="text"
                name="address2"
                onChange={onChangeBillingFields}
                defaultValue={billingAddress?.address2 || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Address 2"
              />
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="w-full">
                <input
                  type="text"
                  name="city"
                  onChange={onChangeBillingFields}
                  defaultValue={billingAddress?.city || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                  placeholder="City"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="postalCode"
                  onChange={onChangeBillingFields}
                  defaultValue={billingAddress?.postalCode || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="phone"
                onChange={onChangeBillingFields}
                defaultValue={billingAddress?.phone || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Phone"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressSelection;
