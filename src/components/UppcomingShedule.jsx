import { useEffect, useRef, useState } from "react";
 
const FLATPICKR_CSS =
  "https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.13/flatpickr.min.css";
const FLATPICKR_JS =
  "https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.13/flatpickr.min.js";
 
function loadScript(src) {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    document.head.appendChild(s);
  });
}
 
function loadLink(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = href;
  document.head.appendChild(l);
}
 
const EVENTS = [
  { day: "09", title: "Development planning",          sub: "iTest Factory",      time: "9:20 AM"  },
  { day: "12", title: "Design new UI and check sales",  sub: "Meta4Systems",       time: "11:30 AM" },
  { day: "25", title: "Weekly catch-up",                sub: "Nesta Technologies", time: "02:00 PM" },
  { day: "27", title: "James Bangs (Client) Meeting",   sub: "Nesta Technologies", time: "03:45 PM" },
];
 
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
 
// Year range: 2020 to 2035
const YEARS = Array.from({ length: 16 }, (_, i) => 2020 + i);
 
export default function UpcomingSchedules() {
  const calRef         = useRef(null);
  const fpRef          = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(5);
  const [currentYear,  setCurrentYear]  = useState(2026);
  const [fpLoaded,     setFpLoaded]     = useState(false);
 
  useEffect(() => {
    loadLink(FLATPICKR_CSS);
    loadScript(FLATPICKR_JS).then(() => setFpLoaded(true));
  }, []);
 
  useEffect(() => {
    if (!fpLoaded || !calRef.current) return;
    const fp = window.flatpickr(calRef.current, {
      inline: true,
      defaultDate: new Date(2026, 5, 8),
      onMonthChange: (_, __, inst) => {
        setCurrentMonth(inst.currentMonth);
        setCurrentYear(inst.currentYear);
      },
      onYearChange: (_, __, inst) => {
        setCurrentMonth(inst.currentMonth);
        setCurrentYear(inst.currentYear);
      },
    });
    fpRef.current = fp;
    return () => fp.destroy();
  }, [fpLoaded]);
 
  // Month change handler
  const handleMonthChange = (e) => {
    const m = parseInt(e.target.value);
    setCurrentMonth(m);
    if (fpRef.current) {
      const diff = m - fpRef.current.currentMonth;
      fpRef.current.changeMonth(diff, false);
    }
  };
 
  // Year change handler
  const handleYearChange = (e) => {
    const y = parseInt(e.target.value);
    setCurrentYear(y);
    if (fpRef.current) {
      // flatpickr mein year directly set karo
      fpRef.current.changeYear(y);
    }
  };
 
  return (
<>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.usc-wrap{
  background: var(--primary-pages-1-section);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
}

.usc-header-title{
  font-size:16px;
  font-weight:500;
  color: var(--primary-212529);
  margin:0;
}

.usc-header-right{
  display:flex;
  align-items:center;
  gap:6px;
}

.usc-month-select,
.usc-year-select{
  border:1px solid var(--primary-d0d6db);
  border-radius:4px;
  padding:3px 7px;
  font-size:13px;
  font-weight:500;
  color:var(--primary-878a99);
  background:var(--primary-white);
  font-family:'Inter',sans-serif;
  cursor:pointer;
  outline:none;
  appearance:auto;
}

.usc-year-select{
  min-width:72px;
}

.usc-cal-wrap{
  padding:0 17px;
  box-sizing:border-box;
}

.usc-cal-wrap .flatpickr-calendar{
  width:100%!important;
  max-width:100%!important;
  box-shadow:none!important;
  border:none!important;
  border-radius:0!important;
  font-family:'Inter',sans-serif!important;
  background:transparent!important;
  padding:0!important;
}

.usc-cal-wrap .flatpickr-calendar.inline,
.usc-cal-wrap .flatpickr-calendar.open{
  display:block!important;
}

.usc-cal-wrap .flatpickr-months{
  display:none!important;
}

.usc-cal-wrap .flatpickr-innerContainer,
.usc-cal-wrap .flatpickr-rContainer{
  width:100%!important;
  display:block!important;
}

/* weekday header */
.usc-cal-wrap .flatpickr-weekdays{
  width:100%!important;
  background:var(--primary-f3f6f9)!important;
  height:44px!important;
}

.usc-cal-wrap .flatpickr-weekdaycontainer{
  display:grid!important;
  grid-template-columns:repeat(7,1fr)!important;
  width:100%!important;
}

.usc-cal-wrap .flatpickr-weekday{
  font-size:13px!important;
  font-weight:600!important;
  color:var(--primary-878a99)!important;
  text-align:center!important;
  line-height:44px!important;
  background:transparent!important;
  flex:unset!important;
  float:none!important;
}

/* day grid */
.usc-cal-wrap .flatpickr-days{
  width:100%!important;
  border:none!important;
}

.usc-cal-wrap .dayContainer{
  display:flex!important;
  flex-wrap:wrap!important;
  width:100%!important;
  max-width:100%!important;
  min-width:unset!important;
  padding:0!important;
  gap:0!important;
}

/* day cell */
.usc-cal-wrap .flatpickr-day{
  width:calc(100% / 7)!important;
  max-width:calc(100% / 7)!important;
  flex:0 0 calc(100% / 7)!important;
  height:48px!important;
  max-height:48px!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  position:relative!important;
  box-sizing:border-box!important;
  margin:0!important;
  font-size:14px!important;
  font-weight:400!important;
  color:var(--primary-212529)!important;
  font-family:'Inter',sans-serif!important;
  line-height:1!important;
  border:none!important;
  border-radius:0!important;
  background:transparent!important;
}

.usc-cal-wrap .flatpickr-day:hover{
  background:var(--primary-daf4f0)!important;
}

.usc-cal-wrap .flatpickr-day.prevMonthDay,
.usc-cal-wrap .flatpickr-day.nextMonthDay{
  color:var(--primary-bfc5d2)!important;
}

.usc-cal-wrap .flatpickr-day.prevMonthDay:hover,
.usc-cal-wrap .flatpickr-day.nextMonthDay:hover{
  background:transparent!important;
}

/* selected + today */
.usc-cal-wrap .flatpickr-day.today,
.usc-cal-wrap .flatpickr-day.selected,
.usc-cal-wrap .flatpickr-day.selected:hover{
  background:transparent!important;
  border:none!important;
  border-radius:0!important;
  color:#fff!important;
  font-weight:400!important;
  z-index:1!important;
}

.usc-cal-wrap .flatpickr-day.today::before,
.usc-cal-wrap .flatpickr-day.selected::before{
  content:'';
  position:absolute;
  inset:50% auto auto 50%;
  transform:translate(-50%, -50%);
  width:100%;
  height:100%;
  background:var(--primary-0ab39c);
  border-radius:4px;
  z-index:-1;
}

.usc-cal-wrap .flatpickr-day.prevMonthDay.selected::before,
.usc-cal-wrap .flatpickr-day.nextMonthDay.selected::before{
  display:none;
}

.usc-cal-wrap .flatpickr-day.prevMonthDay.selected,
.usc-cal-wrap .flatpickr-day.nextMonthDay.selected{
  color:var(--primary-bfc5d2)!important;
  font-weight:400!important;
}
`}</style>
 
      <div className="usc-wrap shadow-sm">
        {/* header */}
<div className="usc-header d-flex align-items-center justify-content-between px-3 py-3 flex-wrap">
<p className="usc-header-title">Upcoming Schedules</p>
<div className="usc-header-right">
            {/* Month dropdown */}
<select className="usc-month-select" value={currentMonth} onChange={handleMonthChange}>
              {MONTHS.map((name, i) => (
<option key={i} value={i}>{name}</option>
              ))}
</select>
            {/* Year dropdown */}
<select className="usc-year-select" value={currentYear} onChange={handleYearChange}>
              {YEARS.map((y) => (
<option key={y} value={y}>{y}</option>
              ))}
</select>
</div>
</div>
 
        {/* calendar */}
<div className="usc-cal-wrap">
<input ref={calRef} type="text" style={{ display: "none" }} readOnly />
</div>
 {/* events */}
<div className="usc-events-wrap">
  <p className="usc-events-label mb-0">EVENTS:</p>

  {EVENTS.map((event, index) => (
    <div key={index} className="usc-event-row">
      <div className="usc-event-date d-flex align-items-center justify-content-center">
        <span>{event.day}</span>
      </div>

      <div className="usc-event-content">
        <h6>{event.title}</h6>
        <p>{event.sub}</p>
      </div>

      <div className="usc-event-time">
        {event.time}
      </div>
    </div>
  ))}
</div>
<p className="text-center text-decoration-underline" style={{color:"#878a99", fontSize:"13px"}}>View all Events</p>
</div>
</>
  );
}