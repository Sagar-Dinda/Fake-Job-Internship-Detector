import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart as ChartIcon } from 'lucide-react';

export default function RiskPieChart({ chartData, trustScore, riskPercentage }) {
  const data = chartData && chartData.length > 0 ? chartData : [
    { name: 'Genuine Indicators', value: trustScore || 85, fill: '#10b981' },
    { name: 'Suspicious Indicators', value: riskPercentage || 15, fill: '#ef4444' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      return (
        <div className="bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-xl shadow-2xl text-xs font-mono">
          <span style={{ color: item.payload.fill }} className="font-bold">
            {item.name}:
          </span>{' '}
          <span className="text-white font-bold">{item.value}%</span>
        </div>
      );
    }
    return null;
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-2 text-xs font-medium">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-300">{entry.value}</span>
            <span className="font-mono font-bold text-white">
              ({data.find((d) => d.name === entry.value)?.value}%)
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl h-full">
      <div className="w-full flex items-center justify-between mb-2">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <ChartIcon className="w-4 h-4 text-cyan-400" /> Indicator Distribution
        </h4>
        <span className="text-[11px] font-mono text-slate-400">Recharts Engine</span>
      </div>

      <div className="w-full h-56 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={78}
              paddingAngle={4}
              dataKey="value"
              animationDuration={800}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Legend content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
        Aggregated balance between verified safety credentials and anomalous threat signals.
      </p>
    </div>
  );
}
