import React from "react";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="ml-auto col-lg-4 col-md-5">
              <p className="copyright-text">
                Copyright © 2021 Porti Music Store Co.
                <br />
                Design: <a href="#">Abel and Jose</a>
              </p>
            </div>
            <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
              <p className="mr-4">
                <i className="fa fa-envelope-o mr-1" />
                <a href="#">hello@company.co</a>
              </p>
              <p>
                <a href="tel:+010-020-0840">
                  <i className="fa fa-phone mr-1" /> 010-020-0840
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* SCRIPTS */}
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossOrigin="anonymous"
      ></script>
      <script src="/js/aos.js"></script>
      <script src="/js/smoothscroll.js"></script>
      <script src="/js/custom.js"></script>
    </>
  );
}
