import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FormattedMessage, useIntl } from "react-intl";

import data from "./data";
// import "./pagination.css";

function Paginate() {
  const [page, setPage] = useState(0);
  const [employees, setEmployees] = useState(data);

  const employeesPerPage = 5;
  const numberOfEmployeesVistited = page * employeesPerPage;
  console.log(numberOfEmployeesVistited);

  const totalPages = Math.ceil(employees.length / employeesPerPage);
  const changePage = ({ selected }: { selected: any }) => {
    setPage(selected);
  };

  const displayEmployees = employees
    .slice(
      numberOfEmployeesVistited,
      numberOfEmployeesVistited + employeesPerPage
    )
    .map((employee) => {
      const intl = useIntl();

      return (
        <div className="w-fullflex flex-nowrap space-x-2">
          {/* card */}
          <div className="rounded-md border border-neutral-500 bg-neutral-700 hover:bg-neutral-600 transition-colors text-neutral-100 flex flex-row items-start cursor-pointer place-content-evenly">
            <h4 className="mr-4">
              <FormattedMessage id="paginate01" defaultMessage="Name" />:{" "}
              {employee.name}
            </h4>
            <h4 className="mr-4">
              <FormattedMessage id="paginate02" defaultMessage="Department" />:{" "}
              {employee.department}
            </h4>
            <h4 className="mr-4">
              <FormattedMessage id="paginate03" defaultMessage="City" />:{" "}
              {employee.city}
            </h4>
            <ReactPaginate
              previousLabel={intl.formatMessage({ id: "previous01" })}
              nextLabel={intl.formatMessage({ id: "next01" })}
              pageCount={totalPages}
              onPageChange={changePage}
              containerClassName="w-4/5 h-4 list-none flex justify-center margin-auto pt-4"
              previousLinkClassName="rounded border-2 border-red-200 text-orange-500m mx-2 cursor-pointer"
              nextLinkClassName="rounded border-2 border-red-200 text-orange-500m mx-2 cursor-pointer"
              disabledClassName="text-grey-600 bg-grey-100"
              activeClassName="text-white bg-red-100"
            />
            ;
          </div>
        </div>
      );
    });

  return <div>{displayEmployees}</div>;
}

export default Paginate;
