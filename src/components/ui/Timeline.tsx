
export interface EventProps {
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  skills?: string[];
  start?: Date;
  end?: Date;
}

export const Event = ({ ...props }: EventProps) => {
  return (
    <div className="w-full pl-4 text-justify text-sm text-white sm:w-5/6 sm:text-lg">
      <h2 className='text-2xl font-extrabold'>{props.title}</h2>
      {props.subtitle ? <h3 className='mt-2 text-xl sm:text-2xl'>{props.subtitle}</h3> : null}
      {props.description ? <p className='mt-4'>{props.description}</p> : null}
      {props.skills ?
        <ul className='ml-4 mt-4'>
          {props.skills.map((p: string, i: number) => <li className="list-item" key={i}>[{p}]</li>)}
        </ul>
      : null}
      {props.points ?
        <ul style={{ listStyleType: 'circle' }} className='ml-4 mt-4'>
          {props.points.map((p: string, i: number) => <li className="list-item" key={i}>{p}</li>)}
        </ul>
      : null}
    </div>
  )
}

export function Timeline({ children }) {
  return (
    <div>
      {children.map((child) => {
        <div className={`sticky my-auto translate-y-[${child.props.offsetY}]`}>{child}</div>
      })}
    </div>
  );
}
