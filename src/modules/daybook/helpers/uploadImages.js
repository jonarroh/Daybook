const url = 'https://api.cloudinary.com/v1_1/dyj6iuow3/image/upload';
import axios from 'axios';
const uploadImages = async file => {
	if (!file) {
		return null;
	}
	try {
		const formData = new FormData();
		formData.append('upload_preset', 'daybook');
		formData.append('file', file);

		const { data } = await axios.post(url, formData);
		return data.secure_url;
	} catch (error) {
		throw error;
	}
};

export default uploadImages;
