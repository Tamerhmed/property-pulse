'use client';

import { fetchProperty } from '@/utils/requests';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PropertyPage() {
	const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		const fetchPropertyData = async()=> {
      if(!id) return;

      try {
        setLoading(true);
        const property = await fetchProperty(id);
        setProperty(property);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching property data: ',error);
      } finally {
        setLoading(false);
      }
    }

    if(property === null) {
      fetchPropertyData();
    }
	}, [property, id]);

  console.log(property);
	return <div>PropertyPage</div>;
}
