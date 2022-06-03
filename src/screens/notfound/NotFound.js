import "../notfound/NotFound.css";

function NotFound() {
  return (
    <>
      <section style={{ height: "100vh", backgroundColor: "lightblue" }}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col text-center p-4 col-11 col-sm-11 col-md-8 col-lg-6 col-xl-5 text-alignment-center">
              <h1 style={{ fontWeight: "bold" }}>404 Page Not Found</h1>
              <h3>Please go back</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
