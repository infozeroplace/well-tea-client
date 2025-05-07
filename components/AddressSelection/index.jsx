"use client";

import { countries } from "@/data/countries";

const AddressSelection = ({
  user,
  savedAddresses,
  defaultCountry,
  shippingAddress,
  billingAddress,
  isShipping,
  requiredErrors,
  onChangeIsShipping,
  onChangeShippingAdd,
  onChangeBillingAdd,
  onSelectShippingAdd,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-2">
        <h2 className="mb-2">Shipping Address</h2>
        {user && savedAddresses.length > 0 && (
          <select
            value={shippingAddress?._id || ""}
            onChange={onSelectShippingAdd}
            className="border rounded p-2 w-full text-brand__font__size__sm outline-none capitalize"
          >
            {savedAddresses.map((address) => (
              <option
                key={address._id}
                value={address._id}
                className="capitalize"
              >
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
              value={shippingAddress?.country || defaultCountry}
              onChange={onChangeShippingAdd}
              className="border rounded p-2 w-full text-brand__font__size__sm outline-none capitalize"
              placeholder="Country"
            >
              {countries.map((country) => (
                <option key={country} value={country} className="capitalize">
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="firstName"
                onChange={onChangeShippingAdd}
                value={shippingAddress?.firstName || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                placeholder="First name"
              />
              {requiredErrors?.sFirstName && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.sFirstName}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="lastName"
                onChange={onChangeShippingAdd}
                value={shippingAddress?.lastName || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                placeholder="Last name"
              />
              {requiredErrors?.sLastName && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.sLastName}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <input
              type="text"
              name="address1"
              onChange={onChangeShippingAdd}
              value={shippingAddress?.address1 || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
              placeholder="Address 1"
            />
            {requiredErrors?.sAddress && (
              <p className="text-brand__font__size__xs text-error font-brand__font__500">
                {requiredErrors?.sAddress}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="address2"
              onChange={onChangeShippingAdd}
              value={shippingAddress?.address2 || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
              placeholder="Address 2 (Optional)"
            />
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="city"
                onChange={onChangeShippingAdd}
                value={shippingAddress?.city || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                placeholder="City"
              />
              {requiredErrors?.sCity && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.sCity}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="postalCode"
                onChange={onChangeShippingAdd}
                value={shippingAddress?.postalCode || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Postal Code"
              />
              {requiredErrors?.sPostalCode && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.sPostalCode}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <input
              type="text"
              name="phone"
              onChange={onChangeShippingAdd}
              value={shippingAddress?.phone || ""}
              className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
              placeholder="Phone"
            />
            {requiredErrors?.sPhone && (
              <p className="text-brand__font__size__xs text-error font-brand__font__500">
                {requiredErrors?.sPhone}
              </p>
            )}
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
              checked={isShipping}
              onChange={(e) => onChangeIsShipping(e.target.checked)}
            />
            <span>Use shipping address as billing address</span>
          </label>
        </div>

        {!isShipping && (
          <div className="flex flex-col gap-2">
            <div>
              <select
                name="country"
                value={billingAddress?.country || defaultCountry}
                onChange={onChangeBillingAdd}
                className="border rounded p-2 w-full text-brand__font__size__sm outline-none capitalize"
                placeholder="Country"
              >
                {countries.map((country) => (
                  <option key={country} value={country} className="capitalize">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  name="firstName"
                  onChange={onChangeBillingAdd}
                  value={billingAddress?.firstName || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                  placeholder="First name"
                />
                {requiredErrors?.bFirstName && (
                  <p className="text-brand__font__size__xs text-error font-brand__font__500">
                    {requiredErrors?.bFirstName}
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  name="lastName"
                  onChange={onChangeBillingAdd}
                  value={billingAddress?.lastName || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                  placeholder="Last name"
                />
                {requiredErrors?.bLastName && (
                  <p className="text-brand__font__size__xs text-error font-brand__font__500">
                    {requiredErrors?.bLastName}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="address1"
                onChange={onChangeBillingAdd}
                value={billingAddress?.address1 || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                placeholder="Address 1"
              />
              {requiredErrors?.bAddress && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.bAddress}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="address2"
                onChange={onChangeBillingAdd}
                value={billingAddress?.address2 || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                placeholder="Address 2 (Optional)"
              />
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  name="city"
                  onChange={onChangeBillingAdd}
                  value={billingAddress?.city || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none capitalize"
                  placeholder="City"
                />
                {requiredErrors?.bCity && (
                  <p className="text-brand__font__size__xs text-error font-brand__font__500">
                    {requiredErrors?.bCity}
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  type="text"
                  name="postalCode"
                  onChange={onChangeBillingAdd}
                  value={billingAddress?.postalCode || ""}
                  className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                  placeholder="Postal Code"
                />
                {requiredErrors?.bPostalCode && (
                  <p className="text-brand__font__size__xs text-error font-brand__font__500">
                    {requiredErrors?.bPostalCode}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                name="phone"
                onChange={onChangeBillingAdd}
                value={billingAddress?.phone || ""}
                className="border p-2 text-brand__font__size__sm rounded w-full outline-none"
                placeholder="Phone"
              />
              {requiredErrors?.bPhone && (
                <p className="text-brand__font__size__xs text-error font-brand__font__500">
                  {requiredErrors?.bPhone}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressSelection;
