import servicesData from "../../../data/servicesData";

export default function Services() {
  return (
    <div className="services container m-auto flex flex-col items-center">
      <h2 className="text-main text-center">Our Advantages</h2>
      <ul className="gap-12 lg:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-max sm:w-full">
        {servicesData.map((item) => (
          <li key={item.id} className="flex items-center gap-x-4 lg:m-auto">
            <span className="text-[#ff0000] text-[2.2rem]">{item.icon}</span>
            <span>
              <h4 className="text-main">{item.title}</h4>
              <p className="text-large text-muted">{item.info}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
