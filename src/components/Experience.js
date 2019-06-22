import React from "react";

export default ({ data }) => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="frame">
        {data.map((item, i) => {
          let percentage = 0;

          const interval = setInterval(() => {
            console.log("%", percentage);
            percentage = percentage + 10;
          }, 100);

          if (percentage < 90) {
            clearInterval(interval);
          }

          return (
            <div key={i}>
              <p className="text-left">{item.name}</p>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: item.percentage }}
                  aria-valuenow={item.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
                {item.percentage}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
