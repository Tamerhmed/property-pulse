import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	EmailIcon,
} from 'react-share';
import { FaShare } from 'react-icons/fa';

export default function ShareButtons({ property }) {
	return (
		<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
			<FaShare className='mr-2' /> Share Property
		</button>
	);
}
