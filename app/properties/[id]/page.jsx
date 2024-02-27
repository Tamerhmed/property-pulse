'use client';

import BookmarkButton from '@/components/BookmarkButton';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import ShareButtons from '@/components/ShareButtons';
import { fetchProperty } from '@/utils/requests';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
// import Spinner from '@/components/Spinner';
import { FaArrowLeft } from 'react-icons/fa';

export default function PropertyPage() {
	const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchPropertyData = async()=> {
      if(!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching property data: ',error);
      } finally {
        setLoading(false);
      }
    }

    if(property === null) {
      fetchPropertyData();
    }
	}, [property, id]);

  // console.log(property);
if(!property && !loading) {
  return (
    <h1 className='text-center text-2zl font-semibold mt-10'>
      Property Not Found
    </h1>
  );
}

	return (
		<>
			{!loading && property && (
				<>
					<PropertyHeaderImage image={property.images[0]} />
					<section>
						<div className='container m-auto py-6 px-6'>
							<Link
								href='/properties'
								className='text-blue-500 hover:text-blue-600 flex items-center'
							>
								<FaArrowLeft className='mr-2' /> Back to Properties
							</Link>
						</div>
					</section>

					<section className='bg-blue-50'>
						<div className='container m-auto py-10 px-6'>
							<div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
								<PropertyDetails property={property} />
								<aside className='space-y-4'>
									<BookmarkButton property={property} />
									<ShareButtons property={property} />
									<PropertyContactForm property={property} />
								</aside>
							</div>
						</div>
					</section>
				</>
			)}
		</>
	);
}
