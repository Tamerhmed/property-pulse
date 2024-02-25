import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import Link from "next/link";


export default function HomePage() {
	return (
		<div>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</div>
	);
}
