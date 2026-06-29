interface Props {
  meetings: any[];
}

export default function MeetingMetricsCards({
  meetings,
}: Props) {

  const scheduled =
    meetings.filter(
      (m) =>
        m.status ===
        "SCHEDULED"
    ).length;

  const completed =
    meetings.filter(
      (m) =>
        m.status ===
        "COMPLETED"
    ).length;

  const cancelled =
    meetings.filter(
      (m) =>
        m.status ===
        "CANCELLED"
    ).length;

  const today =
    meetings.filter((m) => {

      const meetingDate =
        new Date(
          m.startTime
        ).toDateString();

      return (
        meetingDate ===
        new Date().toDateString()
      );

    }).length;

  const Card = ({
    title,
    value,
  }: any) => (

    <div
      className="
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
      "
    >
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>

  );

  return (

    <div
      className="
        grid
        gap-4
        md:grid-cols-4
      "
    >

      <Card
        title="Today's Meetings"
        value={today}
      />

      <Card
        title="Scheduled"
        value={scheduled}
      />

      <Card
        title="Completed"
        value={completed}
      />

      <Card
        title="Cancelled"
        value={cancelled}
      />

    </div>

  );

}