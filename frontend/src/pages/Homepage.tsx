import { FixedSizeList } from "react-window";
import { Card } from "../Components/Card";
import { EventCard } from "../Components/EventCard";
import { ProfileCard } from "../Components/ProfileCard";
import { SectionHeader } from "../Components/SectionHeader";


const Column = ({data, index, style }:any) => (
	<div style={style}>
		<Card name='This is a Task' />
		{data}
	</div>
  );

  const Column2 = ({data, index, style }:any) => (
	<div style={style}>
		<EventCard name='Test Event' />
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
    height={250}
    // itemCount={5}
    itemSize={220}
    layout="horizontal"
	itemCount={300}

    width={370}
  >
    {Column}
  </FixedSizeList>


  <FixedSizeList
    height={250}
	// itemData={[1,2,3]}
    itemSize={220}
    layout="horizontal"
	itemCount={3}

    width={370}
  >
    {Column2}
  </FixedSizeList>

</div>);
}

export default HomePage;
