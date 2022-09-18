import { Date } from "./Date";
import { People } from "./People";


export function TaskCard(props: {
  name?: string;
  skills?: string[];
  rating?: "High" | "Low";
  date?: Date;
}) {
  const i = (props.name ?? "dummy string").length % 22;
  const category = props?.skills?.[0] ?? "";
  const rating = props?.rating ?? "";

  return (
    <div className="relative w-full h-full">
      <div className=" flex flex-col p-3  space-y-5 w-full h-full rounded-[20px] bg-[#f3f3f3]">
        <div className="flex flex-row justify-evenly items-center space-x-6">
          <p 
            className=" text-xs font-medium text-right text-[#8e61e9]"
            style={{
              backgroundColor: "rgba(147, 92, 233, 0.1)",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 16px",
              color: "#8E61E9"
            }}>
            {category}
          </p>
          {
            rating 
            ?
            <p
              style={{
                backgroundColor:
                  rating === "High"
                    ? "rgba(233, 97, 97, 0.1)"
                    : "rgba(97, 233, 143, 0.1)",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "6px 16px",
                color: rating == "High" ? "#E96161" : "#1DC054"
              }}
              className={`text-xs  font-medium text-right 
              `}
            >
              {rating}
            </p>
            : <></>
          }
        </div>

        <p className=" w-15px font-semibold text-left text-[#000b23]">
          {props.name}
        </p>

        <People i={i}></People>

        <div className="absolute bottom-2">
          <Date date={props.date}></Date>
        </div>
      </div>
    </div>
  );
}
