import { FixedSizeList } from "react-window";
import { Card } from "../Components/Card";
import { EventCard } from "../Components/EventCard";
import { ProfileCard } from "../Components/ProfileCard";
import { SectionHeader } from "../Components/SectionHeader";


const Column = ({data, index, style }:any) => (
	<div style={style}>
		<Card/>
		{data}
	</div>
  );

  const Column2 = ({data, index, style }:any) => (
	<div style={style}>
		<EventCard/>
		{data}
	</div>
  );

function HomePage() {
	return (
<div className='flex flex-col space-y-5 p-4'>


<ProfileCard></ProfileCard>

<div>

<SectionHeader/>
</div>

 <FixedSizeList
    height={300}
    // itemCount={5}
    itemSize={300}
    layout="horizontal"
	itemCount={3}

    width={300}
  >
    {Column}
  </FixedSizeList>


  <FixedSizeList
    height={300}
	// itemData={[1,2,3]}
    itemSize={300}
    layout="horizontal"
	itemCount={3}

    width={300}
  >
    {Column2}
  </FixedSizeList>

</div>);
}

export default HomePage;
