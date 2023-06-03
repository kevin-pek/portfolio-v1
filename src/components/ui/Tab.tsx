import { useState } from "react"

export default function Tab({ children }) {
  const [active, setActive] = useState<number>(0);

  return (
    <>
      {/* list of tabs */}
      <div className="tabs mx-auto w-fit">
        {children.map((child, i) =>
          <a
            className={`tab tab-bordered ${i === active ? 'tab-active' : ''} to-cold-800 h-fit bg-gradient-to-br from-white bg-clip-text text-center text-3xl font-extrabold text-transparent`}
            onClick={() => setActive(i)}
            key={i}
          >
            {child.props.label}
          </a>
        )}
      </div>

      {children.map((child, i) => {
        if (i === active) return child.props.children;
        return null;
      })}
    </>
  )
}
