import { BlockedIn } from "../../common"

export const Slide1: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <span>
          <BlockedIn />
        </span>
        <span className="text-yellow-100 text-sm">Application for End To End Hiring Needs</span>
      </div>
    </section>
  )
}