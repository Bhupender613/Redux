import React from "react";

const Assingrule = () => {
  return (
    <>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div id="flex" className="row">
              <div className="col-lg-10">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Assing Rule</h1>
                    <div className="addbtn">
                      {" "}
                      <a href="assin-via-csv.html">
                        {" "}
                        <button
                          type="button"
                          id="add-new"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Add New
                        </button>
                      </a>{" "}
                    </div>
                    <div className="addbtn">
                      {" "}
                      <a href="rule.html">
                        {" "}
                        <button
                          type="button"
                          id="add-new"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Rule
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                  <div className="tabellist2">
                    <div className="p-5">
                      <table
                        id="assin-tabel"
                        className="table table-striped table-bordered"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Manufacturer</th>
                            <th>Rule</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Admin</td>
                            <td>Test</td>
                            <td>Test admin</td>
                            <td>
                              <button type="button" id="edit" className="edit">
                                Edit
                              </button>
                              <span>
                                <button
                                  type="button"
                                  id="delete"
                                  className="edit"
                                >
                                  Delete
                                </button>
                              </span>{" "}
                            </td>
                          </tr>
                          <tr>
                            <td>Admin</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>
                              <button type="button" id="edit" className="edit">
                                Edit
                              </button>
                              <span>
                                <button
                                  type="button"
                                  id="delete"
                                  className="edit"
                                >
                                  Delete
                                </button>
                              </span>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assingrule;
