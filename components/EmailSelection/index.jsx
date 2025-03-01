import Link from "next/link";

const EmailSelection = ({ user, email, onChangeEmail }) => {
  return (
    <>
      {user && email ? (
        <div className="flex flex-col text-brand__font__size__sm border-b pb-2">
          <span className="text-gray-500">Account</span>
          <span>{email}</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Contact</span>
            <Link href="login?redirect=checkout">
              <span className="underline text-blue-500 text-brand__font__size__sm">
                Log in
              </span>
            </Link>
          </div>
          <div className="flex border rounded-md overflow-hidden w-full">
            <input
              type="text"
              placeholder="Email"
              defaultValue={email || ""}
              onBlur={(e) => onChangeEmail(e.target.value)}
              className="flex-grow px-3 py-2 text-gray-700 outline-none placeholder:text-brand__font__size__sm"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EmailSelection;
