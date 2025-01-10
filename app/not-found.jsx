export default function Custom404() {
    return (
        <div className="text-center text-white font-semibold flex flex-col justify-center min-h-[85vh] bg-teagreen-600">
            <h1 className="text-3xl">404 - Page Not Found!</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="text-sky-500 hover:text-sky-600 underline">
                Go back to Home
            </a>
        </div>
    );
}
