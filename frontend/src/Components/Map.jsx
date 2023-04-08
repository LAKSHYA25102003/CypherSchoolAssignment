import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./Map.css";

function Map() {
  const today = new Date();
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  return (
    <div className="px-[40px]  ">
      <div className="border-b-[1.5px] border-gray-400 flex flex-col gap-[20px] pb-[30px]">
        <div className="text-[20px] font-bold flex justify-between">
          <p>CIPHER MAP</p>
        </div>
        <div>
          <CalendarHeatmap
            startDate={shiftDate(today, -365)}
            endDate={today}
            classForValue={(value) => {
              if (value === null) return "col-empty";
              return `${value.count}` < 7
                ? `color-github-${value.count}`
                : `color-github-7`;
            }}
            values={[
              { date: "2023-01-01", count: 12 },
              { date: "2023-01-22", count: 30 },
              { date: "2023-01-30", count: 38 },
              { date: "2023-04-06", count: 1 },
              { date: "2023-04-05", count: 2 },
              { date: "2023-04-01", count: 4 },
              { date: "2023-04-02", count: 5 },
              { date: "2023-04-07", count: 7 },
            ]}
          />
        </div>
        <div className="flex justify-end items-center gap-2">
          <span className="text-18[px] font-medium">More</span>
          <div className="w-[20px] h-[20px] bg-[#f3912e]"></div>
          <div className="w-[20px] h-[20px] bg-[#f3902ecf]"></div>
          <div className="w-[20px] h-[20px] bg-[#f3902e82]"></div>
          <div className="w-[20px] h-[20px] bg-[#f3902e58]"></div>
          <span className="text-18[px] font-medium">Less</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
