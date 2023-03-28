import React from 'react';

function CustomerGrid({ customers }) {
  return(
  <>
  <table>
  <thead>
    <tr>
      <th class="header-col">ID</th>
      <th class="header-col">Name</th>
      <th class="header-col">Address</th>
      <th class="header-col">Email</th>
      <th class="header-col">Phone</th>
      <th class="header-col">Status</th>
      <th class="header-col">Next Service Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="data-row">
      <td>1</td>
      <td>John Smith</td>
      <td>123 Main St.</td>
      <td>jsmith@example.com</td>
      <td>555-1234</td>
      <td>Active</td>
      <td>2023-05-01</td>
    </tr>
    <tr class="data-row">
      <td>2</td>
      <td>Jane Doe</td>
      <td>456 Oak St.</td>
      <td>jdoe@example.com</td>
      <td>555-5678</td>
      <td>Inactive</td>
      <td>2023-06-15</td>
    </tr>
    <tr class="data-row">
      <td>3</td>
      <td>Bob Johnson</td>
      <td>789 Maple Ave.</td>
      <td>bjohnson@example.com</td>
      <td>555-9012</td>
      <td>Active</td>
      <td>2023-07-23</td>
    </tr>
  </tbody>
</table>

</>
);
}

export default CustomerGrid;
