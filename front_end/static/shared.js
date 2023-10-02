"use strict";
(() => {
  // ui/shared/convert-date.js
  function convertDate(d) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var hours = d.getHours();
    var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var suffix = hours >= 12 ? "PM" : "AM";
    var time = (hours + 11) % 12 + 1 + ":" + minutes + " " + suffix;
    var start_date = days[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(-2) + " " + time;
    return start_date;
  }
  window.convertDate = convertDate;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdWkvc2hhcmVkL2NvbnZlcnQtZGF0ZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy9kaXNwbGF5aW5nIHN0YXJ0IGFuZCBkdWUgZGF0ZXMgb24gdGhlIGNvdXJzZSB0YWJsZVxyXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkKSB7XHJcblx0dmFyIGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xyXG5cdHZhciBob3VycyA9IGQuZ2V0SG91cnMoKTtcclxuXHR2YXIgbWludXRlcyA9IGQuZ2V0TWludXRlcygpIDwgMTAgPyBcIjBcIiArIGQuZ2V0TWludXRlcygpOmQuZ2V0TWludXRlcygpO1xyXG5cdHZhciBzdWZmaXggPSBob3VycyA+PSAxMiA/IFwiUE1cIjpcIkFNXCI7XHJcblx0dmFyIHRpbWUgPSAoKGhvdXJzICsgMTEpICUgMTIgKyAxKSArIFwiOlwiICsgbWludXRlcyArIFwiIFwiICsgc3VmZml4O1xyXG4gIFxyXG5cdHZhciBzdGFydF9kYXRlID0gZGF5c1tkLmdldERheSgpXSArIFwiIFwiICsgKGQuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBkLmdldERhdGUoKSArIFwiL1wiICsgZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyKC0yKSArXHJcblx0XCIgXCIgKyB0aW1lO1xyXG5cdHJldHVybiBzdGFydF9kYXRlO1xyXG59XHJcbndpbmRvdy5jb252ZXJ0RGF0ZSA9IGNvbnZlcnREYXRlO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFDQSxXQUFTLFlBQVksR0FBRztBQUN2QixRQUFJLE9BQU8sQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQzNELFFBQUksUUFBUSxFQUFFLFNBQVM7QUFDdkIsUUFBSSxVQUFVLEVBQUUsV0FBVyxJQUFJLEtBQUssTUFBTSxFQUFFLFdBQVcsSUFBRSxFQUFFLFdBQVc7QUFDdEUsUUFBSSxTQUFTLFNBQVMsS0FBSyxPQUFLO0FBQ2hDLFFBQUksUUFBUyxRQUFRLE1BQU0sS0FBSyxJQUFLLE1BQU0sVUFBVSxNQUFNO0FBRTNELFFBQUksYUFBYSxLQUFLLEVBQUUsT0FBTyxLQUFLLE9BQU8sRUFBRSxTQUFTLElBQUksS0FBSyxNQUFNLEVBQUUsUUFBUSxJQUFJLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUM3SCxNQUFNO0FBQ04sV0FBTztBQUFBLEVBQ1I7QUFDQSxTQUFPLGNBQWM7IiwKICAibmFtZXMiOiBbXQp9Cg==
