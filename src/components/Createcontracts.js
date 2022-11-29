import React from "react";

const Createcontracts = () => {
  return (
    <>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div id="flex" className="row">
              <div className="col-lg-10">
                <div className="p-5" id="myGroup">
                  <div className="texheadding">
                    <div className="left">
                      <h1 className="h4 text-gray-900 mb-4">
                        Create Contracts
                      </h1>
                    </div>
                  </div>
                  {/* VIA aplyin formula*/}
                  <div
                    className="collapse show"
                    id="collapseExample_new"
                    data-parent="#myGroup"
                  >
                    <form className="user">
                      <div className="card card-body">
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="customer">
                              Customer
                            </label>
                            <select
                              id="customer"
                              name="customer"
                              className="country form user dropdown1"
                            >
                              <option value>Customer</option>
                              <option value={1}>Russia</option>
                              <option value={2}>Germany</option>
                            </select>
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="part_no">
                              Part No
                            </label>
                            <select
                              id="part_no"
                              name="part_no"
                              className="country form user dropdown1"
                            >
                              <option value>Part No</option>
                              <option value={1}>Russia</option>
                              <option value={2}>Germany</option>
                            </select>
                          </div>
                        </div>
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="manufacturer">
                              Manufacturer
                            </label>
                            <select
                              id="manufacturer"
                              name="manufacturer"
                              className="country form user dropdown1"
                            >
                              <option value>Manufacturer</option>
                              <option value={1}>Russia</option>
                              <option value={2}>Germany</option>
                            </select>
                          </div>
                          <div className="col-sm-6">
                            <label className="tagname" htmlFor="sell">
                              Unit of Measure
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              name="sell"
                              id="sell"
                              placeholder="Unit of Measure"
                            />{" "}
                          </div>
                        </div>
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0 ">
                            <label
                              className="tagname"
                              htmlFor="contract_number"
                            >
                              Quantity Per Case
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              name="quantity"
                              id="quantity"
                              placeholder="Quantity Per Case"
                            />{" "}
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="rebate">
                              Rebate %
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              name="rebate"
                              id="rebate"
                              placeholder="Rebate %"
                            />{" "}
                          </div>
                        </div>
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0 ">
                            <label className="tagname" htmlFor="effect_date">
                              Effective Date
                            </label>
                            <input
                              type="date"
                              className="form-control form-control-user"
                              name="effect_date"
                              id="effect_date"
                            />{" "}
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="expirat_date">
                              Expiration Date
                            </label>
                            <input
                              type="date"
                              className="form-control form-control-user"
                              name="expirat_date"
                              id="expirat_date"
                            />{" "}
                          </div>
                        </div>
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <label className="tagname" htmlFor="cont_trem">
                              Currency
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-user"
                              name="currency"
                              id="currency"
                              placeholder="Currency"
                            />{" "}
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0"></div>
                        </div>
                        <div id="row-1" className="form-group row empty">
                          <div className="col-sm-6 mb-3 mb-sm-0"></div>
                        </div>
                        <input
                          type="submit"
                          name="submit"
                          className="btn btn-primary btn-user btn-block"
                          id="submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/*VIA aplyin formula */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createcontracts;
