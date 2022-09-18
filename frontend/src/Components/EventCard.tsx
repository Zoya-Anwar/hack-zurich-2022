export function EventCard(props:{name:string, image: string, description: string}){



    return <div className="flex flex-col justify-center space-y-2 w-full h-full rounded-[20px] p-3 bg-[#f3f3f3] ]">

    <h3 className="text-lg font-semibold text-[#000b23]">
{props.name}
    </h3>
    <p>{props.description}</p>
    <img
      src={props.image}
      className="w-full aspect-video rounded-[10px] px-0 object-cover"
    />
  </div>;
}