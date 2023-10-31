import React, { useState } from "react";

export default function Calculater() {
  const [val, setval] = useState("");
  const backspace = () => {
    try {
      setval(val.slice(0, -1));
    } catch (error) {
      setval("");
    }
  };
  const calc = () => {
    try {
      setval(eval(val));
    } catch (error) {
      setval("Eroor");
    }
  };
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary ">
              {" "}
              Calculater
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-4">
            <div class="card border-praimary mb-3 shadow 3">
              <div class="card-body text-primary ">
                <input
                  type="text"
                  className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow"
                  value={val}
                  onChange={(e) => setval(e.target.value)}
                />
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="1"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      1
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="2"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="3"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow px-2 py-4 fs-4"
                      value="C"
                      onClick={() => backspace()}
                    >
                      C/CE
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="4"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      4
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="5"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="6"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="+"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="7"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      7
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="8"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="9"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4  fs-4"
                      value="*"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="."
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      .
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="0"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="="
                      onClick={() => calc()}
                    >
                      =
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value="/"
                      onClick={(e) => setval(val + e.target.value)}
                    >
                      /
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
