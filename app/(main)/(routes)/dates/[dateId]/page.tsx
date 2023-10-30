interface DatePageProps {
  params: {
    dateId: string;
  };
}

const DatePage: React.FC<DatePageProps> = ({ params }) => {
  return <div>date page ${params.dateId}</div>;
};

export default DatePage;
