import { useEffect, useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

import timeline from '../../public/timeline.json'

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>(timeline.sort((a,b) => b.year - a.year).slice(0, 2));
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  useEffect(() => {
    if (isShowingFullTimeline) {
      setEvents(timeline);
    } else {
      setEvents(timeline.slice(0, 2));
    }
  }, [isShowingFullTimeline]);


  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const renderTimeline = () => {
    let currentYear = timeline[0].year;
    return events.map((event) => {
      const currEvent = (
      <>
      {currentYear !== event.year && (<Divider />)}
        <Year>{Number(event.year)}</Year>
        <ul>
          <Step title={event.title}>{event.description}</Step>
        </ul>
      </>);

      if (currentYear !== event.year) {
        currentYear = event.year;
      }

      return currEvent;
    })
  }

  return (
    <>
      <h3>Timeline</h3>
      {renderTimeline()}
        <MoreButton type="button" onClick={() => showFullTimeline(!isShowingFullTimeline)}>
          {isShowingFullTimeline ? "Show Less" : "Show More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transition: "all .2s ease-in-out",
              transform: isShowingFullTimeline ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
    </>
  );
};
