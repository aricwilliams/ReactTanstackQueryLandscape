import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { IssueItem } from "./IssueItem";
import fetchWithError from "../helpers/fetchWithError";
import Loader from "./Loader";

export default function IssuesList({ labels, status, pageNum, setPageNum }) {
  const queryClient = useQueryClient();
  const issuesQuery = useQuery(
    ["issues", { labels, status, pageNum }],
    async ({ signal }) => {
      const statusString = status ? `&status=${status}` : "";
      const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
      const paginationString = pageNum ? `&page=${pageNum}` : "";

      const results = await fetchWithError(
        `/api/issues?${labelsString}${statusString}${paginationString}`,
        {
          signal,
        }
      );

      results.forEach((issue) => {
        queryClient.setQueryData(["issues", issue.number.toString()], issue);
      });

      return results;
    },
    {
      keepPreviousData: true,
    }
  );
  const [searchValue, setSearchValue] = useState("");

  const searchQuery = useQuery(
    ["issues", "search", searchValue],
    ({ signal }) =>
      fetch(`/api/search/issues?q=${searchValue}`, { signal }).then((res) =>
        res.json()
      ),
    {
      enabled: searchValue.length > 0,
    }
  );

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearchValue(event.target.elements.search.value);
        }}
      >
        {/* <label htmlFor="search">Search Issues</label> */}
        <input
          type="search"
          placeholder="Search"
          name="search"
          id="search"
          onChange={(event) => {
            if (event.target.value.length === 0) {
              setSearchValue("");
            }
          }}
        />
      </form>
      <h2>
         {issuesQuery.fetchStatus === "fetching" ? <Loader /> : null}
      </h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : issuesQuery.isError ? (
        <p>{issuesQuery.error.message}</p>
      ) : searchQuery.fetchStatus === "idle" &&
        searchQuery.isLoading === true ? (
        <div className="col-12 issues-list">
    <div className="card recent-sales overflow-auto">

      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>

      <div className="card-body">
        <h5 className="card-title">Recent Sales <span>| Today</span></h5>

        <table className="table table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">Services</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            {issuesQuery.data.map((issue) => (
              <IssueItem
                key={issue.id}
                title={issue.title}
                number={issue.number}
                assignee={issue.assignee}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
              />
            ))}          
          </tbody>
        </table>

      </div>

    </div>
          <div className="pagination">
            <button
              onClick={() => {
                if (pageNum - 1 > 0) {
                  setPageNum(pageNum - 1);
                }
              }}
              disabled={pageNum === 1}
            >
              Previous
            </button>
            <p>
              Page {pageNum} {issuesQuery.isFetching ? "..." : ""}
            </p>
            <button
              disabled={
                issuesQuery.data?.length === 0 || issuesQuery.isPreviousData
              }
              onClick={() => {
                if (
                  issuesQuery.data?.length !== 0 &&
                  !issuesQuery.isPreviousData
                ) {
                  setPageNum(pageNum + 1);
                }
              }}
            >
              Next
            </button>
          </div>
          </div>
      ) : (
        <>
          <h2>Search Results</h2>
          {searchQuery.isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>{searchQuery.data.count} Results</p>
              <div className="col-12 issues-list">
    <div className="card recent-sales overflow-auto">

      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>

      <div className="card-body">
        <h5 className="card-title">Recent Sales <span>| Today</span></h5>

        <table className="table table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">Services</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

                {searchQuery.data.items.map((issue) => (
                  <IssueItem
                    key={issue.id}
                    title={issue.title}
                    number={issue.number}
                    assignee={issue.assignee}
                    commentCount={issue.comments.length}
                    createdBy={issue.createdBy}
                    createdDate={issue.createdDate}
                    labels={issue.labels}
                    status={issue.status}
                  />
                ))}
                 </tbody>
        </table>

      </div>

    </div>
    </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
