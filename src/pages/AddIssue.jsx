import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";
import * as React from "react";
import { Link } from "react-router-dom";
import news1 from "../assets/img/news-1.jpg";
import news2 from "../assets/img/news-2.jpg";
import news3 from "../assets/img/news-3.jpg";
import news4 from "../assets/img/news-4.jpg";
import news5 from "../assets/img/news-5.jpg";


export default function AddIssue() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const addIssue = useMutation(
    (issueBody) =>
      fetch("/api/issues", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(issueBody),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["issues"], { exact: true });
        queryClient.setQueryData(["issues", data.number.toString()], data);
        navigate(`/issue/${data.number}`);
      },
    }
  );
  

  const addAnother = useMutation(
    (otherBody) =>
      fetch("https://localhost:7185/api/Products/HomePageControllerCreateAsync/testingwitharic/monday/345/done/almost", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(otherBody),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["issues"], { exact: true });
        queryClient.setQueryData(["issues", data.number.toString()], data);
        navigate(`/issue/${data.number}`);      },
    }
  );

  const [ cardTitle, setcardTitle ] = React.useState("");
  const [ dayRange, setdayRange ] = React.useState("");
  const [ cardTotal, setcardTotal ] = React.useState("");
  const [ cardTotalDetail, setcardTotalDetail ] = React.useState("");
  const [ cardTotalStatus, setcardTotalStatus ] = React.useState("");


  return (
    
    <main id="main" className="main section dashboard">
    <div className="row">
      <div className="col-7">
        <div className="pagetitle">
          <h1>Add Customer</h1>
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
    <div className="add-issue">
      {/* <CustomerForm/> */}
      <form
      method="POST"
        onSubmit={(event) => {
          event.preventDefault();
          const DataToSubmit ={
            cardTitle,
            dayRange,
            cardTotal,
            cardTotalDetail,
            cardTotalStatus
          }
          // if (addAnother.isLoading) return;
          // addAnother.mutate({
          //   comment: event.target.comment.value,
          //   title: event.target.title.value,
          // });
          fetch(`https://localhost:7185/api/Products/HomePageControllerCreateAsync/${cardTitle}/${dayRange}/${cardTotal}/${cardTotalDetail}/${cardTotalStatus}`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Accept": "application/json" 
            },
            body: JSON.stringify(DataToSubmit),
          }).then((res) => res.json())
        }}
      >
       
        <label className="htmlForm-label" htmlFor="title"><h6>Card Title</h6></label>
        <input type="text" id="title" placeholder="Title" value={cardTitle} name="title" onChange={(event)=> setcardTitle(event.target.value)}/>
        <label className="htmlForm-label" htmlFor="title"><h6>Day Range</h6></label>
        <input type="text" id="title" placeholder="Title" value={dayRange} name="title" onChange={(event)=> setdayRange(event.target.value)}/>
        <label className="htmlForm-label" htmlFor="title"><h6>Card Total</h6></label>
        <input type="text" id="title" placeholder="Title" value={cardTotal} name="title" onChange={(event)=> setcardTotal(event.target.value)}/>
        <label className="htmlForm-label" htmlFor="title"><h6>Card Total Detail</h6></label>
        <input type="text" id="title" placeholder="Title" value={cardTotalDetail} name="title" onChange={(event)=> setcardTotalDetail(event.target.value)}/>
        <label className="htmlForm-label" htmlFor="title"><h6>Card Total Status</h6></label>
        <input type="text" id="title" placeholder="Title" value={cardTotalStatus} name="title" onChange={(event)=> setcardTotalStatus(event.target.value)}/>
       
        <div className="text-center">
                    <div className="row mx-auto">
                      <button
                        type="submit"
                        className="btn btn-primary col-5 mx-1"
                        //disabled={addAnother.isLoading}
                      >
{addAnother.isLoading ? "Adding Issue..." : "Add Issue"}                      </button>
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
  );
}




