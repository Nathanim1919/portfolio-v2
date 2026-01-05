"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GithubContributionsData {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
}

interface MonthLabel {
  name: string;
  index: number;
}

const GithubCalendar = () => {
  const [data, setData] = useState<GithubContributionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/Nathanim1919?y=last')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch contributions:", err));
  }, []);

  // 1. Process data for the grid
  const { weeks, monthLabels } = useMemo(() => {
    if (!data) return { weeks: [], monthLabels: [] };

    const contributions = data.contributions;
    const labels: MonthLabel[] = [];
    const grid: { date?: string; count?: number; level: number }[][] = [];
    
    // GitHub graphs start on Sunday. 
    // We need to pad the beginning so the first day aligns with its day of the week.
    const firstDate = new Date(contributions[0].date);
    const dayOfWeek = firstDate.getDay(); // 0 (Sun) to 6 (Sat)
    
    const paddedData = [
      ...Array(dayOfWeek).fill({ level: -1 }), // -1 means "empty/invisible" square
      ...contributions
    ];

    // Group into weeks (arrays of 7 days)
    for (let i = 0; i < paddedData.length; i += 7) {
      const week = paddedData.slice(i, i + 7);
      grid.push(week);

      // Check if this week starts a new month for the labels
      const firstDayOfVisibleWeek = week.find(d => d.date);
      if (firstDayOfVisibleWeek) {
        const date = new Date(firstDayOfVisibleWeek.date);
        const monthName = date.toLocaleString('default', { month: 'short' });
        
        // Only add label if it's a new month and we have space
        if (labels.length === 0 || labels[labels.length - 1].name !== monthName) {
          labels.push({ name: monthName, index: grid.length - 1 });
        }
      }
    }

    return { weeks: grid, monthLabels: labels };
  }, [data]);

  if (loading || !data) return <div className="animate-pulse h-40 bg-gray-100 rounded-xl w-full" />;

  const getColor = (level: number) => {
    const colors: Record<number, string> = {
      0: 'bg-gray-100 dark:bg-gray-800',
      1: 'bg-[#9be9a8] dark:bg-[#0e4429]',
      2: 'bg-[#40c463] dark:bg-[#006d32]',
      3: 'bg-[#30a14e] dark:bg-[#26a641]',
      4: 'bg-[#216e39] dark:bg-[#39d353]',
    };
    return colors[level] || 'bg-transparent';
  };

  return (
    <div className="p-6 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl font-sans mb-10">
      <h3 className="text-sm font-medium mb-4 text-black dark:text-gray-300">
        {data.total.lastYear.toLocaleString()} contributions in the last year
      </h3>

      <div className="relative inline-block w-full overflow-x-auto">
        {/* Month Labels */}
        <div className="flex text-[14px] text-gray-400 mb-1 ml-8 h-4 relative">
          {monthLabels.map((label, i) => (
            <span 
              key={i} 
              className="absolute" 
              style={{ left: `${label.index * 16}px` }}
            >
              {label.name}
            </span>
          ))}
        </div>

        <div className="flex gap-2 w-[95%] md:w-full">
          {/* Day Labels */}
          <div className="flex flex-col justify-between text-[10px] text-gray-400 pt-1 pb-1">
            <span className="h-[16px]"></span>
            <span>Mon</span>
            <span className="h-[16px]"></span>
            <span>Wed</span>
            <span className="h-[16px]"></span>
            <span>Fri</span>
            <span className="h-[16px]"></span>
          </div>

          {/* The Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={day.date || `empty-${weekIndex}-${dayIndex}`}
                    className={`w-[14px] h-[14px] rounded-[4px] ${getColor(day.level)} group relative`}
                  >
                    {day.date && (
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                        {day.count} contributions on {day.date}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-1 mt-4 text-[11px] text-gray-500">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map(l => (
          <div key={l} className={`w-[14px] h-[14px] rounded-[2px] ${getColor(l)}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default GithubCalendar;