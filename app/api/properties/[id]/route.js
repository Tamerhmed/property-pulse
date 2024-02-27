import connectDB from '@/config/database';
import Property from '@/models/Property';

//GET /api/properties/:id
export const GET = async (request, {params}) => {
    // console.log(params.id);
	try {
		await connectDB();
		const property = await Property.findById(params.id);
        if(!property){
            return new Response('Property not found', {status:404})
        }
		return new Response(JSON.stringify(property), {
			status: 200,
		});
	} catch (error) {
		console.log(error);
		return new Response({ msg: 'Something went wrong' }, { status: 500 });
	}
};