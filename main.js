"use strict";

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const periodList = document.querySelectorAll("li");
const currentTime = document.querySelectorAll(".card .current");
const previousTime = document.querySelectorAll(".card .last-week");

for (let i = 0; i < periodList.length; i++) {
  periodList[i].addEventListener("click", function () {
    const current = document.querySelector(".highlight");
    current.classList.remove("highlight");
    this.classList.add("highlight");

    if (this.classList.contains("daily")) {
      assignValues("daily");
    } else if (this.classList.contains("weekly")) {
      assignValues("weekly");
    } else if (this.classList.contains("monthly")) {
      assignValues("monthly");
    }
  });
}

const assignValues = (period) => {
  let time = "Week";
  if (period === "daily") {
    time = "Day";
  } else if (period === "monthly") {
    time = "Month";
  }

  for (let i = 0; i < currentTime.length; i++) {
    currentTime[i].textContent = `${data[i].timeframes[period].current}hrs`;
  }
  for (let i = 0; i < previousTime.length; i++) {
    previousTime[
      i
    ].textContent = `Last ${time} - ${data[i].timeframes[period].previous}hrs`;
  }
};
