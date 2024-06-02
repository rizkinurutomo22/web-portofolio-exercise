function WorkItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-emerald-700 rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-emerald-700">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-gray-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-gray-600">{details}</p>
      </li>
    </ol>
  );
}

export default WorkItem;
