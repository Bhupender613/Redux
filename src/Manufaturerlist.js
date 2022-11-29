import React from "react";

const Manufaturerlist = () => {
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone</th>
                <th>Email Address</th>
                <th>Phone</th>
                <th>City</th>
                <th>Region</th>
                <th>Postal zip code</th>
                <th>Country</th>
                <th>Street address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>Test</td>
                <td>admin@gmail.com</td>
                <td>1256265411</td>
                <td>admin@gmail.com</td>
                <td>1256265411</td>
                <td>Mohali</td>
                <td>Hindu</td>
                <td>452112</td>
                <td>India</td>
                <td>Test #3806</td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>Test</td>
                <td>admin@gmail.com</td>
                <td>1256265411</td>
                <td>admin@gmail.com</td>
                <td>1256265411</td>
                <td>Mohali</td>
                <td>Hindu</td>
                <td>452112</td>
                <td>India</td>
                <td>Test #3806</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manufaturerlist;
