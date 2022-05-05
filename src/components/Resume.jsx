import { resources } from '../meta/Resources.json';

export default function Resume() {
  const Entry = ({ children }) => <div className="mb-5">{children}</div>;
  return (
    <div id="resume">
      <a href={resources.resumeUrl} download="Allen_Clark_Resume.pdf">
        Download
      </a>
      <Entry>
        <p>
          <em>Lunaris</em> ~ Tokyo, Japan
        </p>
        <p>
          <strong>Software Engineer</strong> (contract), January 2022 to Present
        </p>
        <ul>
          <li className="list-disc ml-10 leading-tight">
            Improving engineering throughput by applying work experience in
            Agile environments
          </li>
          <li className="list-disc ml-10 leading-tight">
            Utilizing my software development skills to create client accessible
            APIs for a variety of applications such as a solution to synchronize
            information between a popular POS service and Shopify stores
          </li>
          <li className="list-disc ml-10 leading-tight">
            Refactoring Shopify integration code-bases to be compatible with new
            Shopify features
          </li>
        </ul>
        <p>
          <em>
            Tech exposed to: Elixir, Phoenix, Node.js, React, Shopify Liquid,
            PostgreSQL, Git
          </em>
        </p>
      </Entry>

      <Entry>
        <p>
          <em>HTM</em> ~ Tokyo, Japan
        </p>
        <p>
          <strong>Software Engineer</strong>, October 2020 to December 2021
        </p>
        <ul>
          <li className="list-disc ml-10 leading-tight">
            Developed applications to improve internal and client facing
            back-office processes
          </li>
          <li className="list-disc ml-10 leading-tight">
            Utilized the Rapid Application Development model to quickly build
            new solutions while adapting to dynamic requirements
          </li>
          <li className="list-disc ml-10 leading-tight">
            Designed application architectures that better matched the team’s
            development model to allow for faster application turnaround
          </li>
        </ul>
        <p>
          <em>
            Tech exposed to: Node.js, Vue.js, VBA, C#, ASP.NET Core, Entity, MS
            SQL Server, MS Access, SVN
          </em>
        </p>
      </Entry>

      <Entry>
        <p>
          <em>NTT Communications Engineering</em> ~ Tokyo, Japan
        </p>
        <p>
          <strong>Software Engineer</strong> (contract), February 2020 to
          October 2020
        </p>
        <ul>
          <li className="list-disc ml-10 leading-tight">
            Worked in system design as a contract software engineer through
            Human Resocia
          </li>
          <li className="list-disc ml-10 leading-tight">
            Developed tools and scripts to improve software development workflow
          </li>
          <li className="list-disc ml-10 leading-tight">
            Researched and documented methods on integrating multiple
            applications of various sources
          </li>
        </ul>
        <p>
          <em>Tech exposed to: Node.js, Vue.js, Electron, BASH, Git</em>
        </p>
      </Entry>

      <Entry>
        <p>
          <em>Sensus</em> ~ Boise, Idaho, USA
        </p>
        <p>
          <strong>Software Engineering Intern</strong>, October 2016 to August
          2017 &amp; August 2018 to August 2019
        </p>
        <ul>
          <li className="list-disc ml-10 leading-tight">
            Designed and developed automated testing systems for Node.js web
            applications
          </li>
          <li className="list-disc ml-10 leading-tight">
            Participated in regression testing periods by executing manual
            tests, documenting failures, and validating bug fixes
          </li>
        </ul>
        <p>
          <em>
            Tech exposed to: Node.js, Mocha, TestCafe, BASH, Jenkins, Docker,
            Vagrant, Git
          </em>
        </p>
      </Entry>
    </div>
  );
}
