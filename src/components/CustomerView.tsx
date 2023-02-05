import * as React from "react";
import product1 from "../assets/img/product-1.jpg";
import product2 from "../assets/img/product-2.jpg";
import product3 from "../assets/img/product-3.jpg";
import product4 from "../assets/img/product-4.jpg";
import product5 from "../assets/img/product-5.jpg";
import profileImg from "../assets/img/profile-img.jpg";
import slide1 from "../assets/img/slides-1.jpg";
import slide2 from "../assets/img/slides-2.jpg";
import slide3 from "../assets/img/slides-3.jpg";
import apple from "../assets/img/apple-touch-icon.png";
import card from "../assets/img/card.jpg";
import favicon from "../assets/img/favicon.png";
import logo from "../assets/img/logo.png";
import message1 from "../assets/img/messages-1.jpg";
import message2 from "../assets/img/messages-2.jpg";
import message3 from "../assets/img/messages-3.jpg";
import news1 from "../assets/img/news-1.jpg";
import news2 from "../assets/img/news-2.jpg";
import news3 from "../assets/img/news-3.jpg";
import news4 from "../assets/img/news-4.jpg";
import news5 from "../assets/img/news-5.jpg";
import IssuesList from "../components/IssuesList";
import CustomerForm from "../components/CustomerForm";
import { StatusSelect } from "../components/StatusSelect";
import { Link } from "react-router-dom";

import notFound from "../assets/img/not-found.svg";
import LabelList from "../components/LabelList";
import { useState } from "react";

export default function CustomerViewFunc() {
  const [labels, setLabels] = useState([]);
  const [status, setStatus] = useState("");
  const [pageNum, setPageNum] = useState(1);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>View Customers</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="breadcrumb-item active">View Customers</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <hr />
              <IssuesList
                labels={labels}
                status={status}
                pageNum={pageNum}
                setPageNum={setPageNum}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card ">
              <LabelList
                selected={labels}
                toggle={(label: never) => {
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
            </div>
            <div className="card p5">
              <h3>Status</h3>
              <StatusSelect
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value);
                  setPageNum(1);
                }}
              />
            </div>

            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body pb-0">
                {/* <h5 className="card-title">Website Traffic <span>| Today</span></h5>

          <div id="trafficChart"  className="echart"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
