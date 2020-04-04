import React from "react";

import Layout from "../components/Layout";

import Sidebar from "../components/Sidebar";
import config from "../../config";
import { humanize } from "../util/HumanizeString";

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">{config.about}</p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {config.experiences.map(experience => {
            const { company_url, company, descriptions, end_date, start_date, title } = experience;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">
                    <a href={company_url}>{company}</a>
                  </div>

                  {descriptions.map(description => {
                    return <p>{description}</p>;
                  })}
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {start_date} - {end_date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer Science</h3>
              <div className="subheading mb-3">Bachelor's degree</div>
              <div>Universidade Estadual do Centro-Oeste</div>
              <p></p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2006 - December 2011</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          {config.skills_by_category.map(category => {
            const { title, skills } = category;
            return (
              <>
                <div className="subheading mb-3">{title}</div>
                <ul className="fa-ul mb-0">
                  {skills.map(skill => {
                    return (
                      <li>
                        <i className="fa-li fa fa-check" />
                        {humanize(skill)}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
