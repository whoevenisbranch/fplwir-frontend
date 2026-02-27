const PageNotFound = () => {
    
  return (
    <>
      <main className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <h2 className="text-7xl font-bold mb-4">404</h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go back home
          </a>
        </div>
      </main>
  </>
  );
};

export default PageNotFound;
