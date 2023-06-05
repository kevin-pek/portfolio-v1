import { ReactNode, useMemo } from "react";

export interface EventProps {
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  skills?: string[];
  start?: Date;
  end?: Date;
  children?: ReactNode
}

export const Event = ({ ...props }: EventProps) => {
  return (
    <div className="w-full pl-4 text-justify text-sm text-white sm:w-5/6 sm:text-lg">
      <h2 className='text-2xl font-extrabold'>{props.title}</h2>
      {props.subtitle ?
        <h3 className='mt-2 text-xl sm:text-2xl'>
          {props.subtitle}
        </h3>
      : null}
      {props.skills ?
        <div className='mt-2 flex flex-row flex-wrap items-center gap-x-2'>
          <div className="text-xl font-extrabold">Skills:</div>
          {props.skills.map((p: string, i: number) =>
            <p key={i}>[{p}]</p>
          )}
        </div>
      : null}
      {props.description ? <p className='mt-2'>{props.description}</p> : null}
      {props.points ?
        <ul style={{ listStyleType: 'circle' }} className='ml-4 mt-2'>
          {props.points.map((p: string, i: number) =>
            <li className="list-item" key={i}>{p}</li>
          )}
        </ul>
      : null}
      {props.children}
    </div>
  )
}

export function Timeline({ events }: { events: EventProps[] }) {
  // calculate the translate y value based on start and end of the event
  const offsets = useMemo(() => {
    const now = Date.now()
    const end = Math.min(...events.map(event => event.start.getTime()))
    const range = now - end;
    return events.map(event => (now - event.end.getTime()) / range * 100)
  }, [events]);

  return (
    <div className='h-fit'>
      <div className={`from-cold-800 absolute z-10 mt-5 h-full w-[1px] bg-gradient-to-br to-white sm:left-1/4`} />
      {/* each item has range represented by rounded rect, current month is represented by bold segment */}
      {events.map((event, i) => (
        <div key={i}>
          <div className="from-cold-800 absolute z-20 mt-3 h-3 w-3 -translate-x-1.5 rounded-full bg-gradient-to-br to-white sm:left-1/4" />
          <div className='mb-8 flex flex-row'>
            <div className='mt-2 hidden w-1/6 pr-4 text-right text-xl text-white sm:block'>{event.start.toLocaleDateString('default', { month: 'short', year: '2-digit' })} — {event.end.toLocaleDateString('default', { month: 'short', year: '2-digit' })}</div>
            <Event {...event} />
          </div>
        </div>
      ))}
    </div>
  );
}
