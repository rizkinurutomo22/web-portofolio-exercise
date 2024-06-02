import WorkItem from "./WorkItem";

const workData = [
  {
    year: 2021,
    title: "PT. ABC",
    duration: "1 Year",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nesciunt animi dolorem assumenda perspiciatis ipsam laudantium quidem. Quos ipsam blanditiis quod tempore ea, impedit, eaque, molestias dolor ex necessitatibus magnam.",
  },
  {
    year: 2019,
    title: "PT. GHI",
    duration: "2 Years",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quod nam sequi aspernatur quia ut aliquam! Dolor suscipit cumque quo perferendis aut esse, deserunt officiis beatae, velit quos officia inventore.",
  },
  {
    year: 2016,
    title: "PT. MNO",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore asperiores nam temporibus provident sequi eos quas, exercitationem qui dolorum, aspernatur aut repellendus, commodi beatae nostrum aliquid. Fuga, quibusdam quos? Alias?",
  },
];

function Work() {
  return (
    <section className="w-full bg-lime-200">
      <div
        id="work"
        className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-lime-100"
      >
        <h1 className="text-4xl font-roboto font-bold text-center text-emerald-800 mb-10">
          Work
        </h1>
        {workData.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
}
export default Work;
