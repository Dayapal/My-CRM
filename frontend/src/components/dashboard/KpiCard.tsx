import { Card, CardContent } from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

export default function KpiCard({
  title,
  value,
  icon,
}: KpiCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-slate-100 p-3">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}