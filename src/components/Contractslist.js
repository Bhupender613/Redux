import React from "react";

const Contractslist = () => {
  return (
    <>
      <div className="container-fluid tabel12">
        <div className="p-5">
          <table
            id="example"
            className="table table-striped table-bordered"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Customer</th>
                <th>Part No</th>
                <th>Manufacturer</th>
                <th>Unit of Measure</th>
                <th>Quantity Per Case</th>
                <th>Rebate %</th>
                <th>Effective Date</th>
                <th>Expiration Date</th>
                <th>Currency</th>
                <th>Distribution Price</th>
                <th>Price Type</th>
                <th>+ / -</th>
                <th>Value</th>
                <th>Anything Under</th>
                <th>Price</th>
                <th>End User Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>5</td>
                <td>Chsir</td>
                <td>5</td>
                <td>20</td>
                <td>50%</td>
                <td>22/08/2020</td>
                <td>25/08/2020</td>
                <td>$</td>
                <td>220</td>
                <td>100</td>
                <td>80</td>
                <td>8</td>
                <td>No</td>
                <td>220</td>
                <td>230</td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>5</td>
                <td>Chsir</td>
                <td>5</td>
                <td>20</td>
                <td>50%</td>
                <td>22/08/2020</td>
                <td>25/08/2020</td>
                <td>$</td>
                <td>220</td>
                <td>100</td>
                <td>80</td>
                <td>8</td>
                <td>No</td>
                <td>220</td>
                <td>230</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contractslist;
