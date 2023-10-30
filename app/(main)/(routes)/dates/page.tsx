import { DateCard } from "@/components/dates/date-card";

const DatesPage = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols:2 xl:grid-cols-3 gap-x-2 gap-y-2">
        <DateCard />
        <DateCard />
        <DateCard />
        <DateCard />
      </div>
    </div>
  );
};

export default DatesPage;
