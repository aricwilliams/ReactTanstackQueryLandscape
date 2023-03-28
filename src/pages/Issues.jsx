import IssuesList from "../components/CustomerGridView";
import LabelList from "../components/LabelList";
import CustomerForm from "../components/CustomerForm";
import { useState } from "react";
import { StatusSelect } from "../components/StatusSelect";
import { Link } from "react-router-dom";

export default function Issues() {
  const [labels, setLabels] = useState([]);
  const [status, setStatus] = useState("");
  const [pageNum, setPageNum] = useState(1);

  return (
     <>
  <section>
  <LabelList
            selected={labels}
            toggle={(label) => {
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              );
              setPageNum(1);
            }}
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
              setPageNum(1);
            }}
          />
          <hr />
          <Link classNameName="button" to="/add">
            Add Issue
          </Link>
          <IssuesList
            labels={labels}
            status={status}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
          <CustomerForm/>
        </section>
        <aside>
        {/* <LabelList
            selected={labels}
            toggle={(label) => {
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              );
              setPageNum(1);
            }}
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
              setPageNum(1);
            }}
          />
          <hr />
          <Link classNameName="button" to="/add">
            Add Issue
          </Link> */}
        </aside>
        </>
  );
}
