import * as React from "react";
import { Link } from "react-router-dom";
import news1 from "../assets/img/news-1.jpg";
import news2 from "../assets/img/news-2.jpg";
import news3 from "../assets/img/news-3.jpg";
import news4 from "../assets/img/news-4.jpg";
import news5 from "../assets/img/news-5.jpg";

export interface IAppProps {}

export default function ToDoList(props: IAppProps) {
  return (
    <>
      <main id="main" className="main section dashboard">
        <div className="row">
          <div className="col-7">
            <div className="pagetitle">
              <h1>To Do</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Add Customer</li>
                </ol>
              </nav>
            </div>
            <div className="card">
              <div className="card-body card-enter-customer">
                <form className="row g-3">
                  <div className="col-12 pt-3">
                    <label htmlFor="inputNanme4" className="htmlForm-label">
                      <h6>Name</h6>
                    </label>
                    <input
                      type="text"
                      className="htmlForm-control"
                      id="inputNanme4"
                    ></input>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail4" className="htmlForm-label">
                      <h6>Email</h6>
                    </label>
                    <input
                      type="email"
                      className="htmlForm-control"
                      id="inputEmail4"
                    ></input>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputPassword4" className="htmlForm-label">
                      <h6> Password</h6>
                    </label>
                    <input
                      type="password"
                      className="htmlForm-control"
                      id="inputPassword4"
                    ></input>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="htmlForm-label">
                      <h6>Address</h6>
                    </label>
                    <input
                      type="text"
                      className="htmlForm-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    ></input>
                  </div>
                  <div className="text-center">
                    <div className="row mx-auto">
                      <button
                        type="submit"
                        className="btn btn-primary col-5 mx-1"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-secondary col-5 mx-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <aside className="col-5">
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
                <h5 className="card-title">
                  News &amp; Updates <span>| Today</span>
                </h5>

                <div className="news">
                  <div className="post-item clearfix">
                    <img src={news1} alt=""></img>
                    <h4>
                      <a href="#">Nihil blanditiis at in nihil autem</a>
                    </h4>
                    <p>
                      Sit recusandae non aspernatur laboriosam. Quia enim
                      eligendi sed ut harum...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src={news2} alt=""></img>
                    <h4>
                      <a href="#">Quidem autem et impedit</a>
                    </h4>
                    <p>
                      Illo nemo neque maiores vitae officiis cum eum turos elan
                      dries werona nande...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src={news3} alt=""></img>
                    <h4>
                      <a href="#">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <p>
                      Fugiat voluptas vero eaque accusantium eos. Consequuntur
                      sed ipsam et totam...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src={news4} alt=""></img>
                    <h4>
                      <a href="#">Laborum corporis quo dara net para</a>
                    </h4>
                    <p>
                      Qui enim quia optio. Eligendi aut asperiores enim
                      repellendusvel rerum cuder...
                    </p>
                  </div>

                  <div className="post-item clearfix">
                    <img src={news5} alt=""></img>
                    <h4>
                      <a href="#">Et dolores corrupti quae illo quod dolor</a>
                    </h4>
                    <p>
                      Odit ut eveniet modi reiciendis. Atque cupiditate libero
                      beatae dignissimos eius...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
