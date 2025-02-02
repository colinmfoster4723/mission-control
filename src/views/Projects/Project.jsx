import ArticleTitle from "../../components/ArticleTitle";
import LinkHighlighter from "../../components/LinkHighlighter";

const Project = ({ title, startDate, deadline, link, body }) => {
  return (
    <article
      className={`relative mt-10 flex w-[336px] flex-col rounded-2xl border border-gray-300  font-mono text-white hover:scale-[1.03] sm:w-[400px] lg:w-full lg:max-w-[1080px] lg:flex-row lg:justify-between`}
    >
      <div className="blur-background rounded-2xl"></div>

      <div className="component-background w-full rounded-2xl px-5 pb-3 pt-6 lg:px-8 xl:px-9">
        <div className="lg:hidden">{/* <Status active={active} /> */}</div>
        {/*Title and date*/}
        <div className="mt-3 pb-[20px] lg:mt-0">
          <ArticleTitle text={title} link={link} />
          <p className="mt-3 font-semibold text-blue-500 opacity-90 dark:text-moon-gold 2xl:mt-4">
            Start Date: {startDate} {deadline ? `| Deadline: ${deadline}` : ""}
          </p>
          {/*Body*/}
          <div className="mt-5 2xl:mt-6">
            <p
              className={`leading-8 text-gray-800 dark:text-gray-100 lg:text-lg 2xl:text-xl 2xl:leading-9`}
            >
              <LinkHighlighter label={"Proposal"} text={body.slice(0, 350)} />
            </p>
          </div>

          {/* Status, Team, and Tags
          <div className="mt-[32px] hidden lg:flex lg:items-center">
            <Status active={active} />
            <p className="pl-[30px] font-semibold text-moon-gold ">
              Team stewards
            </p>

            {teamLeads && teamLeads.length > 0 ? (
              teamLeads.map((e, i) => <Stamp key={i} teamMember name={e} />)
            ) : (
              <Stamp key={1} teamMember name="MoonDAO Team" />
            )}

            <p className="pl-[30px] font-semibold text-moon-gold ">
              {tags && tags.length > 0 ? "Tags" : "No tags"}
            </p>
            {tags &&
              tags.length > 0 &&
              tags.map((e, i) => <Stamp i={i} key={i} name={e} />)}
          </div> */}
        </div>
      </div>
    </article>
  );
};

const Status = ({ active }) => {
  return (
    <div
      className={`${
        active ? "bg-amber-500" : "bg-gray-800 opacity-75"
      } inline-block rounded px-[10px] py-[8px] `}
    >
      <p className={`font-semibold uppercase`}>
        {active ? "ongoing" : "ended"}
      </p>
    </div>
  );
};

const Stamp = ({ name, i, teamMember }) => (
  <p
    className={`${i === 0 ? "ml-[21px]" : "ml-[8px]"} ${
      teamMember
        ? "bg-blue-500 dark:bg-indigo-800"
        : "bg-gray-200 text-blue-700 dark:bg-slate-800 dark:text-gray-50"
    }  rounded px-[10px] py-[5px] text-sm font-semibold`}
  >
    {name}
  </p>
);

export default Project;
