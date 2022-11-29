import React from "react";

const Productlist = () => {
  return (
    <>
      <div className="tabellist">
        <div className="p-5">
          <table
            id="example"
            className="table table-striped table-bordered"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Part No</th>
                <th>Supplier Name</th>
                <th>Short Description</th>
                <th>Long Description</th>
                <th>Distribution Price</th>
                <th>MSRP Price</th>
                <th>Quantity Per Case</th>
                <th>Unit Measure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>Test</td>
                <td>Test admin</td>
                <td>Test admin</td>
                <td>125</td>
                <td>140</td>
                <td>6</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>Test</td>
                <td>Test admin</td>
                <td>Test admin</td>
                <td>250</td>
                <td>140</td>
                <td>6</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Productlist;
